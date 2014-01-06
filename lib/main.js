var path = require('path'),
    fs = require('fs'),

createExtFilter = function(include) {
  return function(file) {
    var fileExt = path.extname(file).slice(1);
    return (include.indexOf(fileExt) !== -1);
  };
},

readdir = function(dirname, include, done) {
  var extFilter = createExtFilter(include);

  fs.readdir(dirname, function(err, files) {
    if (err) return done(err);

    files = files.filter(extFilter).map(function(file) {
      return path.normalize(path.join(dirname, file));
    });

    done(null, files);
  });
};

module.exports = function(dirname) {
  var done    = function() {},
      include = ['js', 'json', 'coffee'];

  if (arguments[1] instanceof Array) {
    include = arguments[1];

    if (arguments[2] !== undefined && typeof arguments[2] === 'function') {
      done = arguments[2];
    }
  } else if (arguments[1] !== undefined && typeof arguments[1] === 'function') {
    done = arguments[1];
  }

  readdir(dirname, include, function(err, files) {
    if (err) return done(err);

    var set = {};

    files.forEach(function(file) {
      var basename = path.basename(file, path.extname(file));
      set[basename] = require(file);
    });

    done(null, set);
  });
};