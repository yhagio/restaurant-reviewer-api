var Restaurant = require('./restaurantModel');
var Review = require('../review/reviewModel');

// Fetch one restaurant information with no reviews
exports.getOneBasic = function(req, res, next) {
  Restaurant.findOne({_id: req.params.id})
    .exec(function(err, restaurant) {
      if (err) return next(err);
      
      return res.json(restaurant);      
    });
};

// Fetch one restaurant information with reviews
exports.getOne = function(req, res, next) {
  Restaurant.findOne({_id: req.params.id})
    .populate('reviews')
    .exec(function(err, restaurant) {
      console.log('restaurant one e: ', err);
      if (err) return next(err);
      // console.log('restaurant one: ', restaurant);
      Restaurant.populate(restaurant, {
        path: 'reviews.author',
        select: 'username email',
        model: 'user'
      }, function(err2, rest) {
        console.log('restaurant one e2: ', err2);
        if (err) return next(err2);
        return res.json(rest);
      });
      
    });
};

// Fetch all restaurants
exports.getList = function(req, res, next) {
  Restaurant.find({})
    .skip(0)
    .limit(0)
    .exec(function(err, restaurants) {
      if (err) return next(err);

      return res.json(restaurants);
    });
};
