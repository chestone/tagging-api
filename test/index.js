const expect = require('chai').expect;
const request = require('request');
const _ = require('lodash');

describe("Test Tagging Urls", function() {
  const url = "http://localhost:8080";
  // describe("/tag", function() {
  //   const path = "/tag";
  // });
  // describe("/tags", function() {
  //   const path = "/tags";
  //
  // });
  describe("/stats", function() {
    const path = "/stats";
    it('request all stats', function(done) {
      request.get(url + path, function(error, resp, body) {
        const expected = [{"tag": "Test Tag", "count": 0}];
        if (!error) {
          expect(resp.statusCode).to.equal(200);
          expect(body).to.equal(JSON.stringify(expected));
          done();
        }
      });
    });

    it('request test tag stats', function(done) {
      request.get(url + path, function(error, resp, body) {
        const expected = [{"id": 0, "tag": "test", "count": 1}];
        if (!error) {
          expect(resp.statusCode).to.equal(200);
          expect(body).to.equal(JSON.stringify(expected));
          done();
        }
      });
    });
  });
});
