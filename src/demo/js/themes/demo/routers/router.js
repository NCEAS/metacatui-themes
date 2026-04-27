/*global Backbone */
"use strict";

define(["jquery", "underscore", "backbone", "routers/BaseRouter"], function (
  $,
  _,
  Backbone,
  BaseRouter,
) {
  // MetacatUI Router
  // ----------------
  var UIRouter = BaseRouter.extend({
    // Don't allow editing or submitting for this node
    renderEditor: function () {
      this.renderIndex();
    },
  });
  return UIRouter;
});
