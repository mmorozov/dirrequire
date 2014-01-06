[![Build Status](https://travis-ci.org/mmorozov/dirrequire.png?branch=master)](https://travis-ci.org/mmorozov/dirrequire)
[![devDependency Status](https://david-dm.org/mmorozov/dirrequire/dev-status.png)](https://david-dm.org/mmorozov/dirrequire#info=devDependencies)
[![Code Climate](https://codeclimate.com/repos/52ca9d60e30ba067540011a3/badges/6c25cc19332b8424f7d8/gpa.png)](https://codeclimate.com/repos/52ca9d60e30ba067540011a3/feed)

[![NPM](https://nodei.co/npm/dirrequire.png?stars=true)](https://nodei.co/npm/dirrequire/)

_dirrequire_ library for async require files in directory

## Installation

    $ npm install dirrequire

## Api

### dirrequire(dirname, [include], callback)

include – array of file extensions for require

## Examples
```
routes
    auth.js
    main.js
    404.js
    config.json
```


```javascript

var dirrequire = require('dirrequire');

dirrequire(__dirname + "/routes", function(err, routes) {
    console.log(routes);
});

// {
//   '404': [Function],
//   auth: [Function],
//   config: {},
//   main: [Function]
// }
```

```javascript
var dirrequire = require('dirrequire');

dirrequire(__dirname + "/routes", ['js'], function(err, routes) {
    console.log(routes);
});

// {
//   '404': [Function],
//   auth: [Function],
//   main: [Function]
// }
```

## Running tests

```
$ npm test
```

## License

The MIT License, See the included license.md file.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/mmorozov/dirrequire/trend.png)](https://bitdeli.com/free "Bitdeli Badge")