var app = require('../server/server');
var request = require('supertest');
var expect = require('chai').expect;

describe('[Restaurants]', function(){
  // require('../server/utils/seed');

  xit('retrieve all the restaurants', function(done) {
    // TODO: register and logged in a user
    // TODO: register a restuarnat
    request(app)
      .get('/api/restaurants')
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