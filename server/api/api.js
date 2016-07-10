var router = require('express').Router();

// api router will mount other routers for all our resources
router.use('/users', require('./user/userRoutes'));
router.use('/restaurants', require('./restaurant/restaurantRoutes'));
router.use('/reviews', require('./review/reviewRoutes'));

module.exports = router;
