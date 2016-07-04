var app = require('../server/server');
var request = require('supertest');
var expect = require('chai').expect;

describe('Users', function(){

  it('sign up a new user', function(done) {
    request(app)
      .post('/users')
      .send({
        username: 'mufasa',
        email: 'mufasa@cc.cc',
        password:'mufasatheking'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function(err, resp) {
        expect(resp.body).to.be.an('object');
        done();
      })
  });

});
