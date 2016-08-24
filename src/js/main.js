var wordCloudApp = wordCloudApp || {};





// get total pos/negs
//
// var start = 0
// var total = TopicsCollection.reduce(function (memo, topic) {
//     return memo + topic.senti
// });



/**
 * Wrapper for topic collection
 * holds meta data on collection
 */
// wordCloudApp.TopicCloudModel = Backbone.Model.extend({
//
//     defaults: {
//         dataPoints: new wordCloudApp.TopicsCollection(),
//         max: 999
//     },
//     parse: function(obj) {
//         // update the inner collection
//         this.get("dataPoints").refresh(obj.dataPoints);
//
//         // this mightn't be necessary
//         delete obj.dataPoints;
//
//         return obj;
//     }
// });







// getFontSize: function () {
//     var volumes = [];
//     this.collection.each(function (item) {
//         volumes.concat(item.volume);
//     }, this);
//
//     return volumes;
// },
