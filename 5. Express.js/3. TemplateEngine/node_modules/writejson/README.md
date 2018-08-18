# writejson [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]

Write stringified object to file.

## Install

```
npm i writejson --save
```
## How to use?
To handle formating optional argument `options` could be used accroding to [JSON.stringify][StringifyURL].

### API

#### writejson(name, object[, options], callback)
Asynchonouse write stringified object.

```js
var writejson = require('writejson');

writejson('data.json', {hello: 'world'}, function(error) {
    if (error)
        console.error(error.message);
});

var options = {
    replacer: ['hello'],// properties to put in json
    space: 4            // default space count
    eof: true           // default new line at end of file
};

writejson('data.json', {hello: 'world'}, options, function(error) {
    if (error)
        console.error(error.message);
});

```
#### writejson.sync(name, object[, options])
Synchonouse write stringified object.

```js
try {
    writejson.sync('data.json', {hello: 'world'});
} catch(error) {
    console.log(error.message);
}
```

#### writejson.sync.try(name, object[, options])
Synchonouse try to write stringified object.

```js
writejson.sync.try('data.json', {hello: 'world'});
```

## License

MIT

[StringifyURL]:             https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
[NPMIMGURL]:                https://img.shields.io/npm/v/writejson.svg?style=flat
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/node-writejson/master.svg?style=flat
[DependencyStatusIMGURL]:   https://img.shields.io/gemnasium/coderaiser/node-writejson.svg?style=flat
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[CoverageIMGURL]:           https://coveralls.io/repos/coderaiser/node-writejson/badge.svg?branch=master&service=github
[NPMURL]:                   https://npmjs.org/package/writejson "npm"
[BuildStatusURL]:           https://travis-ci.org/coderaiser/node-writejson  "Build Status"
[DependencyStatusURL]:      https://gemnasium.com/coderaiser/node-writejson "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"
[CoverageURL]:              https://coveralls.io/github/coderaiser/node-writejson?branch=master
