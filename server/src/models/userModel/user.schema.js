const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
  username: { type : String },
  email: { type : String, required : true },
  age: { type : Number },
});

const User = mongoose.model('User', userSchema);

const userValidationSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(18).max(120).required(),
});

module.exports = {
    userValidationSchema,
    User
}