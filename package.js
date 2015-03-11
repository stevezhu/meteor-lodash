Npm.depends({
	'lodash': '3.5.0'
});

var path = Npm.require('path');
var argv = process.argv.slice(2);
var packageDirname;
if (argv[0] === 'test-packages') {
	packageDirname = path.basename(path.resolve(process.argv[process.argv.length - 1]));
} else {
	packageDirname = path.basename(process.cwd());
}

Package.describe({
	summary: "A utility library delivering consistency, customization, performance, & extras.",
	version: "3.5.0",
	git: "https://github.com/stevezhu/meteor-lodash.git"
});

Package.onUse(function(api) {
	api.addFiles(['lodash.js', 'client.js'], 'client');
	api.addFiles('server.js', 'server');
	api.export('lodash');
	api.export('_');
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use(packageDirname);
	api.addFiles('tests/test.js');
});
