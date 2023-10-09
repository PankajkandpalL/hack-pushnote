const express = require("express");
const { query, body } = require("express-validator");
const { authController } = require("./auth.controller");
const { User } = require("../../models/userModel/user.schema");
const { hashPassword } = require("../../utils/hashPasswords");
const authRouter = express.Router();

authRouter.post(
  "/user",
  query("session")
  .trim()
  .notEmpty()
  .escape(),
  authController.handleOperations
);

module.exports = {
  authRouter,
};
