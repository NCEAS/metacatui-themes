MetacatUI.AppConfig = Object.assign({
  root: "/",
  theme: "cerp",
  title: "CERP - South Florida Water Management District",
  repositoryName: "CERP - South Florida Water Management District",
  emailContact: "dmarley@sfwmd.gov",
  nodeId: "urn:node:CERP_SFWMD",
  mapKey: "AIzaSyDDxRQM8mcIocEgczfnG3M6FnAU5IvVEw0",
  googleAnalyticsKey: "G-3Z04WNN10H",

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
        subject: "CN=cerp-sfwmd-admins,DC=dataone,DC=org",
        read: true,
        write: true,
        changePermission: true
      },
      {
          subject: "public",
          read: true
      }
  ],
  hiddenSubjectsInAccessPolicy: ["CN=DataONE-Support,DC=dataone,DC=org", "CN=cerp-sfwmd-admins,DC=dataone,DC=org"],
  enablePublishDOIForSubjects: ["CN=DataONE-Support,DC=dataone,DC=org", "CN=cerp-sfwmd-admins,DC=dataone,DC=org"],
  showDatasetPublicToggleForSubjects: ["CN=DataONE-Support,DC=dataone,DC=org", "CN=cerp-sfwmd-admins,DC=dataone,DC=org"],
  emlEditorRequiredFields: {
      abstract: true,
      alternateIdentifier: false,
      funding: false,
      generalTaxonomicCoverage: false,
      geoCoverage: true,
      intellectualRights: false,
      keywordSets: true,
      methods: false,
      samplingDescription: false,
      studyExtentDescription: false,
      taxonCoverage: false,
      temporalCoverage: true,
      title: true
  },

  /* Searching */
  enableSolrJoins: true,

  // ⛔️ℹ️ ------
  // defaultIntellectualRights is NOT an official config option, it is only used in the CERP theme!
  // ------ ℹ️⛔️
  defaultIntellectualRights: "This dataset is made available to the public in response to the Florida Public Records Law, Florida Statutes, Chapter 119. This data is a conceptual tool utilized for project development and implementation only. This data is not self-executing or binding, and does not otherwise affect the interests of any person including any vested rights or existing uses of real property. Any information, including but not limited to maps and data, received from CERP is provided \"as is\" without any warranty and CERP expressly disclaims all express and implied warranties of merchantability and fitness for a particular purpose. CERP does not make any representations regarding the use, or the results of the use, of the information provided to you by CERP."


}, (MetacatUI.AppConfig || {}));

MetacatUI.themeMap =
{
    "*": {
        // Routers
        "routers/BaseRouter" : MetacatUI.root + "/js/routers/router.js",
        "routers/router" : MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/routers/router.js",
        // Models
        "models/BaseEML" : MetacatUI.root + "/js/models/metadata/eml211/EML211.js",
        "models/metadata/eml211/EML211" : MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/models/metadata/eml211/EML211.js",
        "models/BaseMap" : MetacatUI.root + "/js/models/Map.js",
        "models/Map" : MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/models/Map.js",
        // Views
        "views/metadata/BaseEML211View" : MetacatUI.root + "/js/views/metadata/EML211View.js",
        "views/metadata/EML211View" : MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/views/metadata/EML211View.js",
        "views/BaseTextView" : MetacatUI.root + "/js/views/TextView.js",
        "views/TextView" : MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/views/TextView.js",
        // Templates
        "templates/navbar.html" : MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/templates/navbar.html",
        "templates/about.html" : MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/templates/about.html",
        "templates/support.html" : MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/templates/support.html",
        "templates/metadata/metadataOverview.html" : MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/templates/metadata/metadataOverview.html",
        "templates/footer.html" : MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/templates/footer.html"
    }
}
