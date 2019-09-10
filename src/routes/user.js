const router = require('express').Router();
const userController = require('../controllers/user');

/** Security */
const checkToken = require('../middleware/check_token');
const checkRole = require('../middleware/check_role');

// user routes
router.route('/all-info').get([checkToken, checkRole, userController.getInfo]);
router.route('/all').get([checkToken, checkRole, userController.getAllUsers]);
router.route('/save').post([checkToken, checkRole, userController.saveNewColleague]);

module.exports = router;
