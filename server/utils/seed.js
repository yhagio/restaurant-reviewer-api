var Restaurant = require('../api/restaurant/restaurantModel');

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
