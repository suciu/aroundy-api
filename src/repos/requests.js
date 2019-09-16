const Requests = require('../models').requests;

module.exports.findAll = function (notUser) {
    return Requests.findAll({
                where: {
                    user_id: {
                        $notLike: notUser.id
                    }
                },
                include: Requests.User
            }
    );
};

module.exports.create = function (newRequest, user) {

    return Requests.create({
        "status": "pending",
        "startDate": newRequest.startDate,
        "endDate": newRequest.endDate,
        "type": newRequest.leaveType,
        "notifyPm": newRequest.notifyPm,
        "comments": newRequest.comments,
        "user_id": user.id,
        "interval": newRequest.interval
    });
};

/*
 Returns a single request object.
 */
module.exports.getById = function (id) {
    return Requests.find({
        where: {id}
    })
};

module.exports.approve = function (requestId) {
    return Requests.update(
        {status: "approved"},
        {where: {id: requestId}}
    )
};