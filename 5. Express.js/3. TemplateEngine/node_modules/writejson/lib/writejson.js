'use strict';

var fs = require('fs');
var tryCatch = require('try-catch');

module.exports = function(name, json, options, callback) {
    var str;
    
    if (!callback) {
        callback = options;
        options = {};
    }
    
    check(name, json, options);
    checkCB(callback);
    
    str = stringify(json, options);
    fs.writeFile(name, str, callback);
};

module.exports.sync = sync;

function sync(name, data, options) {
    options = options || {};
    
    check(name, data, options);
    fs.writeFileSync(name, stringify(data, options));
}

module.exports.sync.try = function(name, data, options) {
    options = options || {};
    check(name, data, options);
    
    var result = tryCatch(sync, name, data, options);
    var error = result[0];
    
    return error;
};

function defaultOptions(options) {
    if (typeof options.space === 'undefined')
        options.space = 4;
    
    if (typeof options.eof === 'undefined')
        options.eof = true;
    
    return options;
}

function stringify(data, options) {
    var result;
    
    defaultOptions(options);
    
    result = JSON.stringify(data, options.replacer, options.space);
    
    if (options.eof)
        result += '\n';
    
    return result;
}

function check(name, json, options) {
    if (typeof name !== 'string')
        throw Error('name should be string!');
    
    if (typeof json !== 'object')
        throw Error('json should be object!');

    if (typeof options !== 'object')
        throw Error('options should be object!');
}

function checkCB(callback) {
    if (typeof callback !== 'function')
        throw Error('callback should be function!');
}

