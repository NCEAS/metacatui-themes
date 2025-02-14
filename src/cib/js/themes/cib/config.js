MetacatUI.AppConfig = Object.assign({
    root: "/",
    theme: "cib",
    title: "California Institute for Biodiversity",
    repositoryName: "California Institute for Biodiversity",
    repositoryURL: "https://cib.dataone.org",
    nodeId: "urn:node:CIB",
    dataoneHostedRepos: ["urn:node:CIB"],
    emailContact: "support@dataone.org",
    description: "The California ATBI Data Repository aggregates, integrates, and shares biodiversity data collected by partners, to understand and sustain the great diversity of life in California.",

    /* Metadata View */


  /* API keys */
  mapKey: "AIzaSyCR-baxR53T7_gvcQk9N_tOrAZLkX_DzZI",

  /* Metrics */
  displayDatasetQualityMetric: true,
  hideSummaryMetadataAssessment: false,
  hideSummaryDownloadsChart: false,
  hideSummaryCitationsChart: false,
  hideSummaryViewsChart: false,
  
  /* Portals */
  portalDefaults: {
    primaryColor: "#73c6fd",
    primaryColorTransparent: "rgba(115, 198, 253, .7)",
    secondaryColor: "#0e49a1",
    secondaryColorTransparent: "rgba(14, 73, 161, .7)",
    accentColor: "#05ab8f",
    accentColorTransparent: "rgba(5, 171, 143, .7)"
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
            subject: "CN=cib-curators,DC=dataone,DC=org",
            read: true,
            write: true,
            changePermission: true
        },
        {
            subject: "CN=cib-admins,DC=dataone,DC=org",
            read: true,
            write: true,
            changePermission: true
        }
    ],
    inheritAccessPolicy: true,
    hiddenSubjectsInAccessPolicy: ["CN=DataONE-Support,DC=dataone,DC=org","CN=cib-curators,DC=dataone,DC=org","CN=cib-admins,DC=dataone,DC=org"],
    enablePublishDOI: true,
    enablePublishDOIForSubjects: ["CN=DataONE-Support,DC=dataone,DC=org", "CN=cib-curators,DC=dataone,DC=org","CN=cib-admins,DC=dataone,DC=org"],
    allowAccessPolicyChangesDatasets: true,
    allowAccessPolicyChangesDatasetsForSubjects: ["CN=DataONE-Support,DC=dataone,DC=org", "CN=cib-curators,DC=dataone,DC=org", "CN=cib-admins,DC=dataone,DC=org"],
    allowAccessPolicyChangesPortals: true,
    allowAccessPolicyChangesPortalsForSubjects: ["CN=DataONE-Support,DC=dataone,DC=org", "CN=cib-curators,DC=dataone,DC=org", "CN=cib-admins,DC=dataone,DC=org"],
    showDatasetPublicToggle: true,
    showDatasetPublicToggleForSubjects: ["CN=DataONE-Support,DC=dataone,DC=org", "CN=cib-curators,DC=dataone,DC=org", "CN=cib-admins,DC=dataone,DC=org"],
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
