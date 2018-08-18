(function() {
    'use strict';
    
    let exec = require('..'),
        test    = require('tape');
    
    test('exec: should execute function with parameters', t => {
        var WORD    = 'hello',
            func    = function(word) {
                return word;
            },
            word  = exec(func, WORD);
        
        t.equal(word, WORD);
         
        t.end();
    });
        
    test('exec: should not execute function, if type of first argument not function', t => {
        var WORD    = 'hello',
            word  = exec(WORD);
        
         t.equal(word, undefined);
         
         t.end();
    });
        
    test('exec.ret: should return function that try to call callback', t => {
        var STR         = 'hello world',
            addSpace    = function() {
                var args = [].slice.call(arguments);
                
                return args.join(' ');
            },
            fn          = exec.ret(addSpace, 'hello'),
            str         = fn('world');
        
        t.equal(str, STR);
        
        t.end();
    });
        
    test('exec.parallel: should execute a couple functions async and return results in callback', t => {
        var WORD    = 'hello world',
            funcSlow    = function(callback) {
                setTimeout(function() {
                    callback(null, 'hello');
                }, 10);
            },
            funcFast    = function(callback) {
                setTimeout(function() {
                    callback(null, 'world');
                }, 1);
            };
            
        exec.parallel([funcSlow, funcFast], function(error, hello, world) {
            t.equal(WORD, hello + ' ' + world);
            t.end();
        });
    });
})();
