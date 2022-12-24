// If I want to assign existing variables to object property keys of the same name,
// there's a shortcut for that.
const a = 'a';
const oA = {a};
const b = 'b';
const oB = {b};

//-----------------------------------------------------------------------------------------
// Objects can be easily composed together into new objects
// The dots are the object spread operator. It iterates over all properties of a source obj
// and assigns them to the new object.
const c = {...oA, ...oB};
console.log(c);

// Object.assign() does the same thing
const d = Object.assign({}, oB);

//-----------------------------------------------------------------------------------------
// JS objects and arrays support destructuring
// This means that you can extract values from them and assign them to named variables
const [t, u] = ['a', 'b'];

const blep = {
    blop: 'blop'
};
const {blop} = blep;

//-----------------------------------------------------------------------------------------
// Function Expressions
const double = x => x*2;
console.log(double); // [Function: double]
console.log(double.toString()); // 'x => x * 2'

//-----------------------------------------------------------------------------------------
// Default Parameter Values
const orZero = (n = 0) => n;

//-----------------------------------------------------------------------------------------
// Rest and Spread
// JS allows the ability to gather together a group of remaining arguments in the functions
// signature using the rest operator: ...
// This discard the first argument and returns the rest as an array
const aTail = (head, ...tail) => tail;
console.log(aTail(1,2,3)); // [ 2, 3 ]

// Rest gathers individual elements together into an array. Spread does the opposite - it spreads
// the elements from the array to individual elements.
// Consider this:
const shiftToLast = (head, ...tail) => [...tail, head];
shiftToLast(1,2,3); // [2, 3, 1]

// Arrays in JS have an iterator that gets invoked when the spread operator is used. For each
// item in the array, the iterator delivers a value. In the expression, [...tail, head], the iterator
// copies each element in order from the tail array into the new array created by the surrounding
// literal notation. Since the head is already an individual element, we just plop it onto the end
// of the array and we're done!

//-----------------------------------------------------------------------------------------
// Currying
// A curried function is a function that takes multiple parameters one at a time. It takes a param,
// and returns a fn that takes the next param, and so on - until all params have been supplied,
// at which point the application is completed and the final value is returned.
// -> Curry and partial application can be enabled by returning another function.
const gte = cutoff => n => n >= cutoff;
const gte4 = gte(4);

// When you see `x => y`, think "a function that takes x and returns y"

//-----------------------------------------------------------------------------------------
// Map & Filter
// Map applies a function to every item in a list and returns a new array of the results
const arr = [1,2,3];
const doubledArr = arr.map(x => x*2);
console.log(doubledArr);

// A predicate is a functio nthat returns a boolean value. .filter() takes a predicate and returns
// a new list, selecting only the items that pass the predicate (return true)
[2,4,6].filter(gte(4)); // [4, 6]
