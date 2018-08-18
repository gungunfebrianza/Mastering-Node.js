# TryCatch

`Try-catch` wrapper.

## Example

```js
var tryCatch    = require('tryCatch'),
    error       = tryCatch(function() {
        JSON.parse('');
    });

if (error)
    console.error(error.message);

```

## License

MIT
