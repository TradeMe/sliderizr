'use strict';

// Dependencies:
var log   = require('./logger');
var util  = require('gulp-util');

module.exports = createHandler;

function createHandler (reportTaskDone) {
    return function (error) {
        if (error) {
            var message = createMessage(error);
            log.error(message);
            if (reportTaskDone) {
                reportTaskDone(new Error(message));
            } else if (util.env.dist) {
                throw new Error(message);
            }
        }
    };
}

function createMessage (error) {
    var message = '';
    if (error.task) {
        message += ' Task: ' + error.task;
    }
    if (error.err && error.err.plugin) {
        message += ' Plugin: ' + error.err.plugin;
    }
    if (error.message) {
        message += ' ' + error.message;
    }
    if (error.err && error.err.message) {
        message += ' ' + error.err.message;
    }
    return message;
}
