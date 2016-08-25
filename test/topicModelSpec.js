/**
 * Created by Laurie on 25/08/2016.
 */

var wordCloudApp = {};
var should = chai.should();
var expect = chai.expect;

var options = {
    collection: {
        rangeCutOffs: [1, 2, 3, 4]
    }
};
var topicModel = {};
describe("Topic Model", function () {
    describe("On topic creation", function () {
        beforeEach(function () {
            topicModel = new wordCloudApp.TopicModel({}, options);
        });
        it("creates a new topic model when passed cutoffs", function () {
            should.exist(topicModel);
        });
        it("set's topics text to grey when no sentimentScore present", function () {
            expect(topicModel).to.have.deep.property('attributes.color', 'grey-text');
        });
    });
    describe("Set's the color property correctly", function () {
        it("set's topics text to green when score over 60", function () {
            topicModel = new wordCloudApp.TopicModel({sentimentScore: 61}, options);
            expect(topicModel).to.have.deep.property('attributes.color', 'green-text');
        });
        it("set's topics text to red when score less than 40", function () {
            topicModel = new wordCloudApp.TopicModel({sentimentScore: 39}, options);
            expect(topicModel).to.have.deep.property('attributes.color', 'red-text');
        });
        it("set's topics text to red when negative value", function () {
            topicModel = new wordCloudApp.TopicModel({sentimentScore: -1}, options);
            expect(topicModel).to.have.deep.property('attributes.color', 'red-text');
        });
        it("otherwise set's topics text to grey", function () {
            topicModel = new wordCloudApp.TopicModel({sentimentScore: 40}, options);
            expect(topicModel).to.have.deep.property('attributes.color', 'grey-text');
        });
    });
    describe("Set's the font size property correctly", function () {
        beforeEach(function () {
            options = {
                collection: {
                    rangeCutOffs: [1, 2, 3, 4, 5, 6]
                }
            };
        });
        it("set's topics font size to xs when volume of 1", function () {
            topicModel = new wordCloudApp.TopicModel({volume: 1}, options);
            expect(topicModel).to.have.deep.property('attributes.fontSize', 'xs');
        });
        it("set's topics font size to s when volume of 2", function () {
            topicModel = new wordCloudApp.TopicModel({volume: 2}, options);
            expect(topicModel).to.have.deep.property('attributes.fontSize', 's');
        });
        it("set's topics font size to md when volume of 3", function () {
            topicModel = new wordCloudApp.TopicModel({volume: 3}, options);
            expect(topicModel).to.have.deep.property('attributes.fontSize', 'md');
        });
        it("set's topics font size to lg when volume of 4", function () {
            topicModel = new wordCloudApp.TopicModel({volume: 4}, options);
            expect(topicModel).to.have.deep.property('attributes.fontSize', 'lg');
        });
        it("set's topics font size to xl when volume of 5", function () {
            topicModel = new wordCloudApp.TopicModel({volume: 5}, options);
            expect(topicModel).to.have.deep.property('attributes.fontSize', 'xl');
        });
        it("set's topics font size to xxl when volume of 6", function () {
            topicModel = new wordCloudApp.TopicModel({volume: 6}, options);
            expect(topicModel).to.have.deep.property('attributes.fontSize', 'xxl');
        });
        it("set's topics font size to xs when volume of -1", function () {
            topicModel = new wordCloudApp.TopicModel({volume: -1}, options);
            expect(topicModel).to.have.deep.property('attributes.fontSize', 'xs');
        });
        it("set's topics font size to xxl when volume of greater than last cutoff", function () {
            topicModel = new wordCloudApp.TopicModel({volume: 11}, options);
            expect(topicModel).to.have.deep.property('attributes.fontSize', 'xxl');
        });
    });
});

