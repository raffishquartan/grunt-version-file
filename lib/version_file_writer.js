/*
 * grunt-version-file
 * https://github.com/raffishquartan/grunt-version-file
 *
 * Copyright (c) 2014 raffishquartan
 * Licensed under the MIT license.
 *
 * Class SRP: Assemble and write JSON version file to disk
 */

function VersionFileWriter(options) {
  var check_valid_output_creator = function() {
    if(options.output_creator === undefined || typeof(options.output_creator) !== "object") {
      throw new Error("VersionFileWriter requires options.output_creator to be an object");
    }
  };

  var check_valid_generator_manager = function() {
    if(options.generator_manager === undefined || typeof(options.generator_manager) !== "object") {
      throw new Error("VersionFileWriter requires options.generator_manager to be an object");
    }
  };

  var check_valid_out = function() {
    if(options.out === undefined || typeof(options.out) !== "string") {
      throw new Error("VersionFileWriter requires options.out to be a string");
    }
  };

  var check_valid_async_done = function() {
    if(options.async_done === undefined || typeof(options.async_done) !== "function") {
      throw new Error("VersionFileWriter requires options.async_done to be a function");
    }
  };

  check_valid_output_creator(options.output_creator);
  check_valid_generator_manager(options.generator_manager);
  check_valid_out(options.out);
  check_valid_async_done(options.async_done);

  this.output_creator = options.output_creator;
  this.generator_manager = options.generator_manager;
  this.out = options.out;
  this.async_done = options.async_done;
}

VersionFileWriter.prototype.write_version_file = function() {
  var grunt = require("grunt");
  var object_store = this.generator_manager.generate();
  var output_string = this.output_creator.create_string(object_store);
  grunt.file.write(this.out, output_string);
  this.async_done();
};

module.exports = VersionFileWriter;
