var app = require('./server/server');
var config = require('./server/config/config');

app.listen(config.port, function() {
  console.log('Connected to http://localhost:' + config.port);
});
