let result = (function() {
    let validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]; 
    let Suits = {SPADES: "♠", HEARTS: "♥", DIAMONDS: "♦", CLUBS: "♣"};

    class Card {
        faceValue;
        suitValue;
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this.faceValue;
        } 
        set face(value) {
            if (!validFaces.includes(value)){
                throw new Error("Invalid Face!");
            }
            
            this.faceValue = value;
        }

        get suit() {
            return this.suitValue;
        }
        set suit(value) {
            if (![...Object.values(Suits)].includes(value)){
                throw new Error("Invalid Suit!");
            }
            
            this.suitValue = value;
        }
    }

    return {
        Suits: Suits,
        Card: Card
    };
}());

// let Card = result.Card;
// let suits = result.Suits;

// let newCard = new Card("Q", suits.CLUBS);
// newCard.face = "A";
// newCard.suit = suits.DIAMONDS;

// let secondCard = new Card("1", suits.DIAMONDS);