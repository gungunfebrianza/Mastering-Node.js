Ischanged
=========

Check time of file modification. If it's changed probable file was changed to.
There is no 100% assurance that is was, but it works much faster then check by hash.

## Install

`npm i ischanged --save`

## Hot to use?

```js
var ischanged = require('ischanged');

ischanged('/etc/passwd', function(error, is) {
    console.log(is);
    //true
    
    ischanged('/etc/passwd', function(error, is) {
        console.log(is);
        //false
    }
}
```

## How it works?

`Ischanged` saves time of file modification to file `ischanged/<uid>/changes.json` 
in Temp directory and then checks whas it changed or not.

So it something like `watch` but:

- should be called by hand;
- could detect modifications after restart of application;

## License

MIT
