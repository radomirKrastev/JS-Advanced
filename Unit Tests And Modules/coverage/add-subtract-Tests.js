const { assert } = require("chai");
const createCalculator = require("../LAB/add-subtract");

describe("Add - Subtract from Lab", () => {
  let calc;

  beforeEach(() => {
    calc = createCalculator();
  });

  it("add(1), add('1'), subtract(1), add('-1'), subtract('-1') returns(3)", () => {
    calc.add(1);
    calc.add("1");
    calc.subtract(1);
    calc.add("-1");
    calc.subtract("-1");
    assert.equal(calc.get(), 1);
  });
});
