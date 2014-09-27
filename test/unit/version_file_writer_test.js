/*
 * grunt-version-file
 * https://github.com/raffishquartan/grunt-version-file
 *
 * Copyright (c) 2014 raffishquartan
 * Licensed under the MIT license.
 */
// Allow indirectly-executed (should-executed) function literals to pass jshint IIFE warning:
/*jshint -W068 */
// Allow expressions (...should.be.a.Foo;)
/*jshint -W030 */

"use strict";

describe("VersionFileWriter", function() {
  var should = require("should");
  var GeneratorManager = require("../../lib/generator_manager");
  var JsonCreator = require("../../lib/json_creator");
  var VersionFileWriter = require("../../lib/version_file_writer");

  var JSON_CREATOR_VALID = new JsonCreator({
    generator_manager: new GeneratorManager({
      generator_dir: "generators",
      generator_list: ["datestring", "npm_version"],
      async_done: function() { return "stub-async-done"; }
    })
  });
  var OUT_VALID = "test/tmp/build/out/version.json";

  var VALID_OPTIONS = {
    json_creator: JSON_CREATOR_VALID,
    out: OUT_VALID
  };

  it("has a write_version_file method", function() {
    var vfw = new VersionFileWriter();
    vfw.write_version_file.should.be.a.Function;
    typeof(vfw.write_version_file).should.be.a.Function;
  });

  it("write_version_file requires options.json_creator", function() {
    var vfw = new VersionFileWriter();
    (function() {
      vfw.write_version_file({
        out: OUT_VALID
      });
    }).should.throw();
  });

  it("write_version_file requires options.out", function() {
    var vfw = new VersionFileWriter();
    (function() {
      vfw.write_version_file({
        json_creator: JSON_CREATOR_VALID
      });
    }).should.throw();
  });

  it("write_version_file requires options.out to be a string", function() {
    var vfw = new VersionFileWriter();
    (function() {
      vfw.write_version_file({
        json_creator: JSON_CREATOR_VALID,
        out: 1
      });
    }).should.throw();
  });

  it("writes valid options correctly", function() {
    var vfw = new VersionFileWriter();
    vfw.write_version_file(VALID_OPTIONS);
    // TODO: After write is completed, test that written file matches expected string
  });
});
