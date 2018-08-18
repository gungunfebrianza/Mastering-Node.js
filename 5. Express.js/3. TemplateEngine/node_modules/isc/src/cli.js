#!/usr/bin/env node
/*                                                                __ ____  ___
 Build-Tool: Inline Source Composer                              (  / ___)/ __)
 by Harold Iedema <harold@iedema.me>, Licensed under MIT.         )(\___ ( (__
 --------------------------------------------------------------- (__(____/\__*/
'use strict';

(function () {

    var colors   = require('colors'),
        args     = require('cli-args')(process.argv.slice(2)),
        fs       = require('fs'),
        JSON5    = require('json5'),
        options  = {
            input   : null,
            output  : null,
            verbose : args['_'].indexOf('verbose') !== -1,
            minify  : args['_'].indexOf('minify') !== -1
        };

    var help = function () {
        console.log('Inline Source Composer')
        console.log('Usage: isc <INPUT-FILE> [OUTPUT-FILE] [OPTION]...');
        console.log('Composes source into one file using annotations in the code.');
        console.log('');
        console.log('  -h, --help'.bold + '   Display this help message.'.reset)
        console.log('  --verbose'. bold + '    Display verbose output during compilation.'.reset)
        console.log('  --minify'.bold + '     Creates a second output file with minified source.'.reset)
        console.log('');
    };

    // Remove --verbose from the argumentlist.
    if (options.verbose) {
        args['_'].splice(args['_'].indexOf('verbose'), 1);
    }
    if (options.minify) {
        args['_'].splice(args['_'].indexOf('minify'), 1);
    }
    if (typeof args.include !== 'undefined') {
        options.include = args.include.split(',');
    }
    // Detect required input file argument
    if (args['_'].length === 0 ||
        args['_'].indexOf('h') !== -1 ||
        args['_'].indexOf('help') !== -1
    ) {
        help();
        return void 0;
    }

    options.input  = args['_'][0];
    options.output = args['_'][1] || false;

    if (fs.existsSync(options.input) === false) {
        console.log('isc: cannot access ' + (options.input.bold) + ': No such file.'.reset);
        process.exit(1);
    }

    for (var i in args) {
        if (args.hasOwnProperty(i)) continue;
        if (i === '_') continue;
        options[i] = args[i];
    }

    require('./isc.js')(options);
}());
