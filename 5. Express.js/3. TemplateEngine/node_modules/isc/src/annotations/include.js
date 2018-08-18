/*                                                                __ ____  ___
 Build-Tool: Inline Source Composer                              (  / ___)/ __)
 by Harold Iedema <harold@iedema.me>, Licensed under MIT.         )(\___ ( (__
 --------------------------------------------------------------- (__(____/\__*/
module.exports = (function (file, data, options) {

    var path   = require('path'),
        logger = require('../logger.js')(options.verbose),
        JSON5  = require('json5');

    var getSource = function(included_file) {
        var inc_file = path.dirname(file) + path.sep + included_file;
        return require('../compiler.js')(inc_file, options);
    };

    // Execute both regular exporessions.
    var data_no_args = /('|")(.+)('|")/.exec(data),
        data_w_args  = /('|")([a-zA-Z0-9\_\-\/\.]+)('|"),\s?(['"0-9a-zA-Z=\s\.\,\{\}\:\$\_\#\(\)]+)/.exec(data);

    // No arguments are given. perform a simple include.
    if (data_w_args === null) {
        logger.log('@include', 'Performing simple include for "' + data_no_args[2] + '"');
        return getSource(data_no_args[2]);
    }

    // Perform a parameterized include.
    logger.log('@include', 'Performing parameterized include for "' + data_w_args[2] + '"');
    var source = getSource(data_w_args[2]),
        args   = JSON5.parse(data_w_args[4]);

    if (typeof args.if === 'string') {
        if (options.include.indexOf(args.if) === -1) {
            return '';
        }
    } else if (typeof args.if === 'object') {
        for(var i in options.args) {
            if (false === options.args.hasOwnProperty(i)) continue;
            if (options.args.indexOf(options.include[options.args[i]]) === -1) return '';
        }
    }

    if (typeof args.export === 'string') {
        var p = (args.export.indexOf('.') !== -1) ? args.export : 'var ' + args.export;
        var s = (args.execute === true);
        var m = (args.module === true);

        if (s === true && m === true) {
            throw Error('A file cannot be loaded as module and executed at the same time.');
        }

        if (m) {
            source = p + '= (function () { var module = {exports: {}}; ' + source + '; return module.exports; }());';
        } else {
            source = p + '=' + (s ? '(' : '') + 'function () { ' + source + (s ? '}());' : '};');
        }
    }

    return source;
});
