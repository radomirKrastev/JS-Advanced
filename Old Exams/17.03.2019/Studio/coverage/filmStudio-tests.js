const { assert } = require("chai");
const FilmStudio = require("../filmStudio");

describe("Test FilmStudio", () => {
  let studio;

  beforeEach(() => {
    studio = new FilmStudio("21st Century");
  });

  describe("Test Constructor", () => {
    it("Constructor sets name and creates empty Array", () => {
      assert.equal(studio.name, "21st Century");
      assert.equal(studio.films.length, 0);
    });
  });

  describe("makeMovie function", () => {
    it("Successfully creates movie and returns it as object", () => {
      studio.makeMovie("Pirates", ["Stoyan barmana"]);
      assert.equal(studio.films[0].filmName, "Pirates");
      assert.equal(studio.films[0].filmRoles[0].role, "Stoyan barmana");
      assert.isNotTrue(studio.films[0].filmRoles[0].actor);
    });

    it("Successfully creates movie sequence and returns it as object", () => {
      studio.makeMovie("Pirates", ["Stoyan barmana"]);
      studio.makeMovie("Pirates", ["Stoyan barmana"]);
      assert.equal(studio.films[1].filmName, "Pirates 2");
    });

    it("Throw 'Invalid arguments count' if arguments !== 2", () => {
      assert.throw(
        () => studio.makeMovie("Pirates", ["Stoyan barmana"], "Peyo Qvorov"),
        "Invalid arguments count"
      );

      assert.throw(
        () => studio.makeMovie("Pirates"),
        "Invalid arguments count"
      );
    });

    it("Throw 'Invalid arguments' if types are not correct", () => {
      assert.throw(() => studio.makeMovie("Pirates", {}), "Invalid arguments");
      assert.throw(
        () => studio.makeMovie(1, ["Stoyan barmana"]),
        "Invalid arguments"
      );
    });
  });

  describe("Test casting function", () => {
    it("Actor gets the role successfully and message is printed", () => {
      studio.makeMovie("The hangover", ["Tyson"]);
      assert.equal(
        studio.casting("Mike", "Tyson"),
        "You got the job! Mr. Mike you are next Tyson in the The hangover. Congratz!"
      );

      assert.equal(studio.films[0].filmRoles[0].actor, "Mike");
    });

    it("Actor does not get desired role and message is printed", () => {
      studio.makeMovie("The hangover", ["Tyson"]);
      assert.equal(
        studio.casting("Mike", "Lois"),
        "Mike, we cannot find a Lois role..."
      );
    });

    it("There are not any films yet -  message is printed", () => {
      studio.casting("Mike", "Lois");
      assert.equal(
        studio.casting("Mike", "Tyson"),
        "There are no films yet in 21st Century."
      );
    });
  });

  describe("Test lookForProducer function", () => {
    it("Prints name and cast", () => {
      studio.makeMovie("The hangover", ["Tyson"]);
      studio.casting("Mike", "Tyson");
      assert.equal(
        studio.lookForProducer("The hangover"),
        `Film name: The hangover\nCast:\nMike as Tyson\n`
      );
    });

    it("Throws Error if movie does not exists", () => {
      assert.throw(
        () => studio.lookForProducer("The hangover"),
        "The hangover do not exist yet, but we need the money..."
      );
    });
  });
});
