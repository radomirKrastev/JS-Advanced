const { assert } = require("chai");
const StringBuilder = require("../Exercise/string-builder");

describe("stringBuilder unit tests", () => {
  let builder;
  let keyParameter = "Hello World!";
  let nonStringParams = [{}, [], 1, function() {}, true, false];

  beforeEach(() => {
    builder = new StringBuilder(keyParameter);
  });

  describe("test constructor", () => {
    it("constructor without parameter creates the class successfully and _stringArray is empty array", () => {
      let newStringBuilder = new StringBuilder();
      assert.equal(newStringBuilder.toString(), "");
    });
    it("constructor with string parameter creates the class successfully and _stringArray length is right", () => {
      assert.equal(builder.toString(), keyParameter);
    });
  });

  it("append with string parameter works as expected", () => {
    let parameter = "aBc";
    builder.append(parameter);
    assert.equal(builder.toString(), keyParameter + parameter);
  });

  it("prepend with string parameter works as expected", () => {
    let parameter = "aBc";
    builder.prepend(parameter);
    assert.equal(builder.toString(), parameter + keyParameter);
  });

  it("insertAt with string parameter works as expected", () => {
    let parameter = " big";
    builder.insertAt(parameter, 5);
    assert.equal(builder.toString(), "Hello big World!");
    assert.equal(builder._stringArray.length, 16);
  });

  describe("test remove functionality", () => {
    it("remove works as expected", () => {
      builder.remove("0", "6");
      builder.remove(-1, "1");
      builder.remove(-1, -1);
      assert.equal(builder.toString(), "World");
    });
  });

  describe("test static method _vrfyParam", () => {
    let appendError = function(param) {
      it("append with non string parameter throws TypeError", () => {
        assert.throws(
          () => builder.append(param),
          TypeError,
          "Argument must be string"
        );
      });
    };
    nonStringParams.forEach((x) => appendError(x));
  });

  describe("Saturated test", () => {
    it("", () => {
      let str = new StringBuilder("hello");
      str.append(", there");
      str.prepend("User, ");
      str.insertAt("woop", "5");
      assert.equal(str.toString(), "User,woop hello, there");
      str.remove(6, 3);
      assert.equal(str.toString(), "User,w hello, there");
    });
  });
});
