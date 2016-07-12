var Router = require('express').Router();
var controller = require('./restaurantController');

Router.route('/')
  .get(controller.getList); // Get restaurants list

Router.route('/:id')
  .get(controller.getOne);

module.exports = Router;
