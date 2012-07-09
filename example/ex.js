var extents = require('../');
var polygon = [
    [ 37.96, -122.45 ],
    [ 37.95, -122.90 ],
    [ 38.21, -122.62 ]
];
var ex = extents(polygon);
console.dir(ex);
