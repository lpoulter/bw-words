# Brandwatch Topic Challenge

This repository forms the completed Brandwatch challenge. This is my first project using Backbone.

## Quick start
* Download the source. 
* Navigate to project root and npm install
* npm run build
* npm run serve-prod
* Navigate to http://localhost:8080/

## Tests

npm run test
Navigate to http://localhost:7357/

There are currently 17 unit tests that focus on the word size and color functions however these could be improved on by adding more integration tests 
once I gain more knowledge of the Backbone framework. Unfortunately there is a console error, which does not affect running of the tests, 
caused by the application attempting to read in the topics.json. I ran out of time to rectify this issue but would be solved if 
I move the responsibility of fetching the collection from the collection its self - likely better code anyway.

## Application Structure

As stated this was my first Backbone application as such the structure can likely be improved in the future.
The application is bootstrapped from the app.js file.

app.js initialises a Topics Collection which performs a fetch and updates its view. Each view has an associated model. 
TopicsCollection contains meta data about the collection - volumes, and TopicModel contains information about each topic -font size/color.

## Volume and fonts

The sample data was very unevenly distributed and the brief asked for 6 different font sizes. This caused a problem,
first I split the volumes into uneven pots based on a ratio of their size - against the log of the max. However this caused most topics to be the same 
size. So I decided instead to split the topics into 6 sizes evenly. This has the downside of being more complicated 
but the cloud is more evenly distributed. A good alternative - outside the brief would be to have more than 6 fonts.

Further work would include testing with more production like data sets to get a feel for the right font distribution.

## Sample Volumes
[3, 3, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 8, 8, 8, 11, 11, 12, 13, 13, 13, 14, 16, 24, 48, 48, 165]
