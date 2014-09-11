/*
 * grunt-version-file
 * https://github.com/raffishquartan/grunt-version-file
 *
 * Copyright (c) 2014 raffishquartan
 * Licensed under the MIT license.
 *
 * Class SRP: Abstract prototype for generator plugins
 */

var GeneratorFactory = function() {
};

var default_generator_init = function() {
};

var validate_generator_config = function(gc) {
  if(!(gc && gc.value && typeof(gc.value) === "function" && gc.label && typeof(gc.label) === "function")) {
    return false;
  }
  else {
    var fields = Object.keys(gc);
    return fields.length === 2 || (fields.length === 3 && fields.indexOf("init") !== -1);
  }
};

GeneratorFactory.prototype.create = function(generator_config) {
  if(validate_generator_config(generator_config)) {
    var gen = {};
    gen.value = generator_config.value;
    gen.label = generator_config.label;
    gen.init = generator_config.init ? generator_config.init : default_generator_init;
    return gen;
  }
  else {
    throw new Error("Error in configuration supplied to GeneratorFactory.create");
  }
};

module.exports = GeneratorFactory;
