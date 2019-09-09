const generateToken = require('../utils/generateToken');
const Users = require('../repos/users');

module.exports.login = function (email, pass, scope, timeout) {
  return Users.getByEmail(email).then(user => {
    if (!user) {
      throw Object.assign(new Error(), {success: false, message: 'Invalid login credentials', code: 404})
    }
    return auth(user, null, scope, timeout)
  })
};

function auth (user, admin, scope, timeout) {
  return new Promise((resolve, reject) => {
    // get user permissions
    let data = {
      id: user.id,
      name: user.name,
      email: user.email,
      role_alias: user.role.alias
    };
    const token = generateToken(data, timeout);
    return resolve(token)
  })
}
