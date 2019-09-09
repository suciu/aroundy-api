const auth = require('../service/auth')

/**
 * Credential based authentication (email/password)
 * @param {Object} req
 * @param {Object} res
 */
module.exports.auth = (req, res) => {
  auth.login(req.body.email, req.body.password, req.body.scope, req.body.timeout)
    .then(token => res.json({
      success: true,
      token: token
    }))
    .catch(err => res.status(err.code || 404).json({
      success: false,
      message: err.message
    }))
}