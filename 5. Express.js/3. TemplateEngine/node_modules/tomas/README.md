# Tomas

Save data to storage and read from it to speed up computing.

## Install

```
npm i tomas --save
```
## How to use?

```js
var fs      = require('fs'),
    tomas   = require('tomas'),
    path    = './package.json',
    log     = function(error, data, str) {
         if (error)
                console.error(error.message);
            else
                console.log(str, data);
        
        return error;
    };

tomas.check(path, function(is) {
    if (is)
        tomas.read(name, function(error, data) {
           log(error, data, 'tomas read:\n');
        });
    else
        fs.readFile(name, 'utf8', function(error, data) {
            if (!log(error))
                tomas.write(name, data, function(error) {
                    log(error, data, 'tomas written:\n');
                });
        });
});
```

## License

MIT
