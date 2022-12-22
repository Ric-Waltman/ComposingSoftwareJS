// A composite data type (or compound) is any data type constructed using the language's
// primitive data types and other composite types.
const firstName = 'Claude';
const lastName = 'Debussy';

const fullName = {
    firstName,
    lastName
};

//-----------------------------------------------------------------------------------------
// The most common form of object composition in JS is
// Object Concatenation aka Concatenative Inheritance (informally 'mixin composition')
// It works like ice-cream. Start with an object (like vanilla ice-cream), then mix in
// the features you want. Add some nuts, caramel, chocolate swirl, and wind up with
// nutty caramel chocolate swirl ice cream
class Foo {
    constructor() {
        this.a = 'a';
    }
}

class Bar extends Foo {
    constructor(options) {
        super(options);
        this.b = 'b';
    }
}

const myBar = new Bar(); // {a: 'a', b: 'b'}

//-----------------------------------------------------------------------------------------
// We can also build composites with mixin composition
const a = {
    a: 'a'
};
const b = {
    b: 'b'
};
const c = {...a, ...b}; // {a: 'a', b: 'b'}
