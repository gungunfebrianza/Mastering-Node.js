(function() {
    'use strict';
    
    var os          = require('os'),
        crypto      = require('crypto'),
        fs          = require('fs'),
        path        = require('path'),
        
        mkdirp      = require('mkdirp'),
        ischanged   = require('ischanged'),
        exec        = require('execon'),
        check       = require('checkup'),
        
        MinFolder   = getDir();
        
        if (!os.tmpdir)
            os.tmpdir = os.tmpDir;
    
    module.exports.check          = function(name, callback) {
        var nameCrypt, isChanged, isExist;
        
        check
            .type('name', name, 'string')
            .type('callback', callback, 'function');
        
        nameCrypt   = getName(name),
        isChanged   = exec.with(ischanged, name),
        isExist     = exec.with(fs.lstat, nameCrypt);
                    
        exec.parallel([isChanged, isExist], function(error, changed, exists) {
            callback(!changed && exists);
        });
    };
    
    module.exports.read = function(name, options, callback) {
        var nameCrypt;
        
        if (!callback)
            callback = options;
        
        check
            .type('name', name, 'string')
            .type('callback', callback, 'function');
        
        nameCrypt = getName(name);
        
        switch(options) {
        case 'name':
            callback(null, nameCrypt);
            break;
        
        case 'stream':
            callback(null, fs.createReadStream(nameCrypt));
            break;
        
        default:
            fs.readFile(nameCrypt, 'utf8', callback);
            break;
        }
    };
    
    module.exports.write = function write(name, data, callback) {
        var nameCrypt;
        
        check
            .type('name', name, 'string')
            .type('callback', callback, 'function');
        
        nameCrypt = getName(name);
        
        makeDir(function() {
            fs.writeFile(nameCrypt, data, function(error) {
                callback(error);
            });
        });
    };
    
    function getDir() {
        var tmp = os.tmpdir(),
            dir = path.join(tmp, 'tomas'),
            win = process.platform === 'win32';
        
        if (!win)
            dir += path.sep + process.getuid();
        
        dir += path.sep;
        
        return dir;
    }
    
    function makeDir(callback) {
        var ANY_MASK    = 0,
            umask       = process.umask(ANY_MASK);
        
        mkdirp(MinFolder, function(error) {
            process.umask(umask);
            
            if (error && error.code === 'EEXIST')
                callback();
            else
                callback(error);
        });
    }
    
    /**
     * function get name of file in min folder
     * 
     * @param name
     */
    function getName(name) {
        var nameCrypt,
            ext = path.extname(name);
        
        nameCrypt = crypto.createHash('sha1')
            .update(name)
            .digest('hex') + ext;
        
        nameCrypt = MinFolder + nameCrypt;
        
        return nameCrypt;
    }
})();
