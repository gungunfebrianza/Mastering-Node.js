(function() {
    'use strict';
    
    var os              = require('os'),
        
        check           = require('checkup'),
        readjson        = require('readjson'),
        writejson       = require('writejson'),
        time            = require('timem'),
        mkdir           = require('mkdirp'),
        log             = require('debug')('ischanged'),
        WIN             = process.platform === 'win32',
        
        Times,
        
        DIR             = getDir() || __dirname + '/../json/',
        NAME_SHORT      = DIR           + 'changes',
        NAME            = NAME_SHORT    + '.json';
    
    function getTimes(callback) {
        if (Times)
            callback(Times);
        else
            readjson(NAME, function(error, data) {
                Times = data || {};
                callback();
            });
    }
    
    function getDir() {
        var dir,
            sign    = '/';
        
        if (os.tmpdir) {
            dir     = os.tmpdir();
            dir     += '/ischanged';
            
            if (!WIN)
                dir += sign + process.getuid();
            
            dir     += '/';
        }
        
        return dir;
    }
    
    function makeDir(dir, callback) {
        var ANY_MASK    = 0,
            umask       = process.umask(ANY_MASK);
        
        mkdir(dir, function(error) {
            process.umask(umask);
            
            if (error && error.code === 'EEXIST')
                callback();
            else
                callback(error);
        });
    }
    
    module.exports = function(name, callback) {
        check
            .type('name', name, 'string')
            .type('callback', callback, 'function');
        
        getTimes(function() {
            var readTime = Times[name];
            
            time(name, 'raw', function(error, fileTime) {
                var timeChanged,
                    msg     = 'changed',
                    changed = readTime !== fileTime;
                
                log('name: '     + name);
                log('readTime: ' + readTime + ' ' + error);
                log('fileTime: ' + fileTime);
                
                if (!changed)
                    msg = 'not ' + msg;
                
                log(msg + ' ' + name);
                
                if (!error && changed) {
                    timeChanged     = true;
                    Times[name]     = fileTime;
                    
                    makeDir(DIR, function(error) {
                        if (error)
                            log('makedir ' + DIR + ' ' + error);
                        
                        writejson(NAME, Times, function(error) {
                            log('writeFile ' + NAME + ' ' + error);
                        });
                    });
                }
                
                callback(error, timeChanged);
            });
        });
    };
})();
