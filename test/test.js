var request = require('supertest');
var server = require('../bin/www');
console.log('testing')
describe('GET /', function() {
  it('should render ok', function(done) {
    request('http://localhost:3000')
      .get('/')
      .expect(200, done);
  });
});

describe('GET /sales', function() {
  it('should render ok', function(done) {
    request('http://localhost:3000')
      .get('/sales')
      .expect(200, done);
  });
});
