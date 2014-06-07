//-------
// Part a): build a deque factory
function makeDeque(values) {
	var newDeque = {array: []}, i = 0;
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
    
    return newDeque;
}

makeDeque.top = function () {
	return this.array[0];
};
makeDeque.bottom = function () {
	return this.array[(this.array.length - 1)];
};

makeDeque.pop = function () {
	return this.array.pop();
};
makeDeque.push = function (val) {
	this.array.push(val);
    return;
};

makeDeque.shift = function () {
	return this.array.shift();
};
makeDeque.unshift = function (val) {
	this.array.unshift(val);
    return;
};

makeDeque.cut = function (offset) {
  var newFirst = [], newSecond = [], newArray = [];
  if (!offset) { offset = 0; }
  offset += Math.floor((this.array.length)/2);
  newFirst = this.array.slice(offset);
  newSecond = this.array.slice(0, offset); 
  return newArray.concat(newFirst, newSecond);
};

makeDeque.map = function (convertValFn) {
  return this.array.map(convertValFn);
};

makeDeque.sort = function (compareValsFn) {
	return this.array.sort(compareValsFn);
};

//var someCards = /* make array of 52 card objects here, using your code from Problem 1) */;
//// At this point, data looks like Fig.1
//
////-------
//// Part b): build a deque instance:
//var deckOfCards = makeDeque (someCards);
//// sort it:
//deckOfCards.sort (/* something here */);
//// At this point, data looks like Fig.2
//
//// sort it differently:
//deckOfCards.sort (/* something different here */);
//
////-------
//// Part c): build another deque instance:
//var someNames = /* make array of student/TA names here */;
//var deckOfNames = makeDeque (someNames);
//deckOfNames.sort (/* something here */);

//Testing!

var values = [1,2,3,4,5,6,7], x = makeDeque(values);

function assert(claim,message) {
    if (!claim) console.error(message);
}

assert(x.array !== values, 'failed copy rather than alias test!');
assert(x.top() === 1, 'failed top test!');
assert(x.bottom() === 7, 'failed bottom test!');
x.push(8);
//assert(x.array == [1,2,3,4,5,6,7,8], 'failed push test!');
assert(x.pop() == 8, 'failed pop test!');
assert(x.shift() == 1, 'failed shift test!');
x.unshift(1);
//assert(x.array == [1,2,3,4,5,6,7], 'failed unshift test!');

// console.log(x.cut(-2));
console.log(x.sort(function (a,b) {return b - a}));
console.log(x.map(function (x) { return x * x }));
console.log('Finished testing');
