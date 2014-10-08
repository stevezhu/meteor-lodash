Tinytest.add("lodash - Exists", function(test) {
	test.notEqual(typeof lodash, 'undefined', "Expected lodash to be defined");
	test.equal(_, lodash, "Expected _ to be lodash");
});
