// A Higher Order Function is a function that takes a function as an argument, or returns a fn
// HOFs are in contrast to First Order Fns, which don't take a fn as an arg, or return a fn as output

// Here's a First Order Function that filters all 4-letter words from a list of words
const censor = words => {
    const filtered =[];
    for (let i = 0, { length } = words; i < length; i++) {
        const word = words[i];
        if(word.length !== 4) filtered.push(word);
    }
    return filtered;
}

console.log(censor(['oops', 'gasp', 'shout', 'sun'])); // ['shout', 'sun']

// And if we want to select all words that begin with 'o', we create another function with
// a bunch of repeated code!
const startsWithO = words => {
    const filtered =[];
    for (let i = 0, { length } = words; i < length; i++) {
        const word = words[i];
        if(word.startsWith('o')) filtered.push(word);
    }
    return filtered;
}

console.log(startsWithO(['oops', 'gasp', 'shout', 'sun'])); // ['oops']

//-----------------------------------------------------------------------------------------
// We can start by creating a fn that abstracts the process of iterating over a list and accumulating
// a return value by passing in a function that handles `the bits that are different`.
// We'll call this a REDUCER
const reduce = (reducer, initial, arr) => {
    // shared stuff
    let acc = initial;
    // destructure 'length' property from arr to length var
    for(let i = 0, { length } = arr; i < length; i++) {
        // unique stuff in reducer call
        acc = reducer(acc, arr[i]);

        // more shared stuff
    }
    return acc;
}

// Takes a reducer fn, an initial value for the accumulator, and an array of data to iterate on
console.log(reduce((acc, curr) => acc + curr, 0, [1,2,3])); // 6

// Now, with the iteration and value accumulation abstracted, we can implement a more generalized
// filter() function
const filter = (fn, arr) => reduce(
    (acc, curr) => 
        fn(curr) ? acc.concat([curr]) : acc,
        [],
        arr
);

// The fn() argument is a predicate (fn that returns a boolean value), used in ternary operation
// if fn() === true, we concat the curr value to the accumulator array
// else, we just return the accumulator value (skipping the curr value)

//-----------------------------------------------------------------------------------------
// Now, we can implement censor() using filter() to filter out 4-letter words
// Notice how much smaller censor2() than censor()
const censor2 = words => filter(word => word.length !== 4, words);
console.log(censor2(['oops', 'gasp', 'shout', 'sun'])); // ['shout', 'sun']

// And the same for startsWithO()...
const startsWithO2 = words => filter(word => word.startsWith('o'), words);
console.log(startsWithO2(['oops', 'gasp', 'shout', 'sun'])); // ['oops']

//-----------------------------------------------------------------------------------------
// JS has already implemented the Array.prototype methods:
// .reduce(), .filter(), and .map()