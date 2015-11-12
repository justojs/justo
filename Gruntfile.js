module.exports = function(grunt) {
  "use strict";

  // Project configuration
  grunt.initConfig({
    // Metadata
    pkg: grunt.file.readJSON('package.json'),

    // Task configuration
    babel: {
      options: {
        sourceMap: false,
        comments: false
      },

      es5: {
        files: {
        	"build/es5/lib/index.js": "lib/index.js",
          "build/es5/lib/Automator.js": "lib/Automator.js"
        }
      }
    },

    clean: {
      es5: {
        src: ["build/es5", "dist/es5"]
      }
    },

    copy: {
    	nodejs: {
    		files: [
    		  {cwd: "build/es5/", src: ["lib/*.js"], dest: "dist/es5/nodejs/<%= pkg.name %>/", expand: true},
    		  {src: ["package.json", "README.md"], dest: "dist/es5/nodejs/<%= pkg.name %>/", expand: true},
    		  {src: ["test/**/*.*"], dest: "dist/es5/nodejs/<%= pkg.name %>", expand: true}
    		]
    	}
    },

    jshint: {
      gruntfile: {
        src: ["Gruntfile.js"]
      },

      lib: {
        options: {
          jshintrc: true
        },

        src: ["lib/**"]
      },

      test: {
        options: {
        	jshintrc: true,
          ignores: [
            "test/mocha.opts"
          ]
        },

        src: ["test/**"]
      }
    },

    mochaTest:{
    	options: {
    		ignoreLeaks: false,
    		quiet: false,
    		reporter: "spec",
  			timeout: 1500
    	},

      es5: {
        options: {
          require: [
            "justo-assert"
          ]
        },

        src: [
          "test/unit/lib/**/*.js"
        ]
      }
    }
  });

  // These plugins provide necessary tasks
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks("grunt-mocha-test");
  grunt.loadNpmTasks("grunt-travis-lint");

  //aliases
  grunt.registerTask("buildes5", ["travis-lint", "jshint", "clean:es5", "babel:es5", "copy:nodejs"]);
  grunt.registerTask("es5", ["buildes5", "mochaTest:es5"]);

  // Default task
  grunt.registerTask("default", []);
};
