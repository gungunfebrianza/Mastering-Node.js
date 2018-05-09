module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Lint
    jshint: {
      all: ['Gruntfile.js', '<%= pkg.name %>.js', 'bin/*.js', 'test/*.js'],
    },

    // Minify
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> v<%= pkg.version %>  <%= pkg.repository.url %> */\n'
      },
      all: {
        files: {
          '<%= pkg.name %>.min.js': ['<%= pkg.name %>.js']
        }
      }
    },

    // Test
    mochacli: {
      options: {
        reporter: 'spec'
      },
      all: ['test/*.js']
    },

    // Bump, Tag, Push
    bump: {
      options: {
        updateConfigs: ['pkg'],
        commitFiles: ['-a'],
        pushTo: 'origin'
      }
    },

    // Publish
    shell: {
      publish: {
        command : "npm publish"
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-mocha-cli');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['jshint', 'mochacli']);
  grunt.registerTask('lint',    ['jshint']);
  grunt.registerTask('test',    ['mochacli']);

  grunt.registerTask("release", "Release a new version, push it and publish it", function(target) {
    if (!target) {
      target = "patch";
    }
    return grunt.task.run("bump-only:" + target, "uglify", "bump-commit", "shell:publish");
  });
};