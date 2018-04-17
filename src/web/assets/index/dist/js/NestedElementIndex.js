/** global: Craft */
/** global: Garnish */
/**
 * Nested Element Index
 */
Craft.NestedElementIndex = Craft.BaseElementIndex.extend({

    init: function (elementType, $container, settings) {
        this.base(elementType, $container, $.extend({}, Craft.NestedElementIndex.defaults, settings));
    },

    getViewParams: function () {
        return $.extend(this.base(), this.settings.viewParams);
    },

    getViewClass: function(mode) {
        switch (mode) {
            case 'table':
                return Craft.TableNestedElementIndexView;
            case 'thumbs':
                return new Craft.ThumbsNestedElementIndexView;
            default:
                throw 'View mode "' + mode + '" not supported.';
        }
    },

    createView: function(mode, settings) {
        settings = $.extend(settings, this.settings.viewSettings);
        var viewClass = this.getViewClass(mode);
        return new viewClass(this, this.$elements, settings);
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
        viewParams: [],
        viewSettings: {
            loadMoreAction: 'element-indexes/get-more-elements'
        }
    }
});

Craft.TableNestedElementIndexView = Craft.TableElementIndexView.extend({

    /**
     * This entire function is overridden because of the postActionRequest, that's it
     */
    loadMore: function() {
        if (!this.getMorePending() || this.loadingMore || !this.settings.batchSize) {
            return;
        }

        this.loadingMore = true;
        this.$loadingMoreSpinner.removeClass('hidden');
        this.removeListener(this.$scroller, 'scroll');

        var data = this.getLoadMoreParams();

        Craft.postActionRequest(this.settings.loadMoreAction, data, $.proxy(function(response, textStatus) {
            this.loadingMore = false;
            this.$loadingMoreSpinner.addClass('hidden');

            if (textStatus === 'success') {
                var $newElements = $(response.html);

                this.appendElements($newElements);
                Craft.appendHeadHtml(response.headHtml);
                Craft.appendFootHtml(response.footHtml);
                picturefill();

                if (this.elementSelect) {
                    this.elementSelect.addItems($newElements.filter(':not(.disabled)'));
                    this.elementIndex.updateActionTriggers();
                }

                this.setTotalVisible(this.getTotalVisible() + $newElements.length);
                this.setMorePending($newElements.length == this.settings.batchSize);

                // Is there room to load more right now?
                this.addListener(this.$scroller, 'scroll', 'maybeLoadMore');
                this.maybeLoadMore();
            }

        }, this));
    },

}, {
    defaults: {
        loadMoreAction: 'element-indexes/get-more-elements'
    }
});

Craft.ThumbsNestedElementIndexView = Craft.ThumbsElementIndexView.extend({

    /**
     * This entire function is overridden because of the postActionRequest, that's it
     */
    loadMore: function() {
        if (!this.getMorePending() || this.loadingMore || !this.settings.batchSize) {
            return;
        }

        this.loadingMore = true;
        this.$loadingMoreSpinner.removeClass('hidden');
        this.removeListener(this.$scroller, 'scroll');

        var data = this.getLoadMoreParams();

        Craft.postActionRequest(this.settings.loadMoreAction, data, $.proxy(function(response, textStatus) {
            this.loadingMore = false;
            this.$loadingMoreSpinner.addClass('hidden');

            if (textStatus === 'success') {
                var $newElements = $(response.html);

                this.appendElements($newElements);
                Craft.appendHeadHtml(response.headHtml);
                Craft.appendFootHtml(response.footHtml);
                picturefill();

                if (this.elementSelect) {
                    this.elementSelect.addItems($newElements.filter(':not(.disabled)'));
                    this.elementIndex.updateActionTriggers();
                }

                this.setTotalVisible(this.getTotalVisible() + $newElements.length);
                this.setMorePending($newElements.length == this.settings.batchSize);

                // Is there room to load more right now?
                this.addListener(this.$scroller, 'scroll', 'maybeLoadMore');
                this.maybeLoadMore();
            }

        }, this));
    },

}, {
    defaults: {
        loadMoreAction: 'element-indexes/get-more-elements'
    }
});