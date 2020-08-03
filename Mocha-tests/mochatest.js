const request = require('supertest')
const expect = require('chai').expect
const server = require('../api/server')
const db = require('../database/dbConfig')
const chai = require("chai")
const { response } = require('../api/server')
chai.should()


before(function (done) {
  db.migrate.rollback()
      .then(() => {
          db.migrate.latest()
              .then(() => {
                  return db.seed.run()
                      .then(() => {
                          done()
                      })
              })
      })
})

after(function (done) {
  db.migrate.rollback()
      .then(() => {
          db.migrate.latest()
              .then(() => {
                  return db.seed.run()
                      .then(() => {
                          done()
                      })
              })
      })
})

const credentials = 
  {username :'masantea',
  password: 'abc123'
  }

const authenticated = request.agent(server)

const authenticatedUser = request.agent(server)

before(function (done) {
    authenticatedUser
        .post('/auth/login')
        .send(credentials)
        .end(function (err, response) {
            expect(response.statusCode).to.equal(200)
            done()
        })
        });
  
       
        describe('GET /', function (done) {
          it('should return a 200 response', function (done) {
              request(server).get('/')
                  .expect(200, done)
          })
      })

        describe('GET /api/items', function() {
          it('should return a 200 response if the user is logged in', function(done){
            authenticatedUser.get('/items')
            .expect(200, done);
          })
        })
          it('should GET ALL items on /api/items GET', function(done) {
            chai.request(server)
              .get('/api/items')
              .end(function(err, res){
                res.should.have.status(200);
                res.body.should.be.a('array')
                done();
              });
          });
        
          it('should NOT GET ALL items on /api/items GET', function(done) {
            chai.request(server)
              .get('/api/items')
              .end(function(err, res){
                res.should.have.status(404);
                done();
              });
          })
