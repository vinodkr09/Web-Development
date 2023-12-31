const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('router loaded');


router.get('/', homeController.home);
router.use('/users', require('./users'));
router.use('/posts', require('./posts'));
router.use('/comments', require('./comments'));
router.use('/likes', require('./likes'));
router.use('/friendship', require('./friendship'));

router.use('/api', require('./api'));   // ./api/index is required by default

router.use('/password', require('./password'));

router.use('/chats', require('./chats'));
router.use('/search', require('./search'));

module.exports = router;