const requests = require('../service/requests');
/**
 * @param {Object} req
 * @param {Object} res
 */
module.exports.get = (req, res) => {
    requests.get()
        .then(response => res.json({
            success: true,
            data: response
        }))
        .catch(err => res.status(err.code || 404).json({
            success: false,
            message: err.message,
            data: {}
        }))
};

/**
 * @param {Object} req
 * @param {Object} res
 */
module.exports.getByUser = (req, res) => {
    requests.getByUser(req.query.token)
        .then(response => res.json({
            success: true,
            data: response
        }))
        .catch(err => res.status(err.code || 404).json({
            success: false,
            message: err.message,
            data: {}
        }))
};

/**
 * @param {Object} req
 * @param {Object} res
 */
module.exports.saveNewRequest = (req, res) => {
    requests.saveNewRequest(req.body)
        .then(newRequest => res.json({
            success: true,
            data: newRequest
        }))
        .catch(err => res.status(err.code || 404).json({
            success: false,
            message: err.message
        }))
};