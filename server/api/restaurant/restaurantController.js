var Restaurant = require('./restaurantModel');
var Review = require('../review/reviewModel');

exports.getOne = function(req, res, next) {
  Restaurant.findOne({_id: req.params.id})
    .populate('reviews')
    .exec(function(err, restaurant) {
      if (err) return next(err);
      console.log('restaurant: ', restaurant);
    });
};

exports.getList = function(req, res, next) {
  Restaurant.find({})
    .skip(0)
    .limit(0)
    .exec(function(err, restaurants) {
      if (err) return next(err);

      return res.json(restaurants);
    });
};
