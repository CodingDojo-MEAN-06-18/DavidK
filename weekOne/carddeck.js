class Deck {
    constructor() {
        this.deck = [];
    }
    reset() {
    	//creating our deck of cards
        this.deck = [];
        const suits = ['Clubs', 'Hearts', 'Diamonds', 'Spades'];
        const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

        for (const suit of suits) {
            for (const value of values) {
                this.deck.push(`${ value } of ${ suit }`);
            }
        }

        return this;
    }

    shuffle() {
    	//for 1000 turns switch the values of two random cards
        for (let i = 0; i < 1000; i++) {
			let location1 = Math.floor((Math.random() * this.deck.length));
			let location2 = Math.floor((Math.random() * this.deck.length));
			let tmp = this.deck[location1];

			this.deck[location1] = this.deck[location2];
			this.deck[location2] = tmp;
		}
        return this;
    }

    deal() {
        return this.deck.pop();
    }

}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    draw(deck) {
        this.hand.push(deck.deal());
        return this;
    }

    discard() {
        this.hand.pop();
        return this;
    }
}

const deck2 = new Deck();
deck2.reset().shuffle();
console.log(deck2);
const player2 = new Player("Flynn");
player2.draw(deck2).draw(deck2);
console.log(player2);
console.log(deck2);




