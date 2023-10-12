const { express } = require("express");
const {
  User,
  userValidationSchema,
} = require("../../models/userModel/user.schema");
const { hashPassword, compareWithHash } = require("../../utils/hashPasswords");
const Joi = require("joi");
const { createUserToken } = require("../../utils/auth/createUserToken");
const { mailSender } = require("../../utils/sendMail");

class AuthController {
  static loginHandler = async (res, req,next) => {
    const user = req.body;
    try {
      const loginObjValidator = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2 }).required(),
        password: Joi.string()
          .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
          .required(),
      });
      await loginObjValidator.validateAsync(user);
      const { email, password } = user;
      const isUserExists = await User.findOne({ email });
      const isPassCorrect = compareWithHash(password, isUserExists.password);
      if (isPassCorrect) {
        const token = createUserToken({
          username: isUserExists.username,
          email: email,
        });
        req.session.accessToken = {token};
        return res.status(200).send({ items: 'Login Successfull' });
      }
      throw new Error("User not found");
    } catch (error) {
      if (error.isJoi) {
        return res
          .status(400)
          .json({ error: error.details.map((detail) => detail.message) });
      } else next(error);
    }
  };

  static logoutHandler = async (res,req) => {

    try{
        req.session.destroy((err) => {
            if (err) {
              throw new Error('Session could not be destroyed', err)
            }
            return res.status(201).json({ message: 'Logout successful' });
          });
    }
    catch(e){
        next(e);
    }
  };

  static registerHandler = async (res, user, next) => {
    try {
      const userValidator = await userValidationSchema.validateAsync(user);

      const { email, password, username, repeatPassword } = user;

      const isUserExists = await User.findOne({ email });
      if (isUserExists) {
        return res.status(409).json({ message: "User already exists" });
      }

      const hashed = hashPassword(password);

      const isUserSaved = await User.create({
        email: email,
        password: hashed,
        username: username,
      });

      return res.status(201).send({ message: "User created successfully" });
    } catch (error) {
      if (error.isJoi) {
        return res
          .status(400)
          .json({ error: error.details.map((detail) => detail.message) });
      } else next(error);
    }
  };

  static forgetPass = async(req,user,next) => {
    try{
      const loginObjValidator = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2 }).required(),
        password: Joi.string()
          .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
          .required(),
        resetPassword : Joi.string()
          .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
          .required()
      });
      await loginObjValidator.validateAsync(user);
      const isUserExists = await User.findOne({ email });
      if (!isUserExists) {
        return res.status(409).json({ message: "User do not exists" });
      }

      // const mailSent = await mailSender(email, isUserPresent.name, resetPassword);
      // if(!mailSent){
      //   throw new Error("Mail not sent");
      // }

      const hashed = hashPassword(resetPassword);
      isUserExists.password = hashed;
      await isUserExists.save();
      return res.status(200).send({ error : false, message : "Password updated successfully" })

    }
    catch(e){
      console.error(e)
      next(e);
    }
  } 

  handleOperations = (req, res, next) => {
    
    const session = req.query.session;

    switch (session) {
      case "login":
        AuthController.loginHandler(res, req, next);
        return;
      case "logout":
        AuthController.logoutHandler(res, req, next);
        return;
      case "register":
        AuthController.registerHandler(res, req.body, next);
        return;
      case "resetPassword":
        AuthController.forgetPass(res, req.body, next);
        default:
        return next();
    }
  };
}

const authController = new AuthController();

module.exports = {
  authController,
};
