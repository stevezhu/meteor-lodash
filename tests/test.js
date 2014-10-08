Tinytest.add("lodash - Exists", function(test) {
	test.equal(_, lodash, "Expected _ to be lodash");
	test.notEqual(_, Package.underscore._, "Expected _ to not be underscore");
	test.isTrue(typeof lodash !== 'undefined', "Expected lodash to be defined");
});
