const Requests = require('../repos/requests');
const Users = require('../repos/users');

module.exports.get = function (token) {
    const decodedUser = Users.decode(token),
        beautifyUser = this.beautifyUser(decodedUser);

    return new Promise((resolve, reject) => {
        return Requests.findAll(beautifyUser).then(users => {
            return resolve(users)
        })
    })
};

module.exports.getByUser = function (token) {
    const decodedUser = Users.decode(token),
        beautifyUser = this.beautifyUser(decodedUser);

    return Users.getByEmail(beautifyUser.email).then(user => {
        if (!user) {
            throw Object.assign(new Error(), {success: false, message: 'Invalid login credentials', code: 404})
        }

        return user.requests;
    });
};

module.exports.saveNewRequest = function (newRequest) {
    const decodedUser = Users.decode(newRequest.token),
        beautifyUser = this.beautifyUser(decodedUser);

    return Users.getByEmail(beautifyUser.email).then(user => {
        if (!user) {
            throw Object.assign(new Error(), {success: false, message: 'No user found', code: 404})
        }

        return Requests.create(newRequest, user)
    });

    // return new Promise((resolve, reject) => {
    //     return Requests.create(newRequest).then(request => {
    //         if (!request) {
    //             throw Object.assign(new Error(), {success: false, message: 'New request not created', code: 500})
    //         }
    //         return resolve(request)
    //     })
    // })
};

module.exports.approve = function (requestData) {
    return Users.getById(requestData.userWhoApproves).then(user => {
        if (!user) {
            throw Object.assign(new Error(), {success: false, message: 'No user found', code: 404})
        }

        if(user.role.alias !== "hr" && user.role.alias !== "pm"){
            throw Object.assign(new Error(), {success: false, message: 'No permissions to approve', code: 500})
        }

        return Requests.getById(requestData.requestToBeApproved).then((requestToBeApproved)=>{
            if (!requestToBeApproved) {
                throw Object.assign(new Error(), {success: false, message: 'No request was found to be approved', code: 404})
            }

            return Requests.approve(requestData.requestToBeApproved);

        });

    });
};

module.exports.deny = function (requestData) {
    return Users.getById(requestData.userWhoDeny).then(user => {
        if (!user) {
            throw Object.assign(new Error(), {success: false, message: 'No user found', code: 404})
        }

        if(user.role.alias !== "hr" && user.role.alias !== "pm"){
            throw Object.assign(new Error(), {success: false, message: 'No permissions to approve', code: 500})
        }

        return Requests.getById(requestData.requestToBeDenied).then((requestToBeDenied)=>{
            if (!requestToBeDenied) {
                throw Object.assign(new Error(), {success: false, message: 'No request was found to be denied', code: 404})
            }

            return Requests.deny(requestData.requestToBeDenied);

        });

    });
};

module.exports.beautifyUser = function (decodedUser) {
    if (decodedUser.hasOwnProperty("iss")){
        if(decodedUser.iss.hasOwnProperty("id")){
            return decodedUser.iss;
        }
    } else {
        return decodedUser;
    }
};