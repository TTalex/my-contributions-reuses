export default [
    {
        name: "Application of machine learning to predict food processing level using Open Food Facts",
        authors: "Nalin Arora, Aviral Chauhan, Siddhant Rana, Mahansh Aditya, Sumit Bhagat, Aditya Kumar, Akash Kumar, Akanksh Semar, Ayush Vikram Singh, Ganesh Bagler",
        url: "https://arxiv.org/abs/2512.17169",
        condition: "nova_group <= 4 and created_t < 1732233600",
        notes: "From pdf: 'The nutrient data used in this study was obtained from OFF. We used the NOVA class parameter in the data to classify foods by their processing levels. For the first experiment, we used 875,075 food products'."
    },
    {
        name: "Nutritional Quality and Degree of Food Processing of Pre-Packaged Food Products in Southeast Asia: A Cross-Sectional Analysis Using NOVA, Nutri-Score, and Multiple Traffic Light Systems",
        authors: "Bernardino Melvin Esteban, Sison Nicole Kate, Tiribelli Claudio, Rosso Natalia",
        url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6100917",
        condition: "nova_group not null and nutriscore_score not null and created_t < 1767225600 and ('en:indonesia' in countries_tags or 'en:thailand' in countries_tags or 'en:malaysia' in countries_tags or 'en:vietnam' in countries_tags or 'en:philippines' in countries_tags or 'en:singapore' in countries_tags or 'en:laos' in countries_tags or 'en:myanmar' in countries_tags or 'en:cambodia' in countries_tags)",
        notes: "From pdf: 'We analyzed 4,668 commonly consumed food products in Southeast Asia using data from the Open Food Facts database. Nutritional quality was assessed by Nutri-Score, while processing level was categorized using NOVA score'."
    },
    {
        name: "Novel Plant-Based Alternatives Support Nutritional Adequacy of Diets and Reduce Their Environmental Impacts",
        authors: "Sarah Nájera Espinosa, Arli G Zarate-Ortiz, Genevieve Hadida, Jacqueline Tereza da Silva, Alexander Vonderschmidt, Edith Monica Esievo, Tony Carr, Anouk Reuzé, Pauline Scheelbeek",
        url: "https://www.sciencedirect.com/science/article/pii/S247529912600034X",
        condition: "created_t < 1703980800 and 'en:plant-based-foods-and-beverages' in categories_tags and 'en:united-kingdom' in countries_tags",
        notes: "From pdf: 'NPBF nutritional data were collected from UK supermarkets using Open Food Facts'."
    },
    {
        name: "Food Classification using Machine Learning Algorithms",
        authors: "Aditi Ahuja, Vrudhi Kedia, Mahvish Ansari, Bhavya Grover, Shubha Puthran",
        url: "https://www.atlantis-press.com/proceedings/iccsce-25/126017402",
        condition: "ingredients_n not null and lang = 'en' and created_t < 1730073600",
        notes: "From pdf: 'figure 2: Preprocessing Steps to transform data for ML models' and 'Our study focused on the English group, as it is our target language'."
    },
    {
        name: "Mapping the Chemical Anatomy of Processed Foods: GRAS Additives, Synergy Networks, and Structural Gaps in U.S. Food Regulation",
        authors: "Adith Kanjarla",
        url: "https://econpapers.repec.org/paper/osfsocarx/e5fgc_5fv1.htm",
        condition: "'en:united-states' in countries_tags and additives_n > 0 and created_t < 1761868800",
        notes: "From pdf: 'Using Python and the Open Food Facts API, each subcategory was queried for products tagged as sold in the United States (countries_tags: en:united-states). For each product, relevant fields were extracted, including product name, brand, ingredients list, and additives.' and 'Raw additive data were extracted from the additives_tags field'."
    },
    {
        name: "Nutritional Analysis Using Image Recognition with Location-Aware Precision for Food Recommendation Systems",
        authors: "Thammasak Thianniwet, Ananyot Keawlamoon, Satidchoke Phosaard",
        url: "https://ieeexplore.ieee.org/abstract/document/11269651",
        condition: "'en:thailand' in countries_tags and created_t < 1756684800 and nutriscore_score not null",
        notes: "Abstract mentions Open Food Facts API and limitation to thailand. It also mentions 'retrieving complete nutritional information'."
    },
    {
        name: "Toward a national framework for the scientific classification of processed foods: a fair-aligned methodological approach",
        authors: "Siminiuc Rodica, Țurcanu Dinu, Siminiuc Sergiu",
        url: "https://repository.utm.md/handle/5014/32629",
        condition: "'en:moldova' in countries_tags and created_t < 1756684800",
        notes: "Abstract mentions 'The approach involved: (1) collecting and systematizing data on over 200 processed food products from the Moldovan market, using sources such as labels, EFSA, Open Food Facts, and USDA'."
    },
    {
        name: "Informatics for Food Processing",
        authors: "Gordana Ispirova, Michael Sebek, Giulia Menichetti",
        url: "https://arxiv.org/abs/2505.17087",
        condition: "created_t < 1732233600 and lang = 'en' and ingredients_n not null and nova_group not null and nutriscore_score not null",
        notes: "From pdf: 'We filtered the Open Food Facts dataset to include only products with English names and complete information for the key fields required in our analysis — product name, ingredient list, NOVA classification, and the 11 nutrients used in the FoodProX models — resulting in a final dataset of 149,960 products.'"
    },
    // {
    //     notes: "This one is a bit weird, they do name matching with instacart db names (50k products). But the names are very generic, like "cheese". So their product accuracy must be questionable. see https://github.com/learningdebunked/eco-racs/blob/ad1d36864bc9367e0a3ae21f806fa65723d22905/src/cac/data/lca_integrator.py#L140",
    //     name: "Carbon-Aware Sustainable Digital Shopping: A Federated, Behavior-Aware System for Real-Time Basket-Level Emissions Optimization in E-Commerce",
    //     url: "https://www.researchsquare.com/article/rs-8792629/v1.pdf",
    //     condition: "", 
    // },
    {
        name: "A fistful of vegetables: parents’ perceptions of an ultra-processed food with added veggies",
        authors: "Vecchio Riccardo, Annunziata Azzurra, Sapio Silvia",
        url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6431888",
        condition: "code in ('8017596104496', '8032584940979', '8001120705303', '8001120864635', '80709404', '80709428', '4008400290126', '8000500442104', '2717005002998', '8008110031046', '5059319030678', '5059319007649')",
        notes: "A visual table with a few products is shown in the pdf. We also know they were fetched from it.openfoodfacts.org. Then it's a manual guessing game to find the actual barcodes."
    },
    {
        name: "Development and Validation of a Nutrient Profiling Model for Shopping Baskets: The Grocery Basket Score (GBS)",
        authors: "Sandro Marcon, André Naef, David Faeh, Paul Windisch",
        url: "https://www.medrxiv.org/content/10.1101/2025.01.03.25319947v2",
        condition: "code in (select code from read_parquet('data/off-gbs.parquet'))",
        notes: "Authors did a good job, they enhanced the db with GBS and republished a version on github https://github.com/windisch-paul/OFF-GBS (~1M products)."
    },
    {
        name: "GroceryDB: Prevalence of Processed Food in Grocery Stores",
        authors: "Babak Ravandi, Gordana Ispirova, Michael Sebek, Peter Mehler, Albert-László Barabási, Giulia Menichetti",
        url: "https://pubmed.ncbi.nlm.nih.gov/38883708/",
        condition: "created_t < 1643587200 and lang = 'en' and ingredients_n not null",
        notes: "From supplement pdf https://pmc.ncbi.nlm.nih.gov/articles/instance/11781504/bin/NIHPP2022.04.23.22274217v5-supplement-1.pdf: '426,479 products in [Open Food Facts] with English list of ingredients (as of January 2022)'."
    },
    {
        name: "NutriDiary, a Smartphone-Based Dietary Record App: Description and Usability Evaluation",
        authors: "Linda Klasen, Stefanie Anna Julia Koch, Maike Elena Benz, Johanna Conrad, Ute Alexy, Konrad Blaszkiewicz, Ionut Andone, Ute Nöthlings",
        url: "https://humanfactors.jmir.org/2025/1/e62776/",
        condition: "created_t < 1737504000 and 'en:germany' in countries_tags",
        notes: "Article mentions 'adding barcode information of already included branded products to the NutriDiary nutrient database by searching in open databases such as Open Food Facts [Accessed 2025-01-22]'. NutriDiary is build atop the LEBTAB database, a German food composition database not publicly available."
    },
    {
        name: "Use of the WHO Nutrient Profile Model for Food Marketing Regulation in Germany: Feasibility and Public Health Implications",
        authors: "Nicole Holliday, Anna Leibinger, Oliver Huizinga, Carmen Klinger, Elochukwu C. Okanmelu, Karin Geffert, Eva A. Rehfuess, Peter von Philipsborn",
        url: "https://karger.com/ofa/article/17/2/109/869906/Use-of-the-WHO-Nutrient-Profile-Model-for-Food",
        condition: "created_t < 1680652800 and lang = 'de'",
        notes: "Article mentions 'We downloaded the complete [Open Food Facts] database, filtered for products classified as available on the German market [slightly more than 200,000], and used R, an open-source statistical analysis software, to extract a randomly ordered list of products', extract date is April 4, 2023."
    }
]
