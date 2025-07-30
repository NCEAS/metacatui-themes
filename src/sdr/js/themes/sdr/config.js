MetacatUI.AppConfig = Object.assign({
    root: "/",
    theme: "sdr",
    title: "Seafloor Data Repository",
    repositoryName: "Seafloor Data Repository",
    emailContact: "support@dataone.org",
    repositoryURL: "https://seafloor.dataone.org",
    baseUrl: "https://seafloor.dataone.org",
    nodeId: "urn:node:SDR",
    dataoneHostedRepos: ["urn:node:SDR"],
    description: "The purpose of the Seafloor Data Repository is to catalog and make available seafloor datasets in U.S. Atlantic waters collected by a variety of entities and purposes that can eventually be used to develop regional-scale seafloor habitat data products (e.g., bathymetry maps, benthic habitat maps, surficial seafloor geology maps) for wider use and dissemination via the <a href='https://portal.midatlanticocean.org/' target='_blank'>Mid-Atlantic Ocean Data Portal</a> and <a href='https://www.northeastoceandata.org/' target='_blank'>Northeast Ocean Data Portal</a>, and other mapping platforms.",

    /* API Keys */
    mapKey: "",
    googleAnalyticsKey: "G-D2CJSR94FZ",

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
            subject: "CN=sdr-curators,DC=dataone,DC=org",
            read: true,
            write: true,
            changePermission: true
        }
    ],
    hiddenSubjectsInAccessPolicy: ["CN=DataONE-Support,DC=dataone,DC=org","CN=sdr-curators,DC=dataone,DC=org"],
    enablePublishDOI: true,
    enablePublishDOIForSubjects: ["CN=DataONE-Support,DC=dataone,DC=org", "CN=sdr-curators,DC=dataone,DC=org"],
    allowAccessPolicyChangesDatasets: true,
    showDatasetPublicToggle: true,
    showDatasetPublicToggleForSubjects: ["CN=DataONE-Support,DC=dataone,DC=org", "CN=sdr-curators,DC=dataone,DC=org"],
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
