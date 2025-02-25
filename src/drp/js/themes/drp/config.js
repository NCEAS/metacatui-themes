MetacatUI.AppConfig = Object.assign({
  root: "/",
  theme: "drp",
  baseUrl: "https://drp.dataone.org",
  nodeId: "urn:node:DRP",
  dataoneHostedRepos: ["urn:node:DRP"],
  title: "Defense Resiliency Platform Against Extreme Cold Weather",
  repositoryName: "Defense Resiliency Platform Against Extreme Cold Weather",
  emailContact: "timothy.pasch@und.edu",
  description: "The research and development needed for the dominance of the U.S. Army in extreme cold weather conditions could significantly benefit from an integrated approach that combines engineering with geospatial analysis and visualization/data sciences in a unified platform. At present, the approach is more single discipline-centric, rather than multidisciplinary, despite the interconnections between the different disciplines.<br><br>For instance, the impacts of freezing and freezing-thawing cycles on the performance of earthen and man-made construction materials are considered independent from the ability of these materials to support the needs of U.S. Army and other infrastructures. Furthermore, while significant geoscientific research is being conducted on permafrost changes in the Arctic, these are frequently not intersecting with and informing work in the applied engineering sciences, and if so: this work in taking place in localized test sites, such as the CRREL permafrost tunnel near Fairbanks, AK.<br><br>Additionally, while numerous online websites and data repositories host and display multidisciplinary data online, there is a significant need for a truly integrated, automated platform that enables advanced data analysis, visualization, predictive analytics and modeling of diverse datasets. Thus, while we currently achieve stepwise improvements in each of the critical disciplines, we lack a unified platform that considers the entire impact of extreme cold weather on the performance of U.S. Army and its supporting infrastructure.<br><br>We also do not yet fully understand how to optimize the performance of each of these critical components to maximize the benefits of the entire system to serve the U.S. Army. Therefore, there is a critical need to identify the interdependencies between disparate research disciplines required to develop an integrated framework in order to maximize the performance of the U.S. forces in extreme cold weather. Without this knowledge, the performance of the U.S. Army in extreme cold weather will continue to be constrained by limitations imposed by individual disciplines.<br><br>The Defense Resiliency Platform (DRP) is a research-based multidisciplinary cyberinfrastructure platform enabling data integration and formatting, visualization, predictive analytics, and automated mapping of Arctic terrain data with the goal of maximizing the performance of the U.S. Army/CRREL in extreme cold weather environments.",
  trustedContentSources: ["https://metamattj.shinyapps.io", "https://*youtube.com"],

  //Temporary Message
  temporaryMessage: "The DRP will be unavailable between 6 a.m. and 10 a.m. PT on Friday, December 27 due to upgrades. We apologize for the inconvenience.",
  temporaryMessageStartTime: null,
  temporaryMessageEndTime: new Date("2024-12-27T23:59:00"),
  temporaryMessageClasses: "warning",
  temporaryMessageContainer: "#Navbar",

  /* Map */
  useDeprecatedDataCatalogView: false,
  enableCesium: true,
  cesiumToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiMTE3MTBiYy1iODY1LTQxNjMtODUzNS0yMzM1NGE3M2JhMWIiLCJpZCI6NjkzOTcsImlhdCI6MTY3ODkwMDg5M30.xzIlG_tPIzB9FmYPzPTzOJ49R2J4yIG2y0ittFqdbMc",
  catalogSearchMapOptions: {
    "globeBaseColor": "#000000",
    "showToolbar": true,
    "toolbarOpen": false,
    "showScaleBar": true,
    "showFeatureInfo": true,
    "showViewfinder": true,
    "showZoomPresets": true,
    "showShareUrl": true,
    "homePosition": {
      "longitude": -151.0,
      "latitude": 63.5,
      "height": 3050000,
      "heading": 1,
      "pitch": -90,
      "roll": 0
    },
    "terrains": [
      {
        "label": "ArcticDEM",
        "type": "CesiumTerrainProvider",
        "cesiumOptions": {
          "ionAssetId": "3956",
          "verticalExaggeration": 2,
          "requestVertexNormals": true
        },
        "attribution": "University of Minnesota Polar Geospatial Center",
        "moreInfoLink": "https://www.pgc.umn.edu/data/arcticdem/"
      }
    ],
    "layerCategories": [
      {
        "label": "LiDAR",
        "icon": "<svg height='800px' width='800px' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' class='iconify iconify--gis' preserveAspectRatio='xMidYMid meet'><path d='M100 70l-4.242-1.763h-.001L63.18 54.69l.002-.001l-3.368-1.4l-.003.001L49.497 49L0 69.999L50.716 100zm-7.232.002l-6.876 4.057l-9.086-4.058l6.936-3.836zm-10.123 5.973l-7.484 4.418L66 75.975l7.532-4.165zM71.62 82.483l-8.177 4.825l-9.21-4.826l8.21-4.538zm-12.054 7.114l-8.972 5.295l-9.225-5.296l8.979-4.965zm20.249-25.1l-6.958 3.741l-8.377-3.742l6.995-3.544zM69.576 70l-7.548 4.058L53.613 70l7.572-3.834zm-11.113 5.974l-8.216 4.417l-8.427-4.418l8.222-4.165zM46.36 82.482l-8.977 4.826l-8.409-4.826l8.96-4.54zm21.48-23.074l-7.007 3.46l-7.747-3.46l7.027-3.284zm-10.306 5.088l-7.577 3.74l-7.758-3.74l7.583-3.544zM46.384 70l-8.22 4.058L30.42 70l8.208-3.836zm-12.102 5.974l-8.948 4.418l-7.695-4.418l8.911-4.165zm22.46-21.284l-7.033 3.21l-7.185-3.21l7.035-3.051zm-10.338 4.718l-7.58 3.46l-7.175-3.462l7.571-3.283zm-11.15 5.088l-8.197 3.74l-7.138-3.742l8.17-3.543zM23.192 70l-8.893 4.057l-7.07-4.058l8.843-3.835z' fill-rule='evenodd' fill='#000000'></path><path d='M18.492 24.736a1.5 1.5 0 0 0-.676.186a1.5 1.5 0 0 0-.586 2.039l20.282 36.633a1.5 1.5 0 0 0 2.037.586a1.5 1.5 0 0 0 .586-2.04l-20.28-36.632a1.5 1.5 0 0 0-1.363-.772z' fill-rule='evenodd' fill='#000000'></path><path d='M76.266 25.79a1.5 1.5 0 0 0-1.371.901L59.457 62.27a1.5 1.5 0 0 0 .78 1.974a1.5 1.5 0 0 0 1.972-.78l15.437-35.58a1.5 1.5 0 0 0-.779-1.972a1.5 1.5 0 0 0-.601-.123z' fill-rule='evenodd' fill='#000000'></path><path d='M31.246 13.873c-.096 0-.192.006-.287.02L5.754 17.338a2 2 0 0 0-1.674 1.521L.053 35.885a2 2 0 0 0 2.218 2.441l33.36-4.56a2 2 0 0 0 1.664-2.485l-4.129-15.91a2 2 0 0 0-1.92-1.498zm-1.506 4.223l3.117 12.011c-5.224-5.781-13.945-8.619-25.2-8.992z' fill='#000000'></path><path d='M60.2 14.441a2 2 0 0 0-1.962 2.4l3.826 18.655a2 2 0 0 0 1.721 1.584l33.977 4.092c1.698.204 2.852-1.679 1.9-3.1L86.406 18.285a2 2 0 0 0-1.422-.873l-24.548-2.957a2.005 2.005 0 0 0-.237-.014zm2.515 4.317l20.88 2.515c-7.47 1.148-13.759 4.538-17.902 12.006z' fill='#000000'></path></svg>",
        "layers": [
          {
            "label": "Site1 LiDAR",
            "type": "Cesium3DTileset",
            "layerId": "Site1",
            "description": "Data are available for download at: <a href='https://arcticdata.io/data/10.57902/D74W2T/' target='_blank'>https://arcticdata.io/data/10.57902/D74W2T/</a>",
            "visible": false,
            "moreInfoLink": "/view/urn%3Auuid%3A028790ad-4ebf-4870-85ac-e72ae9b8db26",
            "downloadLink": "https://arcticdata.io/data/10.57902/D74W2T/",
            "attribution": "Pasch, Chukwuemeka, and Krueger (2023)",
            "cesiumOptions": {
              "url": "https://arcticdata.io/data/tiles/10.57902/D74W2T/Site1/tileset.json",
              "foveatedConeSize": 1,
              "foveatedScreenSpaceError": true,
              "foveatedTimeDelay": 0.0,
              "dynamicScreenSpaceError": true
            }
          },
          {
            "label": "Site2 LiDAR",
            "type": "Cesium3DTileset",
            "layerId": "Site2",
            "description": "Data are available for download at: <a href='https://arcticdata.io/data/10.57902/D71599/' target='_blank'>https://arcticdata.io/data/10.57902/D71599/</a>",
            "visible": false,
            "moreInfoLink": "/view/urn%3Auuid%3Ac7a9df72-9d6b-41ac-a9fd-4f9549cc96f0",
            "downloadLink": "https://arcticdata.io/data/10.57902/D71599/",
            "attribution": "Pasch, Chukwuemeka, and Krueger (2023)",
            "cesiumOptions": {
              "url": "https://arcticdata.io/data/tiles/10.57902/D71599/Site2/tileset.json",
              "foveatedConeSize": 1,
              "foveatedScreenSpaceError": true,
              "foveatedTimeDelay": 0.0,
              "dynamicScreenSpaceError": true
            }
          },
          {
            "label": "Site3 LiDAR",
            "type": "Cesium3DTileset",
            "layerId": "Site3",
            "description": "Data are available for download at: <a href='https://arcticdata.io/data/10.57902/D7WC7C/' target='_blank'>https://arcticdata.io/data/10.57902/D7WC7C/</a>",
            "visible": false,
            "moreInfoLink": "/view/urn%3Auuid%3A35a11c8f-e02a-4e91-937f-2bb5cf2ad129",
            "downloadLink": "https://arcticdata.io/data/10.57902/D7WC7C/",
            "attribution": "Pasch, Chukwuemeka, and Krueger (2023)",
            "cesiumOptions": {
              "url": "https://arcticdata.io/data/tiles/10.57902/D7WC7C/Site3/tileset.json",
              "foveatedConeSize": 1,
              "foveatedScreenSpaceError": true,
              "foveatedTimeDelay": 0.0,
              "dynamicScreenSpaceError": true
            }
          },
          {
            "label": "Site4 LiDAR",
            "type": "Cesium3DTileset",
            "layerId": "Site4",
            "description": "Data are available for download at: <a href='https://arcticdata.io/data/10.57902/D7RP43/' target='_blank'>https://arcticdata.io/data/10.57902/D7RP43/</a>",
            "visible": false,
            "moreInfoLink": "/view/urn%3Auuid%3A768e037e-5e1f-42ad-8840-3e72c09b379b",
            "downloadLink": "https://arcticdata.io/data/10.57902/D7RP43/",
            "attribution": "Pasch, Chukwuemeka, and Krueger (2023)",
            "cesiumOptions": {
              "url": "https://arcticdata.io/data/tiles/10.57902/D7RP43/Site4/tileset.json",
              "foveatedConeSize": 1,
              "foveatedScreenSpaceError": true,
              "foveatedTimeDelay": 0.0,
              "dynamicScreenSpaceError": true
            }
          },
          {
            "label": "Site5 LiDAR",
            "type": "Cesium3DTileset",
            "layerId": "Site5",
            "description": "Data are available for download at: <a href='https://arcticdata.io/data/10.57902/D7MW25/' target='_blank'>https://arcticdata.io/data/10.57902/D7MW25/</a>",
            "visible": false,
            "moreInfoLink": "/view/urn%3Auuid%3Aa74e1cb3-5209-4e46-8188-56c0d75e01ff",
            "downloadLink": "https://arcticdata.io/data/10.57902/D7MW25/",
            "attribution": "Pasch, Chukwuemeka, and Krueger (2023)",
            "cesiumOptions": {
              "url": "https://arcticdata.io/data/tiles/10.57902/D7MW25/Site5/tileset.json",
              "foveatedConeSize": 1,
              "foveatedScreenSpaceError": true,
              "foveatedTimeDelay": 0.0,
              "dynamicScreenSpaceError": true
            }
          },
          {
            "label": "Site6 LiDAR",
            "type": "Cesium3DTileset",
            "layerId": "Site6",
            "description": "Data are available for download at: <a href='https://arcticdata.io/data/10.57902/D7H59N/' target='_blank'>https://arcticdata.io/data/10.57902/D7H59N/</a>",
            "visible": false,
            "moreInfoLink": "/view/urn%3Auuid%3A12d2bc61-ca26-4132-91cb-374d8ddd2021",
            "downloadLink": "https://arcticdata.io/data/10.57902/D7H59N/",
            "attribution": "Pasch, Chukwuemeka, and Krueger (2023)",
            "cesiumOptions": {
              "url": "https://arcticdata.io/data/tiles/10.57902/D7H59N/Site6/tileset.json",
              "foveatedConeSize": 1,
              "foveatedScreenSpaceError": true,
              "foveatedTimeDelay": 0.0,
              "dynamicScreenSpaceError": true
            }
          },
          {
            "label": "Site7 LiDAR",
            "type": "Cesium3DTileset",
            "layerId": "Site7",
            "description": "Data are available for download at: <a href='https://arcticdata.io/data/10.57902/D7CC7Q/' target='_blank'>https://arcticdata.io/data/10.57902/D7CC7Q/</a>",
            "visible": false,
            "moreInfoLink": "/view/urn%3Auuid%3A265af36f-6ebc-4bae-b5b9-0f72182caca0",
            "downloadLink": "https://arcticdata.io/data/10.57902/D7CC7Q/",
            "attribution": "Pasch, Chukwuemeka, and Krueger (2023)",
            "cesiumOptions": {
              "url": "https://arcticdata.io/data/tiles/10.57902/D7CC7Q/Site7/tileset.json",
              "foveatedConeSize": 1,
              "foveatedScreenSpaceError": true,
              "foveatedTimeDelay": 0.0,
              "dynamicScreenSpaceError": true
            }
          },
          {
            "label": "Site8 LiDAR",
            "type": "Cesium3DTileset",
            "layerId": "Site8",
            "description": "Data are available for download at: <a href='https://arcticdata.io/data/10.57902/D77P4F/' target='_blank'>https://arcticdata.io/data/10.57902/D77P4F/</a>",
            "visible": false,
            "moreInfoLink": "/view/urn%3Auuid%3Abce333af-2f6c-46ba-933b-cf3ba77f14fa",
            "downloadLink": "https://arcticdata.io/data/10.57902/D77P4F/",
            "attribution": "Pasch, Chukwuemeka, and Krueger (2023)",
            "cesiumOptions": {
              "url": "https://arcticdata.io/data/tiles/10.57902/D77P4F/Site8/tileset.json",
              "foveatedConeSize": 1,
              "foveatedScreenSpaceError": true,
              "foveatedTimeDelay": 0.0,
              "dynamicScreenSpaceError": true
            }
          },
          {
            "label": "SiteV_1 LiDAR",
            "type": "Cesium3DTileset",
            "layerId": "SiteV_1",
            "description": "Data are available for download at: <a href='https://arcticdata.io/data/10.57902/D73W2H/' target='_blank'>https://arcticdata.io/data/10.57902/D73W2H/</a>",
            "visible": false,
            "moreInfoLink": "/view/urn%3Auuid%3A9d62d50c-e8dd-4af8-9319-a2216b27bf5a",
            "downloadLink": "https://arcticdata.io/data/10.57902/D73W2H/",
            "attribution": "Pasch, Chukwuemeka, and Krueger (2023)",
            "cesiumOptions": {
              "url": "https://arcticdata.io/data/tiles/10.57902/D73W2H/SiteV_1/tileset.json",
              "foveatedConeSize": 1,
              "foveatedScreenSpaceError": true,
              "foveatedTimeDelay": 0.0,
              "dynamicScreenSpaceError": true
            }
          },
          {
            "label": "SiteV_2 LiDAR",
            "type": "Cesium3DTileset",
            "layerId": "SiteV_2",
            "description": "Data are available for download at: <a href='https://arcticdata.io/data/10.57902/D70590/' target='_blank'>https://arcticdata.io/data/10.57902/D70590/</a>",
            "visible": false,
            "moreInfoLink": "/view/urn%3Auuid%3A48ba68da-1e82-409c-bde3-8cf99e1291bc",
            "downloadLink": "https://arcticdata.io/data/10.57902/D70590/",
            "attribution": "Pasch, Chukwuemeka, and Krueger (2023)",
            "cesiumOptions": {
              "url": "https://arcticdata.io/data/tiles/10.57902/D70590/SiteV_2/tileset.json",
              "foveatedConeSize": 1,
              "foveatedScreenSpaceError": true,
              "foveatedTimeDelay": 0.0,
              "dynamicScreenSpaceError": true
            }
          }
        ]
      },
      {
        "label": "Live Layers",
        "icon": "<svg height='800px' width='800px' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 24 24' xml:space='preserve'><path d='M6.34277267,4.93867691 C6.73329697,5.3292012 6.73329697,5.96236618 6.34277267,6.35289047 C3.21757171,9.47809143 3.21757171,14.5450433 6.34277267,17.6702443 C6.73329697,18.0607686 6.73329697,18.6939336 6.34277267,19.0844579 C5.95224838,19.4749821 5.3190834,19.4749821 4.92855911,19.0844579 C1.02230957,15.1782083 1.02230957,8.84492646 4.92855911,4.93867691 C5.3190834,4.54815262 5.95224838,4.54815262 6.34277267,4.93867691 Z M19.0743401,4.93867691 C22.9805896,8.84492646 22.9805896,15.1782083 19.0743401,19.0844579 C18.6838158,19.4749821 18.0506508,19.4749821 17.6601265,19.0844579 C17.2696022,18.6939336 17.2696022,18.0607686 17.6601265,17.6702443 C20.7853275,14.5450433 20.7853275,9.47809143 17.6601265,6.35289047 C17.2696022,5.96236618 17.2696022,5.3292012 17.6601265,4.93867691 C18.0506508,4.54815262 18.6838158,4.54815262 19.0743401,4.93867691 Z M9.3094225,7.81205295 C9.69994679,8.20257725 9.69994679,8.83574222 9.3094225,9.22626652 C7.77845993,10.7572291 7.77845993,13.2394099 9.3094225,14.7703724 C9.69994679,15.1608967 9.69994679,15.7940617 9.3094225,16.184586 C8.91889821,16.5751103 8.28573323,16.5751103 7.89520894,16.184586 C5.58319778,13.8725748 5.58319778,10.1240641 7.89520894,7.81205295 C8.28573323,7.42152866 8.91889821,7.42152866 9.3094225,7.81205295 Z M16.267742,7.81205295 C18.5797531,10.1240641 18.5797531,13.8725748 16.267742,16.184586 C15.8772177,16.5751103 15.2440527,16.5751103 14.8535284,16.184586 C14.4630041,15.7940617 14.4630041,15.1608967 14.8535284,14.7703724 C16.384491,13.2394099 16.384491,10.7572291 14.8535284,9.22626652 C14.4630041,8.83574222 14.4630041,8.20257725 14.8535284,7.81205295 C15.2440527,7.42152866 15.8772177,7.42152866 16.267742,7.81205295 Z M12.0814755,10.5814755 C12.9099026,10.5814755 13.5814755,11.2530483 13.5814755,12.0814755 C13.5814755,12.9099026 12.9099026,13.5814755 12.0814755,13.5814755 C11.2530483,13.5814755 10.5814755,12.9099026 10.5814755,12.0814755 C10.5814755,11.2530483 11.2530483,10.5814755 12.0814755,10.5814755 Z'/></path></svg>",
        "layers": [
          {
            "type": "WebMapServiceImageryProvider",
            "label": "Radar Base Reflectivity",
            "layerId": "bref",
            "description": "Quality Controlled 1km x 1km CONUS Radar Base Reflectivity. This data is provided by the Multi-Radar-Multi-Sensor (MRMS) algorithm.",
            "visible": false,
            "opacity": 0.6,
            "cesiumOptions": {
              "url": "https://mapservices.weather.noaa.gov:443/eventdriven/services/radar/radar_base_reflectivity_time/ImageServer/WMSServer",
              "rectangle": [-176.0, 50.0000004917383, -126.000001117587, 72.0],
              "layers": 0,
              "parameters": {
                "transparent": "true",
                "format": "image/png"
              }
            },
            "attribution": "National Weather Service",
            "moreInfoLink": "https://radar.weather.gov/region/alaska/standard"
          },
          {
            "type": "WebMapServiceImageryProvider",
            "label": "Satellite IR",
            "layerId": "sir",
            "description": "10.3 µm - \"Clean\" Longwave IR Window Band - 2 km resolution - GOES Band 13 at 10.3 µm is an infrared window, meaning it is not strongly affected by atmospheric water vapor. This channel is useful for detecting clouds all times of day and night and is particularly useful in retrievals of cloud top height.",
            "visible": false,
            "opacity": 0.4,
            "cesiumOptions": {
              "url": "https://mesonet.agron.iastate.edu/cgi-bin/wms/goes_west.cgi?",
              "layers": "alaska_ch13",
              "rectangle": [-176.0, 50.0000004917383, -126.000001117587, 72.0],
              "parameters": {
                "transparent": "true",
                "format": "image/png"
              }
            },
            "attribution": "NOAA Satellite Information Service - GOES West Infrared Alaska via Iowa Environmental Mesonet",
            "moreInfoLink": "https://www.star.nesdis.noaa.gov/GOES/sector_band.php?sat=G18&sector=ak&band=13&length=12&dim=1"
          },
          {
            "type": "WebMapServiceImageryProvider",
            "label": "NWS Watches/Warnings/Advisories",
            "layerId": "wwa",
            "description": "A <b>watch</b> is used when the risk of a hazardous weather or hydrologic event has increased significantly, but its occurrence, location, and/or timing is still uncertain. It is intended to provide enough lead time so that those who need to set their plans in motion can do so.<br><br>A <b>warning</b> is issued when a hazardous weather or hydrologic event is occurring, is imminent, or has a very high probability of occurring. A warning is used for conditions posing a threat to life or property.<br><br>In an <b>advisory</b>, the expected weather condition has a pretty good chance of occurring, even a likely chance of occurring, but typically an advisory is used for less severe type of weather conditions. A Wind Advisory might be issued or a Freezing Rain Advisory issued instead of a High Wind Warning or an ice Storm Warning.",
            "visible": false,
            "opacity": 0.4,
            "cesiumOptions": {
              "url": "https://mapservices.weather.noaa.gov/eventdriven/services/WWA/watch_warn_adv/MapServer/WMSServer",
              "rectangle": [-179.9, 50.0000004917383, -126.000001117587, 72.0],
              "layers": 0,
              "parameters": {
                "transparent": "true",
                "format": "image/png"
              }
            },
            "colorPalette": {
              "paletteType": "categorical",
              "property": "WWA",
              "label": "NWS Watches and Warnings",
              "colors": [
                { "value": "0 - Warning", "color": "#e80000" },
                { "value": "1 - Advisory", "color": "#ffab00" },
                { "value": "2 - Watch", "color": "#e8ea27" },
                { "value": "3 - Special Wx Stmt", "color": "#ffe9c2" },
                { "value": "4 - Storm Warning", "color": "#9400d3" },
                { "value": "5 - Small Craft Advisory", "color": "#d8bfd8" }
              ]
            },
            "attribution": "National Weather Service",
            "moreInfoLink": "https://www.weather.gov/"
          },
          {
            "type": "WebMapServiceImageryProvider",
            "label": "Wind Speed",
            "layerId": "wind",
            "description": "This nowCOAST time-enabled map service provides maps depicting the forecast of wind speed. Generated by the weather forecasters at regional NWS Weather Forecast Offices (WFOs) and the National Centers for Environmental Prediction (NCEP). The NDFD is a seamless composite or mosaic of gridded forecasts from individual NWS Weather Forecast Offices (WFOs) from around the U.S. as well as the NCEP Ocean Prediction Center and National Hurricane Center/TAFB. The time resolution of forecast projections varies by variable (element) based on user needs, forecast skill, and forecaster workload. Each WFO prepares gridded NDFD forecasts for their specific geographic area of responsibility. When these locally generated forecasts are merged into a national mosaic, occasionally areas of discontinuity will be evident. Staff at NWS forecast offices attempt to resolve discontinuities along the boundaries of the forecasts by coordinating with forecasters at surrounding WFOs and using workstation forecast tools that identify and resolve some of these differences. The NWS is making progress in this area, and recognizes that this is a significant issue in which improvements are still needed. The NDFD was developed by NWS Meteorological Development Laboratory. The spatial resolution is about 2.5 km (1.6 mi) for CONUS, HI, and Guam, 1.25 km (0.8) for PR and 3km (1.9 mi) for Alaska. The latest wind speed and wind velocity forecasts are available hourly out to +36 hours from 00:00 UTC on Day 1 (current day), at 3-hour intervals out to +72 hours, and at 6-hour intervals from +72 to +168 hours (7 days). The wind gust forecasts are available hourly out to +36 hours from 0000 UTC on Day 1 (current day) and at 3-hour intervals out to +72 hours (3 days). Day 1-3 forecasts are updated hourly from 00Z to 23Z and Day 4-7 forecasts are updated at 00, 06, 12, 18, and 22Z. Data Source: NWS National Digital Forecast Database (NDFD).",
            "visible": false,
            "opacity": 0.7,
            "cesiumOptions": {
              "url": "https://nowcoast.noaa.gov/geoserver/forecasts/ndfd_wind/ows?SERVICE=WMS&",
              "layers": "alaska_wind_speed",
              "parameters": {
                "transparent": "true",
                "format": "image/png"
              }
            },
            "attribution": "NWS National Digital Forecast Database (NDFD)",
            "moreInfoLink": "https://nowcoast.noaa.gov/"
          },
          {
            "type": "WebMapServiceImageryProvider",
            "label": "Temperature",
            "layerId": "temp",
            "description": "This nowCOAST time-enabled map service provides maps depicting the forecast of surface air temperature, generated by the weather forecasters at regional NWS Weather Forecast Offices (WFOs) and the National Centers for Environmental Prediction (NCEP). The NDFD is a seamless composite or mosaic of gridded forecasts from individual NWS Weather Forecast Offices (WFOs) from around the U.S. as well as the NCEP Ocean Prediction Center and National Hurricane Center/TAFB. The time resolution of forecast projections varies by variable (element) based on user needs, forecast skill, and forecaster workload. Each WFO prepares gridded NDFD forecasts for their specific geographic area of responsibility. When these locally generated forecasts are merged into a national mosaic, occasionally areas of discontinuity will be evident. Staff at NWS forecast offices attempt to resolve discontinuities along the boundaries of the forecasts by coordinating with forecasters at surrounding WFOs and using workstation forecast tools that identify and resolve some of these differences. The NWS is making progress in this area, and recognizes that this is a significant issue in which improvements are still needed. The NDFD was developed by NWS Meteorological Development Laboratory. The spatial resolution is about 2.5 km (1.6 mi) for CONUS, HI, and Guam, 1.25 km (0.8) for PR and 3km (1.9 mi) for Alaska. The latest maximum and minimum air temperature forecasts are each available every 24 hours out to +168 hours (7 days) from 0000 UTC on Day 1 (current day). The latest apparent and surface air temperature forecasts are available every hour out to +36 hours from forecast issuance time, at 3-hour intervals from +36 to +72 hours, and at 6-hour intervals from +72 to +168 hours (7 days). Day 1-3 forecasts are updated hourly from 00Z to 23Z and Day 4-7 forecasts are updated at 00, 06, 12, 18, and 22Z. Data Source: NWS National Digital Forecast Database (NDFD).",
            "visible": false,
            "opacity": 0.7,
            "cesiumOptions": {
              "url": "https://nowcoast.noaa.gov/geoserver/forecasts/ndfd_temperature/ows?SERVICE=WMS&",
              "layers": "alaska_air_temperature",
              "parameters": {
                "transparent": "true",
                "format": "image/png"
              }
            },
            "attribution": "NWS National Digital Forecast Database (NDFD)",
            "moreInfoLink": "https://nowcoast.noaa.gov/"
          },
          {
            "type": "WebMapServiceImageryProvider",
            "label": "6 hr Snow Forecast",
            "layerId": "snow6h",
            "description": "This nowCOAST time-enabled map service provides maps depicting the forecast of 6-hr snowfall amount. Generated by the weather forecasters at regional NWS Weather Forecast Offices (WFOs) and the National Centers for Environmental Prediction (NCEP). The NDFD is a seamless composite or mosaic of gridded forecasts from individual NWS Weather Forecast Offices (WFOs) from around the U.S. as well as the NCEP Ocean Prediction Center and National Hurricane Center/TAFB. The time resolution of forecast projections varies by variable (element) based on user needs, forecast skill, and forecaster workload. Each WFO prepares gridded NDFD forecasts for their specific geographic area of responsibility. When these locally generated forecasts are merged into a national mosaic, occasionally areas of discontinuity will be evident. Staff at NWS forecast offices attempt to resolve discontinuities along the boundaries of the forecasts by coordinating with forecasters at surrounding WFOs and using workstation forecast tools that identify and resolve some of these differences. The NWS is making progress in this area, and recognizes that this is a significant issue in which improvements are still needed. The NDFD was developed by NWS Meteorological Development Laboratory. The spatial resolution is about 2.5 km (1.6 mi) for CONUS, HI, and Guam, 1.25 km (0.8) for PR and 3km (1.9 mi) for Alaska. The probability of precipitation forecasts are available or each 12-hour period out to +72 hours (3 days) from 0000 UTC on Day 1 (current day). Precipitation forecasts are available for each 6-hour period out to +72 hours (3 days) from 0000 UTC on Day 1 (current day). Snowfall forecasts are available for each 6-hour period out to +48 hours (2 days) from 0000 UTC on Day 1 (current day). Day 1-3 forecasts are updated hourly from 00Z to 23Z and for 12-hr precipitation probability Day 4-7 forecasts are updated at 00, 06, 12, 18, and 22Z. Data Source: NWS National Digital Forecast Database (NDFD).",
            "visible": false,
            "opacity": 0.7,
            "cesiumOptions": {
              "url": "https://nowcoast.noaa.gov/geoserver/forecasts/ndfd_precipitation/ows?SERVICE=WMS&",
              "layers": "alaska_6hr_snow_amount",
              "parameters": {
                "transparent": "true",
                "format": "image/png"
              }
            },
            "attribution": "NWS National Digital Forecast Database (NDFD)",
            "moreInfoLink": "https://nowcoast.noaa.gov/"
          },
          {
            "type": "WebMapServiceImageryProvider",
            "label": "6 hr Precipitation Forecast",
            "layerId": "precip6h",
            "description": "This nowCOAST time-enabled map service provides maps depicting the forecast of 6-hr precipitation amount. Generated by the weather forecasters at regional NWS Weather Forecast Offices (WFOs) and the National Centers for Environmental Prediction (NCEP). The NDFD is a seamless composite or mosaic of gridded forecasts from individual NWS Weather Forecast Offices (WFOs) from around the U.S. as well as the NCEP Ocean Prediction Center and National Hurricane Center/TAFB. The time resolution of forecast projections varies by variable (element) based on user needs, forecast skill, and forecaster workload. Each WFO prepares gridded NDFD forecasts for their specific geographic area of responsibility. When these locally generated forecasts are merged into a national mosaic, occasionally areas of discontinuity will be evident. Staff at NWS forecast offices attempt to resolve discontinuities along the boundaries of the forecasts by coordinating with forecasters at surrounding WFOs and using workstation forecast tools that identify and resolve some of these differences. The NWS is making progress in this area, and recognizes that this is a significant issue in which improvements are still needed. The NDFD was developed by NWS Meteorological Development Laboratory. The spatial resolution is about 2.5 km (1.6 mi) for CONUS, HI, and Guam, 1.25 km (0.8) for PR and 3km (1.9 mi) for Alaska. The probability of precipitation forecasts are available or each 12-hour period out to +72 hours (3 days) from 0000 UTC on Day 1 (current day). Precipitation forecasts are available for each 6-hour period out to +72 hours (3 days) from 0000 UTC on Day 1 (current day). Snowfall forecasts are available for each 6-hour period out to +48 hours (2 days) from 0000 UTC on Day 1 (current day). Day 1-3 forecasts are updated hourly from 00Z to 23Z and for 12-hr precipitation probability Day 4-7 forecasts are updated at 00, 06, 12, 18, and 22Z. Data Source: NWS National Digital Forecast Database (NDFD).",
            "visible": false,
            "opacity": 0.7,
            "cesiumOptions": {
              "url": "https://nowcoast.noaa.gov/geoserver/forecasts/ndfd_precipitation/ows?SERVICE=WMS&",
              "layers": "alaska_6hr_precipitation_amount",
              "parameters": {
                "transparent": "true",
                "format": "image/png"
              }
            },
            "attribution": "NWS National Digital Forecast Database (NDFD)",
            "moreInfoLink": "https://nowcoast.noaa.gov/"
          },
          {
            "type": "WebMapServiceImageryProvider",
            "label": "12 hr Precipitation Probability",
            "layerId": "precip12h",
            "description": "This nowCOAST time-enabled map service provides maps depicting the forecast of 12-hr precipitation probability. Generated by the weather forecasters at regional NWS Weather Forecast Offices (WFOs) and the National Centers for Environmental Prediction (NCEP). The NDFD is a seamless composite or mosaic of gridded forecasts from individual NWS Weather Forecast Offices (WFOs) from around the U.S. as well as the NCEP Ocean Prediction Center and National Hurricane Center/TAFB. The time resolution of forecast projections varies by variable (element) based on user needs, forecast skill, and forecaster workload. Each WFO prepares gridded NDFD forecasts for their specific geographic area of responsibility. When these locally generated forecasts are merged into a national mosaic, occasionally areas of discontinuity will be evident. Staff at NWS forecast offices attempt to resolve discontinuities along the boundaries of the forecasts by coordinating with forecasters at surrounding WFOs and using workstation forecast tools that identify and resolve some of these differences. The NWS is making progress in this area, and recognizes that this is a significant issue in which improvements are still needed. The NDFD was developed by NWS Meteorological Development Laboratory. The spatial resolution is about 2.5 km (1.6 mi) for CONUS, HI, and Guam, 1.25 km (0.8) for PR and 3km (1.9 mi) for Alaska. The probability of precipitation forecasts are available or each 12-hour period out to +72 hours (3 days) from 0000 UTC on Day 1 (current day). Precipitation forecasts are available for each 6-hour period out to +72 hours (3 days) from 0000 UTC on Day 1 (current day). Snowfall forecasts are available for each 6-hour period out to +48 hours (2 days) from 0000 UTC on Day 1 (current day). Day 1-3 forecasts are updated hourly from 00Z to 23Z and for 12-hr precipitation probability Day 4-7 forecasts are updated at 00, 06, 12, 18, and 22Z. Data Source: NWS National Digital Forecast Database (NDFD).",
            "visible": false,
            "opacity": 0.7,
            "cesiumOptions": {
              "url": "https://nowcoast.noaa.gov/geoserver/forecasts/ndfd_precipitation/ows?SERVICE=WMS&",
              "layers": "alaska_12hr_precipitation_probability",
              "parameters": {
                "transparent": "true",
                "format": "image/png"
              }
            },
            "attribution": "NWS National Digital Forecast Database (NDFD)",
            "moreInfoLink": "https://nowcoast.noaa.gov/"
          },
          {
            "type": "WebMapServiceImageryProvider",
            "label": "Active Fire Perimeters",
            "layerId": "af",
            "description": "Wildland fire history data is made up of wildland fire locations (fire occurrence points) and wildland fire perimeter polygons. Alaska Statewide Fire History Perimeters is a time series of areas burned in each calendar year across Alaska. The polygons in this dataset represent perimeters of wildfires that occur naturally (e.g., lightning) or by humans accidentally (e.g., escaped campfire) or maliciously across Alaska. NOTE: Not all recorded wildland fires are associated with a perimeter polygon. The delineations range in quality from hand sketched perimeters drawn on topographic maps to heads-up interpretation of fine scale satellite imagery (e.g., Sentinel-2 imagery, 10 meter resolution). Although this is a comprehensive dataset, it is not complete and is subject to revision. Data are available as ArcGIS Server Map and Feature Services <a href='https://fire.ak.blm.gov/arcgis/rest/services/MapAndFeatureServices' target='_blank'>https://fire.ak.blm.gov/arcgis/rest/services/MapAndFeatureServices</a> or for download from <a href='https://fire.ak.blm.gov/predsvcs/maps.php' target='_blank'>https://fire.ak.blm.gov/predsvcs/maps.php</a>.",
            "visible": false,
            "opacity": 0.7,
            "cesiumOptions": {
              "url": "https://fire.ak.blm.gov/arcgis/services/MapAndFeatureServices/Fires_Perimeters/MapServer/WMSServer",
              "layers": 3,
              "parameters": {
                "transparent": "true",
                "format": "image/png"
              }
            },
            "colorPalette": {
              "colors": [
                { "label": "Active Fires", "value": "0", "color": "#ff0000" }
              ]
            },
            "attribution": "Alaska Wildland Fire Information Map Series, Bureau of Land Management",
            "moreInfoLink": "https://blm-egis.maps.arcgis.com/apps/instant/portfolio/index.html?appid=4841da6a16804c07849c27ea7db2a26b"
          },
          {
            "type": "WebMapServiceImageryProvider",
            "label": "Out Fires (current year)",
            "layerId": "of",
            "description": "Wildland fire history data is made up of wildland fire locations (fire occurrence points) and wildland fire perimeter polygons. Alaska Statewide Fire History Perimeters is a time series of areas burned in each calendar year across Alaska. The polygons in this dataset represent perimeters of wildfires that occur naturally (e.g., lightning) or by humans accidentally (e.g., escaped campfire) or maliciously across Alaska. NOTE: Not all recorded wildland fires are associated with a perimeter polygon. The delineations range in quality from hand sketched perimeters drawn on topographic maps to heads-up interpretation of fine scale satellite imagery (e.g., Sentinel-2 imagery, 10 meter resolution). Although this is a comprehensive dataset, it is not complete and is subject to revision. Data are available as ArcGIS Server Map and Feature Services <a href='https://fire.ak.blm.gov/arcgis/rest/services/MapAndFeatureServices' target='_blank'>https://fire.ak.blm.gov/arcgis/rest/services/MapAndFeatureServices</a> or for download from <a href='https://fire.ak.blm.gov/predsvcs/maps.php' target='_blank'>https://fire.ak.blm.gov/predsvcs/maps.php</a>.",
            "visible": false,
            "opacity": 0.7,
            "cesiumOptions": {
              "url": "https://fire.ak.blm.gov/arcgis/services/MapAndFeatureServices/Fires_Perimeters/MapServer/WMSServer",
              "layers": 2,
              "parameters": {
                "transparent": "true",
                "format": "image/png"
              }
            },
            "colorPalette": {
              "colors": [
                { "label": "Out Fires", "value": "0", "color": "#0000ff" }
              ]
            },
            "attribution": "Alaska Wildland Fire Information Map Series, Bureau of Land Management",
            "moreInfoLink": "https://blm-egis.maps.arcgis.com/apps/instant/portfolio/index.html?appid=4841da6a16804c07849c27ea7db2a26b"
          },
          {
            "type": "WebMapServiceImageryProvider",
            "label": "Active Prescribed Fires",
            "layerId": "apf",
            "description": "Wildland fire history data is made up of wildland fire locations (fire occurrence points) and wildland fire perimeter polygons. Alaska Statewide Fire History Perimeters is a time series of areas burned in each calendar year across Alaska. The polygons in this dataset represent perimeters of wildfires that occur naturally (e.g., lightning) or by humans accidentally (e.g., escaped campfire) or maliciously across Alaska. NOTE: Not all recorded wildland fires are associated with a perimeter polygon. The delineations range in quality from hand sketched perimeters drawn on topographic maps to heads-up interpretation of fine scale satellite imagery (e.g., Sentinel-2 imagery, 10 meter resolution). Although this is a comprehensive dataset, it is not complete and is subject to revision. Data are available as ArcGIS Server Map and Feature Services <a href='https://fire.ak.blm.gov/arcgis/rest/services/MapAndFeatureServices' target='_blank'>https://fire.ak.blm.gov/arcgis/rest/services/MapAndFeatureServices</a> or for download from <a href='https://fire.ak.blm.gov/predsvcs/maps.php' target='_blank'>https://fire.ak.blm.gov/predsvcs/maps.php</a>.",
            "visible": false,
            "opacity": 0.7,
            "cesiumOptions": {
              "url": "https://fire.ak.blm.gov/arcgis/services/MapAndFeatureServices/Fires_Perimeters/MapServer/WMSServer",
              "layers": 5,
              "parameters": {
                "transparent": "true",
                "format": "image/png"
              }
            },
            "colorPalette": {
              "colors": [
                { "label": "Active Prescribed Fires", "value": "0", "color": "#ffa000" }
              ]
            },
            "attribution": "Alaska Wildland Fire Information Map Series, Bureau of Land Management",
            "moreInfoLink": "https://blm-egis.maps.arcgis.com/apps/instant/portfolio/index.html?appid=4841da6a16804c07849c27ea7db2a26b"
          },
          {
            "type": "WebMapServiceImageryProvider",
            "label": "Out Prescribed Fires",
            "layerId": "opf",
            "description": "Wildland fire history data is made up of wildland fire locations (fire occurrence points) and wildland fire perimeter polygons. Alaska Statewide Fire History Perimeters is a time series of areas burned in each calendar year across Alaska. The polygons in this dataset represent perimeters of wildfires that occur naturally (e.g., lightning) or by humans accidentally (e.g., escaped campfire) or maliciously across Alaska. NOTE: Not all recorded wildland fires are associated with a perimeter polygon. The delineations range in quality from hand sketched perimeters drawn on topographic maps to heads-up interpretation of fine scale satellite imagery (e.g., Sentinel-2 imagery, 10 meter resolution). Although this is a comprehensive dataset, it is not complete and is subject to revision. Data are available as ArcGIS Server Map and Feature Services <a href='https://fire.ak.blm.gov/arcgis/rest/services/MapAndFeatureServices' target='_blank'>https://fire.ak.blm.gov/arcgis/rest/services/MapAndFeatureServices</a> or for download from <a href='https://fire.ak.blm.gov/predsvcs/maps.php' target='_blank'>https://fire.ak.blm.gov/predsvcs/maps.php</a>.",
            "visible": false,
            "opacity": 0.7,
            "cesiumOptions": {
              "url": "https://fire.ak.blm.gov/arcgis/services/MapAndFeatureServices/Fires_Perimeters/MapServer/WMSServer",
              "layers": 4,
              "parameters": {
                "transparent": "true",
                "format": "image/png"
              }
            },
            "colorPalette": {
              "colors": [
                { "label": "Out Prescribed Fires", "value": "0", "color": "#ffd995" }
              ]
            },
            "attribution": "Alaska Wildland Fire Information Map Series, Bureau of Land Management",
            "moreInfoLink": "https://blm-egis.maps.arcgis.com/apps/instant/portfolio/index.html?appid=4841da6a16804c07849c27ea7db2a26b"
          },
          {
            "type": "WebMapServiceImageryProvider",
            "label": "Initial Spread Index (today)",
            "layerId": "isi",
            "description": "These features represent forecast values for Fire Danger Ratings - Initial Spread Index (ISI). Visit <a href='https://akff.mesowest.org/about/' target='_blank'>https://akff.mesowest.org/about/</a> for more information.",
            "visible": false,
            "opacity": 0.7,
            "cesiumOptions": {
              "url": "https://fire.ak.blm.gov/arcgis/services/MapAndFeatureServices/AK_FireDangerRatingForecasts/MapServer/WMSServer",
              "layers": 2,
              "parameters": {
                "transparent": "true",
                "format": "image/png"
              }
            },
            "colorPalette": {
              "colors": [
                { "label": "0", "value": 0, "color": "#0909ff" },
                { "label": "3", "value": 3, "color": "#93ff93" },
                { "label": "6", "value": 6, "color": "#ffffab" },
                { "label": "9", "value": 9, "color": "#f9a307" },
                { "label": "14", "value": 14, "color": "#ff0000" },
                { "label": ">18", "value": 18, "color": "#ac0000" }
              ]
            },
            "attribution": "Alaska Wildland Fire Information Map Series, Bureau of Land Management",
            "moreInfoLink": "https://blm-egis.maps.arcgis.com/apps/instant/portfolio/index.html?appid=4841da6a16804c07849c27ea7db2a26b"
          },
          {
            "type": "WebMapServiceImageryProvider",
            "label": "Snow and Ice Extent",
            "layerId": "snowice",
            "description": "The Interactive Multisensor Snow and Ice Mapping System (IMS) is an operational software package used to demarcate the presence of snow and ice across the entire northern hemisphere. This software enables qualified analysts to access multiple sets of remotely sensed data in order to create and distribute 1 km resolution maps of snow and ice used primarily as a data assimilation observation by numerical environmental modeling. IMS creates a North American analysis valid at 18 UTC as well as the entire northern hemisphere analysis visualized within this service, valid at 00 UTC. Imagery utilized includes synthetic aperture radar (SAR), geostationary imagery such as GOES, polar orbiting imagery such as VIIRS, other optical or infrared sensors prioritized by recency and image quality, and application of an understanding of conditions gained from surface stations, radar, and forecast weather conditions in order to create a product valid at approximately 00 UTC. More information on IMS as well as access to products can be found at <a href='https://usicecenter.gov/Products/ImsHome' target='_blank'>https://usicecenter.gov/Products/ImsHome</a> or from the IMS FTP archival partners at the National Snow and Ice Data Center (NSIDC) at <a href='https://nsidc.org/data/g02156/' target='_blank'>https://nsidc.org/data/g02156/</a>. The Digital Object Identifier (DOI) for IMS information is <a href='https://doi.org/10.7265/N52R3PMC' target='_blank'>10.7265/N52R3PMC</a>.",
            "visible": false,
            "opacity": 0.85,
            "cesiumOptions": {
              "url": "https://mapservices.weather.noaa.gov/raster/services/obs/usnic_ims_snow_ice_1km/ImageServer/WMSServer",
              "layers": "usnic_ims_snow_ice_1km:rft_usnic_ims_1km",
              "rectangle": [-179.9, 50.0000004917383, -126.000001117587, 72.0],
              "parameters": {
                "transparent": "true",
                "format": "image/png"
              }
            },
            "attribution": "NOAA, U.S. National Ice Center, NWS",
            "moreInfoLink": "https://usicecenter.gov/Products/ImsHome"
          },
          {
            "type": "WebMapServiceImageryProvider",
            "label": "Soil Saturation %",
            "layerId": "soilsat",
            "description": "The Interactive Multisensor Snow and Ice Mapping System (IMS) is an operational software package used to demarcate the presence of snow and ice across the entire northern hemisphere. This software enables qualified analysts to access multiple sets of remotely sensed data in order to create and distribute 1 km resolution maps of snow and ice used primarily as a data assimilation observation by numerical environmental modeling. IMS creates a North American analysis valid at 18 UTC as well as the entire northern hemisphere analysis visualized within this service, valid at 00 UTC. Imagery utilized includes synthetic aperture radar (SAR), geostationary imagery such as GOES, polar orbiting imagery such as VIIRS, other optical or infrared sensors prioritized by recency and image quality, and application of an understanding of conditions gained from surface stations, radar, and forecast weather conditions in order to create a product valid at approximately 00 UTC. More information on IMS as well as access to products can be found at <a href='https://usicecenter.gov/Products/ImsHome' target='_blank'>https://usicecenter.gov/Products/ImsHome</a> or from the IMS FTP archival partners at the National Snow and Ice Data Center (NSIDC) at <a href='https://nsidc.org/data/g02156/' target='_blank'>https://nsidc.org/data/g02156/</a>. The Digital Object Identifier (DOI) for IMS information is <a href='https://doi.org/10.7265/N52R3PMC' target='_blank'>10.7265/N52R3PMC</a>.",
            "visible": false,
            "opacity": 0.85,
            "cesiumOptions": {
              "url": "https://mapservices.weather.noaa.gov:443/raster/services/obs/NWM_Land_Analysis/MapServer/WMSServer",
              "layers": 1,
              "parameters": {
                "transparent": "true",
                "format": "image/png"
              }
            },
            "attribution": "NOAA, NWS",
            "moreInfoLink": "https://water.noaa.gov/map",
            "notification": { "badge": "New", "style": "green" }
          },
          {
            "type": "WebMapServiceImageryProvider",
            "label": "River Ice Breakup Status",
            "layerId": "ribs",
            "description": "The ice breakup/flood status of major rivers in Alaska",
            "visible": false,
            "opacity": 0.99,
            "cesiumOptions": {
              "url": "https://mapservices.weather.noaa.gov:443/vector/services/obs/aprfc_RiverBreakupStatus/MapServer/WMSServer",
              "rectangle": [-164.798792, 58.883979, -134.499557, 70.446385],
              "layers": 0,
              "parameters": {
                "transparent": "true",
                "format": "image/png"
              }
            },
            "colorPalette": {
              "paletteType": "categorical",
              "property": "status",
              "label": "River Status",
              "colors": [
                { "label": "0 - Mostly Ice", "value": "mostice", "color": "#ffffff" },
                { "label": "1 - Some Open", "value": "someopen", "color": "#67fffe" },
                { "label": "2 - Mostly Open", "value": "mostopen", "color": "#01a1d7" },
                { "label": "3 - Open", "value": "open", "color": "#00009c" },
                { "label": "4 - Flood Warning", "value": "floodwarning", "color": "#ff0000" },
                { "label": "5 - Flood Watch", "value": "floodwatch", "color": "#ffff00" },
                { "label": "6 - Flood Advisory", "value": "floodadv", "color": "#ff9900" },
                { "label": "7 - No Warning", "value": "nowarn", "color": "#000000" },
                { "label": "8 - Unknown", "value": "unknown", "color": "#f11dfe" }
              ]
            },
            "attribution": "Alaska-Pacific River Forecast Service",
            "moreInfoLink": "https://www.weather.gov/aprfc/breakupMap",
            "notification": { "badge": "New", "style": "green" }
          }
        ]
      },
      {
        "label": "Permafrost",
        "icon": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d='M75.8 304.8L1 35.7c-.7-2.5-1-5-1-7.5C0 12.6 12.6 0 28.2 0H482.4C498.8 0 512 13.2 512 29.6c0 1.6-.1 3.3-.4 4.9L434.6 496.1c-1.5 9.2-9.5 15.9-18.8 15.9c-9.2 0-17.1-6.6-18.7-15.6L336 160 307.2 303.9c-1.9 9.3-10.1 16.1-19.6 16.1c-9.2 0-17.2-6.2-19.4-15.1L240 192 210.6 368.2c-1.5 9.1-9.4 15.8-18.6 15.8s-17.1-6.7-18.6-15.8L144 192 115.9 304.3c-2.3 9.2-10.6 15.7-20.1 15.7c-9.3 0-17.5-6.2-20-15.2z'/></svg>",
        "layers": [
          {
            "label": "Ice-Wedge Polygons",
            "layerId": "iwp",
            "type": "WebMapTileServiceImageryProvider",
            "visible": false,
            "description": "Ice-wedge polygons are ubiquitous ground features in landscapes underlain by ice-rich permafrost. Ice-wedge polygons are bounded by wedges of ice, which develop from millenia of repeated frost-cracking during cold winters and snowmelt water infiltrating into the cracks in spring. High resolution satellite imagery combined with deep learning tools were used to detect ice-wedge polygons across the Arctic tundra. To learn more about how this data was produced, see this publication: <a href='https://arcticdata.io/catalog/view/doi:10.18739/A2KW57K57' target='_blank'>https://arcticdata.io/catalog/view/doi:10.18739/A2KW57K57</a>",
            "attribution": "Chandi Witharana, Mahendra R Udawalpola, Amal S Perera, Amit Hasan, Elias Manos, Anna Liljedahl, Mikhail Kanevskiy, M Torre Jorgenson, Ronald Daanen, Benjamin Jones, Howard Epstein, Matthew B Jones, Robyn Thiessen-Bock, Juliet Cohen, & Kastan Day. (2023). Ice-wedge polygon detection in satellite imagery from pan-Arctic regions, Permafrost Discovery Gateway, 2001-2021. Arctic Data Center. doi:<a href='https://doi.org/10.18739/A2KW57K57' target='_blank'>10.18739/A2KW57K57</a>.",
            "cesiumOptions": {
              "url": "https://arcticdata.io/data/tiles/10.18739/A2KW57K57/WGS1984Quad/{TileMatrix}/{TileCol}/{TileRow}.png",
              "tilingScheme": "GeographicTilingScheme",
              "rectangle": [ -179.91531896747117, 50.16996707215903, 179.91531896747247, 80.0978646943821 ] },
              "colorPalette": {
                "paletteType": "continuous", "property": "Percent area covered by polygons",
              "colors": [
                { "color": "#f8ff1f" }
              ]
            }
          },
          {
            "label": "Permafrost Zones",
            "layerId": "permafrost",
            "icon": "urn:uuid:25d227f8-bc97-403f-a64d-5b76e741f31a",
            "type": "Cesium3DTileset",
            "visible": false,
            "opacity": 0.4,
            "description": "This biophysical permafrost zonation map was produced using a rule-based GIS model that integrated a new permafrost extent, climate conditions, vegetation structure, soil and topographic conditions, as well as a yedoma map. Permafrost in this map is classified into five types: climate-driven, climate-driven/ecosystem-modified, climate-driven/ecosystem protected, ecosystem-driven, and ecosystem-protected. 81% of the permafrost regions in the Northern Hemisphere are modified, driven, or protected by ecosystems, indicating the dominant role of ecosystems in permafrost stability in the Northern Hemisphere. Permafrost driven solely by climate occupies 19% of permafrost regions, mainly in High Arctic and high mountains areas, such as the Qinghai-Tibet Plateau.",
            "moreInfoLink": "https://iopscience.iop.org/article/10.1088/1748-9326/ac20f3",
            "downloadLink": "https://doi.org/10.11888/Geocry.tpdc.271659",
            "attribution": "Y.Ran, Y.; M. Torre Jorgenson.; Li, X.; Jin, H.; Wu, T.; Li, R.; Cheng, G. (2021): A biophysical permafrost zonation map in the Northern Hemisphere (2000-2016). National Tibetan Plateau Data Center, https://doi.org/10.11888/Geocry.tpdc.271659",
            "cesiumOptions": {
              "ionAssetId": "634560"
            },
            "colorPalette": {
              "paletteType": "categorical",
              "property": "Type",
              "label": "Zone type",
              "colors": [
                {
                  "value": "Climate-driven",
                  "color": "#FF3720"
                },
                {
                  "value": "Climate-driven/ecosystem-modified",
                  "color": "#0370FE"
                },
                {
                  "value": "Climate-driven/ecosystem protected",
                  "color": "#BFD1FF"
                },
                {
                  "value": "Ecosystem-driven",
                  "color": "#4DE603"
                },
                {
                  "value": "Ecosystem-protected",
                  "color": "#267301"
                },
                {
                  "value": null,
                  "color": "#ffffff"
                }
              ]
            }
          }
        ]
      },
      {
        "label": "Base Layers",
        "icon": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d='M160 32c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160zM396 138.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320H328 280 200c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C360.5 132 368 128 376 128s15.5 4 20 10.7zM192 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120z'/></svg>",
        "layers": [
          {
            "label": "Dataset counts",
            "layerId": "geohashes",
            "type": "CesiumGeohash",
            "visible": true,
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
                  "color": "#1bfac44c",
                },
                {
                  "value": "max",
                  "color": "#1bfa8f",
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
            "saturation": 0.1,
            "notification": { "badge": "New", "style": "green" }
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
            "saturation": 0.1,
            "notification": { "badge": "New", "style": "green" }
          },
          {
            "visible": false,
            "type": "WebMapTileServiceImageryProvider",
            "label": "Alaska 50cm Imagery 2022",
            "layerId": "ak-maxar",
            "description": "A detailed and accurate color imagery of the State of Alaska, featuring a resolution of 50cm with images having less than 10% cloud cover.",
            "attribution": "Alaska High Resolution Imagery (RGB). 2022. Maxar Products. Maxar Technologies Inc., Alaska Geospatial Office, USGS.",
            "moreInfoLink": "https://gis.data.alaska.gov/pages/imagery",
            "downloadLink": "https://geoportal.alaska.gov/portal/home/item.html?id=d462231cc1454e1abb2dccd9a709a476#overview",
            "cesiumOptions": {
              "url": "https://geoportal.alaska.gov/arcgis/rest/services/ahri_2020_rgb_cache/MapServer/WMTS/tile/1.0.0/ahri_2020_rgb_cache/default/GoogleMapsCompatible/{TileMatrix}/{TileRow}/{TileCol}"
            },
            "notification": { "badge": "New", "style": "green" }
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
    "zoomPresets": [
      {
        "title": "Nome Shoreline LiDAR",
        "latitude": 64.49291,
        "longitude": -165.37379,
        "height": 1000,
        "description": "Remote sensing makes it possible to gather data rapidly, accurately, and non-destructively, allowing for access to remote areas in near real-time. Road and surrounding infrastructure data was collected using LiDAR sensor in remote areas outside of Nome, Alaska, as part of continuing research on permafrost thaw-related subsidence. The survey was conducted in the autumn of 2022, during the period when the remnants of Typhoon Merbok hit Nome. Some of the data shows damage caused by Typhoon Merbok before initial repairs were carried out. The high-quality data provides a data point of relevance to research in cold regions, permafrost studies, and infrastructure detection. It also lends its use as reference information to object classification of remotely sensed imagery in this region.",
        "layerIds": [
          "SiteV_2",
          "sat"
        ]
      },
      {
        "title": "Dexter Bypass LiDAR",
        "latitude": 64.54533,
        "longitude": -165.36042,
        "height": 1000,
        "description": "Remote sensing makes it possible to gather data rapidly, accurately, and non-destructively, allowing for access to remote areas in near real-time. Road and surrounding infrastructure data was collected using LiDAR sensor in remote areas outside of Nome, Alaska, as part of continuing research on permafrost thaw-related subsidence. The survey was conducted in the autumn of 2022, during the period when the remnants of Typhoon Merbok hit Nome. Some of the data shows damage caused by Typhoon Merbok before initial repairs were carried out. The high-quality data provides a data point of relevance to research in cold regions, permafrost studies, and infrastructure detection. It also lends its use as reference information to object classification of remotely sensed imagery in this region.",
        "layerIds": [
          "Site7",
          "sat"
        ]
      }
    ]
  },

  /* API keys */
  mapKey: "AIzaSyAfV8JmlqdTQIrvBuG8iE0aTN29nn1mtZU",
  googleAnalyticsKey: "G-8T2M8BDWWZ",

  /* Metadata View */

  /* Metrics */
  displayDatasetQualityMetric: true,
  hideSummaryMetadataAssessment: false,
  hideSummaryDownloadsChart: false,
  hideSummaryCitationsChart: false,
  hideSummaryViewsChart: false,
  
  /* Portals */
  portalDefaults: {
    primaryColor: "#006699",
    primaryColorTransparent: "rgba(0, 102, 153, .7)",
    secondaryColor: "#009299",
    secondaryColorTransparent: "rgba(0, 146, 153, .7)",
    accentColor: "#f89406",
    accentColorTransparent: "rgba(248, 148, 6, .7)"
  },

  /* Editor */
  defaultAccessPolicy: [
    // {
    //     subject: "CN=drp-pis,DC=dataone,DC=org",
    //     read: true,
    //     write: true,
    //     changePermission: true
    // },
    {
      subject: "CN=drp-data-admins,DC=dataone,DC=org",
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
  hiddenSubjectsInAccessPolicy: ["CN=DataONE-Support,DC=dataone,DC=org", "CN=drp-data-admins,DC=dataone,DC=org"],
  enablePublishDOI: true,
  enablePublishDOIForSubjects: ["CN=DataONE-Support,DC=dataone,DC=org", "CN=drp-data-admins,DC=dataone,DC=org"],
  allowAccessPolicyChangesDatasets: true,
  allowAccessPolicyChangesDatasetsForSubjects: ["CN=DataONE-Support,DC=dataone,DC=org", "CN=drp-data-admins,DC=dataone,DC=org", "CN=drp-pis,DC=dataone,DC=org"],
  allowAccessPolicyChangesPortals: true,
  allowAccessPolicyChangesPortalsForSubjects: ["CN=DataONE-Support,DC=dataone,DC=org", "CN=drp-data-admins,DC=dataone,DC=org"],
  showDatasetPublicToggle: true,
  showDatasetPublicToggleForSubjects: ["CN=DataONE-Support,DC=dataone,DC=org", "CN=drp-data-admins,DC=dataone,DC=org", "CN=drp-pis,DC=dataone,DC=org"],
  limitPortalsToSubjects: ["CN=DataONE-Support,DC=dataone,DC=org", "CN=drp-data-admins,DC=dataone,DC=org", "CN=drp-portal-admins,DC=dataone,DC=org"],
  emlEditorRequiredFields: {
      abstract: true,
      alternateIdentifier: false,
      funding: false,
      generalTaxonomicCoverage: false,
      geoCoverage: false,
      intellectualRights: true,
      keywordSets: false,
      methods: true,
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
        "views/portals/PortalsSearchView" : MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/views/portals/PortalsSearchView.js",
        // Templates
        "templates/mainContent.html" : MetacatUI.root + '/js/themes/' + MetacatUI.theme + '/templates/mainContent.html',
        "templates/navbar.html" : MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/templates/navbar.html",
        "templates/about.html" : MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/templates/about.html",
        "templates/support.html" : MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/templates/support.html",
        "templates/metadata/metadataOverview.html" : MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/templates/metadata/metadataOverview.html",
        "templates/metadata/data-sensitivity.html" : MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/templates/metadata/data-sensitivity.html",
        "templates/metadata/EMLMethods.html" : MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/templates/metadata/EMLMethods.html",
        "templates/footer.html" : MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/templates/footer.html"
    }
}
