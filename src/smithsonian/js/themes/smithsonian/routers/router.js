/*global Backbone */
'use strict';

define(['jquery', 'underscore', 'backbone', 'routers/BaseRouter'],
    function ($, _, Backbone, BaseRouter) {

        // MetacatUI Router
        // ----------------
        var UIRouter = BaseRouter.extend({
            
            routes: _.extend(BaseRouter.prototype.routes, {
                "support(/:anchorId)(/)": "renderSupport",
            }),

            /**
             * Render the support page
             * @return {object} the rendered support page
             */
            renderSupport: function (anchorId) {
                this.routeHistory.push("support");
                MetacatUI.appModel.set('anchorId', anchorId);
                var options = {
                    pageName: "support",
                    anchorId: anchorId
                }

                this.renderText(options);
            }
        });
        return UIRouter;
    });
