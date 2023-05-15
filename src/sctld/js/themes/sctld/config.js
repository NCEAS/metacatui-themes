MetacatUI.AppConfig = Object.assign({
  root: "/",
  theme: "sctld",
  title: "Stony Coral Tissue Loss Disease (SCTLD) Research Data Portal",
  repositoryName: "Stony Coral Tissue Loss Disease (SCTLD) Research Data Portal",
  emailContact: "Rene.Baumstark@myfwc.com",
  description: "The SCTLD portal is a searchable inventory of existing SCTLD information related to research, surveillance, and intervention activities conducted for each susceptible species.",
  nodeId: "urn:node:SCTLD",
  mapKey: "AIzaSyBOotcxktBCRVUbbRTQoyy1d4IdA57S8cg",

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
      subject: "CN=sctld-admins,DC=dataone,DC=org",
      read: true,
      write: true,
      changePermission: true
    }
  ],
  hiddenSubjectsInAccessPolicy: ["CN=DataONE-Support,DC=dataone,DC=org",],
  enablePublishDOIForSubjects: ["CN=DataONE-Support,DC=dataone,DC=org", "CN=sctld-admins,DC=dataone,DC=org"],
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
  enableSolrJoins: true,
  quickAddTaxa: "urn:uuid:b786cb52-59ab-458d-962a-3308cb90007b",
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
