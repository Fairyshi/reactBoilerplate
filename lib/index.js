'use strict';

var Foo = require('./foo/');
var version = require('./version');

Foo.version = version;

module.exports = Foo;