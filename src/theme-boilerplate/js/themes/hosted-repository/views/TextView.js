define(["jquery", "underscore", "backbone", 
        "views/BaseTextView",
        "text!templates/alert.html",
        "text!templates/about.html",
        "text!templates/api.html",
        "text!templates/tools.html",
        "text!templates/support.html",
        "text!templates/help-searchTips.html"],
    function($, _, Backbone, BaseTextView, AlertTemplate, AboutTemplate, APITemplate, ToolsTemplate, SupportTemplate, SearchTipsTemplate) {
    "use strict";
        
    /**
     * A generic view that loads a text template.  This overrides the superclass
     * and provides the support template
     * @type {TextView}
     */
    var TextView = BaseTextView.extend({
        support: _.template(SupportTemplate)
    });
    return TextView;
});