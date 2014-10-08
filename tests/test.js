Tinytest.add("lodash - Exists", function(test) {
	//test.equal(_, Package.underscore._, "Expected _ to be underscore.");
	test.equal(true, typeof lodash !== 'undefined', "Expected lodash to not be undefined")
});
