/**
 * View for individual topic words in word cloud
 * Listens for click to render topic detail
 */

var wordCloudApp = wordCloudApp || {};

wordCloudApp.TopicListView = Backbone.View.extend(
    {
        template: _.template($('#topicTemplate').html()),
        tagName: 'div',
        className: 'topic-link-wrapper',
        events: {
            'click .topic-link': 'viewTopicDetail'
        },
        render: function () {
            this.$el.html(this.template(this.model.attributes));

            return this;
        },
        //render view for topic selected
        viewTopicDetail: function () {
            var topicView = new wordCloudApp.TopicView(this.model);
            topicView.render();
        }
    }
);
