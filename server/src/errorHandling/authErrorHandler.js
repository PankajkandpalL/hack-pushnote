const { request } = require("express");
const { UnauthorizedError } = require("express-jwt");
const { logger } = require("../utils/logger");

/**
 * Middleware that handles authentication errors.
 * @param err Error
 * @param req Request
 * @param res Response
 * @param next NextFunction
 * @returns void
 */
async function authErrorHandler(
  err,
  req,
  res,
  next
) {
  if (!(err instanceof UnauthorizedError)) return next(err);

  logger.debug(`Authorization failed due to ${err.code}`);
  switch (err.code) {
    case "credentials_required":
      return res.sendStatus(401);
    case "credentials_bad_scheme":
      return res.status(400).json({
        errors: { header: ["authorization token with bad scheme"] },
      });
    case "invalid_token":
      return res
        .status(401)
        .json({ errors: { header: ["authorization token is invalid"] } });
    default:
      logger.error(`Unhandled UnauthorizedError with code ${err.code}`);
      return res.sendStatus(500);
  }
}

module.exports = {
    authErrorHandler
}