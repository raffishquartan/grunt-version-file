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

module.exports = {
  label: function() {
    return "datestring";
  },

  value: function() {
    return grunt.template.today();
  }
};
