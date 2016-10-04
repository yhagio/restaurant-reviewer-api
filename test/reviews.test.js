var app = require('../server/server');
var request = require('supertest');
var expect = require('chai').expect;

describe('[Review]', function(){
  // require('../server/utils/seed');

  xit('save a new review', function(done) {
    // TODO: register and logged in a user
    // TODO: register a restuarnat
    request(app)
      .post('/api/reviews/1/create-review')
      .send({
        comment: 'Very good',
        author: '123user',
        restaurantId: '1',
        rating: 5
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function(err, res) {
        // console.log('REVIEW:::::\n', err);
        expect(res.body).to.be.an('object');
        done();
      })
  });
});