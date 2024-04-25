MetacatUI.AppConfig = Object.assign({
    root: "/",
    theme: "smithsonian",
    title: "Smithsonian Research Data Repository",
    repositoryName: "Smithsonian Research Data Repository",
    nodeId: "urn: node:SI",
    description: "The Smithsonian Research Data Repository is intended to facilitate open and discoverable reuse of Smithsonian research data products.",
    baseUrl: "https://smithsonian.dataone.org/",
    emailContact: "support@dataone.org",

    // useDeprecatedDataCatalogView: false,
    // enableCesium: true,
    // cesiumToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiMTE3MTBiYy1iODY1LTQxNjMtODUzNS0yMzM1NGE3M2JhMWIiLCJpZCI6NjkzOTcsImlhdCI6MTY3ODkwMDg5M30.xzIlG_tPIzB9FmYPzPTzOJ49R2J4yIG2y0ittFqdbMc",

    /* Metadata View */

    // /* Metrics */
    // displayDatasetQualityMetric: true,
    // hideSummaryMetadataAssessment: false,
    // hideSummaryDownloadsChart: false,
    // hideSummaryCitationsChart: false,
    // hideSummaryViewsChart: false,

    // /* Editor */
    defaultAccessPolicy: [
        {
            subject: "CN=DataONE-Support,DC=dataone,DC=org",
            read: true,
            write: true,
            changePermission: true
        },
        {
            subject: "CN=smithsonian-admins,DC=dataone,DC=org",
            read: true,
            write: true,
            changePermission: true
        },
        {
            subject: "CN=smithsonian-curators,DC=dataone,DC=org",
            read: true,
            write: true,
            changePermission: false
        },
        {
            subject: "public",
            read: true
        }
    ],
    hiddenSubjectsInAccessPolicy: ["CN=DataONE-Support,DC=dataone,DC=org", "CN=smithsonian-admins,DC=dataone,DC=org", "CN=smithsonian-curators,DC=dataone,DC=org"],
    // emlEditorRequiredFields: {
    //     abstract: true,
    //     alternateIdentifier: false,
    //     funding: false,
    //     generalTaxonomicCoverage: false,
    //     geoCoverage: true,
    //     intellectualRights: true,
    //     keywordSets: false,
    //     methods: false,
    //     samplingDescription: false,
    //     studyExtentDescription: false,
    //     taxonCoverage: false,
    //     temporalCoverage: true,
    //     title: true
    // },
    // enableSolrJoins: true
}, (MetacatUI.AppConfig || {}));

MetacatUI.themeMap =
{
    "*": {
        // Routers
        "routers/BaseRouter": MetacatUI.root + "/js/routers/router.js",
        "routers/router": MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/routers/router.js",
        // Models
        "models/BaseMap": MetacatUI.root + "/js/models/Map.js",
        "models/Map": MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/models/Map.js",
        // Views
        "views/metadata/BaseEML211View": MetacatUI.root + "/js/views/metadata/EML211View.js",
        "views/metadata/EML211View": MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/views/metadata/EML211View.js",
        "views/BaseTextView": MetacatUI.root + "/js/views/TextView.js",
        "views/TextView": MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/views/TextView.js",
        // Templates
        "templates/navbar.html": MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/templates/navbar.html",
        "templates/about.html": MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/templates/about.html",
        "templates/support.html": MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/templates/support.html",
        "templates/metadata/metadataOverview.html": MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/templates/metadata/metadataOverview.html",
        "templates/footer.html": MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/templates/footer.html"
    }
}
