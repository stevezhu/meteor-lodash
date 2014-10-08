Tinytest.add("lodash - Exists", function(test) {
	test.equal(_, lodash, "Expected _ to be lodash");
	test.notEqual(typeof lodash, 'undefined', "Expected lodash to not be undefined");
});
