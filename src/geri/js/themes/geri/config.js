MetacatUI.AppConfig = Object.assign({
    root: "/",
    theme: "geri",
    title: "Global Ecosystem Research Infrastructure",
    repositoryName: "GERI",
    emailContact: "support@dataone.org",
    repositoryURL: "https://geri.dataone.org",
    baseUrl: "https://geri.dataone.org",
    nodeId: "urn:node:GERI",
    dataoneHostedRepos: ["urn:node:GERI"],
    description: "The GERI repository provides harmonized global ecological drought data from key ecosystem research infrastructures, enabling seamless and federated access for cross-regional global-scale analysis, research, and decision-making.",

    /* API Keys */
    mapKey: "AIzaSyDbM1ekMmoaipRzhuJGCMrAjQuIoQnxARs",
    googleAnalyticsKey: "G-F116GPEST0",

    /* Map */
    useDeprecatedDataCatalogView: false,
    enableCesium: true,
    cesiumToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlM2MzMGNkOS03N2Q5LTQ2ZTAtYjc5OS0yN2Q3ZjZhMDVhZDMiLCJpZCI6NjkzOTcsImlhdCI6MTc0NDkyOTMwN30.4qQO4HjhqZuCEuB1KunO_MZgCjEhOaHuiQSbFkWei4E",
    catalogSearchMapOptions: {
        "zoomPresets": [],
        "globeBaseColor": "#110066",
        "showToolbar": true,
        "toolbarOpen": false,
        "showScaleBar": true,
        "showFeatureInfo": true,
        "showViewfinder": true,
        "showZoomPresets": false,
        "showShareUrl": true,
        "showDownloadPanel": true,
        "homePosition": {
          "longitude": 18.47,
          "latitude": -2.2,
          "height": 10000000,
          "heading": 0,
          "pitch": -90,
          "roll": 0
        },
        "layerCategories": [
          {
            "label": "Base Layers",
            "icon": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d='M160 32c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160zM396 138.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320H328 280 200c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C360.5 132 368 128 376 128s15.5 4 20 10.7zM192 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120z'/></svg>",
            "layers": [
              {
                  "label": "Monitoring Sites",
                  "type": "GeoJsonDataSource",
                  "visible": true,
                  "layerId": "sites",
                  "description": "Contains a list of field sites monitored by the GERI network.",
                  "moreInfoLink": "https://geri-globalecosystemri.org/about/",
                  "downloadLink": "https://geri.dataone.org/metacat/d1/mn/v2/object/urn:uuid:ea7430d2-534e-4310-a8b3-c0326bcd04d2",
                  "attribution": "Global Ecosystem Research Infrastructure (GERI) Monitoring Sites",
                  "icon": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='#fff' d='M12 0a12 12 0 1 1 0 24 12 12 0 0 1 0-24Zm6.3 8.3c-.5 0-1 0-1.5.3-.3 0-.6.3-.9.6a2 2 0 0 0-.6 1c-.3.4-.4 1-.4 1.8 0 1 .3 2 1 2.6.6.6 1.4 1 2.5 1 1 0 1.8-.4 2.4-1 .6-.7 1-1.5 1-2.7a4 4 0 0 0-1-2.7c-.6-.6-1.4-1-2.5-1ZM4 8.5H2.5v7h5v-1.3H3.8V8.5Zm9.9-.1H8.5v7H14v-1.2h-4v-1.9h3.6v-1.2H10V9.6h3.8V8.4Zm4.6 1c.5 0 1 .3 1.4.7.3.4.5 1 .5 1.8s-.2 1.4-.6 1.8c-.3.4-.8.6-1.3.6-.6 0-1-.2-1.5-.6-.3-.4-.5-1-.5-1.8s.2-1.4.5-1.8a2 2 0 0 1 1.5-.6Z'/></svg>",
                  "notification": {
                      "style": "blue"
                  },
                  "opacity": 0.75,
                  "colorPalette": {
                      "paletteType": "continuous",
                      "property": "name",
                      "colors": [
                          {
                              "color": "#70B24E",
                          }
                      ]
                  },
                  "featureTemplate": {
                      "template": "story",
                      "label": "name",
                  },
                  "cesiumOptions": {
                      "data": "https://geri.dataone.org/metacat/d1/mn/v2/object/urn:uuid:ea7430d2-534e-4310-a8b3-c0326bcd04d2"
                  }
              },
              {
                "label": "Dataset counts",
                "layerId": "geohashes",
                "type": "CesiumGeohash",
                "visible": false,
                "colorPalette": {
                  "paletteType": "continuous",
                  "property": "count",
                  "colors": [
                    {
                      "value": 0,
                      "color": "#FFFFFF00",
                    },
                    {
                      "value": 1,
                      "color": "#0F3049",
                    },
                    {
                      "value": "max",
                      "color": "#70B24E",
                    },
                  ],
                },
              },
              {
                "label": "Open Topographic Map",
                "layerId": "otm",
                "type": "OpenStreetMapImageryProvider",
                "visible": false,
                "description": "OpenTopoMap is a free topographic map generated from OpenStreetMap and SRTM elevation data. The map style is based on the official maps and relies on good readability through high contrast and balanced signatures.",
                "attribution": "Stefan Erhardt",
                "moreInfoLink": "https://opentopomap.org/credits",
                "cesiumOptions": {
                  "url": "https://a.tile.opentopomap.org/"
                },
                "opacity": 0.4,
                "saturation": 0.1
              },
              {
                "label": "Open Street Maps",
                "layerId": "osm",
                "type": "OpenStreetMapImageryProvider",
                "visible": false,
                "description": "OpenStreetMap is built by a community of mappers that contribute and maintain data about roads, trails, cafés, railway stations, and much more, all over the world.",
                "attribution": "OpenStreetMap's community is diverse, passionate, and growing every day. Our contributors include enthusiast mappers, GIS professionals, engineers running the OSM servers, humanitarians mapping disaster-affected areas, and many more.",
                "moreInfoLink": "https://www.openstreetmap.org/about",
                "opacity": 0.6,
                "saturation": 0.1
              },
              {
                "label": "Satellite imagery",
                "layerId": "sat",
                "icon": "urn:uuid:ff153eab-490b-46a4-b11e-47e0592735f6",
                "type": "IonImageryProvider",
                "description": "Global satellite imagery down to 15 cm resolution in urban areas",
                "attribution": "Data provided by Bing Maps © 2021 Microsoft Corporation",
                "moreInfoLink": "https://www.microsoft.com/maps",
                "cesiumOptions": {
                  "ionAssetId": "2"
                }
              }
            ]
          }
        ],
        "terrains": [
          {
            "label": "Cesium World Terrain",
            "type": "CesiumTerrainProvider",
            "cesiumOptions": {
              "ionAssetId": "1",
              "requestVertexNormals": true
            }
          },
          {
            "label": "Cesium World Bathymetry",
            "type": "CesiumTerrainProvider",
            "cesiumOptions": {
              "ionAssetId": "2426648",
              "requestVertexNormals": true
            }
          }
        ]
    },


    /* Filters */

        defaultFilterGroups: [
      {
        label: "",
        filters: [
          {
            fields: ["attribute"],
            label: "Data attribute",
            placeholder: "density, length, etc.",
            icon: "table",
            description: "Measurement type, e.g. density, temperature, species",
          },
          {
            fields: ["sem_annotation"],
            label: "Annotation",
            placeholder: "Search for class...",
            icon: "tag",
            description: "Semantic annotations",
          },
          {
            filterType: "ToggleFilter",
            fields: ["documents"],
            label: "Contains Data Files",
            placeholder: "Only results with data",
            trueLabel: "Required",
            falseLabel: null,
            trueValue: "*",
            matchSubstring: false,
            icon: "table",
            description:
              "Checking this option will only return packages that include data files. Leaving this unchecked may return packages that only include metadata.",
          },
          {
            fields: ["author",
                      "authorGivenNameSort",
                      "authorSurNameSort",
                      "originText",
                      "authorLastName",
                      "contactOrganization",
                      "contactOrganizationText",
                      "investigator",
                      "investigatorText",
                      "originator",
                      "originatorText",
                      "submitter"],
            label: "People and organizations",
            placeholder: "Name",
            icon: "group",
            description: "The name of creators, contacts, investigators, or originators of a dataset",
          },
          {
            filterType: "DateFilter",
            fields: ["datePublished", "dateUploaded"],
            label: "Publish year",
            rangeMin: 1924,
            icon: "calendar",
            description:
              "Only show results that were published within the year range",
          },
          {
            filterType: "DateFilter",
            fields: ["beginDate"],
            label: "Year of data coverage",
            rangeMin: 1924,
            icon: "calendar",
            description:
              "Only show results with data collected within the year range",
          },
          {
            fields: ["identifier", "documents", "resourceMap", "seriesId"],
            label: "Identifier",
            placeholder: "DOI or ID",
            icon: "bullseye",
            description:
              "Find datasets if you have all or part of its DOI or ID",
            operator: "OR",
            fieldsOperator: "OR",
          },
          {
            fields: ["siteText"],
            label: "Location",
            placeholder: "Geographic region",
            icon: "globe",
            description:
              "The geographic region or study site, as described by the submitter",
          },
        ],
      },
    ],


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
            subject: "CN=geri-curators,DC=dataone,DC=org",
            read: true,
            write: true,
            changePermission: true
        }
    ],
    inheritAccessPolicy: true,
    hiddenSubjectsInAccessPolicy: ["CN=DataONE-Support,DC=dataone,DC=org","CN=geri-curators,DC=dataone,DC=org"],
    enablePublishDOI: true,
    enablePublishDOIForSubjects: ["CN=DataONE-Support,DC=dataone,DC=org", "CN=geri-curators,DC=dataone,DC=org"],
    allowAccessPolicyChangesDatasets: true,
    allowAccessPolicyChangesDatasetsForSubjects: ["CN=DataONE-Support,DC=dataone,DC=org", "CN=geri-curators,DC=dataone,DC=org"],
    showDatasetPublicToggle: true,
    showDatasetPublicToggleForSubjects: ["CN=DataONE-Support,DC=dataone,DC=org", "CN=geri-curators,DC=dataone,DC=org"],
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
