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

    const formatUsername = (username) => {
        return username.trim().toLowerCase().replaceAll(' ', '-')
    }
    const fetchStats = async () => {
        setLoading(true)
        const response = await fetch(`/api/stats/${formatUsername(username)}`)
        const data = await response.json()
        setLoading(false)
        setStats(data)
    }

    const fetchProducts = async (articleIndex) => {
        const response = await fetch(`/api/products/?username=${formatUsername(username)}&articleIndex=${articleIndex}`)
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
                        Mes contributions Open Food Facts réutilisées
                    </h1>
                    <p className="subtitle">
                        À quoi servent vos contributions à Open Food Facts ?
                    </p>
                    <div className="columns">
                        <div className="column">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="field">
                                    <label className="label">Utilisateur Open Food Facts</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder="Utilisateur Open Food Facts" value={username} onChange={(e) => setUsername(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <button className={"button is-link " + (loading ? "is-loading" : "")} disabled={!username} onClick={fetchStats} type="submit">
                                            Rechercher les réutilisations
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {stats && <hr/>}
                    {stats && <div className="field is-grouped is-grouped-multiline">
                        <div className="control">
                            <div className="tags has-addons">
                                <span className="tag">Total de produits ajoutés</span>
                                <span className="tag is-primary">{stats.count_all.toLocaleString()}</span>
                            </div>
                        </div>
                        <div className="control">
                            <div className="tags has-addons">
                                <span className="tag">Nombre d'articles utilisant les contributions</span>
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
                                            <span className="tag">Produits contribués</span>
                                            <span className="tag is-primary">{stat.count.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>
                                <footer className="card-footer">
                                    <a href={stat.url} target="_blank" className="card-footer-item">Lien vers l'article</a>
                                    <button className="card-footer-item button is-ghost" onClick={() => fetchProducts(stat.index)}>Voir les produits</button>
                                </footer>
                            </div>
                        </div>
                        )}
                        {stats && stats.articles.length === 0 && <div className="column">
                            <p>Aucune contribution à des articles scientifiques trouvée pour {username}, désolé :(</p>
                        </div>}
                    </div>
                    
                </div>
            </section>

            
            <section className="section">
                <div className="container">
                    <hr/>
                    <p className="subtitle">
                        Comment ça marche ?
                    </p>
                    <p className="content">
                        Les articles scientifiques sont sélectionnés à la main en fonction de leur utilisation de la base de données Open Food Facts.<br/>
                        Pour chaque article, nous essayons de reproduire la méthode d'extraction utilisée, afin de retrouver les produits présents dans la base au moment de la création de l'article.<br/>
                        Si l'un des produits a été créé par l'utilisateur selectionné, nous le considérons comme une contribution à l'article.<br/>
                        Les articles ayant au moins une contribution sont affichés ci-dessus, la liste complète des ({(articles && articles.length) || 0}) articles pris en compte est détaillée ci-dessous.<br/>
                        Note : plus l'article est ancien, moins le nombre de contributions est précis, car les produits peuvent avoir été modifiés entre la création de l'article et notre export de données (avril 2026).
                    </p>
                    <table className="table is-fullwidth is-hoverable content is-small">
                        <thead>
                            <tr>
                                <th>Article</th>
                                <th>Notes</th>
                                <th>Condition de filtrage des produits</th>
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
                    <strong>Mes contributions Open Food Facts réutilisées</strong> par <a href="https://github.com/TTalex">TTalex</a>. Code source disponible sur <a href="https://github.com/TTalex/my-contributions-reuses">GitHub</a>.
                    <br/>
                    <a href="index.html" onClick={localStorage.setItem('lang-pref', 'en')}>English version</a>
                </div>
            </footer>
            <div className={"modal" + (showModal ? " is-active" : "")}>
                <div className="modal-background" onClick={() => setShowModal(false)}></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Produits contribués (20 max)</p>
                        <button className="delete" aria-label="close" onClick={() => setShowModal(false)}></button>
                    </header>
                    <section className="modal-card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Nom du produit</th>
                                    <th>Lien</th>
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