MetacatUI.AppConfig = Object.assign({
    root: "/",
    theme: "smithsonian",
    title: "Smithsonian Research Data Repository",
    repositoryName: "Smithsonian Research Data Repository",
    nodeId: "urn:node:SI",
    description: "The Smithsonian Research Data Repository is intended to facilitate open and discoverable reuse of Smithsonian research data products.",
    baseUrl: "https://smithsonian.dataone.org/",
    emailContact: "WhiteAE@si.edu",

    /* Map */
    useDeprecatedDataCatalogView: false,
    enableCesium: true,
    // temporary token restricted to smithsonian, for testing
    cesiumToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiMWU2ZWEwNS1jNjY1LTQ0ZTQtOWM2NC1mM2NlNGE2NzNmYWQiLCJpZCI6MTI5OTcxLCJpYXQiOjE2Nzk1MjYzMzV9.Hlv9HsNs5UMENIYxonCAWYfxuAiNexpWGGhvYWL0LPg",
    mapKey: "AIzaSyDGzLLaG3iiTUA8CQ1hLvgmekQOsEZ94ac",
    googleAnalyticsKey: "G-Z4Z285RHKC",

    catalogSearchMapOptions: {
        "homePosition": {
          "longitude": -96.0,
          "latitude": 32.5,
          "height": 10000000,
          "heading": 0,
          "pitch": -90,
          "roll": 0
        },
        "layerCategories": [
          {
            "label": "LiDAR",
            "icon": "<svg height='800px' width='800px' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' class='iconify iconify--gis' preserveAspectRatio='xMidYMid meet'><path d='M100 70l-4.242-1.763h-.001L63.18 54.69l.002-.001l-3.368-1.4l-.003.001L49.497 49L0 69.999L50.716 100zm-7.232.002l-6.876 4.057l-9.086-4.058l6.936-3.836zm-10.123 5.973l-7.484 4.418L66 75.975l7.532-4.165zM71.62 82.483l-8.177 4.825l-9.21-4.826l8.21-4.538zm-12.054 7.114l-8.972 5.295l-9.225-5.296l8.979-4.965zm20.249-25.1l-6.958 3.741l-8.377-3.742l6.995-3.544zM69.576 70l-7.548 4.058L53.613 70l7.572-3.834zm-11.113 5.974l-8.216 4.417l-8.427-4.418l8.222-4.165zM46.36 82.482l-8.977 4.826l-8.409-4.826l8.96-4.54zm21.48-23.074l-7.007 3.46l-7.747-3.46l7.027-3.284zm-10.306 5.088l-7.577 3.74l-7.758-3.74l7.583-3.544zM46.384 70l-8.22 4.058L30.42 70l8.208-3.836zm-12.102 5.974l-8.948 4.418l-7.695-4.418l8.911-4.165zm22.46-21.284l-7.033 3.21l-7.185-3.21l7.035-3.051zm-10.338 4.718l-7.58 3.46l-7.175-3.462l7.571-3.283zm-11.15 5.088l-8.197 3.74l-7.138-3.742l8.17-3.543zM23.192 70l-8.893 4.057l-7.07-4.058l8.843-3.835z' fill-rule='evenodd' fill='#000000'></path><path d='M18.492 24.736a1.5 1.5 0 0 0-.676.186a1.5 1.5 0 0 0-.586 2.039l20.282 36.633a1.5 1.5 0 0 0 2.037.586a1.5 1.5 0 0 0 .586-2.04l-20.28-36.632a1.5 1.5 0 0 0-1.363-.772z' fill-rule='evenodd' fill='#000000'></path><path d='M76.266 25.79a1.5 1.5 0 0 0-1.371.901L59.457 62.27a1.5 1.5 0 0 0 .78 1.974a1.5 1.5 0 0 0 1.972-.78l15.437-35.58a1.5 1.5 0 0 0-.779-1.972a1.5 1.5 0 0 0-.601-.123z' fill-rule='evenodd' fill='#000000'></path><path d='M31.246 13.873c-.096 0-.192.006-.287.02L5.754 17.338a2 2 0 0 0-1.674 1.521L.053 35.885a2 2 0 0 0 2.218 2.441l33.36-4.56a2 2 0 0 0 1.664-2.485l-4.129-15.91a2 2 0 0 0-1.92-1.498zm-1.506 4.223l3.117 12.011c-5.224-5.781-13.945-8.619-25.2-8.992z' fill='#000000'></path><path d='M60.2 14.441a2 2 0 0 0-1.962 2.4l3.826 18.655a2 2 0 0 0 1.721 1.584l33.977 4.092c1.698.204 2.852-1.679 1.9-3.1L86.406 18.285a2 2 0 0 0-1.422-.873l-24.548-2.957a2.005 2.005 0 0 0-.237-.014zm2.515 4.317l20.88 2.515c-7.47 1.148-13.759 4.538-17.902 12.006z' fill='#000000'></path></svg>",
            "layers": [
              {
                "label": "Agua Salud Alfagia",
                "layerId": "agua-salud-alfagia",
                "type": "Cesium3DTileset",
                "description": "Data are available for download at: <a href='https://smithsonian.dataone.org/datasets/ALS_Panama_2023/' target='_blank'>https://smithsonian.dataone.org/datasets/ALS_Panama_2023/</a>.<br>Small-footprint airborne lidar, or Airborne Laser Scanning (ALS), data provides detailed information about forest vertical structure as well as ground topography. Such data are used extensively for estimating canopy height, forest above ground biomass density, leaf area indices and more, and for calibrating and validating satellite remote sensing products. The 2023 data collection campaign covered 3825.24 ha across 11 areas. It included both high-lidar data (20.31 shots per square meter) and RGB orthophotos (6 cm resolution). LiDAR data were collected with an IGI LiteMapper 6800i, which incorporates a Riegl LMS680 full waveform sensor. RGB imagery was collected with a Nikon D800E SLR camera.<br>The covered area included all 1542 ha of Barro Colorado Island, all 700 ha of the Panama Canal Watershed Project at Agua Salud, parts of the Gigante peninsula of the Barro Colorado Nature Monument including a long-term factorial nutrient addition experiment as well as experimental liana removal plots, the San Lorenzo canopy crane site and San Lorenzo ForestGEO plot (formerly the Sherman plot), the Parque Metropolitano canopy crane site, the Limbo bird plot on Pipeline Road (Camino Oleoducto) in Parque Nacional Soberania, and other areas in and around annually measured Smithsonian ForestGEO 1-ha plots (Panama Small Plots) of P05, P06, P07, P09, P12, P14, P15, P16, elcharco,fincaroubik,metrop, panamapacifico, soberania, San Lorenzo, Santa Rita, Parque Natural Metropolitano, and Parque Nacional Soberanía.Within all sites there are established plots for the observation of forest diversity, secondary forest regrowth, lianas and more.<br>The data collection campaign was contracted to the company STEREOCARTO which specializes in geographic engineering, GIS, geodesy, and topography. All areas were sampled during May 26 and 27 of 2023 using a helicopter Bell 206 JR III. The dataset contains a wide range of data products such as digital elevation models, digital surface models, canopy height models, orthomosaics,RGB images, classified point clouds and raw LiDAR data.",
                "visible": false,
                "moreInfoLink": "/view/urn%3Auuid%3A0ad802a2-1cbc-4762-b4bf-d4476dea60b8",
                "downloadLink": "https://smithsonian.dataone.org/datasets/ALS_Panama_2023/",
                "attribution": "ForestGEO Smithsonian",
                "cesiumOptions": {
                  "url": "https://smithsonian.dataone.org/tiles/3dtiles/01_Agua_Salud_Alfagia/tileset.json"
                }
              },
              {
                "label": "Gamboa Pipeline",
                "layerId": "gamboa-pipeline",
                "type": "Cesium3DTileset",
                "description": "Data are available for download at: <a href='https://smithsonian.dataone.org/datasets/ALS_Panama_2023/' target='_blank'>https://smithsonian.dataone.org/datasets/ALS_Panama_2023/</a>.<br>Small-footprint airborne lidar, or Airborne Laser Scanning (ALS), data provides detailed information about forest vertical structure as well as ground topography. Such data are used extensively for estimating canopy height, forest above ground biomass density, leaf area indices and more, and for calibrating and validating satellite remote sensing products. The 2023 data collection campaign covered 3825.24 ha across 11 areas. It included both high-lidar data (20.31 shots per square meter) and RGB orthophotos (6 cm resolution). LiDAR data were collected with an IGI LiteMapper 6800i, which incorporates a Riegl LMS680 full waveform sensor. RGB imagery was collected with a Nikon D800E SLR camera.<br>The covered area included all 1542 ha of Barro Colorado Island, all 700 ha of the Panama Canal Watershed Project at Agua Salud, parts of the Gigante peninsula of the Barro Colorado Nature Monument including a long-term factorial nutrient addition experiment as well as experimental liana removal plots, the San Lorenzo canopy crane site and San Lorenzo ForestGEO plot (formerly the Sherman plot), the Parque Metropolitano canopy crane site, the Limbo bird plot on Pipeline Road (Camino Oleoducto) in Parque Nacional Soberania, and other areas in and around annually measured Smithsonian ForestGEO 1-ha plots (Panama Small Plots) of P05, P06, P07, P09, P12, P14, P15, P16, elcharco,fincaroubik,metrop, panamapacifico, soberania, San Lorenzo, Santa Rita, Parque Natural Metropolitano, and Parque Nacional Soberanía.Within all sites there are established plots for the observation of forest diversity, secondary forest regrowth, lianas and more.<br>The data collection campaign was contracted to the company STEREOCARTO which specializes in geographic engineering, GIS, geodesy, and topography. All areas were sampled during May 26 and 27 of 2023 using a helicopter Bell 206 JR III. The dataset contains a wide range of data products such as digital elevation models, digital surface models, canopy height models, orthomosaics,RGB images, classified point clouds and raw LiDAR data.",
                "visible": false,
                "moreInfoLink": "/view/urn%3Auuid%3A0ad802a2-1cbc-4762-b4bf-d4476dea60b8",
                "downloadLink": "https://smithsonian.dataone.org/datasets/ALS_Panama_2023/",
                "attribution": "ForestGEO Smithsonian",
                "cesiumOptions": {
                  "url": "https://smithsonian.dataone.org/tiles/3dtiles/02_Gamboa_Pipeline/tileset.json"
                }
              },
              {
                "label": "Barro Colorado Island",
                "layerId": "barro-colorado-island",
                "type": "Cesium3DTileset",
                "description": "Data are available for download at: <a href='https://smithsonian.dataone.org/datasets/ALS_Panama_2023/' target='_blank'>https://smithsonian.dataone.org/datasets/ALS_Panama_2023/</a>.<br>Small-footprint airborne lidar, or Airborne Laser Scanning (ALS), data provides detailed information about forest vertical structure as well as ground topography. Such data are used extensively for estimating canopy height, forest above ground biomass density, leaf area indices and more, and for calibrating and validating satellite remote sensing products. The 2023 data collection campaign covered 3825.24 ha across 11 areas. It included both high-lidar data (20.31 shots per square meter) and RGB orthophotos (6 cm resolution). LiDAR data were collected with an IGI LiteMapper 6800i, which incorporates a Riegl LMS680 full waveform sensor. RGB imagery was collected with a Nikon D800E SLR camera.<br>The covered area included all 1542 ha of Barro Colorado Island, all 700 ha of the Panama Canal Watershed Project at Agua Salud, parts of the Gigante peninsula of the Barro Colorado Nature Monument including a long-term factorial nutrient addition experiment as well as experimental liana removal plots, the San Lorenzo canopy crane site and San Lorenzo ForestGEO plot (formerly the Sherman plot), the Parque Metropolitano canopy crane site, the Limbo bird plot on Pipeline Road (Camino Oleoducto) in Parque Nacional Soberania, and other areas in and around annually measured Smithsonian ForestGEO 1-ha plots (Panama Small Plots) of P05, P06, P07, P09, P12, P14, P15, P16, elcharco,fincaroubik,metrop, panamapacifico, soberania, San Lorenzo, Santa Rita, Parque Natural Metropolitano, and Parque Nacional Soberanía.Within all sites there are established plots for the observation of forest diversity, secondary forest regrowth, lianas and more.<br>The data collection campaign was contracted to the company STEREOCARTO which specializes in geographic engineering, GIS, geodesy, and topography. All areas were sampled during May 26 and 27 of 2023 using a helicopter Bell 206 JR III. The dataset contains a wide range of data products such as digital elevation models, digital surface models, canopy height models, orthomosaics,RGB images, classified point clouds and raw LiDAR data.",
                "visible": false,
                "moreInfoLink": "/view/urn%3Auuid%3A0ad802a2-1cbc-4762-b4bf-d4476dea60b8",
                "downloadLink": "https://smithsonian.dataone.org/datasets/ALS_Panama_2023/",
                "attribution": "ForestGEO Smithsonian",
                "cesiumOptions": {
                  "url": "https://smithsonian.dataone.org/tiles/3dtiles/03_Barro_Colorado_Island/tileset.json"
                }
              },
              {
                "label": "Gigante Peninsula",
                "layerId": "gigante-peninsula",
                "type": "Cesium3DTileset",
                "description": "Data are available for download at: <a href='https://smithsonian.dataone.org/datasets/ALS_Panama_2023/' target='_blank'>https://smithsonian.dataone.org/datasets/ALS_Panama_2023/</a>.<br>Small-footprint airborne lidar, or Airborne Laser Scanning (ALS), data provides detailed information about forest vertical structure as well as ground topography. Such data are used extensively for estimating canopy height, forest above ground biomass density, leaf area indices and more, and for calibrating and validating satellite remote sensing products. The 2023 data collection campaign covered 3825.24 ha across 11 areas. It included both high-lidar data (20.31 shots per square meter) and RGB orthophotos (6 cm resolution). LiDAR data were collected with an IGI LiteMapper 6800i, which incorporates a Riegl LMS680 full waveform sensor. RGB imagery was collected with a Nikon D800E SLR camera.<br>The covered area included all 1542 ha of Barro Colorado Island, all 700 ha of the Panama Canal Watershed Project at Agua Salud, parts of the Gigante peninsula of the Barro Colorado Nature Monument including a long-term factorial nutrient addition experiment as well as experimental liana removal plots, the San Lorenzo canopy crane site and San Lorenzo ForestGEO plot (formerly the Sherman plot), the Parque Metropolitano canopy crane site, the Limbo bird plot on Pipeline Road (Camino Oleoducto) in Parque Nacional Soberania, and other areas in and around annually measured Smithsonian ForestGEO 1-ha plots (Panama Small Plots) of P05, P06, P07, P09, P12, P14, P15, P16, elcharco,fincaroubik,metrop, panamapacifico, soberania, San Lorenzo, Santa Rita, Parque Natural Metropolitano, and Parque Nacional Soberanía.Within all sites there are established plots for the observation of forest diversity, secondary forest regrowth, lianas and more.<br>The data collection campaign was contracted to the company STEREOCARTO which specializes in geographic engineering, GIS, geodesy, and topography. All areas were sampled during May 26 and 27 of 2023 using a helicopter Bell 206 JR III. The dataset contains a wide range of data products such as digital elevation models, digital surface models, canopy height models, orthomosaics,RGB images, classified point clouds and raw LiDAR data.",
                "visible": false,
                "moreInfoLink": "/view/urn%3Auuid%3A0ad802a2-1cbc-4762-b4bf-d4476dea60b8",
                "downloadLink": "https://smithsonian.dataone.org/datasets/ALS_Panama_2023/",
                "attribution": "ForestGEO Smithsonian",
                "cesiumOptions": {
                  "url": "https://smithsonian.dataone.org/tiles/3dtiles/04_Gigante_Peninsula/tileset.json"
                }
              },
              {
                "label": "Parque Natural Metropolitano",
                "layerId": "parque-natural-metropolitano",
                "type": "Cesium3DTileset",
                "description": "Data are available for download at: <a href='https://smithsonian.dataone.org/datasets/ALS_Panama_2023/' target='_blank'>https://smithsonian.dataone.org/datasets/ALS_Panama_2023/</a>.<br>Small-footprint airborne lidar, or Airborne Laser Scanning (ALS), data provides detailed information about forest vertical structure as well as ground topography. Such data are used extensively for estimating canopy height, forest above ground biomass density, leaf area indices and more, and for calibrating and validating satellite remote sensing products. The 2023 data collection campaign covered 3825.24 ha across 11 areas. It included both high-lidar data (20.31 shots per square meter) and RGB orthophotos (6 cm resolution). LiDAR data were collected with an IGI LiteMapper 6800i, which incorporates a Riegl LMS680 full waveform sensor. RGB imagery was collected with a Nikon D800E SLR camera.<br>The covered area included all 1542 ha of Barro Colorado Island, all 700 ha of the Panama Canal Watershed Project at Agua Salud, parts of the Gigante peninsula of the Barro Colorado Nature Monument including a long-term factorial nutrient addition experiment as well as experimental liana removal plots, the San Lorenzo canopy crane site and San Lorenzo ForestGEO plot (formerly the Sherman plot), the Parque Metropolitano canopy crane site, the Limbo bird plot on Pipeline Road (Camino Oleoducto) in Parque Nacional Soberania, and other areas in and around annually measured Smithsonian ForestGEO 1-ha plots (Panama Small Plots) of P05, P06, P07, P09, P12, P14, P15, P16, elcharco,fincaroubik,metrop, panamapacifico, soberania, San Lorenzo, Santa Rita, Parque Natural Metropolitano, and Parque Nacional Soberanía.Within all sites there are established plots for the observation of forest diversity, secondary forest regrowth, lianas and more.<br>The data collection campaign was contracted to the company STEREOCARTO which specializes in geographic engineering, GIS, geodesy, and topography. All areas were sampled during May 26 and 27 of 2023 using a helicopter Bell 206 JR III. The dataset contains a wide range of data products such as digital elevation models, digital surface models, canopy height models, orthomosaics,RGB images, classified point clouds and raw LiDAR data.",
                "visible": false,
                "moreInfoLink": "/view/urn%3Auuid%3A0ad802a2-1cbc-4762-b4bf-d4476dea60b8",
                "downloadLink": "https://smithsonian.dataone.org/datasets/ALS_Panama_2023/",
                "attribution": "ForestGEO Smithsonian",
                "cesiumOptions": {
                  "url": "https://smithsonian.dataone.org/tiles/3dtiles/05_Parque_Natural_Metropolitano/tileset.json"
                }
              },
              {
                "label": "Panama Pacifico",
                "layerId": "panama-pacifico",
                "type": "Cesium3DTileset",
                "description": "Data are available for download at: <a href='https://smithsonian.dataone.org/datasets/ALS_Panama_2023/' target='_blank'>https://smithsonian.dataone.org/datasets/ALS_Panama_2023/</a>.<br>Small-footprint airborne lidar, or Airborne Laser Scanning (ALS), data provides detailed information about forest vertical structure as well as ground topography. Such data are used extensively for estimating canopy height, forest above ground biomass density, leaf area indices and more, and for calibrating and validating satellite remote sensing products. The 2023 data collection campaign covered 3825.24 ha across 11 areas. It included both high-lidar data (20.31 shots per square meter) and RGB orthophotos (6 cm resolution). LiDAR data were collected with an IGI LiteMapper 6800i, which incorporates a Riegl LMS680 full waveform sensor. RGB imagery was collected with a Nikon D800E SLR camera.<br>The covered area included all 1542 ha of Barro Colorado Island, all 700 ha of the Panama Canal Watershed Project at Agua Salud, parts of the Gigante peninsula of the Barro Colorado Nature Monument including a long-term factorial nutrient addition experiment as well as experimental liana removal plots, the San Lorenzo canopy crane site and San Lorenzo ForestGEO plot (formerly the Sherman plot), the Parque Metropolitano canopy crane site, the Limbo bird plot on Pipeline Road (Camino Oleoducto) in Parque Nacional Soberania, and other areas in and around annually measured Smithsonian ForestGEO 1-ha plots (Panama Small Plots) of P05, P06, P07, P09, P12, P14, P15, P16, elcharco,fincaroubik,metrop, panamapacifico, soberania, San Lorenzo, Santa Rita, Parque Natural Metropolitano, and Parque Nacional Soberanía.Within all sites there are established plots for the observation of forest diversity, secondary forest regrowth, lianas and more.<br>The data collection campaign was contracted to the company STEREOCARTO which specializes in geographic engineering, GIS, geodesy, and topography. All areas were sampled during May 26 and 27 of 2023 using a helicopter Bell 206 JR III. The dataset contains a wide range of data products such as digital elevation models, digital surface models, canopy height models, orthomosaics,RGB images, classified point clouds and raw LiDAR data.",
                "visible": false,
                "moreInfoLink": "/view/urn%3Auuid%3A0ad802a2-1cbc-4762-b4bf-d4476dea60b8",
                "downloadLink": "https://smithsonian.dataone.org/datasets/ALS_Panama_2023/",
                "attribution": "ForestGEO Smithsonian",
                "cesiumOptions": {
                  "url": "https://smithsonian.dataone.org/tiles/3dtiles/06_Panama_Pacifico/tileset.json"
                }
              },
              {
                "label": "San Lorenzo",
                "layerId": "san-lorenzo",
                "type": "Cesium3DTileset",
                "description": "Data are available for download at: <a href='https://smithsonian.dataone.org/datasets/ALS_Panama_2023/' target='_blank'>https://smithsonian.dataone.org/datasets/ALS_Panama_2023/</a>.<br>Small-footprint airborne lidar, or Airborne Laser Scanning (ALS), data provides detailed information about forest vertical structure as well as ground topography. Such data are used extensively for estimating canopy height, forest above ground biomass density, leaf area indices and more, and for calibrating and validating satellite remote sensing products. The 2023 data collection campaign covered 3825.24 ha across 11 areas. It included both high-lidar data (20.31 shots per square meter) and RGB orthophotos (6 cm resolution). LiDAR data were collected with an IGI LiteMapper 6800i, which incorporates a Riegl LMS680 full waveform sensor. RGB imagery was collected with a Nikon D800E SLR camera.<br>The covered area included all 1542 ha of Barro Colorado Island, all 700 ha of the Panama Canal Watershed Project at Agua Salud, parts of the Gigante peninsula of the Barro Colorado Nature Monument including a long-term factorial nutrient addition experiment as well as experimental liana removal plots, the San Lorenzo canopy crane site and San Lorenzo ForestGEO plot (formerly the Sherman plot), the Parque Metropolitano canopy crane site, the Limbo bird plot on Pipeline Road (Camino Oleoducto) in Parque Nacional Soberania, and other areas in and around annually measured Smithsonian ForestGEO 1-ha plots (Panama Small Plots) of P05, P06, P07, P09, P12, P14, P15, P16, elcharco,fincaroubik,metrop, panamapacifico, soberania, San Lorenzo, Santa Rita, Parque Natural Metropolitano, and Parque Nacional Soberanía.Within all sites there are established plots for the observation of forest diversity, secondary forest regrowth, lianas and more.<br>The data collection campaign was contracted to the company STEREOCARTO which specializes in geographic engineering, GIS, geodesy, and topography. All areas were sampled during May 26 and 27 of 2023 using a helicopter Bell 206 JR III. The dataset contains a wide range of data products such as digital elevation models, digital surface models, canopy height models, orthomosaics,RGB images, classified point clouds and raw LiDAR data.",
                "visible": false,
                "moreInfoLink": "/view/urn%3Auuid%3A0ad802a2-1cbc-4762-b4bf-d4476dea60b8",
                "downloadLink": "https://smithsonian.dataone.org/datasets/ALS_Panama_2023/",
                "attribution": "ForestGEO Smithsonian",
                "cesiumOptions": {
                  "url": "https://smithsonian.dataone.org/tiles/3dtiles/07_San_Lorenzo/tileset.json"
                }
              },
              {
                "label": "Santa Rita",
                "layerId": "santa-rita",
                "type": "Cesium3DTileset",
                "description": "Data are available for download at: <a href='https://smithsonian.dataone.org/datasets/ALS_Panama_2023/' target='_blank'>https://smithsonian.dataone.org/datasets/ALS_Panama_2023/</a>.<br>Small-footprint airborne lidar, or Airborne Laser Scanning (ALS), data provides detailed information about forest vertical structure as well as ground topography. Such data are used extensively for estimating canopy height, forest above ground biomass density, leaf area indices and more, and for calibrating and validating satellite remote sensing products. The 2023 data collection campaign covered 3825.24 ha across 11 areas. It included both high-lidar data (20.31 shots per square meter) and RGB orthophotos (6 cm resolution). LiDAR data were collected with an IGI LiteMapper 6800i, which incorporates a Riegl LMS680 full waveform sensor. RGB imagery was collected with a Nikon D800E SLR camera.<br>The covered area included all 1542 ha of Barro Colorado Island, all 700 ha of the Panama Canal Watershed Project at Agua Salud, parts of the Gigante peninsula of the Barro Colorado Nature Monument including a long-term factorial nutrient addition experiment as well as experimental liana removal plots, the San Lorenzo canopy crane site and San Lorenzo ForestGEO plot (formerly the Sherman plot), the Parque Metropolitano canopy crane site, the Limbo bird plot on Pipeline Road (Camino Oleoducto) in Parque Nacional Soberania, and other areas in and around annually measured Smithsonian ForestGEO 1-ha plots (Panama Small Plots) of P05, P06, P07, P09, P12, P14, P15, P16, elcharco,fincaroubik,metrop, panamapacifico, soberania, San Lorenzo, Santa Rita, Parque Natural Metropolitano, and Parque Nacional Soberanía.Within all sites there are established plots for the observation of forest diversity, secondary forest regrowth, lianas and more.<br>The data collection campaign was contracted to the company STEREOCARTO which specializes in geographic engineering, GIS, geodesy, and topography. All areas were sampled during May 26 and 27 of 2023 using a helicopter Bell 206 JR III. The dataset contains a wide range of data products such as digital elevation models, digital surface models, canopy height models, orthomosaics,RGB images, classified point clouds and raw LiDAR data.",
                "visible": false,
                "moreInfoLink": "/view/urn%3Auuid%3A0ad802a2-1cbc-4762-b4bf-d4476dea60b8",
                "downloadLink": "https://smithsonian.dataone.org/tiles/ALS_Panama_2023/",
                "attribution": "ForestGEO Smithsonian",
                "cesiumOptions": {
                  "url": "https://smithsonian.dataone.org/tiles/3dtiles/08_Santa_Rita/tileset.json"
                }
              },
              {
                "label": "Soberania el Charco",
                "layerId": "soberania-el-charco",
                "type": "Cesium3DTileset",
                "description": "Data are available for download at: <a href='https://smithsonian.dataone.org/datasets/ALS_Panama_2023/' target='_blank'>https://smithsonian.dataone.org/datasets/ALS_Panama_2023/</a>.<br>Small-footprint airborne lidar, or Airborne Laser Scanning (ALS), data provides detailed information about forest vertical structure as well as ground topography. Such data are used extensively for estimating canopy height, forest above ground biomass density, leaf area indices and more, and for calibrating and validating satellite remote sensing products. The 2023 data collection campaign covered 3825.24 ha across 11 areas. It included both high-lidar data (20.31 shots per square meter) and RGB orthophotos (6 cm resolution). LiDAR data were collected with an IGI LiteMapper 6800i, which incorporates a Riegl LMS680 full waveform sensor. RGB imagery was collected with a Nikon D800E SLR camera.<br>The covered area included all 1542 ha of Barro Colorado Island, all 700 ha of the Panama Canal Watershed Project at Agua Salud, parts of the Gigante peninsula of the Barro Colorado Nature Monument including a long-term factorial nutrient addition experiment as well as experimental liana removal plots, the San Lorenzo canopy crane site and San Lorenzo ForestGEO plot (formerly the Sherman plot), the Parque Metropolitano canopy crane site, the Limbo bird plot on Pipeline Road (Camino Oleoducto) in Parque Nacional Soberania, and other areas in and around annually measured Smithsonian ForestGEO 1-ha plots (Panama Small Plots) of P05, P06, P07, P09, P12, P14, P15, P16, elcharco,fincaroubik,metrop, panamapacifico, soberania, San Lorenzo, Santa Rita, Parque Natural Metropolitano, and Parque Nacional Soberanía.Within all sites there are established plots for the observation of forest diversity, secondary forest regrowth, lianas and more.<br>The data collection campaign was contracted to the company STEREOCARTO which specializes in geographic engineering, GIS, geodesy, and topography. All areas were sampled during May 26 and 27 of 2023 using a helicopter Bell 206 JR III. The dataset contains a wide range of data products such as digital elevation models, digital surface models, canopy height models, orthomosaics,RGB images, classified point clouds and raw LiDAR data.",
                "visible": false,
                "moreInfoLink": "/view/urn%3Auuid%3A0ad802a2-1cbc-4762-b4bf-d4476dea60b8",
                "downloadLink": "https://smithsonian.dataone.org/datasets/ALS_Panama_2023/",
                "attribution": "ForestGEO Smithsonian",
                "cesiumOptions": {
                  "url": "https://smithsonian.dataone.org/tiles/3dtiles/09_Soberania_El_Charco/tileset.json"
                }
              },
              {
                "label": "Soberania part 2",
                "layerId": "soberania-p02",
                "type": "Cesium3DTileset",
                "description": "Data are available for download at: <a href='https://smithsonian.dataone.org/datasets/ALS_Panama_2023/' target='_blank'>https://smithsonian.dataone.org/datasets/ALS_Panama_2023/</a>.<br>Small-footprint airborne lidar, or Airborne Laser Scanning (ALS), data provides detailed information about forest vertical structure as well as ground topography. Such data are used extensively for estimating canopy height, forest above ground biomass density, leaf area indices and more, and for calibrating and validating satellite remote sensing products. The 2023 data collection campaign covered 3825.24 ha across 11 areas. It included both high-lidar data (20.31 shots per square meter) and RGB orthophotos (6 cm resolution). LiDAR data were collected with an IGI LiteMapper 6800i, which incorporates a Riegl LMS680 full waveform sensor. RGB imagery was collected with a Nikon D800E SLR camera.<br>The covered area included all 1542 ha of Barro Colorado Island, all 700 ha of the Panama Canal Watershed Project at Agua Salud, parts of the Gigante peninsula of the Barro Colorado Nature Monument including a long-term factorial nutrient addition experiment as well as experimental liana removal plots, the San Lorenzo canopy crane site and San Lorenzo ForestGEO plot (formerly the Sherman plot), the Parque Metropolitano canopy crane site, the Limbo bird plot on Pipeline Road (Camino Oleoducto) in Parque Nacional Soberania, and other areas in and around annually measured Smithsonian ForestGEO 1-ha plots (Panama Small Plots) of P05, P06, P07, P09, P12, P14, P15, P16, elcharco,fincaroubik,metrop, panamapacifico, soberania, San Lorenzo, Santa Rita, Parque Natural Metropolitano, and Parque Nacional Soberanía.Within all sites there are established plots for the observation of forest diversity, secondary forest regrowth, lianas and more.<br>The data collection campaign was contracted to the company STEREOCARTO which specializes in geographic engineering, GIS, geodesy, and topography. All areas were sampled during May 26 and 27 of 2023 using a helicopter Bell 206 JR III. The dataset contains a wide range of data products such as digital elevation models, digital surface models, canopy height models, orthomosaics,RGB images, classified point clouds and raw LiDAR data.",
                "visible": false,
                "moreInfoLink": "/view/urn%3Auuid%3A0ad802a2-1cbc-4762-b4bf-d4476dea60b8",
                "downloadLink": "https://smithsonian.dataone.org/datasets/ALS_Panama_2023/",
                "attribution": "ForestGEO Smithsonian",
                "cesiumOptions": {
                  "url": "https://smithsonian.dataone.org/tiles/3dtiles/10_Soberania_p02/tileset.json"
                }
              }
            ]
          },
          {
            "label": "Base Layers",
            "icon": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d='M160 32c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160zM396 138.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320H328 280 200c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C360.5 132 368 128 376 128s15.5 4 20 10.7zM192 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120z'/></svg>",
            "layers": [
              {
                "label": "Open Topographic Map",
                "layerId": "open-topographic-map",
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
                "layerId": "open-street-maps",
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
                "layerId": "satellite-imagery",
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
        ],
        "zoomPresets": [
          {
            "title": "Barro Colorado Island",
            "latitude": 9.15217,
            "longitude": -79.84791,
            "height": 10000,
            "description": "The 15-square-kilometer island is home to one of the oldest tropical research stations in the world, where studies have been carried out for more than 100 years.",
            "layerIds": [
              "barro-colorado-island",
              "satellite-imagery"
            ]
          },
          {
            "title": "Parque Natural Metropolitano",
            "latitude": 8.99443,
            "longitude": -79.53458,
            "height": 4000,
            "description": "Parque Natural Metropolitano comprises an area of 270 ha and is the only natural, undisturbed park in tropical Latin America located adjacent to a capital city.",
            "layerIds": [
              "parque-natural-metropolitano",
              "open-street-maps"
            ]
          },
          {
            "title": "Sherman Field Station",
            "latitude": 9.28288,
            "longitude": -79.97435,
            "height": 1500,
            "description": "Located 100 km north of Panama City, the Sherman Field Station at Parque Nacional San Lorenzo hosts one of STRI’s crane facilities. This field station was conceived to conduct research in a wet evergreen forest on the Caribbean coast of Panama.",
            "layerIds": [
              "san-lorenzo",
              "satellite-imagery"
            ]
          }
        ],
        "showToolbar": true,
        "toolbarOpen": false,
        "showScaleBar": true,
        "showFeatureInfo": true,
        "showViewfinder": true
    },

    /* Metadata View */

    // /* Metrics */
    displayDatasetQualityMetric: true,
    hideSummaryMetadataAssessment: false,
    hideSummaryDownloadsChart: false,
    hideSummaryCitationsChart: false,
    hideSummaryViewsChart: false,
    // /* Editor */
    defaultAccessPolicy: [
        {
            subject: "CN=DataONE-Support,DC=dataone,DC=org",
            read: true,
            write: true,
            changePermission: true
        },
        {
            subject: "CN=smithsonian-admins,DC=dataone,DC=org",
            read: true,
            write: true,
            changePermission: true
        },
        {
            subject: "CN=smithsonian-curators,DC=dataone,DC=org",
            read: true,
            write: true,
            changePermission: false
        },
        {
            subject: "public",
            read: true
        }
    ],
    hiddenSubjectsInAccessPolicy: ["CN=DataONE-Support,DC=dataone,DC=org", "CN=smithsonian-admins,DC=dataone,DC=org", "CN=smithsonian-curators,DC=dataone,DC=org"],
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
