/*
   Country List

   This file contains a mapping of currency codes to their corresponding country codes.
   It is used in the CurrencyXchange project for providing additional information about currencies.

   Format:
   "Currency Code": "Country Code"

   Example:
   "USD": "US" // United States Dollar
   
   Note: The data provided here is based on the ISO 4217 standard for currency codes.
*/

let country_list = {
    "AED": "AE", // United Arab Emirates Dirham
    "AFN": "AF", // Afghan Afghani
    "XCD": "AG", // East Caribbean Dollar
    "ALL": "AL", // Albanian Lek
    "AMD": "AM", // Armenian Dram
    "ANG": "AN", // Netherlands Antillean Guilder
    "AOA": "AO", // Angolan Kwanza
    "AQD": "AQ", // Antarctic Dollar (used by Antarctica)
    "ARS": "AR", // Argentine Peso
    "AUD": "AU", // Australian Dollar
    "AZN": "AZ", // Azerbaijani Manat
    "BAM": "BA", // Bosnia And Herzegovina Convertible Mark
    "BBD": "BB", // Barbadian Dollar
    "BDT": "BD", // Bangladeshi Taka
    "BGN": "BG", // Bulgarian Lev
    "BHD": "BH", // Bahraini Dinar
    "BIF": "BI", // Burundian Franc
    "BMD": "BM", // Bermudian Dollar
    "BND": "BN", // Brunei Dollar
    "BOB": "BO", // Bolivian Boliviano
    "BRL": "BR", // Brazilian Real
    "BSD": "BS", // Bahamian Dollar
    "NOK": "BV", // Norwegian Krone (used by Bouvet Island)
    "BWP": "BW", // Botswana Pula
    "BYR": "BY", // Belarusian Ruble (no longer used)
    "BZD": "BZ", // Belize Dollar
    "CAD": "CA", // Canadian Dollar
    "CDF": "CD", // Congolese Franc
    "XAF": "CF", // Central African CFA Franc
    "CHF": "CH", // Swiss Franc
    "CLP": "CL", // Chilean Peso
    "CNY": "CN", // Chinese Yuan
    "COP": "CO", // Colombian Peso
    "CRC": "CR", // Costa Rican Colón
    "CUP": "CU", // Cuban Peso
    "CVE": "CV", // Cape Verdean Escudo
    "CYP": "CY", // Cypriot Pound (no longer used)
    "CZK": "CZ", // Czech Republic Koruna
    "DJF": "DJ", // Djiboutian Franc
    "DKK": "DK", // Danish Krone
    "DOP": "DO", // Dominican Peso
    "DZD": "DZ", // Algerian Dinar
    "ECS": "EC", // Ecuadorian Sucre (no longer used)
    "EEK": "EE", // Estonian Kroon (no longer used)
    "EGP": "EG", // Egyptian Pound
    "ETB": "ET", // Ethiopian Birr
    "EUR": "FR", // Euro
    "FJD": "FJ", // Fijian Dollar
    "FKP": "FK", // Falkland Islands Pound
    "GBP": "GB", // British Pound Sterling
    "GEL": "GE", // Georgian Lari
    "GGP": "GG", // Guernsey Pound
    "GHS": "GH", // Ghanaian Cedi
    "GIP": "GI", // Gibraltar Pound
    "GMD": "GM", // Gambian Dalasi
    "GNF": "GN", // Guinean Franc
    "GTQ": "GT", // Guatemalan Quetzal
    "GYD": "GY", // Guyanese Dollar
    "HKD": "HK", // Hong Kong Dollar
    "HNL": "HN", // Honduran Lempira
    "HRK": "HR", // Croatian Kuna
    "HTG": "HT", // Haitian Gourde
    "HUF": "HU", // Hungarian Forint
    "IDR": "ID", // Indonesian Rupiah
    "ILS": "IL", // Israeli New Shekel
    "INR": "IN", // Indian Rupee
    "IQD": "IQ", // Iraqi Dinar
    "IRR": "IR", // Iranian Rial
    "ISK": "IS", // Icelandic Króna
    "JMD": "JM", // Jamaican Dollar
    "JOD": "JO", // Jordanian Dinar
    "JPY": "JP", // Japanese Yen
    "KES": "KE", // Kenyan Shilling
    "KGS": "KG", // Kyrgyzstan Som
    "KHR": "KH", // Cambodian Riel
    "KMF": "KM", // Comorian Franc
    "KPW": "KP", // North Korean Won
    "KRW": "KR", // South Korean Won
    "KWD": "KW", // Kuwaiti Dinar
    "KYD": "KY", // Cayman Islands Dollar
    "KZT": "KZ", // Kazakhstani Tenge
    "LAK": "LA", // Lao Kip
    "LBP": "LB", // Lebanese Pound
    "LKR": "LK", // Sri Lankan Rupee
    "LRD": "LR", // Liberian Dollar
    "LSL": "LS", // Lesotho Loti
    "LTL": "LT", // Lithuanian Litas (no longer used)
    "LVL": "LV", // Latvian Lats (no longer used)
    "LYD": "LY", // Libyan Dinar
    "MAD": "MA", // Moroccan Dirham
    "MDL": "MD", // Moldovan Leu
    "MGA": "MG", // Malagasy Ariary
    "MKD": "MK", // Macedonian Denar
    "MMK": "MM", // Myanmar Kyat
    "MNT": "MN", // Mongolian Tugrik
    "MOP": "MO", // Macanese Pataca
    "MRO": "MR", // Mauritanian Ouguiya
    "MTL": "MT", // Maltese Lira (no longer used)
    "MUR": "MU", // Mauritian Rupee
    "MVR": "MV", // Maldivian Rufiyaa
    "MWK": "MW", // Malawian Kwacha
    "MXN": "MX", // Mexican Peso
    "MYR": "MY", // Malaysian Ringgit
    "MZN": "MZ", // Mozambican Metical
    "NAD": "NA", // Namibian Dollar
    "XPF": "NC", // CFP Franc (used by New Caledonia)
    "NGN": "NG", // Nigerian Naira
    "NIO": "NI", // Nicaraguan Córdoba
    "NPR": "NP", // Nepalese Rupee
    "NZD": "NZ", // New Zealand Dollar
    "OMR": "OM", // Omani Rial
    "PAB": "PA", // Panamanian Balboa
    "PEN": "PE", // Peruvian Nuevo Sol
    "PGK": "PG", // Papua New Guinean Kina
    "PHP": "PH", // Philippine Peso
    "PKR": "PK", // Pakistani Rupee
    "PLN": "PL", // Polish Złoty
    "PYG": "PY", // Paraguayan Guarani
    "QAR": "QA", // Qatari Rial
    "RON": "RO", // Romanian Leu
    "RSD": "RS", // Serbian Dinar
    "RUB": "RU", // Russian Ruble
    "RWF": "RW", // Rwandan Franc
    "SAR": "SA", // Saudi Riyal
    "SBD": "SB", // Solomon Islands Dollar
    "SCR": "SC", // Seychellois Rupee
    "SDG": "SD", // Sudanese Pound
    "SEK": "SE", // Swedish Krona
    "SGD": "SG", // Singapore Dollar
    "SKK": "SK", // Slovak Koruna (no longer used)
    "SLL": "SL", // Sierra Leonean Leone
    "SOS": "SO", // Somali Shilling
    "SRD": "SR", // Surinamese Dollar
    "STD": "ST", // São Tomé and Príncipe Dobra
    "SVC": "SV", // Salvadoran Colón
    "SYP": "SY", // Syrian Pound
    "SZL": "SZ", // Swazi Lilangeni
    "THB": "TH", // Thai Baht
    "TJS": "TJ", // Tajikistani Somoni
    "TMT": "TM", // Turkmenistani Manat
    "TND": "TN", // Tunisian Dinar
    "TOP": "TO", // Tongan Pa'anga
    "TRY": "TR", // Turkish Lira
    "TTD": "TT", // Trinidad and Tobago Dollar
    "TWD": "TW", // New Taiwan Dollar
    "TZS": "TZ", // Tanzanian Shilling
    "UAH": "UA", // Ukrainian Hryvnia
    "UGX": "UG", // Ugandan Shilling
    "USD": "US", // United States Dollar
    "UYU": "UY", // Uruguayan Peso
    "UZS": "UZ", // Uzbekistani Som
    "VEF": "VE", // Venezuelan Bolívar
    "VND": "VN", // Vietnamese Đồng
    "VUV": "VU", // Vanuatu Vatu
    "YER": "YE", // Yemeni Rial
    "ZAR": "ZA", // South African Rand
    "ZMK": "ZM", // Zambian Kwacha (no longer used)
    "ZWD": "ZW"  // Zimbabwean Dollar (no longer used)
};

// Export the country list for external use
module.exports = country_list;
