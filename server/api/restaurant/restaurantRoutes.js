var Router = require('express').Router();
var controller = require('./restaurantController');

Router.route('/')
  .get(controller.getList); // Get restaurants list

Router.route('/:id')
  .get(controller.getOne);

Router.route('/:id/create-review')
  .get(controller.getOneBasic);

module.exports = Router;
