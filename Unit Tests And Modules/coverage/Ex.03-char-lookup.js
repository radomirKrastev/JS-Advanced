const { assert } = require("chai");
const lookupChar = require("../Exercise/char-lookup");

describe("char-lookup tests", () => {
  it("if first param is not string or second param is not int => undefined", () => {
    assert.equal(lookupChar(1, 1), undefined);
    assert.equal(lookupChar("string", "1"), undefined);
    assert.equal(lookupChar("string", 1.1), undefined);
  });
  it("if index is greater than the string length => 'Incorrect index'", () => {
    assert.equal(lookupChar("string", -1), "Incorrect index");
    assert.equal(lookupChar("string", 6), "Incorrect index");
  });
  it("index 1 of 'string' should return 't'", () => {
    assert.equal(lookupChar("string", 1), "t");
  });
});
