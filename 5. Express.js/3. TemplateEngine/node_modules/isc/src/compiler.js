/*                                                                __ ____  ___
 Build-Tool: Inline Source Composer                              (  / ___)/ __)
 by Harold Iedema <harold@iedema.me>, Licensed under MIT.         )(\___ ( (__
 --------------------------------------------------------------- (__(____/\__*/
global.isc_load_chain = [];

module.exports = (function (file, options) {

    if (global.isc_load_chain.indexOf(file) !== -1) {
        throw Error('Circular reference detected while parsing "' + file
            + '", included from "' + global.isc_load_chain[global.isc_load_chain.length - 1] + '".');
    }
    global.isc_load_chain.push(file);

    var reader      = new (require('./reader.js'))(file, options),
        logger      = require('./logger.js')(options.verbose),
        source      = reader.getSource();

    // Perform syntax checking on source.
    if ((err = require('syntax-error')(source, file))) {
        logger.log('COMPILER', ('Unable to parse ' + file).red + "\n" + err.toString().white);
        process.exit(1);
    }

    var getAnnotations = function (source) {
        var result = [];

        var docblock = /\/\*{2}([\s\S]+?)\*\//g,
            trim     = function(string){ return string.replace(/^\s+|\s+$/g, ''); },
            split    = function(string) { return string.split(/[\r\n]\s*\*\s+/);},
            anregx   = /@(\w+)\s?\((['"0-9a-zA-Z=\s\/\.\,\{\}\:\$\-\_\#\(\)]+\s?)\)/gi,
            match, src, reg, nodes;

        while (match = docblock.exec(source)) {
            src   = split(trim(match[1]).replace(/^\s?\*\s?/, '')).join('');
            nodes = [];
            while(reg = anregx.exec(src)) {
                nodes.push({
                    'annotation': reg[1],
                    'arguments' : reg[2]
                });
            }

            if (nodes.length > 0) {
                result.push({
                    nodes: nodes,
                    start: match.index,
                    end: match.index + match[1].length + 5, // 5 == /***/
                    length: match[1].length + 5
                });
            }
        };

        return result;
    };

    var compile = function (source) {
        var annotations = getAnnotations(source),
            annotation  = annotations.shift(),
            node, an_f, src = '';

        if (! annotation) {
            return source;
        }

        for (var i in annotation.nodes) {
            if (false === annotation.nodes.hasOwnProperty(i)) continue;
            node = annotation.nodes[i];
            an_f = options.annotations[node.annotation];
            if (typeof an_f !== 'function') continue;

            src += an_f(file, node.arguments, options);
        }

        source = source.substr(0, annotation.start) + src + source.substr(annotation.end);

        if (annotations.length > 0) {
            source = compile(source);
        }

        return source;
    };

    var new_source = compile(source);
    global.isc_load_chain.splice(global.isc_load_chain.indexOf(file), 1);
    return new_source;
});
