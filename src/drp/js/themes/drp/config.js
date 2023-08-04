MetacatUI.AppConfig = Object.assign({
  root: "/",
  theme: "drp",
  baseUrl: "https://drp.dataone.org",
  nodeId: "urn:node:DRP",
  title: "Defense Resiliency Platform Against Extreme Cold Weather",
  repositoryName: "Defense Resiliency Platform Against Extreme Cold Weather",
  emailContact: "timothy.pasch@und.edu",
  description: "The research and development needed for the dominance of the U.S. Army in extreme cold weather conditions could significantly benefit from an integrated approach that combines engineering with geospatial analysis and visualization/data sciences in a unified platform. At present, the approach is more single discipline-centric, rather than multidisciplinary, despite the interconnections between the different disciplines.<br><br>For instance, the impacts of freezing and freezing-thawing cycles on the performance of earthen and man-made construction materials are considered independent from the ability of these materials to support the needs of U.S. Army and other infrastructures. Furthermore, while significant geoscientific research is being conducted on permafrost changes in the Arctic, these are frequently not intersecting with and informing work in the applied engineering sciences, and if so: this work in taking place in localized test sites, such as the CRREL permafrost tunnel near Fairbanks, AK.<br><br>Additionally, while numerous online websites and data repositories host and display multidisciplinary data online, there is a significant need for a truly integrated, automated platform that enables advanced data analysis, visualization, predictive analytics and modeling of diverse datasets. Thus, while we currently achieve stepwise improvements in each of the critical disciplines, we lack a unified platform that considers the entire impact of extreme cold weather on the performance of U.S. Army and its supporting infrastructure.<br><br>We also do not yet fully understand how to optimize the performance of each of these critical components to maximize the benefits of the entire system to serve the U.S. Army. Therefore, there is a critical need to identify the interdependencies between disparate research disciplines required to develop an integrated framework in order to maximize the performance of the U.S. forces in extreme cold weather. Without this knowledge, the performance of the U.S. Army in extreme cold weather will continue to be constrained by limitations imposed by individual disciplines.<br><br>The Defense Resiliency Platform (DRP) is a research-based multidisciplinary cyberinfrastructure platform enabling data integration and formatting, visualization, predictive analytics, and automated mapping of Arctic terrain data with the goal of maximizing the performance of the U.S. Army/CRREL in extreme cold weather environments.",

  /* Map */
  useDeprecatedDataCatalogView: false,
  enableCesium: true,
  cesiumToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiMTE3MTBiYy1iODY1LTQxNjMtODUzNS0yMzM1NGE3M2JhMWIiLCJpZCI6NjkzOTcsImlhdCI6MTY3ODkwMDg5M30.xzIlG_tPIzB9FmYPzPTzOJ49R2J4yIG2y0ittFqdbMc",
  catalogSearchMapOptions: {
    homePosition: {
      longitude: -151.0,
      latitude: 64.0,
      height: 3000000,
      heading: 1,
      pitch: -90,
      roll: 0
    },
    "terrains": [
      {
        label: "ArcticDEM",
        type: "CesiumTerrainProvider",
        cesiumOptions: {
          ionAssetId: "3956",
          verticalExaggeration: 2,
          requestVertexNormals: true
        },
        attribution: "University of Minnesota Polar Geospatial Center",
        moreInfoLink: "https://www.pgc.umn.edu/data/arcticdem/"
      }
    ],
    "layers": [
      {
        label: "Site1 LiDAR",
        type: "Cesium3DTileset",
        description: "Data are available for download at: <a href='https://arcticdata.io/data/10.57902/D74W2T/' target='_blank'>https://arcticdata.io/data/10.57902/D74W2T/</a>",
        visible: false,
        moreInfoLink: "/view/urn%3Auuid%3A028790ad-4ebf-4870-85ac-e72ae9b8db26",
        downloadLink: "https://arcticdata.io/data/10.57902/D74W2T/",
        attribution: "Pasch, Chukwuemeka, and Krueger (2023)",
        cesiumOptions: {
          url: "https://arcticdata.io/data/tiles/10.57902/D74W2T/Site1/tileset.json",
          foveatedConeSize: 1,
          foveatedScreenSpaceError: true,
          foveatedTimeDelay: 0.0,
          dynamicScreenSpaceError: true,
        },
      },
      {
        label: "Site2 LiDAR",
        type: "Cesium3DTileset",
        description: "Data are available for download at: <a href='https://arcticdata.io/data/10.57902/D71599/' target='_blank'>https://arcticdata.io/data/10.57902/D71599/</a>",
        visible: false,
        moreInfoLink: "/view/urn%3Auuid%3Ac7a9df72-9d6b-41ac-a9fd-4f9549cc96f0",
        downloadLink: "https://arcticdata.io/data/10.57902/D71599/",
        attribution: "Pasch, Chukwuemeka, and Krueger (2023)",
        cesiumOptions: {
          url: "https://arcticdata.io/data/tiles/10.57902/D71599/Site2/tileset.json",
          foveatedConeSize: 1,
          foveatedScreenSpaceError: true,
          foveatedTimeDelay: 0.0,
          dynamicScreenSpaceError: true,
        },
      },
      {
        label: "Site3 LiDAR",
        type: "Cesium3DTileset",
        description: "Data are available for download at: <a href='https://arcticdata.io/data/10.57902/D7WC7C/' target='_blank'>https://arcticdata.io/data/10.57902/D7WC7C/</a>",
        visible: false,
        moreInfoLink: "/view/urn%3Auuid%3A35a11c8f-e02a-4e91-937f-2bb5cf2ad129",
        downloadLink: "https://arcticdata.io/data/10.57902/D7WC7C/",
        attribution: "Pasch, Chukwuemeka, and Krueger (2023)",
        cesiumOptions: {
          url: "https://arcticdata.io/data/tiles/10.57902/D7WC7C/Site3/tileset.json",
          foveatedConeSize: 1,
          foveatedScreenSpaceError: true,
          foveatedTimeDelay: 0.0,
          dynamicScreenSpaceError: true,
        },
      },
      {
        label: "Site4 LiDAR",
        type: "Cesium3DTileset",
        description: "Data are available for download at: <a href='https://arcticdata.io/data/10.57902/D7RP43/' target='_blank'>https://arcticdata.io/data/10.57902/D7RP43/</a>",
        visible: false,
        moreInfoLink: "/view/urn%3Auuid%3A768e037e-5e1f-42ad-8840-3e72c09b379b",
        downloadLink: "https://arcticdata.io/data/10.57902/D7RP43/",
        attribution: "Pasch, Chukwuemeka, and Krueger (2023)",
        cesiumOptions: {
          url: "https://arcticdata.io/data/tiles/10.57902/D7RP43/Site4/tileset.json",
          foveatedConeSize: 1,
          foveatedScreenSpaceError: true,
          foveatedTimeDelay: 0.0,
          dynamicScreenSpaceError: true,
        },
      },
      {
        label: "Site5 LiDAR",
        type: "Cesium3DTileset",
        description: "Data are available for download at: <a href='https://arcticdata.io/data/10.57902/D7MW25/' target='_blank'>https://arcticdata.io/data/10.57902/D7MW25/</a>",
        visible: false,
        moreInfoLink: "/view/urn%3Auuid%3Aa74e1cb3-5209-4e46-8188-56c0d75e01ff",
        downloadLink: "https://arcticdata.io/data/10.57902/D7MW25/",
        attribution: "Pasch, Chukwuemeka, and Krueger (2023)",
        cesiumOptions: {
          url: "https://arcticdata.io/data/tiles/10.57902/D7MW25/Site5/tileset.json",
          foveatedConeSize: 1,
          foveatedScreenSpaceError: true,
          foveatedTimeDelay: 0.0,
          dynamicScreenSpaceError: true,
        },
      },
      {
        label: "Site6 LiDAR",
        type: "Cesium3DTileset",
        description: "Data are available for download at: <a href='https://arcticdata.io/data/10.57902/D7H59N/' target='_blank'>https://arcticdata.io/data/10.57902/D7H59N/</a>",
        visible: false,
        moreInfoLink: "/view/urn%3Auuid%3A12d2bc61-ca26-4132-91cb-374d8ddd2021",
        downloadLink: "https://arcticdata.io/data/10.57902/D7H59N/",
        attribution: "Pasch, Chukwuemeka, and Krueger (2023)",
        cesiumOptions: {
          url: "https://arcticdata.io/data/tiles/10.57902/D7H59N/Site6/tileset.json",
          foveatedConeSize: 1,
          foveatedScreenSpaceError: true,
          foveatedTimeDelay: 0.0,
          dynamicScreenSpaceError: true,
        },
      },
      {
        label: "Site7 LiDAR",
        type: "Cesium3DTileset",
        description: "Data are available for download at: <a href='https://arcticdata.io/data/10.57902/D7CC7Q/' target='_blank'>https://arcticdata.io/data/10.57902/D7CC7Q/</a>",
        visible: false,
        moreInfoLink: "/view/urn%3Auuid%3A265af36f-6ebc-4bae-b5b9-0f72182caca0",
        downloadLink: "https://arcticdata.io/data/10.57902/D7CC7Q/",
        attribution: "Pasch, Chukwuemeka, and Krueger (2023)",
        cesiumOptions: {
          url: "https://arcticdata.io/data/tiles/10.57902/D7CC7Q/Site7/tileset.json",
          foveatedConeSize: 1,
          foveatedScreenSpaceError: true,
          foveatedTimeDelay: 0.0,
          dynamicScreenSpaceError: true,
        },
      },
      {
        label: "Site8 LiDAR",
        type: "Cesium3DTileset",
        description: "Data are available for download at: <a href='https://arcticdata.io/data/10.57902/D77P4F/' target='_blank'>https://arcticdata.io/data/10.57902/D77P4F/</a>",
        visible: false,
        moreInfoLink: "/view/urn%3Auuid%3Abce333af-2f6c-46ba-933b-cf3ba77f14fa",
        downloadLink: "https://arcticdata.io/data/10.57902/D77P4F/",
        attribution: "Pasch, Chukwuemeka, and Krueger (2023)",
        cesiumOptions: {
          url: "https://arcticdata.io/data/tiles/10.57902/D77P4F/Site8/tileset.json",
          foveatedConeSize: 1,
          foveatedScreenSpaceError: true,
          foveatedTimeDelay: 0.0,
          dynamicScreenSpaceError: true,
        },
      },
      {
        label: "SiteV_1 LiDAR",
        type: "Cesium3DTileset",
        description: "Data are available for download at: <a href='https://arcticdata.io/data/10.57902/D73W2H/' target='_blank'>https://arcticdata.io/data/10.57902/D73W2H/</a>",
        visible: false,
        moreInfoLink: "/view/urn%3Auuid%3A9d62d50c-e8dd-4af8-9319-a2216b27bf5a",
        downloadLink: "https://arcticdata.io/data/10.57902/D73W2H/",
        attribution: "Pasch, Chukwuemeka, and Krueger (2023)",
        cesiumOptions: {
          url: "https://arcticdata.io/data/tiles/10.57902/D73W2H/SiteV_1/tileset.json",
          foveatedConeSize: 1,
          foveatedScreenSpaceError: true,
          foveatedTimeDelay: 0.0,
          dynamicScreenSpaceError: true,
        },
      },
      {
        label: "SiteV_2 LiDAR",
        type: "Cesium3DTileset",
        description: "Data are available for download at: <a href='https://arcticdata.io/data/10.57902/D70590/' target='_blank'>https://arcticdata.io/data/10.57902/D70590/</a>",
        visible: false,
        moreInfoLink: "/view/urn%3Auuid%3A48ba68da-1e82-409c-bde3-8cf99e1291bc",
        downloadLink: "https://arcticdata.io/data/10.57902/D70590/",
        attribution: "Pasch, Chukwuemeka, and Krueger (2023)",
        cesiumOptions: {
          url: "https://arcticdata.io/data/tiles/10.57902/D70590/SiteV_2/tileset.json",
          foveatedConeSize: 1,
          foveatedScreenSpaceError: true,
          foveatedTimeDelay: 0.0,
          dynamicScreenSpaceError: true,
        },
      },
      {
        type: "WebMapServiceImageryProvider",
        label: "Radar Base Reflectivity",
        description: "Quality Controlled 1km x 1km CONUS Radar Base Reflectivity. This data is provided by the Multi-Radar-Multi-Sensor (MRMS) algorithm.",
        visible: false,
        opacity: 0.6,
        cesiumOptions: {
          url: "https://mapservices.weather.noaa.gov:443/eventdriven/services/radar/radar_base_reflectivity_time/ImageServer/WMSServer",
          rectangle: [-176.0, 50.0000004917383, -126.000001117587, 72.0],
          layers: 0,
          parameters: {
            transparent: "true",
            format: "image/png",
          },
        },
        attribution: "National Weather Service",
        moreInfoLink: "https://radar.weather.gov/region/alaska/standard"
      },
      {
        type: "WebMapServiceImageryProvider",
        label: "Satellite IR",
        description: "10.3 µm - \"Clean\" Longwave IR Window Band - 2 km resolution - GOES Band 13 at 10.3 µm is an infrared window, meaning it is not strongly affected by atmospheric water vapor. This channel is useful for detecting clouds all times of day and night and is particularly useful in retrievals of cloud top height.",
        visible: false,
        opacity: 0.4,
        cesiumOptions: {
          url: "https://mesonet.agron.iastate.edu/cgi-bin/wms/goes_west.cgi?",
          layers: "alaska_ch13",
          rectangle: [-176.0, 50.0000004917383, -126.000001117587, 72.0],
          parameters: {
            transparent: "true",
            format: "image/png",
          },
        },
        attribution: "NOAA Satellite Information Service - GOES West Infrared Alaska via Iowa Environmental Mesonet",
        moreInfoLink: "https://www.star.nesdis.noaa.gov/GOES/sector_band.php?sat=G18&sector=ak&band=13&length=12&dim=1"
      },
      {
        type: "WebMapServiceImageryProvider",
        label: "NWS Watches/Warnings/Advisories",
        description: "A <b>watch</b> is used when the risk of a hazardous weather or hydrologic event has increased significantly, but its occurrence, location, and/or timing is still uncertain. It is intended to provide enough lead time so that those who need to set their plans in motion can do so.<br><br>A <b>warning</b> is issued when a hazardous weather or hydrologic event is occurring, is imminent, or has a very high probability of occurring. A warning is used for conditions posing a threat to life or property.<br><br>In an <b>advisory</b>, the expected weather condition has a pretty good chance of occurring, even a likely chance of occurring, but typically an advisory is used for less severe type of weather conditions. A Wind Advisory might be issued or a Freezing Rain Advisory issued instead of a High Wind Warning or an ice Storm Warning.",
        visible: false,
        opacity: 0.4,
        cesiumOptions: {
          url: "https://mapservices.weather.noaa.gov/eventdriven/services/WWA/watch_warn_adv/MapServer/WMSServer",
          rectangle: [-176.0, 50.0000004917383, -126.000001117587, 72.0],
          layers: 0,
          parameters: {
            transparent: "true",
            format: "image/png",
          },
        },
        colorPalette: {
          paletteType: 'categorical',
          property: 'WWA',
          label: 'NWS Watches and Warnings',
          colors: [
            { value: "0 - Warning", color: "#e80000" },
            { value: "1 - Advisory", color: "#ffab00" },
            { value: "2 - Watch", color: "#e8ea27" },
            { value: "3 - Special Wx Stmt", color: "#ffe9c2" },
            { value: "4 - Storm Warning", color: "#9400d3" },
            { value: "5 - Small Craft Advisory", color: "#d8bfd8" },
            /*{ value: "6 - Hvy Frzg Spray", color: "#00bfff" },
            { value: "7 - Hurr Force Wnd", color: "#cd5c5c" },
            { value: "8 - Gale Warning", color: "#c58dc6" },*/
          ]
        },
        attribution: "National Weather Service",
        moreInfoLink: "https://www.weather.gov/"
      },
      {
        type: "WebMapServiceImageryProvider",
        label: "Snow and Ice Extent",
        description: "The Interactive Multisensor Snow and Ice Mapping System (IMS) is an operational software package used to demarcate the presence of snow and ice across the entire northern hemisphere. This software enables qualified analysts to access multiple sets of remotely sensed data in order to create and distribute 1 km resolution maps of snow and ice used primarily as a data assimilation observation by numerical environmental modeling. IMS creates a North American analysis valid at 18 UTC as well as the entire northern hemisphere analysis visualized within this service, valid at 00 UTC. Imagery utilized includes synthetic aperture radar (SAR), geostationary imagery such as GOES, polar orbiting imagery such as VIIRS, other optical or infrared sensors prioritized by recency and image quality, and application of an understanding of conditions gained from surface stations, radar, and forecast weather conditions in order to create a product valid at approximately 00 UTC. More information on IMS as well as access to products can be found at <a href='https://usicecenter.gov/Products/ImsHome' target='_blank'>https://usicecenter.gov/Products/ImsHome</a> or from the IMS FTP archival partners at the National Snow and Ice Data Center (NSIDC) at <a href='https://nsidc.org/data/g02156/' target='_blank'>https://nsidc.org/data/g02156/</a>. The Digital Object Identifier (DOI) for IMS information is <a href='https://doi.org/10.7265/N52R3PMC' target='_blank'>10.7265/N52R3PMC</a>.",
        visible: false,
        opacity: 0.85,
        cesiumOptions: {
          url: "https://mapservices.weather.noaa.gov/raster/services/obs/usnic_ims_snow_ice_1km/ImageServer/WMSServer",
          layers: "usnic_ims_snow_ice_1km:rft_usnic_ims_1km",
          rectangle: [-176.0, 50.0000004917383, -126.000001117587, 72.0],
          parameters: {
            transparent: "true",
            format: "image/png",
          },
        },
        attribution: "NOAA, U.S. National Ice Center, NWS",
        moreInfoLink: "https://usicecenter.gov/Products/ImsHome"
      },
      {
        label: "Ice-Wedge Polygons",
        /*icon: "urn:uuid:73f234f7-a2ae-46b4-9bc2-8d75f69b25a8",*/
        type: "WebMapTileServiceImageryProvider",
        visible: false,
        description: "Ice-wedge polygons are ubiquitous ground features in landscapes underlain by ice-rich permafrost. Ice-wedge polygons are bounded by wedges of ice, which develop from millenia of repeated frost-cracking during cold winters and snowmelt water infiltrating into the cracks in spring. High resolution satellite imagery combined with deep learning tools were used to detect ice-wedge polygons across the Arctic tundra. To learn more about how this data was produced, see this publication: <a href='https://arcticdata.io/catalog/view/doi:10.18739/A2KW57K57' target='_blank'>https://arcticdata.io/catalog/view/doi:10.18739/A2KW57K57</a>",
        attribution: "Chandi Witharana, Mahendra R Udawalpola, Amal S Perera, Amit Hasan, Elias Manos, Anna Liljedahl, Mikhail Kanevskiy, M Torre Jorgenson, Ronald Daanen, Benjamin Jones, Howard Epstein, Matthew B Jones, Robyn Thiessen-Bock, Juliet Cohen, & Kastan Day. (2023). Ice-wedge polygon detection in satellite imagery from pan-Arctic regions, Permafrost Discovery Gateway, 2001-2021. Arctic Data Center. doi:<a href='https://doi.org/10.18739/A2KW57K57' target='_blank'>10.18739/A2KW57K57</a>.",
        cesiumOptions: {
          url: "https://demo.arcticdata.io/tiles/layers/iwp_high_all_20230608/iwp_coverage/WGS1984Quad/{TileMatrix}/{TileCol}/{TileRow}.png",
          tilingScheme: "GeographicTilingScheme",
          rectangle: [ -179.91531896747117, 50.16996707215903, 179.91531896747247, 80.0978646943821 ] },
          colorPalette: {
            paletteType: "continuous", property: "Percent area covered by polygons",
          colors: [
            { color: "#f8ff1f" }
          ]
        }
      },
      /*{
        label: "Permafrost Zones",
        icon: "urn:uuid:25d227f8-bc97-403f-a64d-5b76e741f31a",
        type: "Cesium3DTileset",
        visible: false,
        opacity: 0.4,
        description: "This biophysical permafrost zonation map was produced using a rule-based GIS model that integrated a new permafrost extent, climate conditions, vegetation structure, soil and topographic conditions, as well as a yedoma map. Permafrost in this map is classified into five types: climate-driven, climate-driven/ecosystem-modified, climate-driven/ecosystem protected, ecosystem-driven, and ecosystem-protected. 81% of the permafrost regions in the Northern Hemisphere are modified, driven, or protected by ecosystems, indicating the dominant role of ecosystems in permafrost stability in the Northern Hemisphere. Permafrost driven solely by climate occupies 19% of permafrost regions, mainly in High Arctic and high mountains areas, such as the Qinghai-Tibet Plateau.",
        moreInfoLink: "https://iopscience.iop.org/article/10.1088/1748-9326/ac20f3",
        downloadLink: "https://doi.org/10.11888/Geocry.tpdc.271659",
        attribution: "Y.Ran, Y.; M. Torre Jorgenson.; Li, X.; Jin, H.; Wu, T.; Li, R.; Cheng, G. (2021): A biophysical permafrost zonation map in the Northern Hemisphere (2000-2016). National Tibetan Plateau Data Center, https://doi.org/10.11888/Geocry.tpdc.271659",
        cesiumOptions: { ionAssetId: "634560" },
        colorPalette: {
          paletteType: "categorical",
          property: "Type",
          label: "Zone type",
          colors: [
            { value: "Climate-driven", color: "#FF3720" },
            { value: "Climate-driven/ecosystem-modified", color: "#0370FE" },
            { value: "Climate-driven/ecosystem protected", color: "#BFD1FF" },
            { value: "Ecosystem-driven", color: "#4DE603" },
            { value: "Ecosystem-protected", color: "#267301" },
            { value: "null", color: "#ffffff" }
          ]
        }
      },*/
      {
        type: "WebMapServiceImageryProvider",
        label: "River Ice Breakup Status",
        /*icon: "urn:uuid:c4b53e6f-814d-4c22-a159-a4164daaf86f",*/
        description: "The ice breakup/flood status of major rivers in Alaska",
        visible: false,
        opacity: 0.4,
        cesiumOptions: {
          url: "https://mapservices.weather.noaa.gov:443/vector/rest/services/obs/aprfc_RiverBreakupStatus/MapServer/WMSServer",
          rectangle: [-164.798792, 58.883979, -134.499557, 70.446385],
          layers: 0,
          parameters: {
            transparent: "true",
            format: "image/png",
          },
        },
        colorPalette: {
          paletteType: "categorical",
          property: "status",
          label: "River Status",
          colors: [
            { label: "0 - Mostly Ice", value: "mostice", color: "#ffffff" },
            { label: "1 - Some Open", value: "someopen", color: "#67fffe" },
            { label: "2 - Mostly Open", value: "mostopen", color: "#01a1d7" },
            { label: "3 - Open", value: "open", color: "#00009c" },
            { label: "4 - Flood Warning", value: "floodwarning", color: "#ff0000" },
            { label: "5 - Flood Watch", value: "floodwatch", color: "#ffff00" },
            { label: "6 - Flood Advisory", value: "floodadv", color: "#ff9900" },
            { label: "7 - No Warning", value: "nowarn", color: "#000000" },
            { label: "8 - Unknown", value: "unknown", color: "#f11dfe" },
          ]
        },
        "attribution": "Alaska-Pacific River Forecast Service",
        "moreInfoLink": "https://www.weather.gov/aprfc/breakupMap",
        "notification": { "badge": "In development", "style": "yellow", "message": "This layer is under development by the NOAA Map Services office and will be available soon." }
      },
      {
        type: "WebMapServiceImageryProvider",
        label: "Temperature",
        description: "This service provides weather forecasts from the National Digital Forecast Database. Day 1-3 forecasts are updated every 30 minutes.",
        visible: false,
        opacity: 0.4,
        cesiumOptions: {
          url: "https://digital.mdl.nws.noaa.gov/ndfd.alaska/wms",
          layers: 0,
          rectangle: [-176.0, 50.0000004917383, -126.000001117587, 72.0],
          parameters: {
            transparent: "true",
            format: "image/png",
          },
        },
        attribution: "National Digital Forecast Database, National Weather Service",
        moreInfoLink: "https://digital.weather.gov/?zoom=3&lat=62.86094&lon=-158.80078&layers=F000BTTTFTT&region=1&element=6&mxmz=false&barbs=false&subl=TFFFF&units=english&wunits=nautical&coords=latlon&tunits=localt",
        notification: { badge: "In development", style: "yellow", message: "This layer is under development by the National Weather Service and will be available soon." }
      },
      {
        label: "Satellite imagery",
        icon: "urn:uuid:4177c2e1-3037-4964-bf00-5f13182308d9",
        type: "IonImageryProvider",
        description: "Global satellite imagery down to 15 cm resolution in urban areas.",
        attribution: "Data provided by Bing Maps © 2021 Microsoft Corporation",
        moreInfoLink: "https://www.microsoft.com/maps",
        cesiumOptions: {
          ionAssetId: "2"
        }
      },
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
  
  /* Editor */
  defaultAccessPolicy: [
    {
        subject: "CN=drp-pis,DC=dataone,DC=org",
        read: true,
        write: true,
        changePermission: true
    },
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
        "templates/mainContent.html" : MetacatUI.root + '/js/themes/' + MetacatUI.theme + '/templates/mainContent.html',
        "templates/navbar.html" : MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/templates/navbar.html",
        "templates/about.html" : MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/templates/about.html",
        "templates/support.html" : MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/templates/support.html",
        "templates/metadata/metadataOverview.html" : MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/templates/metadata/metadataOverview.html",
        "templates/footer.html" : MetacatUI.root + "/js/themes/" + MetacatUI.theme + "/templates/footer.html"
    }
}