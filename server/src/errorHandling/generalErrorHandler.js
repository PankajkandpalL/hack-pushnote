const { request } = require("express");
const { UnauthorizedError } = require("express-jwt");
const { logger } = require("../utils/logger");

function generalErrorHandler(
    err,
    req,
    res,
    next
  ) {

    logger.error(`Unhandled error in generalErrorHandler`);
    logger.error(`${err.message}\n${err.name}\n${err.stack}`);
    return res.sendStatus(500);
  }

  module.exports = {
    generalErrorHandler
  }