var Review = require('./reviewModel');

exports.createReview = function(req, res, next) {
  console.log('[createReview user]', req.user);
  console.log('[createReview params]', req.params);
  console.log('[createReview body]', req.body);

  var comment = req.body.comment;
  var author = req.user._id;
  var restaurant = req.params.id || 1;
  var rating = req.body.rating;


  var newReview = new Review({
    comment: comment,
    author: author,
    // restaurant: restaurant,
    rating: rating
  });

  newReview.save(function(err, review) {
    if (err) return next(err);
    return res.json(review);
  });
}
