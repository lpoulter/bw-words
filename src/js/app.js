/**
 * Created by Laurie on 20/08/2016.
 * Bootstraps the application
 */
'use strict';

var wordCloudApp = wordCloudApp || {};

$(function () {
    // start the applicatoin by with new collection with fetches topics
    new wordCloudApp.TopicsCollectionView();
});

