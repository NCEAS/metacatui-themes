MetacatUI.AppConfig = Object.assign(
  {
    root: "/",
    theme: "goa",
    title: "Gulf of Alaska Data Portal",
    repositoryName: "Gulf of Alaska Data Portal",
    description:
      "The Gulf of Alaska Data Portal archives environmental observations arising from monitoring and experimentation in the Gulf of Alaska and related regions, and particularly in oil-impacted regions of Prince William Sound and locations on the southern coast of Alaska. Many data sets are time series data spanning multiple decades and continuing through the present. The Gulf of Alaska Data Portal provides long-term, consistent, scientific data that is critical to allow us to detect and understand ecosystem changes and shifts that directly or indirectly (e.g. through food web relationships) influence the species and ecosystem services of the Gulf of Alaska.",
    baseUrl: "https://goa.nceas.ucsb.edu/",
    metacatContext: "goa",
    nodeId: "urn:node:GOA",
    d1CNBaseUrl: "https://cn.dataone.org/",
    emailContact: "knb-help@nceas.ucsb.edu",

    /* API Keys */
    googleAnalyticsKey: "G-N7RYX7H5H1",

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
