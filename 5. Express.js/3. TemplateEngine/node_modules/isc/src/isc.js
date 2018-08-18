/*                                                                __ ____  ___
 Build-Tool: Inline Source Composer                              (  / ___)/ __)
 by Harold Iedema <harold@iedema.me>, Licensed under MIT.         )(\___ ( (__
 --------------------------------------------------------------- (__(____/\__*/
module.exports = (function (options) {

    var logger         = require('./logger.js')(options.verbose),
        compiler       = require('./compiler.js'),
        colors         = require('colors'),
        path           = require('path'),
        fs             = require('fs'),
        annotation_dir = __dirname + path.sep + 'annotations';

    options.include = options.include || [];
    if (! options.annotations) {
        options.annotations = {};
    }

    var files = fs.readdirSync(annotation_dir),
        file  = '';

    for (var i in files) {
        file = annotation_dir + path.sep + files[i];
        options.annotations[path.basename(file, '.js')] = require(file);
    }

    var compile = function (file) {
        var src = compiler(file, options);
        if (typeof options.output === 'string') {
            logger.log('COMPILER', 'Writing compiled source to "' + options.output + '".');
            fs.writeFileSync(options.output, src);
            if (options.minify === true) {
                var name = path.basename(options.output, '.js') + '.min.js';
                var p    = path.dirname(options.output);
                var f    = p + path.sep + name;
                logger.log('COMPILER', 'Minifying source...');
                require('minify')(options.output, function (error, data) {
                    if (error) {
                        console.error('Error minifying source: "' + error.message + '" at line ' + error.line + ', col ' + error.col);
                        process.exit(1);
                    }
                    logger.log('COMPILER', 'Writing minified source to "' + f + '".');
                    fs.writeFileSync(f, data);
                });
            }
        } else {
            console.log(src);
        }
    };

    compile(options.input);
});
