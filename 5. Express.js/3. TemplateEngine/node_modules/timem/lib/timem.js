(function () {
    'use strict';
    
    var fs          = require('fs'),
        ERROR_EMPTY = 'could not be empty!';
    
    module.exports  = function(filename, option, callback) {
        var isRaw = option === 'raw';
        
        if (!callback)
            callback = option;
        
        if (!filename)
            throw(Error('filename' + ERROR_EMPTY));
        
        if (!callback)
            throw(Error('callback' + ERROR_EMPTY));
        
        fs.stat(filename, function(error, stat) {
            var time, timeRet;
            
            if (!error) {
                time = stat.mtime;
                
                if (isRaw)
                    timeRet = time.getTime();
                else
                    timeRet = time;
            }
            
            callback(error, timeRet);
        });
    };
    
})();
