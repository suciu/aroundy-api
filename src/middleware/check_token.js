const userService = require('../service/user');
const Users = require('../repos/users');

const checkToken =  (req, res, next) => {

    // const decodedUser = Users.decode(req.query.token);
    //     beautifyUser = this.beautifyUser(decodedUser);


    //TODO decode token here to send it as param to findOneById function

    // userService.findOneById(1).then((user) => {
    //     if (!user) {
    //         next(Object.assign(new Error(), {success: false, message: 'No access', code: 503}));
    //     }
    //
        next();
    // }, function (err) {
    //     next(err);
    // });
};

module.exports.beautifyUser = function (decodedUser) {
    if (decodedUser.hasOwnProperty("iss")){
        if(decodedUser.iss.hasOwnProperty("id")){
            return decodedUser.iss;
        }
    }
};

module.exports = checkToken;