[![devDependency Status](https://david-dm.org/mmorozov/dirrequire/dev-status.png)](https://david-dm.org/mmorozov/dirrequire#info=devDependencies)

_dirrequire_ library for async require files in directory [node.js](http://nodejs.org).

## Installation

    $ npm install dirrequire

## Api
```
dirrequire(dirname, [include], callback)

include – array of file extensions for require

```

## Example
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

```