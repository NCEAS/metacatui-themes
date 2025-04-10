MetacatUI.AppConfig = Object.assign({
    root: "/",
    theme: "geri",
    title: "Global Ecosystem Research Infrastructure",
    repositoryName: "GERI",
    emailContact: "support@dataone.org",
    repositoryURL: "https://geri.dataone.org",
    baseUrl: "https://geri.dataone.org",
    nodeId: "urn:node:GERI",
    dataoneHostedRepos: ["urn:node:GERI"],
    description: "The GERI repository provides harmonized global ecological drought data from key ecosystem research infrastructures, enabling seamless and federated access for cross-regional global-scale analysis, research, and decision-making.",

    /* API Keys */
    mapKey: "AIzaSyDbM1ekMmoaipRzhuJGCMrAjQuIoQnxARs",
    googleAnalyticsKey: "G-F116GPEST0",

    /* Metadata View */

    /* Metrics */
    displayDatasetQualityMetric: true,
    hideSummaryMetadataAssessment: false,
    hideSummaryDownloadsChart: false,
    hideSummaryCitationsChart: false,
    hideSummaryViewsChart: false,

    /* Editor */
    defaultAccessPolicy: [
        {
            subject: "CN=DataONE-Support,DC=dataone,DC=org",
            read: true,
            write: true,
            changePermission: true
        },
        {
            subject: "CN=geri-curators,DC=dataone,DC=org",
            read: true,
            write: true,
            changePermission: true
        }
    ],
    hiddenSubjectsInAccessPolicy: ["CN=DataONE-Support,DC=dataone,DC=org","CN=geri-curators,DC=dataone,DC=org"],
    enablePublishDOI: true,
    enablePublishDOIForSubjects: ["CN=DataONE-Support,DC=dataone,DC=org", "CN=geri-curators,DC=dataone,DC=org"],
    allowAccessPolicyChangesDatasets: true,
    allowAccessPolicyChangesDatasetsForSubjects: ["CN=DataONE-Support,DC=dataone,DC=org", "CN=geri-curators,DC=dataone,DC=org"],
    showDatasetPublicToggle: true,
    showDatasetPublicToggleForSubjects: ["CN=DataONE-Support,DC=dataone,DC=org", "CN=geri-curators,DC=dataone,DC=org"],
    emlEditorRequiredFields: {
        abstract: true,
        alternateIdentifier: false,
        funding: false,
        generalTaxonomicCoverage: false,
        geoCoverage: true,
        intellectualRights: true,
        keywordSets: false,
        methods: false,
        samplingDescription: false,
        studyExtentDescription: false,
        taxonCoverage: false,
        temporalCoverage: true,
        title: true
    },
    enableSolrJoins: true
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
        "templates/footer.html": MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/templates/footer.html",
        "templates/mainContent.html": MetacatUI.root + '/js/themes/' + MetacatUI.theme + '/templates/mainContent.html'
    }
}
