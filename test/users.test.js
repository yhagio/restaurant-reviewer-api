var app = require('../server/server');
var request = require('supertest');
var expect = require('chai').expect;

describe('[Users]', function(){

  it('sign up a new user', function(done) {
    request(app)
      .post('/api/users')
      .send({
        username: 'mufasa',
        email: 'mufasa@cc.cc',
        password:'mufasatheking'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function(err, res) {
        // console.log('===RES:\n', res.body);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('token');
        expect(res.body).to.have.deep.property('user.email', 'mufasa@cc.cc');
        done();
      })
  });

  it('cannot sign up if any inputs are empty', function(done) {
    request(app)
      .post('/api/users')
      .send({
        username: '',
        email: 'olala@cc.cc',
        password:'mufasatheking'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422)
      .end(function(err, res) {
        // console.log('USER ID:', res.body.user);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('error');
        expect(res.body).to.have.deep.property('error', 'Username, email, and password are required.');
        done();
      })
  });

  it('cannot sign up a user with same email', function(done) {
    request(app)
      .post('/api/users')
      .send({
        username: 'kevin',
        email: 'mufasa@cc.cc',
        password:'mufasatheking'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422)
      .end(function(err, res) {
        // console.log('RES', res.body);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('error');
        expect(res.body).to.have.deep.property('error', 'The email is already registered.');
        done();
      })
  });

  it('get 1 specific user', function(done) {
    request(app)
      .post('/api/users')
      .send({
        username: 'ali',
        email: 'ali@cc.cc',
        password:'alialiali'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function(err, res) {
        
        request(app)
          .get('/api/users/'+res.body.user.id)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(201)
          .end(function(error, resp) {
            expect(res.body).to.have.deep.property('user.email', 'ali@cc.cc');
            done();
          });
        
      });
  });
});
