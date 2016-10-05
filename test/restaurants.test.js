var app = require('../server/server');
var request = require('supertest');
var expect = require('chai').expect;

describe('[Restaurants]', function(){
  it('retrieve all the restaurants', function(done) {
    request(app)
      .post('/api/restaurants')
      .send({
        name: 'Kotonona',
        address: '912 Bourbon Avenue, New York',
        photo: 'www.google.com',
        category: 'Japanese'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {

        request(app)
          .get('/api/restaurants')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(201)
          .end(function(err, res) {
            expect(res.body).to.have.lengthOf(1);
            expect(res.body[0].name).to.equal('Kotonona');
            done();
          })
      });

  });

  it('retrieve 1 restaurant with reviews', function(done) {
    request(app)
      .post('/api/restaurants')
      .send({
        name: 'Kamikaze',
        address: '9812 Bourbon Avenue, New York',
        photo:'www.google.com',
        category: 'Japanese'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        
        request(app)
          .get('/api/restaurants/' + res.body._id)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(201)
          .end(function(error, resp) {
            expect(resp.body).to.be.an('object');
            expect(resp.body.name).to.equal('Kamikaze');
            done();
          })
      });
  });
});