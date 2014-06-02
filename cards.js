// Simple version (no error-detection)

// function()--> possible return values

function makeCard(id) {
  var newCard = {
    var number = id; 
    newCard.rank = makeCard.rank;
    newCard.suit = makeCard.suit;
    newCard.color = makeCard.color;
    newCard.cardID = makeCard.cardID;
    newCard.name = makeCard.name;
    newCard.precedes = makeCard.precedes;
    newCard.nextInSuit = makeCard.nextInSuit;
    newCard.prevInSuit = makeCard.prevInSuit;
    inRange: function (number, min, max) {
        if (typeof (number) !== "number") {
            console.error('Validation Error! "' + number + '" is not a number');
            return NaN;
        } else if ((number <= max) && (number >= min)) {
            return true;
        } else {
            console.error('Validation Error! "' + number + '" is outside the given range');
            return undefined;
        }
    },

  }
  
}

   newCard.rank = function (card) { // --> 1..13
        if ( this.inRange(card, 0, 51)) {
            return (Math.floor(card/4) + 1);
        } else {
            return;
        }        
    }
    
    newCard.suit = function (card) { // --> 1..4
        if ( this.inRange(card, 0, 51)) {
            return ((card) % 4) + 1;
        } else {
            return;
        }        
    }
    
    newCard.cardID = function (rank, suit) { // --> 0..51
        if ((this.inRange(rank, 1, 13)) && (this.inRange(suit, 1, 4))) {
            return ((rank - 1) * 4 + suit - 1);
        } else {
            return;
        }        
    }
    
    newCard.color = function (card) { // -->"red","black"
        if ( this.inRange(card, 0, 51)) {
            if (this.suit(card) < 3) {
                return "red";
            } else {
                return "black";
            }
        } else {
            return;
        }
    }
    
    newCard.name = function (card) { // --> string
            if (this.inRange(card, 0, 51)) {
            var nameString = "";
            switch (this.rank(card)) {
            case 1:
                nameString = nameString.concat("Ace");
                break;
            case 2:
                nameString = nameString.concat("Two");
                break;
            case 3:
                nameString = nameString.concat("Three");
                break;
            case 4:
                nameString = nameString.concat("Four");
                break;
            case 5:
                nameString = nameString.concat("Five");
                break;
            case 6:
                nameString = nameString.concat("Six");
                break;
            case 7:
                nameString = nameString.concat("Seven");
                break;
            case 8:
                nameString = nameString.concat("Eight");
                break;
            case 9:
                nameString = nameString.concat("Nine");
                break;
            case 10:
                nameString = nameString.concat("Ten");
                break;
            case 11:
                nameString = nameString.concat("Jack");
                break;
            case 12:
                nameString = nameString.concat("Queen");
                break;
            case 13:
                nameString = nameString.concat("King");
                break;
            }
            nameString = nameString.concat(" of ");
            switch (this.suit(card)) {
            case 1:
                nameString = nameString.concat("Hearts");
                break;
            case 2:
                nameString = nameString.concat("Diamonds");
                break;
            case 3:
                nameString = nameString.concat("Spades");
                break;
            case 4:
                nameString = nameString.concat("Clubs");
                break;
            }
            return nameString;
            } else {
                return;
            }
    }
    
    newCard.precedes = function (cardA, cardB) { //-->false,true
       if ((this.inRange(cardA, 0, 51)) && (this.inRange(cardB, 0, 51))) {
            if (this.rank(cardB) - this.rank(cardA)  ===  1) {
                return true;
            } else if ((this.rank(cardB) == 1) && (this.rank(cardA) == 13)) {
                return true;
            } else {
                return false;
            }
       } else {
           return;
       }
    }
    
    newCard.sameColor = function (cardA, cardB) { //-->false,true
           if ((this.inRange(cardA, 0, 51)) && (this.inRange(cardB, 0, 51))) {
            if (this.color(cardB) == this.color(cardA)) {
                return true;
            } else {
                return false;
            }
       } else {
           return;
       }
        }
    
    newCard.nextInSuit = function (cardA) {//--> 0..51
        if (this.inRange(cardA, 0, 51)) {
            if (cardA < 48) {
                return (cardA + 4);
            } else {
                return (cardA + 4 - 52);
            }
        } else {
    
            return;
        }        
    }
    
    newCard.prevInSuit = function (cardB) {//--> 0..51
        if (this.inRange(cardB, 0, 51)) {
            if (cardB > 3) {
                return (cardB - 4);
            } else {
                return (cardB - 4 + 52);
            }
        } else {
    
            return;
        }        
    }


// TESTING:
var alias = cardReader;//change as needed

function assert(claim,message) {
    if (!claim) console.error(message);
}
assert(alias.rank(0) === 1, "Test 1 failed");
assert(alias.rank(3) === 1, "Test 2 failed");
assert(alias.rank(51) === 13, "Test 3 failed");
assert(alias.suit(0) === 1, "Test 4 failed");
assert(alias.suit(5) === 2, "Test 5 failed");
assert(alias.suit(51) === 4, "Test 6 failed");
assert(alias.cardID(1, 1) === 0, "Test 7 failed");
assert(alias.cardID(13, 4) === 51, "Test 8 failed");
assert(alias.cardID(8, 3) === 30, "Test 9 failed");
assert(alias.color(0) === 'red', "Test 10 failed");
assert(alias.color(2) === 'black', "Test 11 failed");
assert(alias.name(5) === 'Two of Diamonds', "Test 12 failed");
assert(alias.name(51) === 'King of Clubs', "Test 13 failed");
assert(!alias.precedes(0, 1), "Test 14 failed");
assert(alias.precedes(0, 5), "Test 15 failed");
assert(alias.precedes(51, 0), "Test 16 failed");
assert(alias.precedes(50, 2), "Test 17 failed");
assert(alias.sameColor(0, 1), "Test 18 failed");
assert(!alias.sameColor(1, 2), "Test 19 failed");
assert(alias.nextInSuit(0) === 4, "Test 20 failed");
assert(alias.nextInSuit(51) === 3, "Test 21 failed");
assert(alias.nextInSuit(48) === 0, "Test 22 failed");
assert(alias.prevInSuit(0) === 48, "Test 23 failed");
assert(alias.prevInSuit(3) === 51, "Test 24 failed");
assert(alias.prevInSuit(5) === 1, "Test 25 failed");

// Extra testing!
// These tests check that invalid arguments produce invalid output.
// They may need rewriting for certain error-reporting schemes.
assert(!alias.rank(52), "Test 26 failed");
assert(!alias.rank("0"), "Test 27 failed");
assert(!alias.rank(-1), "Test 28 failed");
assert(!alias.suit(52), "Test 29 failed");
assert(!alias.suit(false), "Test 30 failed");
assert(!alias.suit(true), "Test 31 failed");
assert(isNaN(alias.cardID(0, 1)), "Test 32 failed");
assert(isNaN(alias.cardID("1", 1)), "Test 33 failed");
assert(isNaN(alias.cardID(1, 5)), "Test 34 failed");
assert(isNaN(alias.cardID(14, 1)), "Test 35 failed");
assert((typeof alias.color('apple')) != 'string', "Test 36 failed");
assert((typeof alias.name(false)) != 'string', "Test 37 failed");
assert((typeof alias.precedes(51, 52)) != 'boolean', "Test 38 failed");
assert((typeof alias.precedes(-1, 0)), "Test 39 failed");
assert((typeof alias.sameColor("0","1")) != 'boolean', "Test 40 failed");
assert(isNaN(alias.nextInSuit(52)), "Test 41 failed");
assert(isNaN(alias.prevInSuit(52)), "Test 42 failed");
