const Requests = require('../models').requests;

module.exports.findAll = function () {
    return Requests.findAll();
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