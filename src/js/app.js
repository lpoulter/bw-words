/**
 * Created by Laurie on 20/08/2016.
 * Bootstraps the application
 */

var wordCloudApp = wordCloudApp || {};

$(function () {
    // start the application with new collection with fetches topics
    new wordCloudApp.TopicsCollectionView();
});

