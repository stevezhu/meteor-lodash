Npm.depends({
	'lodash': '2.4.1'
});

Package.describe({
	summary: "A utility library delivering consistency, customization, performance, & extras.",
	version: "1.0.1",
	git: "https://github.com/stevezhu/meteor-lodash.git"
});

Package.onUse(function(api) {
	api.versionsFrom('METEOR@0.9.0');
	api.addFiles('lodash.js', 'client');
	api.addFiles('server.js', 'server');
	api.export('lodash');
	api.export('_');
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('stevezhu:lodash');
	api.addFiles('tests/test.js');
});
