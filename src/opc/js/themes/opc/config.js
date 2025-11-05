MetacatUI.AppConfig = Object.assign({
  root: "/",
  theme: "opc",
  baseUrl: "https://opc.dataone.org",
  repositoryName: "California Ocean Protection Council Data Repository",
  title: "California Ocean Protection Council Data Repository",
  description: "The California Ocean Protection Council (OPC) serves as the California Governor's advisor on ocean and coastal policy and is charged with safeguarding coastal and ocean ecosystems for the benefit of all Californians. OPC provides best available science to decisionmakers, develops science-based policy recommendations, strategically deploys funding and other resources, and collaborates across jurisdictional, programmatic, and regional boundaries.",
  emailContact: "Michael.Esgro@resources.ca.gov, gaddam@ucsc.edu",
  googleAnalyticsKey: "G-L1MH2BPD52",

  //Temporary Message
  temporaryMessage: "The California OPC Data Repository will be unavailable between 11 p.m. PT on Monday, June 15 and 6:30 a.m. PT on Tuesday, June 16 due to upgrades. We apologize for the inconvenience.",
  temporaryMessageStartTime: null,
  temporaryMessageEndTime: new Date("2020-06-16T13:30:00Z"),
  temporaryMessageClasses: "warning",
  temporaryMessageContainer: "#Navbar",

  //Access Policy
  allowAccessPolicyChanges: true,
  defaultAccessPolicy: [
      {
          subject: "CN=opc-data-admins,DC=dataone,DC=org",
          read: true,
          write: true,
          changePermission: true
      },
      {
        subject: "CN=DataONE-Support,DC=dataone,DC=org",
        read: true,
        write: true,
        changePermission: true
    }
  ],
  hiddenSubjectsInAccessPolicy: ["CN=opc-data-admins,DC=dataone,DC=org", "CN=DataONE-Support,DC=dataone,DC=org"],
  showDatasetPublicToggleForSubjects: ["CN=opc-data-admins,DC=dataone,DC=org", "CN=DataONE-Support,DC=dataone,DC=org"],

  // Metrics Falgs for the /profile view (summary view)
  hideSummaryCitationsChart: false,
  hideSummaryDownloadsChart: false,
  hideSummaryMetadataAssessment: false,
  hideSummaryViewsChart: false,

  //Searching
  enableSolrJoins: true,

  //Editor
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

  //Dataset landing pages
  displayDatasetQualityMetric: true,
  //Only let administrators use the Publish button
  enablePublishDOIForSubjects: ["CN=opc-data-admins,DC=dataone,DC=org", "CN=California Ocean Protection Council Data Publisher,DC=dataone,DC=org"],

  mapKey: "AIzaSyBlc1nrR0_LK9kpy8kMH1V7vGCQz1rCsl4"
}, (MetacatUI.AppConfig || {}));

MetacatUI.themeMap =
{
    "*": {
        // Routers
        "routers/BaseRouter" : MetacatUI.root + "/js/routers/router.js",
        "routers/router" : MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/routers/router.js",
        // Models
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
