function printDeckOfCards(cards) {
  function processCard(card) {
    if (card.length > 3 || card.length < 2) {
      throw new Error(`Invalid card: ${card}`);
    }

    let obj = { face: "", suit: "" };

    obj.face = card[0];
    obj.suit = card[card.length - 1];

    if (card.length === 3) {
      obj.face = card[0] + card[1];
    }

    return cardFactory(obj.face, obj.suit);
  }

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
        this._validateCard(this._validFaces, value);
        this._face = value;
      }

      get suit() {
        return this._suit;
      }

      set suit(value) {
        let typesOfSuit = Object.getOwnPropertyNames(this._validSuits);
        this._validateCard(typesOfSuit, value);
        this._suit = this._validSuits[value];
      }

      toString() {
        return this.face + this.suit;
      }

      _validateCard(arr, value) {
        if (!arr.includes(value)) {
          throw new Error(`Invalid card: ${face}${suit}`);
        }
      }
    }

    return new Card(face, suit);
  }

  try {
    console.log(cards.map((x) => processCard(x).toString()).join(" "));
  } catch (e) {
    console.log(e.message);
  }
}

printDeckOfCards(["AS", "10D", "KH", "2C"]);
