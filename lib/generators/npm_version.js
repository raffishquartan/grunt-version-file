/*
 * grunt-version-file
 * https://github.com/raffishquartan/grunt-version-file
 *
 * Copyright (c) 2014 raffishquartan
 * Licensed under the MIT license.
 *
 * Class SRP: Abstract prototype for generator plugins
 */

"use strict";

var grunt = require("grunt");
var Q = require("q");

module.exports = {
  label: function() {
    return "npm_version";
  },

  value: function() {
    var pkg = grunt.file.readJSON("package.json");
    return Q(pkg.version);
  }
};
