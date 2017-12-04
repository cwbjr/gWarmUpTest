const assert = require("chai").assert;
const index = require("../index");

describe("function", function() {
    describe("#addTwoNums", function() {
        it("should add two numbers", function() {
            assert.equal(index.addTwoNums(2, 2), 4);
        });
    });
});
