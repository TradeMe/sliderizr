'use strict';

// Dependencies:
var util = require('gulp-util');

module.exports = {
    info: info,
    todo: todo,
    warn: warn,
    error: error
};

function log (message, force) {
    if (!util.env.silent || force) {
        util.log(message);
    }
}

function info (message, force) {
    log('    ' + util.colors.bgGreen.white(' INFO: ') + ' ' + util.colors.green(message), force);
}

function todo (message, force) {
    log('    ' + util.colors.bgBlue.white(' TODO: ')+ ' ' + util.colors.blue(message), force);
}

function warn (message, force) {
    log('    ' + util.colors.bgYellow.white(' WARN: ') + ' ' + util.colors.yellow(message), force);
}

function error (message) {
    log('    ' + util.colors.bgRed.white(' ERROR: ') + ' ' + util.colors.red.bold(message), true);
}
