const Users = require('../repos/users');

module.exports.getInfo = function (token) {

    const decodedUser = Users.decode(token),
          beautifyUser = this.beautifyUser(decodedUser);

  return Users.getByEmail(beautifyUser.email).then(user => {
    if (!user) {
      throw Object.assign(new Error(), {success: false, message: 'Invalid login credentials', code: 404})
    }

    return user;
    
  })
};

module.exports.findOneById = function (userId) {
    return new Promise((resolve, reject) => {
        return Users.getById(userId).then(user => {
            if (!user) {
                throw Object.assign(new Error(), {success: false, message: 'No User found', code: 404})
            }

            let data = {
                id: user.id,
                email: user.email
            };

            return resolve(data)
        })
    })
};

module.exports.getAllUsers = function () {
    return new Promise((resolve, reject) => {
        return Users.findAll().then(users => {
            if (!users) {
                throw Object.assign(new Error(), {success: false, message: 'No users found', code: 404})
            }
            return resolve(users)
        })
    })
}

module.exports.beautifyUser = function (decodedUser) {
    if (decodedUser.hasOwnProperty("iss")){
        if(decodedUser.iss.hasOwnProperty("id")){
            return decodedUser.iss;
        }
    }
};