MetacatUI.AppConfig = Object.assign(
  {
    root: "/",
    theme: "esa",
    title: "Ecological Society of America",
    repositoryName: "Ecological Society of America",
    description:
      "The Ecological Society of America (ESA) is a professional organization dedicated to advancing ecological science through research, education, and policy. It fosters collaboration among scientists, promotes ecological knowledge, and supports sustainable environmental solutions.",

    baseUrl: "https://data.esa.org/",
    metacatContext: "esa",
    nodeId: "urn:node:ESA",
    d1CNBaseUrl: "https://cn.dataone.org/",
    emailContact: "knb-help@nceas.ucsb.edu",

    useDeprecatedDataCatalogView: false,

    /* API Keys */
    googleAnalyticsKey: "G-BWFTGR3WSD",

    /* Metadata View */

    /* Metrics */
    displayDatasetQualityMetric: false,
    hideSummaryMetadataAssessment: true,
    hideSummaryDownloadsChart: false,
    hideSummaryCitationsChart: false,
    hideSummaryViewsChart: false,

    enableSolrJoins: true,
  },
  MetacatUI.AppConfig || {},
);

MetacatUI.themeMap = {
  "*": {
    // Routers
    "routers/BaseRouter": MetacatUI.root + "/js/routers/router.js",
    "routers/router":
      MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/routers/router.js",
    // Models
    "models/BaseMap": MetacatUI.root + "/js/models/Map.js",
    "models/Map":
      MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/models/Map.js",
    // Views
    "views/metadata/BaseEML211View":
      MetacatUI.root + "/js/views/metadata/EML211View.js",
    "views/metadata/EML211View":
      MetacatUI.root +
      "/js/themes/" +
      MetacatUI.theme +
      "/views/metadata/EML211View.js",
    "views/BaseTextView": MetacatUI.root + "/js/views/TextView.js",
    "views/TextView":
      MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/views/TextView.js",
    // Templates
    "templates/navbar.html":
      MetacatUI.root +
      "/js/themes/" +
      MetacatUI.theme +
      "/templates/navbar.html",
    "templates/about.html":
      MetacatUI.root +
      "/js/themes/" +
      MetacatUI.theme +
      "/templates/about.html",
    "templates/footer.html":
      MetacatUI.root +
      "/js/themes/" +
      MetacatUI.theme +
      "/templates/footer.html",
    "templates/mainContent.html":
      MetacatUI.root +
      "/js/themes/" +
      MetacatUI.theme +
      "/templates/mainContent.html",
  },
};
