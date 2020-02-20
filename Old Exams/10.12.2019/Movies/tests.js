const { assert } = require("chai");
const ChristmasMovies = require("./02. Christmas Movies");

describe("Tests …", function() {
  let movies;

  beforeEach(() => {
    movies = new ChristmasMovies();
  });

  it("test buyMovie()", function() {
    let expectedMessage =
      "You just got Warrior to your collection in which Tom Hardy, Joel are taking part!";
    assert.equal(movies.buyMovie("Warrior", ["Tom Hardy", "Tom Hardy", "Joel"]), expectedMessage);

    assert.throws(
      () => movies.buyMovie("Warrior", ["Tom Hardy", "Tom Hardy", "Joel"]),
      "You already own Warrior in your collection!"
    );
    assert.equal(movies.movieCollection[0].name, "Warrior");
    assert.equal(movies.movieCollection[0].actors.length, 2);
    assert.equal(movies.movieCollection[0].actors[0], "Tom Hardy");
    assert.equal(movies.movieCollection[0].actors[1], "Joel");
  });

  it("test discardMovie()", function() {
    assert.throws(() => movies.discardMovie("Warrior"), "Warrior is not at your collection!");

    movies.buyMovie("Warrior", ["Tom Hardy"]);
    movies.buyMovie("LOTR", ["Orlando Bloom"]);
    movies.watchMovie("Warrior");

    assert.throws(() => movies.discardMovie("LOTR"), "LOTR is not watched!");
    assert.equal(movies.movieCollection.length, 1);

    assert.equal(movies.discardMovie("Warrior"), "You just threw away Warrior!");
    assert.equal(movies.watched.hasOwnProperty("Warrior"), false);
  });

  it("test watchMovie()", function() {
    assert.throws(() => movies.watchMovie("Warrior"), "No such movie in your collection!");

    movies.buyMovie("Warrior", ["Tom Hardy"]);
    movies.watchMovie("Warrior");
    assert.equal(movies.watched.Warrior, 1);
    movies.watchMovie("Warrior");
    assert.equal(movies.watched.Warrior, 2);
  });

  it("test favouriteMovie()", function() {
    assert.throws(() => movies.favouriteMovie(), "You have not watched a movie yet this year!");

    movies.buyMovie("Warrior", ["Tom Hardy"]);
    movies.buyMovie("Armagedon", ["John Testovich"]);
    movies.watchMovie("Warrior");
    movies.watchMovie("Warrior");
    movies.watchMovie("Armagedon");
    assert.equal(
      movies.favouriteMovie(),
      "Your favourite movie is Warrior and you have watched it 2 times!"
    );
  });

  it("test mostStarredActor()", function() {
    assert.throws(() => movies.mostStarredActor(), "You have not watched a movie yet this year!");

    movies.buyMovie("Warrior", [
      "John Malkovich, John Malkovich, John Malkovich, John Malkovich, John Malkovich"
    ]);
    movies.buyMovie("LOTR", ["Orlando Bloom"]);
    movies.buyMovie("Pirates of The Caribean", ["Orlando Bloom"]);
    movies.buyMovie("Kingdom of Heaven", ["Orlando Bloom"]);

    assert.equal(
      movies.mostStarredActor(),
      "The most starred actor is Orlando Bloom and starred in 3 movies!"
    );
  });
});
