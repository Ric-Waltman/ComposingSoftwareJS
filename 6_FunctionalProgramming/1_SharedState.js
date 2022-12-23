// Shared state leads to data races and dependency on function call order.
// Consider the following...

const x = {
    val: 2
};

const x1 = () => x.val += 1;
const x2 = () => x.val *= 2;

x1();
x2();

console.log(x.val); // 6

// This example is exactly equivalent to the above, except...
const y = {
    val: 2
};

const y1 = () => y.val += 1;
const y2 = () => y.val *= 2;

// ... the order of the function calls is reversed...
y2();
y1();

// ... which changes the resulting value
console.log(y.val); // 5

// When you avoid shared state, the timing and order of fn calls don't change the result of
// calling the function. Pure Functions do not have this problem.
const z = {
    val: 2
};

const inc = z => ({...z, val: z.val + 1});
const double = z => ({...z, val: z.val * 2});

console.log(inc(double(z)).val); // 5

const z2 = {
    val: 2
};

// Because the functions don't mutate, I can call these functions as many times as I want,
// in any order, without changing the results of other function calls
inc(z2);
double(z2);
inc(z2);
console.log(inc(double(z2)).val); // 5

// Object spread ...z copies the properties of z instead of mutating it in place

// Of course, if I change the order of composition, the output will change. Order of operations
// still matters. f(g(x)) != g(f(x)), but what doesn't matter anymore is what happens to variables
// outside the function.

// With impure functions, it's impossible to fully understand what a function does unless you
// know the entire history of every variables that the function uses or affects

// Remove function call timing dependency, and you eliminate an entire class of potential bugs

