var Restaurant = require('../api/restaurant/restaurantModel');
var User = require('../api/user/userModel');

Restaurant.count({}, function(err, count) {
  if (count < 1) {
    restaurnatsObjects.forEach(function(r) {
      Restaurant.create({
        name: r.name,
        address: r.address,
        photo: r.photo,
        category: r.category
      });
    });
    console.log('Restaurants Seed Done');
  }
});

User.count({}, function(err, count) {
  if (count < 1) {
    userObjects.forEach(function(r) {
      var newUser = new User({
        username: r.username,
        email: r.email,
        password: r.password
      });
      newUser.save();
    });
    console.log('User Seed Done');
  }
});

// Review.count({}, function(err, count) {
//   if(count < 1) {
//     Review.create({
//       comment: 'Hola',
//       restaurant: '5783151ba6ac77810c634bb0',
//       author: '57802b217b6fcd1d8969e384',
//       rating: 3
//     }); 
//   }
// });

var restaurnatsObjects = [
  {
    name: 'El rey del nachos',
    address: '1625 Rue Sainte-Catherine, Montréal',
    photo: 'http://lorempixel.com/400/200/food/1',
    category: 'Mexican'
  },
  {
    name: 'Fuji Sushi',
    address: '1000 Rue Sainte-Catherine, Montréal',
    photo: 'http://lorempixel.com/400/200/food/2',
    category: 'Japanese'
  },
  {
    name: 'Maison Vanessa',
    address: '402 Rue Jean Talon, Montréal',
    photo: 'http://lorempixel.com/400/200/food/3',
    category: 'French'
  },
  {
    name: 'Kina BBQ',
    address: '900 Rue Jean Talon, Montréal',
    photo: 'http://lorempixel.com/400/200/food/4',
    category: 'Korean'
  },
  {
    name: 'Maison Busan',
    address: '930 Rue Jean-Baptiste, Montréal',
    photo: 'http://lorempixel.com/400/200/food/5',
    category: 'Korean'
  },
  {
    name: 'Sarake Ramen',
    address: '12 Rue Jean-Baptiste, Montréal',
    photo: 'http://lorempixel.com/400/200/food/6',
    category: 'Japanese'
  },
  {
    name: 'Blue 300',
    address: '12 Rue Berri, Montréal',
    photo: 'http://lorempixel.com/400/200/food/7',
    category: 'French'
  },
  {
    name: 'Mona Merida',
    address: '1200 Rue Berri, Montréal',
    photo: 'http://lorempixel.com/400/200/food/8',
    category: 'Mexican'
  },
  {
    name: 'Barana Mona',
    address: '1234 Rue Bishop, Montréal',
    photo: 'http://lorempixel.com/400/200/food/9',
    category: 'French'
  },
  {
    name: 'Mana Kura',
    address: '9876 Rue Bishop, Montréal',
    photo: 'http://lorempixel.com/400/200/food/10',
    category: 'Japanese'
  }
];

var userObjects = [
  {
    username: 'alice',
    email: 'alice@cc.cc',
    password: 'password123'
  },
  {
    username: 'bob',
    email: 'bob@cc.cc',
    password: 'password123'
  },
  {
    username: 'ciara',
    email: 'ciara@cc.cc',
    password: 'password123'
  },
  {
    username: 'david',
    email: 'david@cc.cc',
    password: 'password123'
  }
];