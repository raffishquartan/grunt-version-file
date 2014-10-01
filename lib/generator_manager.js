/*
 * grunt-version-file
 * https://github.com/raffishquartan/grunt-version-file
 *
 * Copyright (c) 2014 raffishquartan
 * Licensed under the MIT license.
 *
 * Class SRP: Load and manage version file entry generators
 */

var grunt = require("grunt");
var path = require("path");
var GeneratorFactory = require("../lib/generator_factory");

var GeneratorManager = function(options) {
  var is_valid_generator_dir = function(gd) {
    return gd && typeof(gd) === "string";
  };

  var is_valid_generator_list = function(gl) {
    // Hacky test gl is an Array... (instanceof isn't working)
    return typeof(gl) === "object" && gl.length > 0;
  };

  var has_unexpected_options_properties = function(options) {
    var properties = Object.keys(options);
    return properties.length > 3;
  };

  var is_valid_generator_manager_config = function(options) {
    return options && is_valid_generator_dir(options.generator_dir) &&
      is_valid_generator_list(options.generator_list) && !has_unexpected_options_properties(options);
  };

  if (is_valid_generator_manager_config(options)) {
    var gf = new GeneratorFactory();
    this.generators = {};
    for(var i in options.generator_list) {
      var gen = options.generator_list[i];
      if(this.generators.hasOwnProperty(gen) === true) {
        throw new Error("Error: Duplicate generator '" + gen + "'");
      }
      else {
        var gen_path = path.join(__dirname, options.generator_dir, gen);
        if(grunt.file.exists(gen_path + ".js")) {
          var gen_data = require(gen_path);
          this.generators[gen] = gf.create(gen_data);
        }
        else {
          throw new Error("Error: Generator does not exist '" + gen + "' (" + gen_path + ")");
        }
      }
    }
  } else {
    throw new Error("Error: Unknown");
  }
};

GeneratorManager.prototype.generator_map = function() {
  return this.generators;
};

GeneratorManager.prototype.apply_generators = function(object_store) {
  for(var i in this.generators) {
    var gen = this.generators[i];
    gen.init();
    object_store[gen.label()] = gen.value();
  }
};

module.exports = GeneratorManager;
