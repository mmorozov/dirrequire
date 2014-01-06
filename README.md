dirrequire

=====

_dirrequire_ library for async require files in directory [node.js](http://nodejs.org).

## Installation

    $ npm install dirrequire

## Api
```javascript
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

dirrequire(__dirname + "/routes, function(err, routes) {
    console.log(routes);
});

```