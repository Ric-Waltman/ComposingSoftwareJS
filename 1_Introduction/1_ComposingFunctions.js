// Function Composition is the process of applying a function to the output of another
// function
const g = n => n + 1;
const f = n => n * 2;

const doStuff = x => {
    const afterG = g(x);
    const afterF = f(afterG);
    return afterF;
}

console.log(doStuff(20));

//-----------------------------------------------------------------------------------------
// Everytime I use a promise chain, I'm composing functions
// Chaining is composing!
const wait = time => new Promise((resolve, reject) => setTimeout(resolve, time));

wait(500)
    .then(() => 100)
    .then(g)
    .then(f)
    .then(value => console.log(value));

//-----------------------------------------------------------------------------------------
// We can compose functions intentionally into a simple one-liner
const doStuffBettter = x => f(g(x()));
console.log(doStuff(22));

//-----------------------------------------------------------------------------------------
// A common objection to this form is that it's harder to debug. How would we write this
// using function composition?
const doStuffAndLog = x => {
    const afterG = g(x);
    console.log(`after g: ${ afterG }`);
    const afterF = f(afterG);
    console.log(`after f: ${ afterF }`);
    return afterF;
};

console.log(doStuffAndLog(20));

//-----------------------------------------------------------------------------------------
// First, abstract the logging into a utility called trace()
const trace = label => value => {
    console.log(`${ label }: ${ value }`);
    return value;
}

const doStuffAndLog2 = x => {
    const afterG = g(x);
    trace('after g')(afterG);
    const afterF = f(afterG);
    trace('after f')(afterF);
    return afterF;
};
console.log(doStuffAndLog2(20));

//-----------------------------------------------------------------------------------------
// Popular functional programming libraries like Lodash and Rambda include utilities to make
// function composition easier. I can rewrite the above function like this:
// Pipe passes the output of one function to the input of another!
// Writing functions without mention of the arguments is called "POINT-FREE STYLE"
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

const doStuffBest = pipe(
    g,
    trace('after g'),
    f,
    trace('after f')
);

console.log(doStuffBest(10));