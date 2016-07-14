var app = require('./server/server');
var config = require('./server/config/config');

var Restaurant = require('./server/api/restaurant/restaurantModel');
var Review = require('./server/api/review/reviewModel');

require('./server/utils/seed');

  
app.listen(config.port, function() {
  console.log('Connected to http://localhost:' + config.port);
});
