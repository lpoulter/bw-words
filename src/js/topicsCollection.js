/**
 * Collection to store topic models
 * maintains meta data about the collection
 * max volume - the largest volume in the collection
 */

var wordCloudApp = wordCloudApp || {};

wordCloudApp.TopicsCollection = Backbone.Collection.extend({
    model: wordCloudApp.TopicModel,
    url: "js/topics.json",
    initialize: function () {
    },
    parse: function (response) {
        //json file format {topics:[]}
        var topics = response.topics;

        this.rangeCutOffs = this.findSizes(topics);

        return topics;
    },
    /**
     * given an array of topics finds the 6 cut of values
     * used in model to set font-size for each topic
     * @param topics
     * @returns {Array}
     */
    findSizes: function (topics) {
        var volumesArr = this.getVolumesArr(topics);
        //find 1/6 of topics length rounded up
        var sizeOfPods = Math.ceil(volumesArr.length/ 6);
        //we want 6 cut offs one for each font-size
        var rangeCutOffs = [];
        _.each(volumesArr,function (ele, index) {
            //save every x element in rangeCutOffs
            if(( (index +1) % sizeOfPods ) === 0  ){
                rangeCutOffs.push(ele);
            }
        });

        return rangeCutOffs;

    },
    /**
     * helper function to extract volumes from topics
     * @returns {Array} -sorted, of volumes
     */
    getVolumesArr: function (topics) {
        var volumes = [];
        _.each(topics, function (item) {
            volumes.push(item.volume);
        }, this);
        //sort by int
        volumes.sort(function(a,b) {
            return a - b;
        });
        return volumes;
    }
});
