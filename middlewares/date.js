'use strict';

module.exports = (req, res, next) => {
    req.timeDate = new Date();
    next();
}