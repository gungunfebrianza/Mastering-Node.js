/*                                                                __ ____  ___
 Build-Tool: Inline Source Composer                              (  / ___)/ __)
 by Harold Iedema <harold@iedema.me>, Licensed under MIT.         )(\___ ( (__
 --------------------------------------------------------------- (__(____/\__*/
module.exports = function (file, options)
{
    // Local verbose function
    this.verbose = function(message) {
        require('./logger.js')(options.verbose).log('READER', message);
    };

    // Required node modules
    this.path = require("path");
    this.fs   = require("fs");

    // Gather file location information
    var file_info      = require("path").parse(file);
    file_info.relative = this.path.relative(process.cwd(), file);
    file_info.absolute = this.path.resolve(file);

    // Make sure the given file physically exists
    if (! this.fs.existsSync(file_info.absolute)) {
        throw new Error('Unable to open file "' + file + '" for reading.');
    }

    this.verbose('Prepared ' + file_info.relative.toString().yellow + ' for reading.');
    this.file = file_info;
};

/**
 * Returns the raw source of the file as a string.
 *
 * @returns string
 */
module.exports.prototype.getSource = function () {
    this.verbose('Reading raw source from ' + this.file.relative.toString().yellow + '.');
    return this.fs.readFileSync(this.file.absolute).toString();
};

/**
 * Returns the source of the file as an array separated by trimmed lines.
 *
 * @return string[]
 */
module.exports.prototype.getArraySource = function () {
    var source = this.getSource(),
        output = [];

    this.verbose('Generating and returning array-source.');

    // Normalize line-breaks and return the array result.
    return source.replace(/(\r\n)/g, "\n").split("\n");
};
