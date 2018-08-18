/*                                                                __ ____  ___
 Build-Tool: Inline Source Composer                              (  / ___)/ __)
 by Harold Iedema <harold@iedema.me>, Licensed under MIT.         )(\___ ( (__
 --------------------------------------------------------------- (__(____/\__*/
module.exports = (function (file, data, options) {

    var data = data.replace(/"|'|\s/g, '').split(',');

    for (var i in data) {
        if (false === data.hasOwnProperty(i)) continue;
        options.include.push(data[i]);
    }

    console.log(options);
});
