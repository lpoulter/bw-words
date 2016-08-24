/**
 * View - Displays topics detail in aside
 * label
 * volume
 * sentiment.negative
 * sentiment.positive
 * sentiment.neutral
 */

var wordCloudApp = wordCloudApp || {};

wordCloudApp.TopicView = Backbone.View.extend({
    el: '#topic-detail',
    tagName: 'div',
    template: _.template($('#topic-detail-template').html()),

    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html(this.template(this.attributes));
        return this;
    }
});
