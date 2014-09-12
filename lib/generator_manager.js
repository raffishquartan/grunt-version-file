/*
 * grunt-version-file
 * https://github.com/raffishquartan/grunt-version-file
 *
 * Copyright (c) 2014 raffishquartan
 * Licensed under the MIT license.
 *
 * Class SRP: Load and manage version file entry generators
 */

var GeneratorManager = function (options) {
  var is_valid_generator_manager_config = function(options) {
    return options &&
      options.generator_dir &&
      options.generator_dir instanceof String &&
      options.generator_list &&
      options.generator_list instanceof Array;
  };

  if(is_valid_generator_manager_config(options)) {
    // TODO DO STUFF
  }
  else {
    throw new Error("Error in options supplied to GeneratorManager");
  }
};

module.exports = GeneratorManager;
