/** global: Craft */
/** global: Garnish */
/**
 * Nested Element Index
 */
Craft.NestedElementIndex = Craft.BaseElementIndex.extend({

    init: function (elementType, $container, settings) {
        this.base(elementType, $container, $.extend({}, Craft.NestedElementIndex.defaults, settings));
    console.error(this.$countSpinner);
    },

    initSources: function () {
        this.$countSpinner = this.$container.find('.count-spinner');
        this.$countContainer = this.$container.find('.count-container');
        this.$exportBtn = this.$container.find('.export-btn');

        return this.base();
    },

    getViewParams: function () {
        return $.extend(this.base(), this.settings.viewParams);
    },

    createView: function (mode, settings) {
        return this.base(mode, $.extend(settings, this.settings.viewSettings));
    },

    _isViewPaginated: function _isViewPaginated() {
        return !this.settings.viewSettings.batchSize || this.base();
    },

    setPage: function setPage(page) {
        page = Math.max(page, 1);
        this.page = page;
    },

    // UI state handlers
    // -------------------------------------------------------------------------

    _handleSourceSelectionChange: function () {
        this.base();
        var $option = this.sourceSelect.$selectedItems;
        this.$toolbar.find('.statemenubtn:first').html($option.html());
    }

}, {
    defaults: {
        page: 1,
        viewParams: {},
        viewSettings: {
            batchSize: 100
        }
    }
});