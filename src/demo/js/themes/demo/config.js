MetacatUI.AppConfig = Object.assign({
    root: "/",
    theme: "demo",
    title: "Hosted Repository Demo",
    repositoryName: "Hosted Repository Demo",
    repositoryURL: "https://demo.dataone.org",
    baseUrl: "https://demo.dataone.org",
    nodeId: "urn:node:DEMO",
    dataoneHostedRepos: ["urn:node:DEMO"],
    emailContact: "support@dataone.org",

    /* Temporary Message */
    temporaryMessage: "This repository is a demo of the Hosted Repository system! Any data submitted is for demonstration purposes only and may be deleted at any time.",
    temporaryMessageStartTime: null,
    temporaryMessageEndTime: new Date("2099-10-24T00:00:00"),
    temporaryMessageClasses: "success",
    temporaryMessageContainer: "#Navbar",

    useDeprecatedDataCatalogView: false,

    catalogSearchMapOptions: {
      showLayerList: false,
      clickFeatureAction: "zoom",
      homePosition: {
        longitude: -144.022494,
        latitude: 57.005571,
        height: 5352085,
        heading: 1,
        pitch: -90,
        roll: 0,
      },
    },
    /* Metadata View */

    /* API keys */
    mapKey: "AIzaSyCR-baxR53T7_gvcQk9N_tOrAZLkX_DzZI",

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
            subject: "public",
            read: true
        }
    ],
    hiddenSubjectsInAccessPolicy: ["CN=DataONE-Support,DC=dataone,DC=org"],
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
