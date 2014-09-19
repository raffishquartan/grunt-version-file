/*
 * grunt-version-file
 * https://github.com/raffishquartan/grunt-version-file
 *
 * Copyright (c) 2014 raffishquartan
 * Licensed under the MIT license.
 *
 * Class SRP: Create JSON string for serialisation
 */

function JsonCreator(options) {
  if(options.generator_manager === undefined) {
    throw new Error("JsonCreator requires an options.generator_manager at construction");
  }

  this.generator_manager = options.generator_manager;
}

JsonCreator.prototype.create_json_string = function() {
  var result_object = {};
  this.generator_manager.apply_generators(result_object);
  return JSON.stringify(result_object, undefined, 2);
};

module.exports = JsonCreator;
