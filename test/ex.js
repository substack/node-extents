var test = require('tap').test;
var extents = require('../');

test('known extents', function (t) {
    var polygon = [
        [ 37.96, -122.45 ],
        [ 37.95, -122.90 ],
        [ 38.21, -122.62 ]
    ];
    var ex = extents(polygon);
    t.same(ex, { w: -122.9, s: 37.95, e: -122.45, n: 38.21 });
    t.end();
});
