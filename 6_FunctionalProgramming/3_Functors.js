// A functor data structure is a data structure that can be mapped over.
// e.g. [1,2,3].map(x => x * 2)
// It's a container which has an interface which can be used to apply a function to the values
// inside it. The word functor means "mappable"

// Array.prototype.map() is one example, but other data structures can be functors too,
// so long as they supply the mapping API.
const double = n => n * 2;
const doubleMap = numbers => numbers.map(double);
console.log(doubleMap([2,3,4])); // [4, 6, 8]

// What if we want to operate on targets in a game to double the points awarded?
// All we have to do is update the higher-order-function passed to map
const double2 = n => n.points * 2;
const doubleMap2 = numbers => numbers.map(double2);
console.log(doubleMap2([
    {name: 'ball', points: 3},
    {name: 'coin', points: 4},
    {name: 'candy', points: 5}
]));

// Functional programming is a declarative paradigm, meaning that the program logic
// is expressed without explicitly describing the flow control (for, if, etc)

// Ex: Imperative mapping takes an array of numbers and returns a new array with each number
//     multiplied by 2
const doubleMap3 = nums => {
    const doubled = [];
    for (let i = 0; i < nums.length; i++) {
        doubled.push(nums[i] * 2);
    }
    return doubled;
}
console.log(doubleMap3([4, 5, 6]));

// The declarative mapping does the same thing, but abstrats the flow control away using the
// functional Array.prototype.map() utility
const doubleMap4 = nums => nums.map(n => n * 2);
console.log(doubleMap4([4,5,6]));

// Where Imperative code utilizes statements (for, if, switch, throw), declarative code relies
// more on expressions. An expression is a piece of code which evaluates to some value, and
// are made up of fn calls, values, and operators - all evaluated to produce the resulting value

// Expressions are often assigned to a variable, returned/passed to fns. The expression is
// evaluated first before the resulting value being used

