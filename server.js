import { createServer } from 'http'
import express from 'express'
import { DuckDBInstance } from '@duckdb/node-api'
import articles from './articles.js'

const app = express()
const server = createServer(app)
const PORT = 3000

const instance = await DuckDBInstance.create('data/food_sorted.parquet')
const connection = await instance.connect()


// Serve static files from the current directory
app.use(express.static('frontend'))

app.get('/api/stats/:username', async (req, res) => {
    const username = req.params.username
    console.log("Request for stats:", username)

    const articleCountExprs = articles.map((article, i) => 
        `SUM(CASE WHEN ${article.condition} THEN 1 ELSE 0 END) AS count_${i}`
    ).join(',\n')

    const query = `
        WITH user_food AS (
            SELECT creator, created_t, categories_tags, countries_tags, nova_group, nutriscore_score, ingredients_n, additives_n, lang, code, allergens_tags
            FROM food_sorted 
            WHERE creator = $username
        )
        SELECT count(*) as count_all, ${articleCountExprs} 
        FROM user_food
    `

    try {
        const reader = await connection.runAndReadAll(query, { username })
        const row = reader.getRowObjectsJson()[0]

        let stats = {
            count_all: row.count_all,
            articles: []
        }

        // Map counts back to articles
        stats.articles =articles
            .map((article, i) => ({
                ...article,
                index: i,
                count: row[`count_${i}`]
            }))
            .filter(a => a.count > 0)

        res.json(stats)
    } catch (err) {
        console.error("Error querying stats:", err)
        res.status(500).json({ error: "Internal server error" })
    }
})

app.get('/api/products/', async (req, res) => {
    const username = req.query.username
    const articleIndex = req.query.articleIndex

    if (!username || !articleIndex) {
        res.status(400).json({ error: "Missing username or article index" });
        return;
    }

    const condition = articles[articleIndex].condition

    const query = `
        SELECT code, product_name
        FROM food_sorted 
        WHERE creator = $username AND ${condition}
        LIMIT 20
    `
    try {
        const reader = await connection.runAndReadAll(query, { username });
        const rows = reader.getRowObjectsJson();
        res.json(rows);
    } catch (err) {
        console.error("Error querying products:", err);
        res.status(500).json({ error: "Internal server error" });
    }
})

app.get('/api/articles', (req, res) => {
    res.json(articles)
})

// Start the server
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})