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

describe("GeneratorFactory", function() {
  var should = require("should");
  var GeneratorFactory = require("../../lib/generator_factory.js");

  it("has a create method", function() {
    var gf = new GeneratorFactory();
    gf.create.should.be.a.Function;
  });

  it("... that requires options.label", function() {
    var gf = new GeneratorFactory();
    var config_without_label = { value: function() {} };
    (function() {
      gf.create(config_without_label);
    }).should.throw();
  });

  it("... that requires options.label to be a function", function() {
    var gf = new GeneratorFactory();
    var config_without_label_function = { value: function() {}, label: "label" };
    (function() {
      gf.create(config_without_label_function);
    }).should.throw();
  });

  it("... that requires options.value", function() {
    var gf = new GeneratorFactory();
    var config_without_value = { label: function() {} };
    (function() {
      gf.create(config_without_value);
    }).should.throw();
  });

  it("... that requires options.label to be a function", function() {
    var gf = new GeneratorFactory();
    var config_without_value_function = { value: "value", label: function() {} };
    (function() {
      gf.create(config_without_value_function);
    }).should.throw();
  });

  it("... creates objects with a value and label function", function() {
    var gf = new GeneratorFactory();
    var config = { label: function() {}, value: function() {} };
    var generator = gf.create(config);
    generator.label.should.be.a.Function;
    generator.value.should.be.a.Function;
  });

  it("... that allows options.init", function() {
    var gf = new GeneratorFactory();
    var config_with_init = { label: function() {}, value: function() {}, init: function() {} };
    var generator = gf.create(config_with_init);
    generator.init.should.be.a.Function;
  });

  it("... that requires options.init to be a function", function() {
    var gf = new GeneratorFactory();
    var config_with_nonfunction_init = { label: function() {}, value: function() {}, init: "init" };
    (function() {
      gf.create(config_with_nonfunction_init);
    }).should.throw();
  });

  it("... that creates generators with a default init function", function() {
    var gf = new GeneratorFactory();
    var config = { label: function() {}, value: function() {} };
    var generator = gf.create(config);
    generator.init.should.be.a.Function;
  });

  it("... that throws an error if extra options are present", function() {
    var gf = new GeneratorFactory();
    var config_with_extra = { value: function() {}, label: function() {}, foo: function() {} };
    (function() {
      gf.create(config_with_extra);
    }).should.throw();
  });
});
