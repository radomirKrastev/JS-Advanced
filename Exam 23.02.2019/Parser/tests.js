let assert = require("chai").assert;
let Parser = require("./solution.js");
describe("Test Info Parser", () => {
  let parser;

  beforeEach(() => {
    parser = new Parser(`[ {"Nancy":"architect"} ]`);
  });

  it("test getter data", () => {
    let result = parser.data;
    assert.equal(typeof result[0], "object");
    assert.equal(result[0].Nancy, "architect");
    assert.equal(parser._log.length, 1);
    assert.equal(parser._log[0], "0: getData");
  });

  it("test print()", () => {
    let expected = "id|name|position\n0|Nancy|architect";
    assert.equal(parser.print(), expected);
    assert.equal(parser._log.length, 1);
    assert.equal(parser._log[0], "0: print");
  });

  it("test addEntries()", () => {
    assert.equal(parser.addEntries("Steven:tech-support Edd:administrator"), "Entries added!");
    assert.equal(parser.data.length, 3);
    assert.equal(parser._log.length, 2);
    assert.equal(parser._log[0], "0: addEntries");
  });

  it("test removeEntry()", () => {
    assert.throw(() => parser.removeEntry("Kate"), "There is no such entry!");

    parser.addEntries("Steven:tech-support");
    assert.equal(parser.removeEntry("Steven"), "Removed correctly!");
    assert.equal(parser._log.length, 2);
    assert.equal(parser._log[1], "1: removeEntry");
    assert.equal(parser.data.length, 1);
    assert.equal(parser._data[1].hasOwnProperty("deleted"), true);
  });
});
