# My Open Food Facts contributions reuses

This project is a web app to check what are your contributions to Open Food Facts used for.

## How does it work ?

Scientific articles are handpicked based on their usage of the Open Food Facts database.
For each article, we try to reproduce the extraction method they used, to fetch products that were in the database at the time of the article's creation.
If one of the products was created by the mentioned used, we consider it as a contribution to the article.
Articles with at least one contribution are displayed above, the full list of articles considered is accessible in the [articles.js](articles.js) file.
Note: the older the article is, the less accurate contributions counts are, since products might have been updated between article creation and our data export (April 2026).

Ideally, we would also consider edits to existing products as valid contributions, as long as they were made before the article was published. However, this information isn't easily available in the Open Food Facts database :
- The editor facet API gives a list of products edited by a given user, but it doesn't give the time of the edit.
- Specific products contain edit revisions, with username and timestamp, but there are no easy way to fetch such information on a database scale.

## Adding a new article

To add a new article, add a new object to the `articles` array in [articles.js](articles.js).
The object should have the following properties:

- `name`: the name of the article
- `authors`: the authors of the article
- `url`: a link to the article
- `condition`: the condition to filter products in the database (should be a valid SQL duckdb query, matching columns in the `food_sorted` table)
- `notes`: some notes on how the condition was derived, this usually contains an excerpt from the article

[Google Scholar references more than 900 articles mentioning Open Food Facts](https://scholar.google.com/scholar?hl=fr&as_sdt=0,5&as_vis=1&q=%22Open+food+facts%22), and [this spreadsheet](https://docs.google.com/spreadsheets/d/1L3WfwL-MNDfLdMu8qpE77q8XnHGF4p7JZNrMhyO12lI/edit?gid=2053127659#gid=2053127659) highlights some of the most relevant ones, so PRs are welcomed !

## Setup locally

### Install dependencies

```bash
npm install
```

### Download datasets

Two datasets are used:

- data/food_sorted.parquet: [the Open Food Facts database huggingface extract](https://huggingface.co/datasets/openfoodfacts/product-database), sorted by `creator` for faster lookups.
    - Sort was done using the duckdb query `COPY (SELECT * FROM 'food.parquet' ORDER BY creator) TO 'food_sorted.parquet' (FORMAT parquet)`
- data/off-gbs.parquet: the Grocery Basket Score (GBS) dataset from https://github.com/windisch-paul/OFF-GBS
    - Converted to parquet using duckdb query `COPY 'OFF-GBS.csv' TO 'off-gbs.parquet' (FORMAT parquet)`

### Run the server

```bash
node server.js
```

Access the app at http://localhost:3000

