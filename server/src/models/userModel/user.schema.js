const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  username: { type: String },
  email: { type: String, required: true, unique : true },
  password: { type: String, required: true },
});

const User = mongoose.model("user", userSchema);

const userValidationSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email({ minDomainSegments: 2 }),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  repeatPassword: Joi.ref("password"),
});

module.exports = {
  userValidationSchema,
  User,
};
