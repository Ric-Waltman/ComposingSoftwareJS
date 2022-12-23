// An immutable object is an object that can't be modified after it's created.
// In JS, don't confused `const` with immutability. const creates a variable name binding
// which can't be reassigned after creation. const does not create immutable objects, you
// just can't change the object that the binding refers to

// I can make a value truly immutable by deep freezing the object. JS has a method that
// freezes and object one-level deep:
const a = Object.freeze({
    foo: 'Hello',
    bar: 'world',
    baz: '!'
});

a.foo = 'Goodbye';
console.log(a);

// But frozen objects are only superficially immutable to one-level deep. The following
// objet is mutable
const b = Object.freeze({
    foo: {greeting: 'Hello'},
    bar: 'world',
    baz: '!'
});

b.foo.greeting = 'Goodbye';
console.log(b);