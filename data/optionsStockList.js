const optionsStockList = [
  {
    stockName: "360 ONE WAM LIMITED",
    symbol: "360ONE",
    lotSize: 500,
  },
  {
    stockName: "AARTI INDUSTRIES LTD",
    symbol: "AARTIIND",
    lotSize: 1325,
  },
  {
    stockName: "ABB INDIA LIMITED",
    symbol: "ABB",
    lotSize: 125,
  },
  {
    stockName: "ACC LIMITED",
    symbol: "ACC",
    lotSize: 300,
  },
  {
    stockName: "ADANI ENERGY SOLUTION LTD",
    symbol: "ADANIENSOL",
    lotSize: 675,
  },
  {
    stockName: "ADANI ENTERPRISES LIMITED",
    symbol: "ADANIENT",
    lotSize: 300,
  },
  {
    stockName: "ADANI GREEN ENERGY LTD",
    symbol: "ADANIGREEN",
    lotSize: 600,
  },
  {
    stockName: "ADANI PORT & SEZ LTD",
    symbol: "ADANIPORTS",
    lotSize: 475,
  },
  {
    stockName: "ADANI TOTAL GAS LIMITED",
    symbol: "ATGL",
    lotSize: 875,
  },
  {
    stockName: "ADITYA BIRLA CAPITAL LTD.",
    symbol: "ABCAPITAL",
    lotSize: 3100,
  },
  {
    stockName: "ADITYA BIRLA FASHION & RT",
    symbol: "ABFRL",
    lotSize: 2600,
  },
  {
    stockName: "ALKEM LABORATORIES LTD.",
    symbol: "ALKEM",
    lotSize: 125,
  },
  {
    stockName: "AMBER ENTERPRISES (I) LTD",
    symbol: "AMBER",
    lotSize: 100,
  },
  {
    stockName: "AMBUJA CEMENTS LTD",
    symbol: "AMBUJACEM",
    lotSize: 1050,
  },
  {
    stockName: "ANGEL ONE LIMITED",
    symbol: "ANGELONE",
    lotSize: 250,
  },
  {
    stockName: "APL APOLLO TUBES LTD",
    symbol: "APLAPOLLO",
    lotSize: 350,
  },
  {
    stockName: "APOLLO HOSPITALS ENTER. L",
    symbol: "APOLLOHOSP",
    lotSize: 125,
  },
  {
    stockName: "ASHOK LEYLAND LTD",
    symbol: "ASHOKLEY",
    lotSize: 2500,
  },
  {
    stockName: "ASIAN PAINTS LIMITED",
    symbol: "ASIANPAINT",
    lotSize: 250,
  },
  {
    stockName: "ASTRAL LIMITED",
    symbol: "ASTRAL",
    lotSize: 425,
  },
  {
    stockName: "AU SMALL FINANCE BANK LTD",
    symbol: "AUBANK",
    lotSize: 1000,
  },
  {
    stockName: "AUROBINDO PHARMA LTD",
    symbol: "AUROPHARMA",
    lotSize: 550,
  },
  {
    stockName: "AVENUE SUPERMARTS LIMITED",
    symbol: "DMART",
    lotSize: 150,
  },
  {
    stockName: "AXIS BANK LIMITED",
    symbol: "AXISBANK",
    lotSize: 625,
  },
  {
    stockName: "BAJAJ AUTO LIMITED",
    symbol: "BAJAJ-AUTO",
    lotSize: 75,
  },
  {
    stockName: "BAJAJ FINANCE LIMITED",
    symbol: "BAJFINANCE",
    lotSize: 750,
  },
  {
    stockName: "BAJAJ FINSERV LTD.",
    symbol: "BAJAJFINSV",
    lotSize: 500,
  },
  {
    stockName: "BALKRISHNA IND. LTD",
    symbol: "BALKRISIND",
    lotSize: 300,
  },
  {
    stockName: "BANDHAN BANK LIMITED",
    symbol: "BANDHANBNK",
    lotSize: 3600,
  },
  {
    stockName: "BANK OF BARODA",
    symbol: "BANKBARODA",
    lotSize: 2925,
  },
  {
    stockName: "BANK OF INDIA",
    symbol: "BANKINDIA",
    lotSize: 5200,
  },
  {
    stockName: "BHARAT DYNAMICS LIMITED",
    symbol: "BDL",
    lotSize: 325,
  },
  {
    stockName: "BHARAT ELECTRONICS LTD",
    symbol: "BEL",
    lotSize: 2850,
  },
  {
    stockName: "BHARAT FORGE LTD",
    symbol: "BHARATFORG",
    lotSize: 500,
  },
  {
    stockName: "BHARAT PETROLEUM CORP  LT",
    symbol: "BPCL",
    lotSize: 1975,
  },
  {
    stockName: "BHARTI AIRTEL LIMITED",
    symbol: "BHARTIARTL",
    lotSize: 475,
  },
  {
    stockName: "BHEL",
    symbol: "BHEL",
    lotSize: 2625,
  },
  {
    stockName: "BIOCON LIMITED.",
    symbol: "BIOCON",
    lotSize: 2500,
  },
  {
    stockName: "BIRLASOFT LIMITED",
    symbol: "BSOFT",
    lotSize: 1300,
  },
  {
    stockName: "BLUE STAR LIMITED",
    symbol: "BLUESTARCO",
    lotSize: 325,
  },
  {
    stockName: "BOSCH LIMITED",
    symbol: "BOSCHLTD",
    lotSize: 25,
  },
  {
    stockName: "BRITANNIA INDUSTRIES LTD",
    symbol: "BRITANNIA",
    lotSize: 125,
  },
  {
    stockName: "BSE LIMITED",
    symbol: "BSE",
    lotSize: 375,
  },
  {
    stockName: "CANARA BANK",
    symbol: "CANBK",
    lotSize: 6750,
  },
  {
    stockName: "CENTRAL DEPO SER (I) LTD",
    symbol: "CDSL",
    lotSize: 475,
  },
  {
    stockName: "CESC LTD",
    symbol: "CESC",
    lotSize: 3625,
  },
  {
    stockName: "CG POWER AND IND SOL LTD",
    symbol: "CGPOWER",
    lotSize: 850,
  },
  {
    stockName: "CHAMBAL FERTILIZERS LTD",
    symbol: "CHAMBLFERT",
    lotSize: 950,
  },
  {
    stockName: "CHOLAMANDALAM IN & FIN CO",
    symbol: "CHOLAFIN",
    lotSize: 625,
  },
  {
    stockName: "CIPLA LTD",
    symbol: "CIPLA",
    lotSize: 375,
  },
  {
    stockName: "COAL INDIA LTD",
    symbol: "COALINDIA",
    lotSize: 1350,
  },
  {
    stockName: "COFORGE LIMITED",
    symbol: "COFORGE",
    lotSize: 375,
  },
  {
    stockName: "COLGATE PALMOLIVE LTD.",
    symbol: "COLPAL",
    lotSize: 225,
  },
  {
    stockName: "COMPUTER AGE MNGT SER LTD",
    symbol: "CAMS",
    lotSize: 150,
  },
  {
    stockName: "CONTAINER CORP OF IND LTD",
    symbol: "CONCOR",
    lotSize: 1000,
  },
  {
    stockName: "CROMPT GREA CON ELEC LTD",
    symbol: "CROMPTON",
    lotSize: 1800,
  },
  {
    stockName: "CUMMINS INDIA LTD",
    symbol: "CUMMINSIND",
    lotSize: 200,
  },
  {
    stockName: "CYIENT LIMITED",
    symbol: "CYIENT",
    lotSize: 425,
  },
  {
    stockName: "DABUR INDIA LTD",
    symbol: "DABUR",
    lotSize: 1250,
  },
  {
    stockName: "DALMIA BHARAT LIMITED",
    symbol: "DALBHARAT",
    lotSize: 325,
  },
  {
    stockName: "DELHIVERY LIMITED",
    symbol: "DELHIVERY",
    lotSize: 2075,
  },
  {
    stockName: "DIVI S LABORATORIES LTD",
    symbol: "DIVISLAB",
    lotSize: 100,
  },
  {
    stockName: "DIXON TECHNO (INDIA) LTD",
    symbol: "DIXON",
    lotSize: 50,
  },
  {
    stockName: "DR. REDDY S LABORATORIES",
    symbol: "DRREDDY",
    lotSize: 625,
  },
  {
    stockName: "EICHER MOTORS LTD",
    symbol: "EICHERMOT",
    lotSize: 175,
  },
  {
    stockName: "ETERNAL LIMITED",
    symbol: "ETERNAL",
    lotSize: 2425,
  },
  {
    stockName: "EXIDE INDUSTRIES LTD",
    symbol: "EXIDEIND",
    lotSize: 1800,
  },
  {
    stockName: "FEDERAL BANK LTD",
    symbol: "FEDERALBNK",
    lotSize: 5000,
  },
  {
    stockName: "FORTIS HEALTHCARE LTD",
    symbol: "FORTIS",
    lotSize: 775,
  },
  {
    stockName: "FSN E COMMERCE VENTURES",
    symbol: "NYKAA",
    lotSize: 3125,
  },
  {
    stockName: "GAIL (INDIA) LTD",
    symbol: "GAIL",
    lotSize: 3150,
  },
  {
    stockName: "GLENMARK PHARMACEUTICALS",
    symbol: "GLENMARK",
    lotSize: 375,
  },
  {
    stockName: "GMR AIRPORTS LIMITED",
    symbol: "GMRAIRPORT",
    lotSize: 6975,
  },
  {
    stockName: "GODREJ CONSUMER PRODUCTS",
    symbol: "GODREJCP",
    lotSize: 500,
  },
  {
    stockName: "GODREJ PROPERTIES LTD",
    symbol: "GODREJPROP",
    lotSize: 275,
  },
  {
    stockName: "GRANULES INDIA LIMITED",
    symbol: "GRANULES",
    lotSize: 1075,
  },
  {
    stockName: "GRASIM INDUSTRIES LTD",
    symbol: "GRASIM",
    lotSize: 250,
  },
  {
    stockName: "HAVELLS INDIA LIMITED",
    symbol: "HAVELLS",
    lotSize: 500,
  },
  {
    stockName: "HCL TECHNOLOGIES LTD",
    symbol: "HCLTECH",
    lotSize: 350,
  },
  {
    stockName: "HDFC AMC LIMITED",
    symbol: "HDFCAMC",
    lotSize: 150,
  },
  {
    stockName: "HDFC BANK LTD",
    symbol: "HDFCBANK",
    lotSize: 550,
  },
  {
    stockName: "HDFC LIFE INS CO LTD",
    symbol: "HDFCLIFE",
    lotSize: 1100,
  },
  {
    stockName: "HERO MOTOCORP LIMITED",
    symbol: "HEROMOTOCO",
    lotSize: 150,
  },
  {
    stockName: "HFCL LIMITED",
    symbol: "HFCL",
    lotSize: 6450,
  },
  {
    stockName: "HINDALCO INDUSTRIES LTD",
    symbol: "HINDALCO",
    lotSize: 1400,
  },
  {
    stockName: "HINDUSTAN AERONAUTICS LTD",
    symbol: "HAL",
    lotSize: 150,
  },
  {
    stockName: "HINDUSTAN COPPER LTD",
    symbol: "HINDCOPPER",
    lotSize: 2650,
  },
  {
    stockName: "HINDUSTAN PETROLEUM CORP",
    symbol: "HINDPETRO",
    lotSize: 2025,
  },
  {
    stockName: "HINDUSTAN UNILEVER LTD.",
    symbol: "HINDUNILVR",
    lotSize: 300,
  },
  {
    stockName: "HINDUSTAN ZINC LIMITED",
    symbol: "HINDZINC",
    lotSize: 1225,
  },
  {
    stockName: "HSG & URBAN DEV CORPN LTD",
    symbol: "HUDCO",
    lotSize: 2775,
  },
  {
    stockName: "ICICI BANK LTD.",
    symbol: "ICICIBANK",
    lotSize: 700,
  },
  {
    stockName: "ICICI LOMBARD GIC LIMITED",
    symbol: "ICICIGI",
    lotSize: 325,
  },
  {
    stockName: "ICICI PRU LIFE INS CO LTD",
    symbol: "ICICIPRULI",
    lotSize: 925,
  },
  {
    stockName: "IDFC FIRST BANK LIMITED",
    symbol: "IDFCFIRSTB",
    lotSize: 9275,
  },
  {
    stockName: "IIFL FINANCE LIMITED",
    symbol: "IIFL",
    lotSize: 1650,
  },
  {
    stockName: "INDIAN BANK",
    symbol: "INDIANB",
    lotSize: 1000,
  },
  {
    stockName: "INDIAN ENERGY EXC LTD",
    symbol: "IEX",
    lotSize: 3750,
  },
  {
    stockName: "INDIAN HOTELS CO. LTD",
    symbol: "INDHOTEL",
    lotSize: 1000,
  },
  {
    stockName: "INDIAN OIL CORP LTD",
    symbol: "IOC",
    lotSize: 4875,
  },
  {
    stockName: "INDIAN RAIL TOUR CORP LTD",
    symbol: "IRCTC",
    lotSize: 875,
  },
  {
    stockName: "INDIAN RAILWAY FIN CORP L",
    symbol: "IRFC",
    lotSize: 4250,
  },
  {
    stockName: "INDIAN RENEWABLE ENERGY",
    symbol: "IREDA",
    lotSize: 3450,
  },
  {
    stockName: "INDRAPRASTHA GAS LTD",
    symbol: "IGL",
    lotSize: 2750,
  },
  {
    stockName: "INDUS TOWERS LIMITED",
    symbol: "INDUSTOWER",
    lotSize: 1700,
  },
  {
    stockName: "INDUSIND BANK LIMITED",
    symbol: "INDUSINDBK",
    lotSize: 700,
  },
  {
    stockName: "INFO EDGE (I) LTD",
    symbol: "NAUKRI",
    lotSize: 375,
  },
  {
    stockName: "INFOSYS LIMITED",
    symbol: "INFY",
    lotSize: 400,
  },
  {
    stockName: "INOX WIND LIMITED",
    symbol: "INOXWIND",
    lotSize: 3225,
  },
  {
    stockName: "INTERGLOBE AVIATION LTD",
    symbol: "INDIGO",
    lotSize: 150,
  },
  {
    stockName: "IRB INFRA DEV LTD.",
    symbol: "IRB",
    lotSize: 11675,
  },
  {
    stockName: "ITC LTD",
    symbol: "ITC",
    lotSize: 1600,
  },
  {
    stockName: "JINDAL STAINLESS LIMITED",
    symbol: "JSL",
    lotSize: 850,
  },
  {
    stockName: "JINDAL STEEL & POWER LTD",
    symbol: "JINDALSTEL",
    lotSize: 625,
  },
  {
    stockName: "JIO FIN SERVICES LTD",
    symbol: "JIOFIN",
    lotSize: 2350,
  },
  {
    stockName: "JSW ENERGY LIMITED",
    symbol: "JSWENERGY",
    lotSize: 1000,
  },
  {
    stockName: "JSW STEEL LIMITED",
    symbol: "JSWSTEEL",
    lotSize: 675,
  },
  {
    stockName: "JUBILANT FOODWORKS LTD",
    symbol: "JUBLFOOD",
    lotSize: 1250,
  },
  {
    stockName: "KALYAN JEWELLERS IND LTD",
    symbol: "KALYANKJIL",
    lotSize: 1175,
  },
  {
    stockName: "KAYNES TECHNOLOGY IND LTD",
    symbol: "KAYNES",
    lotSize: 100,
  },
  {
    stockName: "KEI INDUSTRIES LTD.",
    symbol: "KEI",
    lotSize: 175,
  },
  {
    stockName: "KFIN TECHNOLOGIES LIMITED",
    symbol: "KFINTECH",
    lotSize: 450,
  },
  {
    stockName: "KOTAK MAHINDRA BANK LTD",
    symbol: "KOTAKBANK",
    lotSize: 400,
  },
  {
    stockName: "KPIT TECHNOLOGIES LIMITED",
    symbol: "KPITTECH",
    lotSize: 400,
  },
  {
    stockName: "L&T FINANCE LIMITED",
    symbol: "LTF",
    lotSize: 4462,
  },
  {
    stockName: "LARSEN & TOUBRO LTD.",
    symbol: "LT",
    lotSize: 175,
  },
  {
    stockName: "LAURUS LABS LIMITED",
    symbol: "LAURUSLABS",
    lotSize: 1700,
  },
  {
    stockName: "LIC HOUSING FINANCE LTD",
    symbol: "LICHSGFIN",
    lotSize: 1000,
  },
  {
    stockName: "LIFE INSURA CORP OF INDIA",
    symbol: "LICI",
    lotSize: 700,
  },
  {
    stockName: "LTIMINDTREE LIMITED",
    symbol: "LTIM",
    lotSize: 150,
  },
  {
    stockName: "M&M FIN. SERVICES LTD",
    symbol: "M&MFIN",
    lotSize: 2056,
  },
  {
    stockName: "MAHINDRA & MAHINDRA LTD",
    symbol: "M&M",
    lotSize: 200,
  },
  {
    stockName: "MAHANAGAR GAS LTD.",
    symbol: "MGL",
    lotSize: 400,
  },
  {
    stockName: "MANAPPURAM FINANCE LTD",
    symbol: "MANAPPURAM",
    lotSize: 3000,
  },
  {
    stockName: "MANKIND PHARMA LIMITED",
    symbol: "MANKIND",
    lotSize: 225,
  },
  {
    stockName: "MACROTECH DEVELOPERS LTD",
    symbol: "LODHA",
    lotSize: 450,
  },
  {
    stockName: "MARICO LIMITED",
    symbol: "MARICO",
    lotSize: 1200,
  },
  {
    stockName: "MARUTI SUZUKI INDIA LTD.",
    symbol: "MARUTI",
    lotSize: 50,
  },
  {
    stockName: "MAX FINANCIAL SERV LTD",
    symbol: "MFSL",
    lotSize: 800,
  },
  {
    stockName: "MAX HEALTHCARE INS LTD",
    symbol: "MAXHEALTH",
    lotSize: 525,
  },
  {
    stockName: "MAZAGON DOCK SHIPBUIL LTD",
    symbol: "MAZDOCK",
    lotSize: 175,
  },
  {
    stockName: "MPHASIS LIMITED",
    symbol: "MPHASIS",
    lotSize: 275,
  },
  {
    stockName: "MULTI COMMODITY EXCHANGE",
    symbol: "MCX",
    lotSize: 125,
  },
  {
    stockName: "MUTHOOT FINANCE LIMITED",
    symbol: "MUTHOOTFIN",
    lotSize: 275,
  },
  {
    stockName: "NATIONAL ALUMINIUM CO LTD",
    symbol: "NATIONALUM",
    lotSize: 3750,
  },
  {
    stockName: "NBCC (INDIA) LIMITED",
    symbol: "NBCC",
    lotSize: 6500,
  },
  {
    stockName: "NCC LIMITED",
    symbol: "NCC",
    lotSize: 2700,
  },
  {
    stockName: "NESTLE INDIA LIMITED",
    symbol: "NESTLEIND",
    lotSize: 250,
  },
  {
    stockName: "NHPC LTD",
    symbol: "NHPC",
    lotSize: 6400,
  },
  {
    stockName: "NMDC LTD.",
    symbol: "NMDC",
    lotSize: 13500,
  },
  {
    stockName: "NTPC LTD",
    symbol: "NTPC",
    lotSize: 1500,
  },
  {
    stockName: "OBEROI REALTY LIMITED",
    symbol: "OBEROIRLTY",
    lotSize: 350,
  },
  {
    stockName: "OIL AND NATURAL GAS CORP.",
    symbol: "ONGC",
    lotSize: 2250,
  },
  {
    stockName: "OIL INDIA LTD",
    symbol: "OIL",
    lotSize: 1400,
  },
  {
    stockName: "ONE 97 COMMUNICATIONS LTD",
    symbol: "PAYTM",
    lotSize: 725,
  },
  {
    stockName: "PAGE INDUSTRIES LTD",
    symbol: "PAGEIND",
    lotSize: 15,
  },
  {
    stockName: "PATANJALI FOODS LIMITED",
    symbol: "PATANJALI",
    lotSize: 300,
  },
  {
    stockName: "PB FINTECH LIMITED",
    symbol: "POLICYBZR",
    lotSize: 350,
  },
  {
    stockName: "PETRONET LNG LIMITED",
    symbol: "PETRONET",
    lotSize: 1800,
  },
  {
    stockName: "PG ELECTROPLAST LTD",
    symbol: "PGEL",
    lotSize: 700,
  },
  {
    stockName: "PI INDUSTRIES LTD",
    symbol: "PIIND",
    lotSize: 175,
  },
  {
    stockName: "PIDILITE INDUSTRIES LTD",
    symbol: "PIDILITIND",
    lotSize: 250,
  },
  {
    stockName: "PIRAMAL ENTERPRISES LTD",
    symbol: "PEL",
    lotSize: 750,
  },
  {
    stockName: "PIRAMAL PHARMA LIMITED",
    symbol: "PPLPHARMA",
    lotSize: 2500,
  },
  {
    stockName: "PNB HOUSING FIN LTD.",
    symbol: "PNBHOUSING",
    lotSize: 650,
  },
  {
    stockName: "POLYCAB INDIA LIMITED",
    symbol: "POLYCAB",
    lotSize: 125,
  },
  {
    stockName: "POONAWALLA FINCORP LTD",
    symbol: "POONAWALLA",
    lotSize: 1700,
  },
  {
    stockName: "POWER FIN CORP LTD.",
    symbol: "PFC",
    lotSize: 1300,
  },
  {
    stockName: "POWER GRID CORP. LTD.",
    symbol: "POWERGRID",
    lotSize: 1900,
  },
  {
    stockName: "PRESTIGE ESTATE LTD",
    symbol: "PRESTIGE",
    lotSize: 450,
  },
  {
    stockName: "PUNJAB NATIONAL BANK",
    symbol: "PNB",
    lotSize: 8000,
  },
  {
    stockName: "RAIL VIKAS NIGAM LIMITED",
    symbol: "RVNL",
    lotSize: 1375,
  },
  {
    stockName: "RBL BANK LIMITED",
    symbol: "RBLBANK",
    lotSize: 3175,
  },
  {
    stockName: "REC LIMITED",
    symbol: "RECLTD",
    lotSize: 1275,
  },
  {
    stockName: "RELIANCE INDUSTRIES LTD",
    symbol: "RELIANCE",
    lotSize: 500,
  },
  {
    stockName: "SAMVRDHNA MTHRSN INTL LTD",
    symbol: "MOTHERSON",
    lotSize: 4100,
  },
  {
    stockName: "SBI CARDS & PAY SER LTD",
    symbol: "SBICARD",
    lotSize: 800,
  },
  {
    stockName: "SBI LIFE INSURANCE CO LTD",
    symbol: "SBILIFE",
    lotSize: 375,
  },
  {
    stockName: "SHREE CEMENT LIMITED",
    symbol: "SHREECEM",
    lotSize: 25,
  },
  {
    stockName: "SHRIRAM FINANCE LIMITED",
    symbol: "SHRIRAMFIN",
    lotSize: 825,
  },
  {
    stockName: "SIEMENS LTD",
    symbol: "SIEMENS",
    lotSize: 125,
  },
  {
    stockName: "SJVN LTD",
    symbol: "SJVN",
    lotSize: 5875,
  },
  {
    stockName: "SOLAR INDUSTRIES (I) LTD",
    symbol: "SOLARINDS",
    lotSize: 75,
  },
  {
    stockName: "SONA BLW PRECISION FRGS L",
    symbol: "SONACOMS",
    lotSize: 1050,
  },
  {
    stockName: "SRF LTD",
    symbol: "SRF",
    lotSize: 200,
  },
  {
    stockName: "STATE BANK OF INDIA",
    symbol: "SBIN",
    lotSize: 750,
  },
  {
    stockName: "STEEL AUTHORITY OF INDIA",
    symbol: "SAIL",
    lotSize: 4700,
  },
  {
    stockName: "SUN PHARMACEUTICAL IND L",
    symbol: "SUNPHARMA",
    lotSize: 350,
  },
  {
    stockName: "SUPREME INDUSTRIES LTD",
    symbol: "SUPREMEIND",
    lotSize: 175,
  },
  {
    stockName: "SYNGENE INTERNATIONAL LTD",
    symbol: "SYNGENE",
    lotSize: 1000,
  },
  {
    stockName: "TATA CHEMICALS LTD",
    symbol: "TATACHEM",
    lotSize: 650,
  },
  {
    stockName: "TATA COMMUNICATIONS LTD",
    symbol: "TATACOMM",
    lotSize: 350,
  },
  {
    stockName: "TATA CONSUMER PRODUCT LTD",
    symbol: "TATACONSUM",
    lotSize: 550,
  },
  {
    stockName: "TATA CONSULTANCY SERV LT",
    symbol: "TCS",
    lotSize: 175,
  },
  {
    stockName: "TATA ELXSI LIMITED",
    symbol: "TATAELXSI",
    lotSize: 100,
  },
  {
    stockName: "TATA MOTORS LIMITED",
    symbol: "TATAMOTORS",
    lotSize: 800,
  },
  {
    stockName: "TATA POWER CO LTD",
    symbol: "TATAPOWER",
    lotSize: 1450,
  },
  {
    stockName: "TATA STEEL LIMITED",
    symbol: "TATASTEEL",
    lotSize: 5500,
  },
  {
    stockName: "TATA TECHNOLOGIES LIMITED",
    symbol: "TATATECH",
    lotSize: 800,
  },
  {
    stockName: "TECH MAHINDRA LIMITED",
    symbol: "TECHM",
    lotSize: 600,
  },
  {
    stockName: "THE PHOENIX MILLS LTD",
    symbol: "PHOENIXLTD",
    lotSize: 350,
  },
  {
    stockName: "TITAGARH RAIL SYSTEMS LTD",
    symbol: "TITAGARH",
    lotSize: 725,
  },
  {
    stockName: "TITAN COMPANY LIMITED",
    symbol: "TITAN",
    lotSize: 175,
  },
  {
    stockName: "TORRENT PHARMACEUTICALS L",
    symbol: "TORNTPHARM",
    lotSize: 250,
  },
  {
    stockName: "TORRENT POWER LTD",
    symbol: "TORNTPOWER",
    lotSize: 375,
  },
  {
    stockName: "TRENT LTD",
    symbol: "TRENT",
    lotSize: 100,
  },
  {
    stockName: "TUBE INVEST OF INDIA LTD",
    symbol: "TIINDIA",
    lotSize: 200,
  },
  {
    stockName: "ULTRATECH CEMENT LIMITED",
    symbol: "ULTRACEMCO",
    lotSize: 50,
  },
  {
    stockName: "UNION BANK OF INDIA",
    symbol: "UNIONBANK",
    lotSize: 4425,
  },
  {
    stockName: "UNITED SPIRITS LIMITED",
    symbol: "UNITDSPR",
    lotSize: 400,
  },
  {
    stockName: "UNO MINDA LIMITED",
    symbol: "UNOMINDA",
    lotSize: 550,
  },
  {
    stockName: "UPL LIMITED",
    symbol: "UPL",
    lotSize: 1355,
  },
  {
    stockName: "VARUN BEVERAGES LIMITED",
    symbol: "VBL",
    lotSize: 1025,
  },
  {
    stockName: "VEDANTA LIMITED",
    symbol: "VEDL",
    lotSize: 1150,
  },
  {
    stockName: "VODAFONE IDEA LIMITED",
    symbol: "IDEA",
    lotSize: 71475,
  },
  {
    stockName: "VOLTAS LTD",
    symbol: "VOLTAS",
    lotSize: 375,
  },
  {
    stockName: "WIPRO LTD",
    symbol: "WIPRO",
    lotSize: 3000,
  },
  {
    stockName: "YES BANK LIMITED",
    symbol: "YESBANK",
    lotSize: 31100,
  },
  {
    stockName: "ZYDUS LIFESCIENCES LTD",
    symbol: "ZYDUSLIFE",
    lotSize: 900,
  },
];
