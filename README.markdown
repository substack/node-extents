# extents

Compute the extents around a polygon.

Extents are like a bounding box, only decomposed into west, south, north, and
east values instead of 2 or 4 points.

[![build status](https://secure.travis-ci.org/substack/node-extents.png)](http://travis-ci.org/substack/node-extents)

# example

``` js
var extents = require('extents');
var polygon = [
    [ 37.96, -122.45 ],
    [ 37.95, -122.90 ],
    [ 38.21, -122.62 ]
];
var ex = extents(polygon);
console.dir(ex);
```

***

```
{ w: -122.9, s: 37.95, e: -122.45, n: 38.21 }
```

# methods

``` js
var extents = require('extents')
```

## extents(polygon)

Compute the extents object for `polygon`.
The `polygon` object should be an array of 2-item `[lat,lon]` arrays.

# install

With [npm](http://npmjs.org) do:

```
npm install extents
```

# license

MIT
