# [ISC] Inline Source Composer

Compose a javascript application into one distributable file by using annotations in your code.

```javascript
// main.js
(function () {
    var some_code_here;    
    /**
     * Include foo.js here.
     * @include("src/foo.js")
     * @include("src/bar.js")
     */
     console.log('And some more here...');
}());

// src/foo.js
var string = 'This is foo.js';

// src/bar.js
var bar = string.toUpperCase();
```

When compiled, the code looks like this:
```javascript
(function () {
    var some_code_here;    
    var string = 'This is foo.js';
    var bar = string.toUpperCase();
    console.log('And some more here...');
}());
```

Compile the code using the command-line app:

```shell
isc <input-file> <output-file> --verbose --minify
```

Or use node.js:
```javascript
require('./src/isc.js')({
    input   : 'in.js',  // Input file
    output  : 'out.js', // Output file
    verbose : true,     // Display verbose output?
    minify  : true      // Minify source? (only works if 'output' is also specified
});
```
> Note; If no output file is specified, the compiled source is printed instead. Minifying the source will not work in this case.
> Minified source is exported as <filename>.min.js. Taking the example above, the file `out.min.js` would be generated.

