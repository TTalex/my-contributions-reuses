const App = () => {
    const [username, setUsername] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const [stats, setStats] = React.useState(null)
    const [products, setProducts] = React.useState(null)
    const [showModal, setShowModal] = React.useState(false)
    const [articles, setArticles] = React.useState(null)

    React.useEffect(() => {
        fetchArticles()
    }, [])

    const fetchStats = async () => {
        setLoading(true)
        const response = await fetch(`/api/stats/${username.toLowerCase()}`)
        const data = await response.json()
        setLoading(false)
        setStats(data)
    }

    const fetchProducts = async (articleIndex) => {
        const response = await fetch(`/api/products/?username=${username.toLowerCase()}&articleIndex=${articleIndex}`)
        const data = await response.json()
        console.log(data)
        setProducts(data)
        setShowModal(true)
    }

    const fetchArticles = async () => {
        const response = await fetch('/api/articles')
        const data = await response.json()
        setArticles(data)
    }

    
    return (
        <div className="main">
            <section className="section">
                <div className="container">
                    <h1 className="title">
                        My Open Food Facts contributions reuses
                    </h1>
                    <p className="subtitle">
                        What are your contributions to Open Food Facts used for ?
                    </p>
                    <div className="columns">
                        <div className="column">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="field">
                                    <label className="label">Open Food Facts username</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder="Open Food Facts username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <button className={"button is-link " + (loading ? "is-loading" : "")} disabled={!username} onClick={fetchStats} type="submit">
                                            Fetch reuses
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {stats && <hr/>}
                    {stats && <div className="field is-grouped is-grouped-multiline">
                        <div class="control">
                            <div className="tags has-addons">
                                <span className="tag">Total products added</span>
                                <span className="tag is-primary">{stats.count_all.toLocaleString()}</span>
                            </div>
                        </div>
                        <div class="control">
                            <div className="tags has-addons">
                                <span className="tag">Number of articles using contributions</span>
                                <span className="tag is-primary">{stats.articles.length}</span>
                            </div>
                        </div>
                    </div>}
                    <div className="columns is-multiline">
                        {stats && stats.articles.map((stat, i) => <div key={i} className="column is-half" > 
                            <div className="card is-flex is-flex-direction-column" style={{height: "100%"}}>
                                <div className="card-content is-flex-grow-1 is-flex is-flex-direction-column">
                                    <p className="title is-4">{stat.name}</p>
                                    <p className="subtitle is-6 is-flex-grow-1">{stat.authors}</p>
                                    <div className="content">
                                        <div className="tags has-addons">
                                            <span className="tag">Products contributed</span>
                                            <span className="tag is-primary">{stat.count.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>
                                <footer className="card-footer">
                                    <a href={stat.url} target="_blank" className="card-footer-item">Article link</a>
                                    <button className="card-footer-item button is-ghost" onClick={() => fetchProducts(stat.index)}>View products</button>
                                </footer>
                            </div>
                        </div>
                        )}
                        {stats && stats.articles.length === 0 && <div className="column">
                            <p>No contributions to scientific articles found for {username}, sorry :(</p>
                        </div>}
                    </div>
                    
                </div>
            </section>

            
            <section className="section">
                <div className="container">
                    <hr/>
                    <p className="subtitle">
                        How does it work ?
                    </p>
                    <p className="content">
                        Scientific articles are handpicked based on their usage of the Open Food Facts database.<br/>
                        For each article, we try to reproduce the extraction method they used, to fetch products that were in the database at the time of the article's creation.<br/>
                        If one of the products was created by the mentioned used, we consider it as a contribution to the article.<br/>
                        Articles with at least one contribution are displayed above, the full list of articles considered is detailed below.<br/>
                        Note: the older the article is, the less accurate contributions counts are, since products might have been updated between article creation and our data export (April 2026).
                    </p>
                    <table className="table is-fullwidth is-hoverable content is-small">
                        <thead>
                            <tr>
                                <th>Article</th>
                                <th>Notes</th>
                                <th>Product filter condition</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articles && articles.map((article, i) => <tr key={i}>
                                <th><a href={article.url} target='_blank'>{article.name}</a></th>
                                <td>{article.notes}</td>
                                <td><pre style={{whiteSpace: "normal"}}>{article.condition}</pre></td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </section>

            <footer className="footer">
                <div className="content has-text-centered">
                    <strong>My Open Food Facts contributions reuses</strong> by <a href="https://github.com/TTalex">TTalex</a>. See source code on <a href="https://github.com/TTalex/my-contributions-reuses">GitHub</a>.
                </div>
            </footer>
            <div className={"modal" + (showModal ? " is-active" : "")}>
                <div className="modal-background" onClick={() => setShowModal(false)}></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Products contributed (20 max)</p>
                        <button className="delete" aria-label="close" onClick={() => setShowModal(false)}></button>
                    </header>
                    <section className="modal-card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Product name</th>
                                    <th>Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products && products.map((product, i) => <tr key={i}>
                                    <td>{product.code}</td>
                                    <td>{product.product_name ? product.product_name[0].text : ""}</td>
                                    <td><a href={`https://world.openfoodfacts.org/product/${product.code}`} target='_blank'>🔗</a></td>
                                </tr>)}
                            </tbody>
                        </table>
                    </section>
                </div>
            </div>
        </div>
    )
}

const domContainer = document.getElementById('root')
const root = ReactDOM.createRoot(domContainer)
root.render(<App />)