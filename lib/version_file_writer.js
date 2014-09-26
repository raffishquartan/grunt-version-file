/*
 * grunt-version-file
 * https://github.com/raffishquartan/grunt-version-file
 *
 * Copyright (c) 2014 raffishquartan
 * Licensed under the MIT license.
 *
 * Class SRP: Assemble and write JSON version file to disk
 */

function VersionFileWriter() {
}

VersionFileWriter.prototype.write_version_file = function(options) {
  var grunt = require("grunt");

  if(options.json_creator === undefined || typeof(options.json_creator) !== "object") {
    throw new Error("VersionFileWriter.write_version_file requires options.json_creator JsonCreator");
  }
  if(options.out === undefined || typeof(options.out) !== "string") {
    throw new Error("VersionFileWriter.write_version_file requires options.out string");
  }

  grunt.file.write(options.out, options.json_creator.create_json_string());
};

module.exports = VersionFileWriter;
