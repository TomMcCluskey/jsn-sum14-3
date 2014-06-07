//-------
// Part a): build a deque factory
function makeDeque(values) {
	var newDeque = {array: [], removed: []}, i = 0; //;
    for ( i; i < values.length; i++) {
        newDeque.array[i] = values[i];
    }
    
    newDeque.top = makeDeque.top;
    newDeque.bottom = makeDeque.bottom;
    newDeque.pop = makeDeque.pop;
    newDeque.push = makeDeque.push;
    newDeque.shift = makeDeque.shift;
    newDeque.unshift = makeDeque.unshift;
    newDeque.cut = makeDeque.cut;
    newDeque.map = makeDeque.map;
    newDeque.sort = makeDeque.sort;
   newDeque.shuffle = makeDeque.shuffle; 
   newDeque.FYshuffle = makeDeque.FYshuffle;
   newDeque.removedCard = makeDeque.removedCard;

    return newDeque;
}

makeDeque.top = function () {
	return this.array[0];
};
makeDeque.bottom = function () {
	return this.array[(this.array.length - 1)];
};

makeDeque.pop = function () {
  this.removed.push(this.array[this.array.length-1]);
	return this.array.pop();
};
makeDeque.push = function (val) {
  if (!this.removedCard(val)) {
    return false;
  }
	this.array.push(val);
    return;
};

makeDeque.shift = function () {
  this.removed.push(this.array[0]);
	return this.array.shift();
};
makeDeque.unshift = function (val) {
  if (!this.removedCard(val)) {
    return false;
  }
	this.array.unshift(val);
    return;
};

makeDeque.cut = function (offset) {
  var newFirst = [], newSecond = [], newArray = [];
  if (!offset) { offset = 0; }
  offset = Math.floor((this.array.length)/2) - offset;
  newFirst = this.array.slice(offset);
  newSecond = this.array.slice(0, offset); 
  this.array = newArray.concat(newFirst, newSecond);
};

makeDeque.map = function (convertValFn) {
  return this.array.map(convertValFn);
};

makeDeque.sort = function (compareValsFn) {
	this.array = this.array.sort(compareValsFn);
};

makeDeque.shuffle = function() {
  this.array = this.array.sort(function(a,b) {return (0.5 - Math.random());});
}

makeDeque.FYshuffle = function() {
  var m = this.array.length, t, i;

  while(m) {
    i = Math.floor(Math.random() * m--);
    
    t = this.array[m];
    this.array[m] = this.array[i];
    this.array[i] = t;
  }
  return this.array;
}

makeDeque.removedCard = function(card) {
  if (this.removed.indexOf(card) == -1) {
    return false;
  } else {
    delete this.removed[this.removed.indexOf(card)];
    return true;
  }
}

// Simple version (no error-detection)

// function()--> possible return values

function makeCard(id) {
    var newCard = { number: id, };
    
    function inRange (number, min, max) {
        if (typeof (number) !== "number") {
            console.error('validation error! "' + number + '" is not a number');
            return NaN;
        } else if ((number <= max) && (number >= min)) {
            return true;
        } else {
            console.error('validation error! "' + number + '" is outside the given range');
            return undefined;
        }
    }
    
    if(!inRange(id, 0, 51)) { return false; }

    newCard.rank = makeCard.rank;
    newCard.suit = makeCard.suit;
    newCard.color = makeCard.color;
    newCard.cardID = makeCard.cardID;
    newCard.cardName = makeCard.cardName;
    newCard.precedes = makeCard.precedes;
    newCard.sameColor = makeCard.sameColor;
    newCard.nextInSuit = makeCard.nextInSuit;
    newCard.prevInSuit = makeCard.prevInSuit;
    newCard.inRange = inRange;

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
if (this.suit() < 3) {
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
 if (this.inRange(cardB.cardID(), 0, 51)) {
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
     if (this.inRange(cardB.cardID(), 0, 51)) {
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


var someCards = []; 
for ( var i = 0; i < 52; i++ ) {
  someCards.push(makeCard(i));
}

var deckOfCards = makeDeque (someCards);
deckOfCards.sort (function(a,b) {return (b.number - a.number);});
deckOfCards.cut(1);
deckOfCards.sort (function(a,b) {
  if(a.cardName() < b.cardName()) {
    return -1;
  }
  if (b.cardName() < a.cardName()) {
    return 1;
  } else {
    return 0;
  }
});

