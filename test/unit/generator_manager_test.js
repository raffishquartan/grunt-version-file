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

describe("GeneratorManager", function() {
  var GeneratorManager = require("../../lib/generator_manager");

  it("requires an options.generator_dir constructor argument", function() {
    (function() {
      var config_without_generator_dir = { generator_list: ["foo", "bar"] };
      var gm = new GeneratorManager(config_without_generator_dir);
    }).should.throw();
  });

  it("throws an error when options.generator_dir is not a string", function() {
    (function() {
      var config_without_generator_dir_string = { generator_list: ["foo", "bar"], generator_dir: 1 };
      var gm = new GeneratorManager(config_without_generator_dir_string);
    }).should.throw();
  });

  it.skip("throws an error when options.generator_dir does not exist", function() {
  });

  it("requires an options.generator_list constructor argument", function() {
  it("requires an options.generator_dir constructor argument", function() {
    (function() {
      var config_without_generator_list = { generator_dir: "foo" };
      var gm = new GeneratorManager(config_without_generator_list);
    }).should.throw();
  });
  });

  it("throws an error when options.generator_list is not an array", function() {
    (function() {
      var config_without_generator_list_array = { generator_dir: "foo", generator_list: "foo" };
      var gm = new GeneratorManager(config_without_generator_list_array);
    }).should.throw();
  });

  it.skip("builds a generator for each entry in options.generator_dir", function() {
  });

  it.skip("throws an error when a gen. list member is not in generator_dir", function() {
  });

  it("throws an error when any unexpected options fields are defined", function() {
    (function() {
      var config_with_extra_entry = { generator_dir: "foo", generator_list: ["bar", "baz"], extra: 1234 };
      var gm = new GeneratorManager(config_with_extra_entry);
    }).should.throw();
  });

  it.skip("allows iteration over all generators", function() {
  });
});
