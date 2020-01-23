const { assert } = require("chai");
const sum = require("../LAB/sum-of-numbers");

describe("sum-of-numbers from Lab", () => {
  it("[1, 1] => 2", () => {
    assert.equal(sum([1, 1]), 2);
  });
  it("[1] => 1", () => {
    assert.equal(sum([1]), 1);
  });
  it("[1, string] => NaN", () => {
    assert.isNaN(sum([1, "string"]));
  });
});
