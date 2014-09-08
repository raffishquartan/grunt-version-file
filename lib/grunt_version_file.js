/*
 * grunt-version-file
 * https://github.com/raffishquartan/grunt-version-file
 *
 * Copyright (c) 2014 raffishquartan
 * Licensed under the MIT license.
 *
 * Class SRP: Register GVF with Grunt as a plugin
 */

"use strict";

var GruntVersionFileConfig = require("grunt_version_file");
var GeneratorManager = require("generator_manager");
var JsonObjectCreator = require("json_object_creator");
var VersionFileWriter = require("version_file_writer");

function GruntVersionFile(task) {
  this.task = task;
  this.options = task.options(GruntVersionFile.Defaults);
}

GruntVersionFile.prototype.run = function() {
  var config = new GruntVersionFileConfig(this.options);
  var gm = new GeneratorManager({
    generator_dir: config.generator_dir,
    generator_list: config.generator_list
  });
  var creator = new JsonObjectCreator({
    generator_manager: gm
  });
  var writer = new VersionFileWriter({
    json_object_creator: creator
  });
  writer.write_version_file();
};

GruntVersionFile.Defaults = {
  generator_dir: "generators",
  generator_list: [
    "datestring",
    "npm_version",
    "git_revision"
  ]
};

GruntVersionFile.task_name = "version_file";
GruntVersionFile.task_description = "Writes a JSON version file for this build";
GruntVersionFile.register_with_grunt = function(grunt) {
  grunt.registerMultiTask(GruntVersionFile.task_name, GruntVersionFile.task_description, function() {
    var task = new GruntVersionFile(this);
    task.run();
  });
};

// Add variables Grunt expects in camelc case...
GruntVersionFile.taskName = GruntVersionFile.task_name;
GruntVersionFile.taskDescription = GruntVersionFile.task_description;
GruntVersionFile.registerWithGrunt = GruntVersionFile.register_with_grunt;

module.exports = GruntVersionFile;
