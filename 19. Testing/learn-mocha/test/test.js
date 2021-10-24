var assert = require("assert");
var chai = require("chai");
var expect = chai.expect;

describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

var foo = "hello";

describe("Expect String", function () {
  it("should to be a string", function () {
    expect(foo).to.be.a("string");
  });
});
