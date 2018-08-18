/*                                                                __ ____  ___
 Build-Tool: Inline Source Composer                              (  / ___)/ __)
 by Harold Iedema <harold@iedema.me>, Licensed under MIT.         )(\___ ( (__
 --------------------------------------------------------------- (__(____/\__*/
module.exports = (function (verbose) {
    verbose = !! verbose;
    require('colors');

    // Public API
    return {
        log: function (category, msg) {
            if (! verbose) return;
            console.log(('[' + category.green + ']') + (' ' + msg.reset));
        }
    }
});
