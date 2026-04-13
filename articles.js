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
    },
    {
        name: "Healthy Food Traditions? Nutritional Quality and Food Composition of EU Geographical Indications",
        authors: "Gero Laurenz Höhn, Martijn Huysmans, Christophe Crombez",
        url: "https://www.econ.kuleuven.be/licos/publications/dp/dp429",
        condition: "'en:france' in countries_tags and created_t < 1638316800 and nutriscore_score not null and ('en:cured-sausages' in categories_tags or 'en:cured-hams' in categories_tags or 'en:white-hams' in categories_tags or 'en:cow-cheeses' in categories_tags or 'en:goat-cheeses' in categories_tags or 'en:sheep-cheeses' in categories_tags)",
        notes: "From pdf: 'We downloaded OFF data in November 2021. As about 30% of GIs represent cheeses and processed meats, we focused on the following food categories : cured sausages, cured hams, white hams, cow cheeses, goat cheeses and sheep cheeses.' and in appendix 'We deleted observations with insufficient information in terms of nutritional aspects.'"
    },
    {
        name: "Complementarity between the updated version of the front-of-pack nutrition label Nutri-Score and the food-processing NOVA classification",
        authors: "Barthélemy Sarda, Emmanuelle Kesse-Guyot, Valérie Deschamps, Pauline Ducrot, Pilar Galan, Serge Hercberg, Melanie Deschasaux-Tanguy, Bernard Srour, Leopold K Fezeu, Mathilde Touvier, Chantal Julia",
        url: "https://www.cambridge.org/core/journals/public-health-nutrition/article/complementarity-between-the-updated-version-of-the-frontofpack-nutrition-label-nutriscore-and-the-foodprocessing-nova-classification/38D3F972F1F2414E3856E29FE09D35E8",
        condition: "'en:france' in countries_tags and created_t < 1638316800 and nutriscore_score not null and nova_group not null",
        notes: "From pdf: 'The analyses were conducted with data extracted in November 2021 and with products sold in France.' and 'Food categories not subject to display the Nutri-Score (e.g. alcoholic beverages, spices, dry tea, coffee or baby food) ... were excluded.' and 'In case of missing values or outlier values for a mandatory nutrient ... or NOVA classification, products were excluded'."
    },
    {
        name: "Consistency of the Initial and Updated Version of the Nutri-Score with Food-Based Dietary Guidelines: A French Perspective",
        authors: "Barthelemy Sarda, Emmanuelle Kesse-Guyot, Valérie Deschamps, Pauline Ducrot, Pilar Galan, Serge Hercberg, Melanie Deschasaux-Tanguy, Bernard Srour, Leopold K Fezeu, Mathilde Touvier, Chantal Julia",
        url: "https://www.sciencedirect.com/science/article/pii/S002231662400049X",
        condition: "'en:france' in countries_tags and created_t < 1638316800 and nutriscore_score not null",
        notes: "From pdf: 'The OpenFoodFacts data used in the study are available on their website (https://world.openfoodfacts.org/, accessed on November 2021).' and 'Data from OpenFoodFacts were... restricted to products sold on the French market.' and 'In case of missing values for a mandatory nutrient on the label, products were excluded.'"
    },
    {
        name: "Food additive emulsifiers and the risk of type 2 diabetes: analysis of data from the NutriNet-Santé prospective cohort study",
        authors: "Clara Salame, Guillaume Javaux, Laury Sellem, Emilie Viennois, Fabien Szabo de Edelenyi, Cédric Agaësse, Alexandre De Sa, Inge Huybrechts, Fabrice Pierre, Xavier Coumoul, Chantal Julia, Emmanuelle Kesse-Guyot, Benjamin Allès, Léopold K Fezeu, Serge Hercberg, Mélanie Deschasaux-Tanguy, Emmanuel Cosson, Sopio Tatulashvili, Benoit Chassaing, Bernard Srour, Mathilde Touvier",
        url: "https://www.thelancet.com/journals/landia/article/PIIS2213-8587(24)00086-X/fulltext",
        condition: "'en:france' in countries_tags and created_t < 1638316800 and additives_n > 0",
        notes: "From pdf: 'The NutriNet-Santé study... links to multiple food composition databases (Open Food Facts, ...).' The study focuses on French adults and quantifies exposure to 61 food additives classified as emulsifiers."
    },
    {
        name: "The food traffic light that gives a green light to ultra-processed foods: visual data mining",
        authors: "Carmen Romero Ferreiro, Pilar Cancelas Navia, David Lora Pablos",
        url: "http://www.biometricsociety.net/wp-content/uploads/VI_Jornadas_Cientificas_de_Estudiantes_de_la_SEB_Book_of_abstracts.pdf#page=53",
        condition: "'en:spain' in countries_tags and created_t < 1638316800 and nova_group not null and nutriscore_score not null",
        notes: "From abstract: 'The Open Food Facts database was used to obtain all products currently marketed in Spain with the Nutri-Score and NOVA classification (n=9931)'."
    },
    {
        name: "PEFAP : Estimating the environmental footprint of food products from packaging data",
        authors: "Gustave Coste, Arnaud Hélias",
        url: "https://joss.theoj.org/papers/10.21105/joss.03329",
        condition: "'en:france' in countries_tags and created_t < 1620777600 and ingredients_n > 0",
        notes: "From pdf: 'To be functional, this program has been interfaced to the Open Food Facts database (Open Food Facts, n.d.) providing packaging information [Accessed May 12, 2021]'. Git repo also shows that environmental impact is computed using ingredients https://framagit.org/GustaveCoste/off-product-environmental-impact/-/blob/master/impacts_estimation/impacts_estimation.py?ref_type=heads#L928."
    },
    {
        name: "Exposition des enfants et des adolescents à la publicité pour des produits gras, sucrés, salés",
        authors: "Hélène Escalon, Anne-Juliette Serry, Chloé Resche",
        url: "https://www.santepubliquefrance.fr/determinants-de-sante/nutrition-et-activite-physique/documents/rapport-synthese/exposition-des-enfants-et-des-adolescents-a-la-publicite-pour-des-produits-gras-sucres-sales",
        condition: "'en:france' in countries_tags and created_t < 1590969600 and nutriscore_score not null and not ('en:alcoholic-beverages' in categories_tags or 'en:baby-foods' in categories_tags)",
        notes: "From pdf: 'Pour coder les publicités des produits alimentaires et des boissons de la base Kantar Media... la base de données Open Food Facts a été utilisée.' L'étude porte sur le marché français et a exclu les boissons alcoolisées, l'alimentation infantile et l'alimentation pour animaux. Le rapport ayant été publié en juin 2020, le timestamp est fixé au 1er juin 2020."
    },
    {
        name: "Improving data cleaning by learning from unstructured textual data",
        authors: "Rihem Nasfi, Guy de Tré, Antoon Bronselaer",
        url: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10896675",
        condition: "length(allergens_tags) > 0 and created_t < 1734739200",
        notes: "From pdf: 'Allergens. This dataset contains information about products and their allergens. The data was collected from [...] Open Food Facts', Article recieved 21 December 2024"
    },
    {
        name: "Characterizing Meat- and Milk/Dairy-like Vegetarian Foods and Their Counterparts Based on Nutrient Profiling and Food Labels",
        authors: "Rodríguez-Martín, N.M.; Córdoba, P.; Sarriá, B.; Verardo, V.; Pedroche, J.; Alcalá-Santiago, Á.; García-Villanova, B.; Molina-Montes, E.",
        url: "https://www.mdpi.com/2304-8158/12/6/1151",
        condition: "created_t < 1669852800 and 'en:spain' in countries_tags and nutriscore_score not null and nova_group not null and ingredients_n > 0",
        notes: "From article: 'marketed in Spain', 'Nutritional information per 100 g or mL, ingredients, and nutritional declarations, as well as the Nutri-Score, NOVA, and Eco-Score of each food were collected from Open Food Facts' and latest retrival date is 'November 2022'"
    }
]
