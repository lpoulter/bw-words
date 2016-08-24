
var wordCloudApp = wordCloudApp || {};

/**
 * Model for Topic.
 * Sets font size and color attributes
 */
wordCloudApp.TopicModel = Backbone.Model.extend({
    initialize: function (attributes, options) {
        this.setColor();
        this.setFontSize(options.collection.rangeCutOffs);
    },
    /**
     * set color attribute based on sentiment score of topic
     */
    setColor: function () {
        var score = this.get('sentimentScore');
        var color = 'grey-text';
        if (score > 60) {
            color = 'green-text';
        } else if (score < 40) {
            color = 'red-text';
        }
        this.set('color', color);
    },
    /**
     * set font size attribute based on volume of topic
     * @param rangeCutOffs the an array of 6 volumns at which to step
     * up a font size.
     * eg. [5,6,7,15,99,101]
     * volumes over 101 will be set to xxl
     */
    setFontSize: function (rangeCutOffs) {
        var volume = this.get('volume');
        var fontSizes = ['xs', 's', 'md', 'lg', 'xl', 'xxl'];

        var cutOff = _.find(rangeCutOffs, function (cutOff) {
            return volume <= cutOff;
        });

        var fontSize = fontSizes[rangeCutOffs.indexOf(cutOff)];

        this.set('fontSize', fontSize);
    }
});
