/**
 * Created by Laurie on 23/08/2016.
 */

var wordCloudApp = wordCloudApp || {};

/**
 *  View for collection of topics
 *  Forms the view for the word cloud
 *  Fetches collection and
 *  renders each topic in collection into template
 * @type {any}
 */
wordCloudApp.TopicsCollectionView = Backbone.View.extend({
    el: '#topics-container',

    initialize: function () {
        this.collection = new wordCloudApp.TopicsCollection();
        this.render();
        // re-render view on data reset
        this.listenTo(this.collection, 'reset', this.render);
        this.collection.fetch({reset: true, error: function () {
            console.log('Unable to fetch Topics collection.');
        }});
    },
// render topics collection by rendering each topic in its collection
    render: function () {
        this.collection.each(function (item) {
            this.renderTopic(item);
        }, this);
    },

// render a topic by creating a TopicView and appending the
// element it renders to the collections element
    renderTopic: function (item) {
        var topicListView = new wordCloudApp.TopicListView({
            model: item
        });
        this.$el.append(topicListView.render().el);
    }
});
