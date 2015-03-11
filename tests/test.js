Tinytest.add("lodash - Exists", function(test) {
	test.notEqual(typeof lodash, 'undefined', "Expected lodash to not be undefined");
});

Tinytest.add("lodash - lodash equals _", function(test) {
	test.equal(lodash, _, "Expected lodash to be equal to _");
});
