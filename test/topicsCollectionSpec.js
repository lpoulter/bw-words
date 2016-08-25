/**
 * Created by Laurie on 25/08/2016.
 */

var wordCloudApp = {};
var expect = chai.expect;
var topics =[
        {
            volume: 45
        },
        {
            volume: -1
        },
        {
            volume: 1
        },
        {
            volume: 90009
        }
];

/**
 * helper function to return topic objects with random volumes
 * also returns array of volumes to test against
 * @param amount
 * @return {{topics: Array, volumes: Array}}
 */
function topicsFactory(amount) {

    var topics = [];
    var volumes = [];

    for(var i = 0 ; i< amount; i++){
        //random number -500 to 500
        var random = Math.floor(Math.random() * (500 - (-500 + 1)) + -500);
        volumes.push(random);
        var topic = { volume: random};
        topics.push(topic);
    }

    volumes.sort(function(a,b) {
        return a - b;
    });
    var topicsWithVolumes = {
        topics: topics,
        volumes: volumes
    };

    return topicsWithVolumes;
}

var topicCollection = {};
var topicsWithVolumes = {};
var volumeArr = [];
var cutOffs = [];

/**
 * mock a data
 * create a collection with mocked data set
 * test getVolumesArr method
 * test findCutOffs
 */

describe("Topic Collection", function () {
    describe("When getting volumes with 1 topics", function () {
        beforeEach(function () {
            topicCollection = new wordCloudApp.TopicsCollection({});
            topicsWithVolumes = topicsFactory(1);
            volumeArr = topicCollection.getVolumesArr(topicsWithVolumes.topics);
        });
        it("correctly extracts the volumes and sorts them", function () {
            expect(volumeArr).to.deep.equal(topicsWithVolumes.volumes);
        });
    });
    describe("When getting volumes with 50 topics", function () {
        beforeEach(function () {
            topicCollection = new wordCloudApp.TopicsCollection({});
            topicsWithVolumes = topicsFactory(50);
            volumeArr = topicCollection.getVolumesArr(topicsWithVolumes.topics);
        });
        it("correctly extracts the volumes and sorts them", function () {
            expect(volumeArr).to.deep.equal(topicsWithVolumes.volumes);
        });
    });
    describe("When calling findCutOffs", function () {
        beforeEach(function () {
            topicCollection = new wordCloudApp.TopicsCollection({});
            volumeArr = [6, 6, 8, 8, 10, 10, 10, 10, 10, 12, 12, 12, 12, 14, 14, 16, 16, 16, 22, 22, 24, 26, 26, 26, 28, 32, 48, 96, 96, 330];
            cutOffs = topicCollection.findCutOffs(topics, volumeArr);
        });
        it("correctly extracts the volumes and sorts them", function () {
            expect(cutOffs).to.deep.equal([10,12,14,22,28,330]);
        });
    });
});

