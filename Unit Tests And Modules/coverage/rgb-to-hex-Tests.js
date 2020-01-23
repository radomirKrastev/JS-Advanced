const { assert } = require("chai");
const rgbToHexColor = require("../LAB/rgb-to-hex");

describe("rgb to hex from Lab", () => {
  it("if color param is not integer => undefined", () => {
    assert.equal(rgbToHexColor(1.1, 1, 1), undefined);
    assert.equal(rgbToHexColor(1, "not integer", 1), undefined);
    assert.equal(rgbToHexColor(1, 1, 1.1), undefined);
  });
  it("if color param is less than zero => undefined", () => {
    assert.equal(rgbToHexColor(-1, 1, 1), undefined);
    assert.equal(rgbToHexColor(1, -1, 1), undefined);
    assert.equal(rgbToHexColor(1, 1, -1), undefined);
  });
  it("if color param is greater than 255 => undefined", () => {
    assert.equal(rgbToHexColor(256, 1, 1), undefined);
    assert.equal(rgbToHexColor(1, 256, 1), undefined);
    assert.equal(rgbToHexColor(1, 1, 256), undefined);
  });
  it("0, 0, 0 => #000000", () => {
    assert.equal(rgbToHexColor(0, 0, 0), "#000000");
  });
  it("255, 255, 255 => #FFFFFF", () => {
    assert.equal(rgbToHexColor(255, 255, 255), "#FFFFFF");
  });
});
