var app = require('./server/server');
var config = require('./server/config/config');

var Restaurant = require('./server/api/restaurant/restaurantModel');
var Review = require('./server/api/review/reviewModel');

Restaurant.count({}, function(err, count) {
  if (count < 1) {
    for (var i = 0; 10 > i; i++) {
      Restaurant.create({
        name: 'ABC Sushi '+i+' Shop',
        address: 'A '+i+' BC Street Montreal, QC A1B 2C3',
        reviews: [],
        photo: 'http://loremflickr.com/320/240/montreal',
        hours: {
          mon_start: 11,
          mon_end: 22,
          tue_start: 11,
          tue_end: 22,
          wed_start: 11,
          wed_end: 22,
          thu_start: 11,
          thu_end: 22,
          fri_start: 11,
          fri_end: 22,
          sat_start: 11,
          sat_end: 22,
          sun_start: 11,
          sun_end: 22
        },
      });
    }
  }
});

Review.count({}, function(err, count) {
  if(count < 1) {
    Review.create({
      comment: 'Hola',
      restaurant: '5783151ba6ac77810c634bb0',
      author: '57802b217b6fcd1d8969e384',
      rating: 3
    });

    Review.create({
      comment: 'Hai',
      restaurant: '5783151ba6ac77810c634bb0',
      author: '57810594efa407018bb91a8b',
      rating: 5
    });  
  }
});

// Restaurant.findOne({}, function(err, result) {
//   if (err) {
//     console.log('err', err);
//   } else {
//     console.log('result', result);

//   }
// });

// Restaurant.update(
//   {_id: '5783151ba6ac77810c634bb0'}, 
//   { $inc: { total_ratings: -2}}, function(err, result) {
//     if (err) {
//       console.log('err', err);
//     } else {
//       console.log('result', result);
//     }
//   });
// Restaurant.findOneAndUpdate(
//   {_id: '5783151ba6ac77810c634bb0'}, 
//   { $addToSet: { reviews: '578316611426c4910cc946ec'}}, function(err, result) {
//     if (err) {
//       console.log('err', err);
//     } else {
//       console.log('result', result);
//     }
//   });
// Restaurant.findOneAndUpdate(
//   {_id: '5783151ba6ac77810c634bb0'}, 
//   { $addToSet: { reviews: '578316611426c4910cc946ed'}}, function(err, result) {
//     if (err) {
//       console.log('err', err);
//     } else {
//       console.log('result', result);
//     }
//   });

  
app.listen(config.port, function() {
  console.log('Connected to http://localhost:' + config.port);
});
