require('dotenv').config();
const jwt = require('jsonwebtoken');

function createUserToken(user) {

  const tokenObject = { user: { username: user.username, email: user.email } };
  const userJSON = JSON.stringify(tokenObject);
  const token = jwt.sign(userJSON, process.env.JWT_SECRET);
  return token;

}

module.exports = {
  createUserToken
}