var Restaurant = require('./restaurantModel');
var Review = require('../review/reviewModel');

exports.registerRestaurant = function(req, res, next) {
  var name = req.body.name;
  var address = req.body.address;
  var photo = req.body.photo;
  var category = req.body.category;

  // Check if any fields are empty
  if (!name || !address || !photo || !category) {
    return res
            .status(422)
            .send({ error: 'name, address, photo, category are required.' });
  }

  // Check if restaurant already exists
  Restaurant.findOne({ name: name}, function(err, exist) {
    if (err) return next(err);

    // if the restaurant exists return error
    // console.log('exist?', exist);
    if (exist) {
      return res
              .status(422)
              .send({ error: 'The restaurant is already registered.' });
    }

    // Create a new restaurant object
    var newRes = new Restaurant({
      name: name,
      address: address,
      photo: photo,
      category: category
    });

    // Save the new restaurant into the database
    newRes.save(function(err, response) {
      if (err) return next(err);
      // Respond to request indicating that the restaurant has been created
      return res.json(response);
    });
  });
};

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
      // console.log('restaurant one e: ', err);
      if (err) return next(err);
      // console.log('restaurant one: ', restaurant);
      Restaurant.populate(restaurant, {
        path: 'reviews.author',
        select: 'username email',
        model: 'user'
      }, function(err2, rest) {
        // console.log('restaurant one e2: ', err2);
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
