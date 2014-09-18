# grunt-version-file

> Generates code provenance to a JSON file for deployment alongside the application

Knowing exactly which version of the application has been deployed or is stored in a deployment archive can be crucial for debugging but is difficult without careful record keeping. One solution to this problem is to automatically generate a file with code provenance information that is deployed alongside the application. Version 0.1.0 of the grunt-version-file task writes build datetime, the application version, and the git commit and repository status (dirty or clean) to a JSON file.

## Getting Started

This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-version-file --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-version-file');
```

## The "version_file" task

### Overview and Usage
In your project's Gruntfile, add a section named `version_file` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    version_file: {
      make: {
        options: {
          out: ["build/out/version.json"],
          generator_list: [],
          generator_dir: ""
        }
      }
    }
});
```

### Options

#### options.out
Type: `String`
Purpose: Output file path to write to
Default value: None, required

#### options.generator_list
Type: `Array` of ``String`
Purpose:
Default value:

#### options.generator_dir
Type: `String`
Purpose:
Default value:

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

### Code smells

The following are bad, please feel free to fix them yourself :)

- Nothing. No code written so nothing could be smelly.

## Changelog

- _0.1.0_ - Initial release

## License

Copyright (c) 2014 raffishquartan

Licensed under the MIT License
