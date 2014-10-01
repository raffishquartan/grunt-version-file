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
  var check_options_defined(options) {
    if(!options) {
      throw new Error("VersionFileWriter constructor options = " + options);
    }
  };

  var check_valid_generator_dir = function(gd) {
    if(typeof(gd) !== "string") {
      throw new Error("GeneratorManager requires options.generator_dir to be a string, not: " + typeof(gd));
    }
  };

  var check_valid_generator_list = function(gl) {
    // Hacky test gl is an Array... (instanceof isn't working)
    if(typeof(gl) !== "object") {
      throw new Error("GeneratorManager requires options.generator_list to be an array object, not: " + typeof(gl));
    }
    else if(gl.length == 0) {
      throw new Error("GeneratorManager - empty generator_list");
    }
  };

  var check_unexpected_options_properties = function(options) {
    var properties = Object.keys(options);
    if(properties.length > 2) {
      throw new Error("GeneratorManager options has unexpected keys: " + properties);
    }
  };

  check_options_defined();
  check_valid_generator_dir();
  check_valid_generator_list();
  check_unexpected_options_properties();

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
