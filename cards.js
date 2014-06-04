// Simple version (no error-detection)

// function()--> possible return values

function makeCard(id) {
    var newCard = { number: id, }, 
        inRange = function (number, min, max) {
        if (typeof (number) !== "number") {
            console.error('validation error! "' + number + '" is not a number');
            return NaN;
        } else if ((number <= max) && (number >= min)) {
            return true;
        } else {
            console.error('validation error! "' + number + '" is outside the given range');
            return undefined;
        }
    };
    if(!inRange(id, 0, 51)) { return false; }

    newCard.rank = makeCard.rank;
    newCard.suit = makeCard.suit;
    newCard.color = makeCard.color;
    newCard.cardID = makeCard.cardID;
    newCard.cardName = makeCard.cardName;
    newCard.precedes = makeCard.precedes;
    newCard.nextInSuit = makeCard.nextInSuit;
    newCard.prevInSuit = makeCard.prevInSuit;
    newCard.inRange = makeCard.inRange;

    return newCard;
}


makeCard.rank = function() { // --> 1..13
return (Math.floor(this.number/4) + 1);
}
makeCard.suit = function(card) { // --> 1..4
return ((this.number) % 4) + 1;
}
makeCard.cardID = function() { // --> 0..51
return this.number;
}
makeCard.color = function(card) { // -->"red","black"
if (this.suit < 3) {
    return "red";
} else {
    return "black";
}
}
makeCard.cardName = function() { // --> string
var nameString = "";
switch (this.rank()) {
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
switch (this.suit()) {
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
}
makeCard.precedes = function(cardB) { //-->false,true
 if (inRange(cardB, 0, 51)) {
    if (cardB.rank() - this.rank()    ===    1) {
        return true;
    } else if ((cardB.rank() == 1) && (this.rank() == 13)) {
        return true;
    } else {
        return false;
    }
 } else {
     return;
 }
}
makeCard.sameColor = function(cardB) { //-->false,true
     if (inRange(cardB, 0, 51)) {
    if (cardB.color() == this.color()) {
        return true;
    } else {
        return false;
    }
 } else {
     return;
 }
}
makeCard.nextInSuit = function() {//--> 0..51
if (this.number < 48) {
    return (this.number + 4);
} else {
    return (this.number + 4 - 52);
}
}
makeCard.prevInSuit = function() {//--> 0..51
if (this.number > 3) {
    return (this.number - 4);
} else {
    return (this.number - 4 + 52);
}
}

// Testing!
var cardA = makeCard(39), cardB = makeCard(43), cardC = makeCard(44);

function assert(claim,message) {
    if (!claim) console.error(message);
}

assert(cardA.rank() === 10, 'cardA rank test failed!');
assert(cardA.suit() === 4, 'cardA suit test failed!');
assert(cardA.cardID() === 39, 'cardA cardID test failed!');
assert(cardA.color() === 'black', 'cardA color test failed!');
assert(cardA.cardName() === 'Ten of Clubs', 'cardA cardName test failed!');
assert(cardA.precedes(cardB) === true, 'cardA precedes test failed!');
assert(cardA.sameColor(cardB) === true, 'cardA sameColor test failed!');
assert(cardA.prevInSuit() === 35, 'cardA prevInSuit test failed!');
assert(cardA.nextInSuit() === 43, 'cardA nextinSuit test failed!');
assert(cardB.rank() === 11, 'cardB rank test failed!');
assert(cardB.suit() === 4, 'cardB suit test failed!');
assert(cardB.cardID() === 43, 'cardB cardID test failed!');
assert(cardB.color() === 'black', 'cardB color test failed!');
assert(cardB.cardName() === 'Jack of Clubs', 'cardB cardName test failed!');
assert(cardB.precedes(cardC) === false, 'cardB precedes test failed!');
assert(cardB.sameColor(cardC) === false, 'cardB sameColor test failed!');
assert(cardB.prevInSuit() === 39, 'cardB prevInSuit test failed!');
assert(cardB.nextInSuit() === 47, 'cardB nextinSuit test failed!');


console.log('Tests complete');