var dirrequire = require('../lib/main');

describe('Testing first mock', function() {
  var test = {
    err: null,
    result: null,
    load: false
  };

  before(function(done) {
    dirrequire(__dirname + "/mocks/1", function(err, result) {
      test.error = err;
      test.result = result;
      test.load = true;

      done();
    });
  });

  it('mock should be load', function(done) {
    test.load.should.be.true;
    done();
  });

  it('error should be empty', function(done) {
    (test.error === null).should.be.true;
    done();
  });

  it('testing result', function(done) {
    test.result.should.have.property('foo');
    (test.result.foo() === 'foo').should.be.true;

    test.result.should.have.property('load');
    (test.result.load() === 'load').should.be.true;
    done();
  });
});

describe('Testing second mock', function() {
  var test = {
    err: null,
    result: null,
    load: false
  };

  before(function(done) {
    dirrequire(__dirname + "/mocks/2", ['js', 'json'], function(err, result) {
      test.error = err;
      test.result = result;
      test.load = true;

      done();
    });
  });

  it('mock should be load', function(done) {
    test.load.should.be.true;
    done();
  });

  it('error should be empty', function(done) {
    (test.error === null).should.be.true;
    done();
  });

  it('testing result', function(done) {
    test.result.should.have.property('foo');
    test.result.should.have.property('load');
    test.result.should.have.property('conf');
    test.result.should.not.have.property('cappuccino');
    test.result.conf.should.have.property('foo');

    done();
  });
});