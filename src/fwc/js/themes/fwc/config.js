MetacatUI.AppConfig = Object.assign({
    root: "/",
    theme: "fwc",
    title: "Florida Fish and Wildlife Conservation Commission",
    repositoryName: "Florida Fish and Wildlife Conservation Commission",
    emailContact: "metadata@myfwc.com",
    baseUrl: "https://fwc.dataone.org",
    nodeId: "urn:node:FWC",
    dataoneHostedRepos: ["urn:node:FWC"],
    description: "The Florida Fish and Wildlife Conservation Commission’s (FWC) repository enables the documenting, preserving, and sharing of our research data. Our goal is to provide information for scientifically-backed decisions and to protect, conserve, and manage Florida's fish and wildlife resources.",

    /* API Keys */
    mapKey: "AIzaSyBgPoSNA1SiaGJ9gRYxkxENVoBXPTU0J5M",
    googleAnalyticsKey: "G-G1KT0R0DL8",

    /* Metadata View */

    /* Metrics */
    displayDatasetQualityMetric: true,
    hideSummaryMetadataAssessment: false,
    hideSummaryDownloadsChart: false,
    hideSummaryCitationsChart: false,
    hideSummaryViewsChart: false,

    portalDefaults: {
        primaryColor: "#494b4c",
        primaryColorTransparent: "rgba(73, 75, 76, .7)",
        secondaryColor: "#f1f7f6",
        secondaryColorTransparent: "rgba(241, 247, 246, .7)",
        accentColor: "#ccc",
        accentColorTransparent: "rgba(204, 204, 204, .7)"
    },    

    /* Editor */
    defaultAccessPolicy: [
        {
            subject: "CN=DataONE-Support,DC=dataone,DC=org",
            read: true,
            write: true,
            changePermission: true
        },
        {
            subject: "CN=fwc-curators,DC=dataone,DC=org",
            read: true,
            write: true,
            changePermission: true
        },
        {
            subject: "CN=fwc-staff,DC=dataone,DC=org",
            read: true,
            write: true,
            changePermission: false
        },
        {
            subject: "public",
            read: false
        }
    ],
    inheritAccessPolicy: true,
    hiddenSubjectsInAccessPolicy: ["CN=DataONE-Support,DC=dataone,DC=org", "CN=fwc-curators,DC=dataone,DC=org", "CN=fwc-staff,DC=dataone,DC=org"],
    enablePublishDOI: true,
    enablePublishDOIForSubjects: ["CN=DataONE-Support,DC=dataone,DC=org", "CN=fwc-curators,DC=dataone,DC=org"],  
    allowAccessPolicyChangesDatasets: true,
    allowAccessPolicyChangesDatasetsForSubjects: ["CN=DataONE-Support,DC=dataone,DC=org", "CN=fwc-curators,DC=dataone,DC=org", "CN=fwc-staff,DC=dataone,DC=org"],
    allowAccessPolicyChangesPortals: true,
    allowAccessPolicyChangesPortalsForSubjects: ["CN=DataONE-Support,DC=dataone,DC=org", "CN=fwc-curators,DC=dataone,DC=org"],
    showDatasetPublicToggle: true,
    showDatasetPublicToggleForSubjects: ["CN=DataONE-Support,DC=dataone,DC=org", "CN=fwc-curators,DC=dataone,DC=org"],  
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
