const { assert } = require("chai");
const SoftUniFy = require("../SoftUnify");

describe("Test SoftUniFy", () => {
  let sofunify;

  beforeEach(() => {
    sofunify = new SoftUniFy();
  });

  it("Constructor initializes empty object - allSongs", () => {
    assert.equal(Object.keys(sofunify.allSongs).length, 0);
    assert.equal(sofunify.allSongs.constructor, Object);
  });

  it("downloadSong works correctly", () => {
    sofunify.downloadSong("Horhe", "Te amo", "Spanish");
    sofunify.downloadSong("Horhe", "Ne te amo", "Spanish");

    assert.equal(sofunify.allSongs.Horhe.rate, 0);
    assert.equal(sofunify.allSongs.Horhe.votes, 0);
    assert.equal(sofunify.allSongs.Horhe.votes, 0);
    assert.equal(sofunify.allSongs.Horhe.songs[0], `Te amo - Spanish`);
    assert.equal(sofunify.allSongs.Horhe.songs[1], `Ne te amo - Spanish`);
  });

  it("playSong works correctly", () => {
    sofunify.downloadSong("Eminem", "Numb", "Spanish");
    sofunify.downloadSong("LP", "Numb", "English");

    let expected = "Eminem:\nNumb - Spanish\nLP:\nNumb - English\n";

    assert.equal(sofunify.playSong("Numb"), expected);
  });

  it("playSong returns message if song is not downloaded or there are not any songs yet", () => {
    let expected = `You have not downloaded a Numb song yet. Use SoftUniFy's function downloadSong() to change that!`;
    assert.equal(sofunify.playSong("Numb"), expected);

    sofunify.downloadSong("Misho", "Shamara", "BG");
    assert.equal(sofunify.playSong("Numb"), expected);
  });

  it("songsList works correctly", () => {
    sofunify.downloadSong("Eminem", "Numb", "Spanish");
    sofunify.downloadSong("LP", "Numb", "English");

    let expected = "Numb - Spanish\nNumb - English";

    assert.equal(sofunify.songsList, expected);
  });

  it("songsList returns message if there are not any songs yet", () => {
    let expected = `Your song list is empty`;

    assert.equal(sofunify.songsList, expected);
  });

  it("rateArtist pass only artist", () => {
    sofunify.downloadSong("Eminem", "Numb", "Spanish");
    assert.equal(sofunify.rateArtist("Eminem"), 0);
  });

  it("rateArtist pass artist and rate", () => {
    sofunify.downloadSong("Eminem", "Numb", "Spanish");
    assert.equal(sofunify.rateArtist("Eminem", 6), 6);
  });

  it("rateArtist if artist is not present, return message", () => {
    let expected = `The Eminem is not on your artist list.`;
    assert.equal(sofunify.rateArtist("Eminem", 6), expected);
  });
});
