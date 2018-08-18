(function(global) {
    'use strict';
    
    if (typeof module !== undefined && module.exports)
        module.exports = tryCatch;
    else
        global.tryCatch = tryCatch;
    
    function tryCatch(fn) {
        var error;
        
        try {
            fn();
        } catch(err) {
            error = err;
        }
        
        return error;
    }
    
})(this);
