function cardFactory(face, suit) {
  class Card {
    _face;
    _suit;
    _validFaces = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A"
    ];
    _validSuits = { S: "♠", H: "♥", D: "♦", C: "♣" };

    constructor(face, suit) {
      this.face = face;
      this.suit = suit;
    }

    get face() {
      return this._face;
    }

    set face(value) {
      if (!this._validFaces.includes(value)) {
        throw new Error("Error");
      }

      this._face = value;
    }

    get suit() {
      return this._suit;
    }

    set suit(value) {
      let typesOfSuit = Object.getOwnPropertyNames(this._validSuits);
      if (!typesOfSuit.includes(value)) {
        throw new Error("Error");
      }

      this._suit = this._validSuits[value];
    }

    toString() {
      return this.face + this.suit;
    }
  }

  return new Card(face, suit);
}

console.log(cardFactory("J", "D").toString());
