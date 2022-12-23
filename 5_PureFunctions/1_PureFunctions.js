// Pure functions are all about mapping
// Functions map input arguments to return values: for each set of inputs, there exists an output
// Ex:
Math.max(2, 8, 5); // 8

//-----------------------------------------------------------------------------------------
// In algebra, functions look something like this:
// f(x) = 2x -- to use this function, we simply provide a value for x: f(2)
// f(2) is the same as 4, so any place we see f(2), we can substitute 4
// This property is called REFERENTIAL TRANSPARENCY
// Now, let's convert that function to js
const double = x => x*2;
console.log(double(5));

// double(5) is the exact same as 10, because double() is a pure function
// But, if double() had side-effects (like saving a value to disk or logging to console),
// we couldn't simply replace double(5) with 10 without changing the meaning
// -> If I want REFERENTIAL TRANSPARENCY, I need to use pure functions

// This makes sense, because if the function does anything else other than the pure
// operation, substitution would eliminate those side-effects, so they would not
// be strictly equal

// Perhaps the most important design principle is KISS: Keep It Stupid Simple

//-----------------------------------------------------------------------------------------
// Immutability

// Example using mutable shared state
const addToCart = (cart, item, quantity) => {
    cart.items.push({item, quantity});
    return cart;
}

const originalCart = {
    items: []
};

const newCart = addToCart(
    originalCart,
    {
        name: 'Digital SLR Camera',
        price: 1495
    },
    1
);

console.log(JSON.stringify(originalCart, undefined, 2));

// Now consider this immutable version
// Pure addToCart() returns a new cart, it does not mutate the original
const addToCartPure = (cart, item, quantity) => {
    return {
        ...cart,
        items: cart.items.concat([{item, quantity}])
    };
};

const originalCart2 = {
    items: []
};

const newCart2 = addToCartPure(
    originalCart2,
    {
        name: 'Digital SLR Camera',
        price: 1495
    },
    1
);

// Notice that originalCart2 is unmodified because addToCartPure() is Pure
console.log(JSON.stringify(originalCart2, undefined, 2));
