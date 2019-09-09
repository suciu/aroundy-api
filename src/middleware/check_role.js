module.exports = (req, res, next) => {
    // if (req.authUser.type !== UserModel.typeEnum.admin) {
    //     throw AccessDenied();
    // }
    //TODO: for now return just OK !
    next();
};