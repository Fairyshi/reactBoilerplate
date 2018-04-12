const Foo = require('./foo/');
const version = require('./version');

Foo.version = version;

module.exports = Foo;
