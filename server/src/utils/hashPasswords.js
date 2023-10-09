const bcrypt = require("bcrypt");

const saltRounds = Math.ceil(Math.random(1,10)*10);

function hashPassword(password) {
  return bcrypt.hashSync(password, saltRounds);
}

function compareWithHash(password, hash) {
  return bcrypt.compareSync(password, hash);
}

module.exports = {
    hashPassword,
    compareWithHash
}