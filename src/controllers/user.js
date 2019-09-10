const user = require('../service/user');

/**
 * @param {Object} req
 * @param {Object} res
 */
module.exports.getInfo = (req, res) => {
    user.getInfo(req.query.token)
    .then(response => res.json({
      success: true,
      allInfo: response
    }))
    .catch(err => res.status(err.code || 404).json({
      success: false,
      message: err.message
    }))
};

/**
 * @param {Object} req
 * @param {Object} res
 */
module.exports.getAllUsers = (req, res) => {
    user.getAllUsers()
        .then(response => res.json({
            success: true,
            allUsers: response
        }))
        .catch(err => res.status(err.code || 404).json({
            success: false,
            message: err.message
        }))
};

/**
 * @param {Object} req
 * @param {Object} res
 */
module.exports.saveNewColleague = (req, res) => {
    user.saveNewColleague(req.body)
        .then(newUser => res.json({
            success: true,
            newUser: newUser
        }))
        .catch(err => res.status(err.code || 404).json({
            success: false,
            message: err.message
        }))
};