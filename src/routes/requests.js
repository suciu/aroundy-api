const router = require('express').Router();
const requestsController = require('../controllers/requests');

/** Security */
const checkToken = require('../middleware/check_token');
const checkRole = require('../middleware/check_role');

// user routes
router.route('/').get([checkToken, checkRole, requestsController.get]);
router.route('/user').get([checkToken, checkRole, requestsController.getByUser]);
router.route('/save').post([checkToken, checkRole, requestsController.saveNewRequest]);

module.exports = router;
