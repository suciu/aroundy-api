const User = require('../models').user;
const jwt = require('jwt-simple');
const config = require('../config');
/*
 Returns a single User object. Request by user_email
 */
module.exports.getByEmail = function (email) {
  return User.findOne({
    where: {
      email: email,
      password: {
        $ne: null
      }
    },
    include: [User.Role]
  })
};

/*
 Returns a single user object. Request by user_id.
 */
module.exports.getById = function (id) {
  return User.find({
    where: {id}
  })
};

module.exports.decode = function (token) {
    return jwt.decode(token, config.app.token)
};

module.exports.findAll = function () {
    return User.findAll();
};