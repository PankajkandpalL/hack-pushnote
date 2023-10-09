const jwt = require('jsonwebtoken');

const getUserByToken = (accessToken) => {
    if (accessToken) {
      try {
        return jwt.verify(accessToken, jwt_secret);
      } catch (error) {
        throw new Error("User is not Authorized");
      }
    }
  };

  module.exports = {
    getUserByToken
  }