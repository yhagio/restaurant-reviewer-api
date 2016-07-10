var Router = require('express').Router();
var controller = require('./restaurantController');

Router.route('/restaurants')
  .post(controller.getList); // Get restaurants list

Router.route('/restaurants/:id')
  .get(controller.getOne);

module.exports = Router;
