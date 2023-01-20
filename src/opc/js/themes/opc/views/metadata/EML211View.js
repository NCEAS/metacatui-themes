define(['underscore', 'jquery', 'backbone',
        'views/metadata/BaseEML211View',  // Override this view
        'views/metadata/ScienceMetadataView',
        'views/metadata/EMLGeoCoverageView',
        'views/metadata/EMLPartyView',
        'views/metadata/EMLMethodsView',
        'views/metadata/EMLTempCoverageView',
        'models/metadata/eml211/EML211',
        'models/metadata/eml211/EMLGeoCoverage',
        'models/metadata/eml211/EMLKeywordSet',
        'models/metadata/eml211/EMLParty',
        'models/metadata/eml211/EMLProject',
        'models/metadata/eml211/EMLText',
        'models/metadata/eml211/EMLTaxonCoverage',
        'models/metadata/eml211/EMLTemporalCoverage',
        'models/metadata/eml211/EMLMethods',
        'text!templates/metadata/eml.html',
        'text!templates/metadata/eml-people.html',
        'text!templates/metadata/EMLPartyCopyMenu.html',
        'text!templates/metadata/metadataOverview.html',
        'text!templates/metadata/dates.html',
        'text!templates/metadata/locationsSection.html',
        'text!templates/metadata/taxonomicCoverage.html',
        'text!templates/metadata/taxonomicClassificationTable.html',
        'text!templates/metadata/taxonomicClassificationRow.html'],
    function(_, $, Backbone,
        BaseEML211View,
        ScienceMetadataView, 
        EMLGeoCoverageView, 
        EMLPartyView, 
        EMLMethodsView, 
        EMLTempCoverageView,
        EML, 
        EMLGeoCoverage,
        EMLKeywordSet, 
        EMLParty, 
        EMLProject, 
        EMLText, 
        EMLTaxonCoverage,
        EMLTemporalCoverage, 
        EMLMethods, 
        Template, 
        PeopleTemplate, 
        EMLPartyCopyMenuTemplate, 
        OverviewTemplate,
        DatesTemplate, 
        LocationsTemplate, 
        TaxonomicCoverageTemplate, 
        TaxonomicClassificationTable, 
        TaxonomicClassificationRow) {

    var EMLView = BaseEML211View.extend({
        /*
         * Adds a single funding input row. Can either be called directly or used as an event callback
         */
        addFunding: function(argument){
            if (this.edit) {
                if (typeof argument == "string") {
                    var value = argument;
                } else if (!argument) {
                    var value = "";
                //Don't add another new funding input if there already is one
                } else if ( !value && (typeof argument == "object") && !$(argument.target).is(".new") ) {
                    return;
                } else if((typeof argument == "object") && argument.target) {
                    var event = argument;

                    // Don't add a new funding row if the current one is empty
                    if ( $(event.target).val().trim() === "") return;
                }

                var fundingInput = $(document.createElement("input"))
                    .attr("type", "text")
                    .attr("data-category", "funding")
                    .addClass("span12 funding hover-autocomplete-target")
                    .attr("placeholder", "Enter information about the funding source of this project")
                    .val(value),
                    hiddenFundingInput = fundingInput.clone().attr("type", "hidden").val(value).attr("id", "").addClass("hidden"),
                    loadingSpinner = $(document.createElement("i")).addClass("icon icon-spinner input-icon icon-spin subtle hidden");

                //Append all the elements to a container
                var containerEl = $(document.createElement("div"))
                    .addClass("ui-autocomplete-container funding-row")
                    .append(fundingInput, loadingSpinner, hiddenFundingInput);

                if (!value) {
                    $(fundingInput).addClass("new");

                    if (event) {
                        $(event.target).parents("div.funding-row").append(this.createRemoveButton(
                                'project', 'funding', '.funding-row', 'div.funding-container'));
                        $(event.target).removeClass("new");
                    }
                } else { // Add a remove button if this is a non-new funding element
                    $(containerEl).append(this.createRemoveButton(
                        'project', 'funding', '.funding-row', 'div.funding-container'));
                }

                var view = this;

                //Setup the autocomplete widget for the funding input
                fundingInput.autocomplete({
                    source: function(request, response){
                        var beforeRequest = function(){
                            loadingSpinner.show();
                        }

                        var afterRequest = function(){
                            loadingSpinner.hide();
                        }

                        return MetacatUI.appLookupModel.getGrantAutocomplete(request, response, beforeRequest, afterRequest)
                    },
                    select: function(e, ui) {
                        e.preventDefault();
                        var value = "NSF Award " + ui.item.value + " (" + ui.item.label + ")";
                        hiddenFundingInput.val(value);
                        fundingInput.val(value);
                        $(".funding .ui-helper-hidden-accessible").hide();
                        loadingSpinner.css("top", "5px");
                        view.updateFunding(e);
                    },
                    position: {
                        my: "left top",
                        at: "left bottom",
                        of: fundingInput,
                        collision: "fit"
                    },
                    appendTo: containerEl,
                    minLength: 3
                });
                this.$(".funding-container").append(containerEl);
            }
        },

        /**
         * Add a keyword to the KeywordSet
         * @param {*} keyword  the keyword to add
         * @param {*} thesaurus  the thesaurus the keyword is a term in
         */
        addKeyword: function(keyword, thesaurus){
            if(typeof keyword != "string" || !keyword){
                var keyword = "";

                //Only show one new keyword row at a time
                if((this.$(".keyword.new").length == 1) && !this.$(".keyword.new").val())
                    return;
                else if(this.$(".keyword.new").length > 1)
                    return;
            }

            //Create the keyword row HTML
            var row = $(document.createElement("div")).addClass("row-fluid keyword-row"),
                keywordInput = $(document.createElement("input"))
                    .attr("type", "text")
                    .addClass("keyword span10")
                    .attr("placeholder", "Add one new keyword"),
                thesInput = $(document.createElement("select"))
                    .addClass("thesaurus span2")
                    .append(
                        $(document.createElement("option"))
                            .val("None")
                            .text("None"))
                    .append(
                        $(document.createElement("option"))
                            .val("California Ocean Protection Council")
                            .text("California Ocean Protection Council"))
                    .append(
                        $(document.createElement("option"))
                            .val("GCMD")
                            .text("GCMD")),
                removeButton;

            // Piece together the inputs
            row.append(keywordInput, thesInput);

            //Select GCMD in the select menu
            if (thesaurus && thesaurus.indexOf("GCMD") > -1) {
                thesInput.val("GCMD");
            }
            // Select CA OPC in the select menu
            if (thesaurus && thesaurus.indexOf("California Ocean Protection Council") > -1) {
                thesInput.val("California Ocean Protection Council");
            }

            if(!keyword)
                row.addClass("new");
            else{

                //Set the keyword value on the text input
                keywordInput.val(keyword);

                // Add a remove button unless this is the .new keyword
                row.append(this.createRemoveButton(null, 'keywordSets', 'div.keyword-row', 'div.keywords'));
            }

            this.$(".keywords").append(row);
        },

        /**
         * Adds a new keyword to the KeywordSet
         * @param {*} e the event triggered by adding a keyword
         */
        addNewKeyword: function(e) {
            if ($(e.target).val().trim() === "") return;

            $(e.target).parents(".keyword-row").first().removeClass("new");

            // Add in a remove button
            $(e.target).parents(".keyword-row")
                .append(this.createRemoveButton(null, 'keywordSets', 'div.keyword-row', 'div.keywords'));

            var row = $(document.createElement("div"))
                .addClass("row-fluid keyword-row new")
                .data({ model: new EMLKeywordSet() }),
                keywordInput = $(document.createElement("input"))
                    .attr("type", "text")
                    .addClass("keyword span10"),
                thesInput = $(document.createElement("select"))
                    .addClass("thesaurus span2")
                    .append(
                        $(document.createElement("option"))
                            .val("None")
                            .text("None"))
                     .append(
                         $(document.createElement("option"))
                             .val("California Ocean Protection Council")
                             .text("California Ocean Protection Council"))
                    .append(
                        $(document.createElement("option"))
                            .val("GCMD")
                            .text("GCMD"));
            row.append(keywordInput, thesInput);
            this.$(".keywords").append(row);
        }
    });
    return EMLView;
});
