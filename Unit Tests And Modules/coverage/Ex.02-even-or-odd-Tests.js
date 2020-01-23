const { assert } = require("chai");
const isOddOrEven = require("../Exercise/even-or-odd");

describe("even or odd 2nd problem from exercise tests", () => {
  it("if parameter is not string => undefined", () => {
    assert.equal(isOddOrEven(12), undefined);
  });
  it("'even' should return even", () => {
    assert.equal(isOddOrEven("even"), "even");
  });
  it("'odd' should return odd", () => {
    assert.equal(isOddOrEven("odd"), "odd");
  });
});
