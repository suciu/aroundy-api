const router = require('express').Router()
const authController = require('../controllers/auth')

// user auth routes
router.route('/').post(authController.auth)

module.exports = router
