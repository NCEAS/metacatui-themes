/*global define */
define(["jquery", "underscore", "backbone", "gmaps", "models/BaseMap"],
    function($, _, Backbone, gmaps, BaseMap) {
        "use strict";

        // Map Model
        // ------------------
        var Map = BaseMap.extend({
            // This model contains all of the map settings used for searching datasets
            defaults: function() {
                var model = this;
                return _.extend(BaseMap.prototype.defaults, {
                    mapOptions: (gmaps)? {
                        zoom: 6,
                        maxZoom: 20,
                        minZoom: 1,
                        center: {
                            lat: 36.737413787045384,
                            lng: -121.97238016128541
                        },
                        disableDefaultUI: true,
                        zoomControl: true,
                        zoomControlOptions: {
                            style: google.maps.ZoomControlStyle.LARGE,
                            position: google.maps.ControlPosition.LEFT_CENTER
                        },
                        panControl: false,
                        scaleControl: true,
                        streetViewControl: false,
                        mapTypeControl: true,
                        mapTypeControlOptions: {
                            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                            mapTypeIds: [google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.TERRAIN],
                            position: google.maps.ControlPosition.LEFT_BOTTOM
                        },
                        mapTypeId: google.maps.MapTypeId.TERRAIN,
                        styles: [{
                            "featureType": "water",
                            "stylers": [{
                                "visibility": "on"
                            }, {
                                "color": "#b5cbe4"
                            }]
                        }, {
                            "featureType": "landscape",
                            "stylers": [{
                                "color": "#efefef"
                            }]
                        }, {
                            "featureType": "road.highway",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#83a5b0"
                            }]
                        }, {
                            "featureType": "road.arterial",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#bdcdd3"
                            }]
                        }, {
                            "featureType": "road.local",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#ffffff"
                            }]
                        }, {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#e3eed3"
                            }]
                        }, {
                            "featureType": "administrative",
                            "stylers": [{
                                "visibility": "on"
                            }, {
                                "lightness": 33
                            }]
                        }, {
                            "featureType": "road"
                        }, {
                            "featureType": "poi.park",
                            "elementType": "labels",
                            "stylers": [{
                                "visibility": "on"
                            }, {
                                "lightness": 20
                            }]
                        }, {}, {
                            "featureType": "road",
                            "stylers": [{
                                "lightness": 20
                            }]
                        }]
                    } : null,
                    tileOptions: {
                          fillOpacity: 0.2,
                          strokeWeight: .5,
                          strokePosition: (typeof google != "undefined")? google.maps.StrokePosition.INSIDE : "",
                          strokeOpacity: 1,
                          strokeColor: "#23487a",
                          fillColor: "#23487a"

                    },

                    //The options for the tiles when they are hovered on. Using Google Maps Web API
                    tileOnHover: {
                            fillOpacity: 0.8,
                            strokeColor: "#e6b020",
                            strokePosition: (typeof google != "undefined")? google.maps.StrokePosition.INSIDE : "",
                            strokeWeight: 1,
                            strokeOpacity: 1,
                            fillColor: "#ffe04f"
                    },

                    //The options for the tile text
                    tileLabelColorOnHover: '#23487a',
                    tileLabelColor: '#23487a',

                    //The tile hue - the number of the hue that will be used to color tiles
                    //Tile lightness - percent range of lightness/brightness of this tile hue
                    tileHue: MetacatUI.appModel.get("searchMapTileHue") || "192",
                    tileLightnessMax: 100,
                    tileLightnessMin: 30

                })
            }
        });
        return Map;
    });
