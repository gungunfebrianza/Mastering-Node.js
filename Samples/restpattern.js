let obj = {
    foo: 'ini foo!',
    bar: 'bar!',
    baz: 'ini baz!'
};

// assign keys to local variables with same names
let {foo, baz} = obj;

// Note that we "skipped" #bar
console.log(foo, baz); // foo! baz!
