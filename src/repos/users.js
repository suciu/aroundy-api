const User = require('../models').user;
const Role = require('../models').role;
const jwt = require('jwt-simple');
const config = require('../config');
const generateToken = require('../utils/generateToken');

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
    where: {id},
    include: [User.Role],
  })
};

module.exports.decode = function (token) {
    return jwt.decode(token, config.app.token)
};

module.exports.findAll = function () {
    return User.findAll();
};

module.exports.create = function (newColleague) {
    return User.create({
        "contactPerson": newColleague.contactPerson,
        "contactPersonPhone": newColleague.contactPersonPhone,
        "email": newColleague.email,
        "jobTitle": newColleague.jobTitle,
        "name": newColleague.name,
        "phone": newColleague.phone,
        "role_id": newColleague.adminRole ? 3 : 1,
    }).then( response => {
        return this.getById(response.id)
            .then((user)=>{
                let data = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role_alias: user.role.alias
                };

                user.hash = generateToken(data);
                return user.save();
            })
    })
};