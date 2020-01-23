const { assert } = require("chai");
const isSymmetric = require("../LAB/check-for-symmetry");

const nonArrayParams = [1, "a", {}, function() {}, true, false];

describe("check if array is symmetric", () => {
  it("not arrray parameter => false", () => {
    nonArrayParams.forEach((x) => assert.equal(isSymmetric(x), false));
  });
  it("[1, 1] => true", () => {
    assert.equal(isSymmetric([1, 1]), true);
  });
  it("[1, 2] => false", () => {
    assert.equal(isSymmetric([1, 2]), false);
  });
  it("[] => true", () => {
    assert.equal(isSymmetric([]), true);
  });
  it("[1, obj, obj, 1] => true", () => {
    assert.equal(isSymmetric([1, { A: 1 }, { A: 1 }, 1]), true);
  });
});
