const { assert } = require("chai");
let SkiResort = require("./solution");

describe("SkiResort", function() {
  let skiResort;

  beforeEach(() => {
    skiResort = new SkiResort("SkiWelt");
  });

  it("test constructor", () => {
    assert.equal(skiResort.name, "SkiWelt");
  });

  it("test build() - should return Error if empty name or beds < 1, otherwise returns message", () => {
    assert.throw(() => skiResort.build("", 1), "Invalid input");
    assert.throw(() => skiResort.build("Olymp", 0), "Invalid input");

    let expectedResultMessage = "Successfully built new hotel - Hilton";
    assert.equal(skiResort.build("Hilton", 1), expectedResultMessage);
    assert.equal(skiResort.hotels[0].name, "Hilton");
    assert.equal(skiResort.hotels[0].beds, 1);
    assert.equal(skiResort.hotels[0].points, 0);
    assert.equal(skiResort.hotels.length, 1);
  });

  it("test book()", () => {
    assert.throw(() => skiResort.book("", 1), "Invalid input");
    assert.throw(() => skiResort.book("Olymp", 0), "Invalid input");
    assert.throw(() => skiResort.book("Olymp", 1), "There is no such hotel");

    skiResort.build("Hilton", 1);
    assert.equal(skiResort.book("Hilton", 1), "Successfully booked");
    assert.equal(skiResort.hotels[0].beds, 0);
    assert.throw(() => skiResort.book("Hilton", 1), "There is no free space");
  });

  it("test leave()", () => {
    assert.throw(() => skiResort.leave("", 1, 1), "Invalid input");
    assert.throw(() => skiResort.book("Olymp", 0, 1), "Invalid input");
    assert.throw(() => skiResort.book("Olymp", 1, 1), "There is no such hotel");

    skiResort.build("Hilton", 1);
    skiResort.book("Hilton", 1);
    assert.equal(skiResort.leave("Hilton", 1, 1), "1 people left Hilton hotel");
    assert.equal(skiResort.voters, 1);
    assert.equal(skiResort.hotels[0].beds, 1);
    assert.equal(skiResort.hotels[0].points, 1);
  });

  it("test averageGrade() and bestHotel", () => {
    skiResort.build("Hilton", 1);
    skiResort.build("Olymp", 1);

    assert.equal(skiResort.averageGrade(), "No votes yet");
    assert.equal(skiResort.bestHotel, "No votes yet");

    skiResort.book("Hilton", 1);
    skiResort.leave("Hilton", 1, 2);
    skiResort.book("Olymp", 1);
    skiResort.leave("Olymp", 1, 1);

    assert.equal(skiResort.averageGrade(), "Average grade: 1.50");
    assert.equal(
      skiResort.bestHotel,
      "Best hotel is Hilton with grade 2. Available beds: 1"
    );
  });
});
