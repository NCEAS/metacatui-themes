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
  // TESTING
  quickAddTaxa: [
    {
      label: "Coral Species",
      placeholder: "Select one or more coral species",
      taxa: [
        {
          taxonRankValue: "Agaricia agaricites",
          taxonRankName: "Species",
          taxonId: {
            value: "53050",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Acropora cervicornis",
          taxonRankName: "Species",
          taxonId: {
            value: "52862",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Acropora palmata",
          taxonRankName: "Species",
          taxonId: {
            value: "52861",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Agaricia lamarcki",
          taxonRankName: "Species",
          taxonId: {
            value: "53058",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Agaricia tenuifolia",
          taxonRankName: "Species",
          taxonId: {
            value: "53060",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Colpophyllia natans",
          taxonRankName: "Species",
          taxonId: {
            value: "53289",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Dendrogyra cylindrus",
          taxonRankName: "Species",
          taxonId: {
            value: "1160327",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Diploria labyrinthiformis",
          taxonRankName: "Species",
          taxonId: {
            value: "53286",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Dichocoenia stokesii",
          taxonRankName: "Species",
          taxonId: {
            value: "53420",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Eusmilia fastigiata",
          taxonRankName: "Species",
          taxonId: {
            value: "53622",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Favia fragum",
          taxonRankName: "Species",
          taxonId: {
            value: "53267",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Helioseris cucullata",
          taxonRankName: "Species",
          taxonId: {
            value: "53037",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Isophyllia sp.",
          taxonRankName: "Species",
          taxonId: {
            value: "53475",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Isophyllia rigida",
          taxonRankName: "Species",
          taxonId: {
            value: "",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Isophyllia sinuosa",
          taxonRankName: "Species",
          taxonId: {
            value: "53476",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Mycetophyllia aliciae",
          taxonRankName: "Species",
          taxonId: {
            value: "53482",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Mussa angulosa",
          taxonRankName: "Species",
          taxonId: {
            value: "53474",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Madracis auretenra",
          taxonRankName: "Species",
          taxonId: {
            value: "",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Montastraea cavernosa",
          taxonRankName: "Species",
          taxonId: {
            value: "53255",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Madracis decactis",
          taxonRankName: "Species",
          taxonId: {
            value: "53009",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Mycetophyllia ferox",
          taxonRankName: "Species",
          taxonId: {
            value: "53481",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Meandrina jacksoni",
          taxonRankName: "Species",
          taxonId: {
            value: "1160323",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Mycetophyllia lamarckiana",
          taxonRankName: "Species",
          taxonId: {
            value: "53479",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Meandrina meandrites",
          taxonRankName: "Species",
          taxonId: {
            value: "53423",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Orbicella annularis",
          taxonRankName: "Species",
          taxonId: {
            value: "",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Oculina diffusa",
          taxonRankName: "Species",
          taxonId: {
            value: "53395",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Orbicella faveolata",
          taxonRankName: "Species",
          taxonId: {
            value: "",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Orbicella franksi",
          taxonRankName: "Species",
          taxonId: {
            value: "",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Porites astreoides",
          taxonRankName: "Species",
          taxonId: {
            value: "53184",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Porites porites",
          taxonRankName: "Species",
          taxonId: {
            value: "53180",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Pseudodiploria clivosa",
          taxonRankName: "Species",
          taxonId: {
            value: "",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Pseudodiploria strigosa",
          taxonRankName: "Species",
          taxonId: {
            value: "",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Solenastrea bournoni",
          taxonRankName: "Species",
          taxonId: {
            value: "53253",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Scolymia sp.",
          taxonRankName: "Species",
          taxonId: {
            value: "53484",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Scolymia cubensis",
          taxonRankName: "Species",
          taxonId: {
            value: "53486",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Scolymia lacera",
          taxonRankName: "Species",
          taxonId: {
            value: "53485",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Scolymia wellsii",
          taxonRankName: "Species",
          taxonId: {
            value: "53487",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Solenastrea hyades",
          taxonRankName: "Species",
          taxonId: {
            value: "53252",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Stephanocoenia intersepta",
          taxonRankName: "Species",
          taxonId: {
            value: "52844",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Siderastrea radians",
          taxonRankName: "Species",
          taxonId: {
            value: "53091",
            provider: "https://www.itis.gov",
          },
        },
        {
          taxonRankValue: "Siderastrea siderea",
          taxonRankName: "Species",
          taxonId: {
            value: "53090",
            provider: "https://www.itis.gov",
          },
        },
      ],
    },
    {
      label: "Symbionts",
      placeholder: "Select one or more symbionts",
      taxa: [
        {
          taxonRankValue: "Breviolum aenigmaticum",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Breviolum antillogorgium",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Breviolum dendrogyrum",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Breviolum endomadracis",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Breviolum faviinorum",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Breviolum meandrinium",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Breviolum minutum",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Breviolum pseudominutum",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Breviolum psygmophilum",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Cladocopium goreaui",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Cladocopium infistulum",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Cladocopium latusorum",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Cladocopium pacificum",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Cladocopium thermophilum",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Durusdinium glynnii",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Durusdinium boreum",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Durusdinium eurythalpos",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Durusdinium trenchii",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Effrenium voratum",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Freudenthalidium endolithicum",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Freudenthalidium heronense",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Fugacium kawagutii",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Gerakladium endoclionum",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Gerakladium spongiolum",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Halluxium pauxillum",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Miliolidium leei",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Philozoon actiniarum",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Philozoon adriaticum",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Philozoon anthopleurum",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Philozoon balanophyllum",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Philozoon colossum",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Philozoon geddesianum",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Philozoon medusarum",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Philozoon paranemonium",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Symbiodinium microadriaticum",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Symbiodinium natans",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Symbiodinium necroappetens",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Symbiodinium pilosum",
          taxonRankName: "Species",
        },
        {
          taxonRankValue: "Symbiodinium tridacnidorum",
          taxonRankName: "Species",
        },
      ],
    },
  ],
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
