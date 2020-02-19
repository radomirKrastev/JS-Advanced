const { assert } = require("chai");
const BookStore = require("../BookStore");

describe("Test BookStore class", () => {
  let store;

  beforeEach(() => {
    store = new BookStore("Flourish and Blotts");
  });

  it("test constructor", () => {
    assert.equal(store.name, "Flourish and Blotts");
    // assert.equal(store.books.length, 0);
    // assert.equal(store.workers.length, 0);
  });

  it("test stockBooks should add each book into book's property", () => {
    let books = ["LOTR-Tolkien"];
    let result = store.stockBooks(books);

    assert.equal(result.length, 1);
    assert.equal(store.books[0].title, "LOTR");
    assert.equal(store.books[0].author, "Tolkien");
  });

  it("test hire worker", () => {
    let expectedMessage = `John started work at Flourish and Blotts as consultant`;
    let expectedError = `This person is our employee`;

    assert.equal(store.hire("John", "consultant"), expectedMessage);
    assert.equal(store.workers[0].name, "John");
    assert.equal(store.workers[0].position, "consultant");
    assert.equal(store.workers[0].booksSold, 0);
    assert.throws(() => store.hire("John", "consultant"), expectedError);
  });

  it("test fire worker", () => {
    let expectedMessage = `John is fired`;
    let expectedError = `John doesn't work here`;

    store.hire("John", "consultant");

    assert.equal(store.fire("John"), expectedMessage);
    assert.equal(store.workers.length, 0);
    assert.throws(() => store.fire("John"), expectedError);
  });

  it("test sellBook", () => {
    let missingBookError = "This book is out of stock";
    let missingWorkerError = `John is not working here`;

    assert.throws(() => store.sellBook("LOTR", "John"), missingBookError);

    store.stockBooks(["LOTR-Tolkien"]);
    assert.throws(() => store.sellBook("LOTR", "John"), missingWorkerError);

    store.hire("John", "consultant");
    store.sellBook("LOTR", "John");

    assert.equal(store.books.length, 0);
    assert.equal(store.workers[0].booksSold, 1);
  });

  it("test printWorkers", () => {
    assert.equal(store.printWorkers(), "");

    store.hire("John", "consultant");
    let expected = "Name:John Position:consultant BooksSold:0";

    assert.equal(store.printWorkers(), expected);
  });
});
