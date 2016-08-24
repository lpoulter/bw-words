# Brandwatch Topic Challenge

This repository forms the completed Brandwatch challenge. This is my first project using Backbone.

## Quick start

* Download the source. 
* Run gulp serve-prod (minified code) or gulp serve-dev
* Navigate to http://localhost:8080/

## Application Structure

As stated this was my first Backbone application as such the structure can likley be improved in the future.
The application is bootstrapped from the app.js file.

This initialises a Topics Collection which peforms a fetch and updates its view. Each view has a corresponding view 
which in turn has and associated model. TopicsCollection contains meta data about the collection - volumes, and TopicModel
contains information about each topic.

## Volume and fonts.

The sample data was very unevenly distributed and the brief asked for 6 different font sizes. This caused a problem,
first I split the volumes into uneven pots based on a ratio of there size. However this caused all topics to be the same 
size. So i decided to instead to split the topics into 6 sizes evenly. This has has the downside of being more complicated 
but it the could has a nicer shape.

Further work would inlcuding testing with more production like data sets to get a feel for the right font distribution.

## Sample Volumes
[3, 3, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 8, 8, 8, 11, 11, 12, 13, 13, 13, 14, 16, 24, 48, 48, 165]
