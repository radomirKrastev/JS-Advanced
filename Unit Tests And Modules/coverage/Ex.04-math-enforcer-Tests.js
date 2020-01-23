const { assert } = require("chai");
const mathEnforcer = require("../Exercise/math-enforcer");

describe("math enforcer unit tests", () => {
  describe("addFive tests", () => {
    it("addFive('1') should return undefined", () => {
      assert.equal(mathEnforcer.addFive("1"), undefined);
    });
    it("addFive(1) => 6, addFive(-1) => 4, addFive(1.1) => 6.1", () => {
      assert.equal(mathEnforcer.addFive(1), 6);
      assert.equal(mathEnforcer.addFive(-1), 4);
      assert.equal(mathEnforcer.addFive(1.1), 6.1);
    });
  });
  describe("subtractTen tests", () => {
    it("subtractTen('1') should return undefined", () => {
      assert.equal(mathEnforcer.subtractTen("1"), undefined);
    });
    it("subtractTen(1) => -9, subtractTen(-1) => -11, subtractTen(1.1) => -8.9", () => {
      assert.equal(mathEnforcer.subtractTen(1), -9);
      assert.equal(mathEnforcer.subtractTen(-1), -11);
      assert.equal(mathEnforcer.subtractTen(1.1), -8.9);
    });
  });
  describe("sum tests", () => {
    it("sum(1, '1') and sum('1', 1) should return undefined", () => {
      assert.equal(mathEnforcer.sum("1", 1), undefined);
      assert.equal(mathEnforcer.sum(1, "1"), undefined);
    });
    it("sum(1, 1) => 2, sum(-1, 1) => 0, sum(1.1, 1.1) => 2.2", () => {
      assert.equal(mathEnforcer.sum(1, 1), 2);
      assert.equal(mathEnforcer.sum(-1, 1), 0);
      assert.equal(mathEnforcer.sum(1.1, 1.1), 2.2);
    });
  });
});
