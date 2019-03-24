/** global: Craft */
/** global: Garnish */
/**
 * Nested Element Index
 */
Craft.NestedElementIndex = Craft.BaseElementIndex.extend({

    init: function (elementType, $container, settings) {
        this.base(elementType, $container, $.extend({}, Craft.NestedElementIndex.defaults, settings));

        // Legacy way of setting the load more elements action
        if(this.settings.viewSettings && this.settings.viewSettings.loadMoreAction) {
            this.settings.loadMoreElementsAction = this.settings.viewSettings.loadMoreAction;
        }
    },

    getViewParams: function () {
        return $.extend(this.base(), this.settings.viewParams);
    },

    // UI state handlers
    // -------------------------------------------------------------------------

    _handleSourceSelectionChange: function () {
        this.base();
        var $option = this.sourceSelect.$selectedItems;
        this.$toolbarFlexContainer.find('.statemenubtn:first').html($option.html());
    }

}, {
    defaults: {
        viewParams: []
    }
});