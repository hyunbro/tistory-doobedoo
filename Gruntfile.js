'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'grunt/scripts/*.js',
        'grunt/scripts/bootstrap/*.js',
        '!grunt/scripts/bootstrap.min.js'
      ]
    },
    less: {
      dist: {
        options: {
          compile: true,
          compress: true
        },
        files: {
          'grunt/styles/bootstrap.css': [
            'grunt/styles/style.less',
            'grunt/styles/*.less',
            'grunt/styles/*.css',
            '!grunt/styles/bootstrap.css'
          ]
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'grunt/scripts/bootstrap.min.js': [
            'grunt/scripts/bootstrap/transition.js',
            'grunt/scripts/bootstrap/alert.js',
            'grunt/scripts/bootstrap/button.js',
            'grunt/scripts/bootstrap/carousel.js',
            'grunt/scripts/bootstrap/collapse.js',
            'grunt/scripts/bootstrap/dropdown.js',
            'grunt/scripts/bootstrap/modal.js',
            'grunt/scripts/bootstrap/tooltip.js',
            'grunt/scripts/bootstrap/popover.js',
            'grunt/scripts/bootstrap/scrollspy.js',
            'grunt/scripts/bootstrap/tab.js',
            'grunt/scripts/bootstrap/affix.js',
            'grunt/scripts/*.js'
          ]
        }
      }
    },
    watch: {
      less: {
        files: [
          'grunt/styles/less/*.less'
        ],
        tasks: ['less']
      },
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['jshint', 'uglify']
      },
      livereload: {
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
          livereload: false
        },
        files: [
          'grunt/styles/bootstrap.css',
          'grunt/scripts/bootstrap.min.js'
        ]
      }
    },
    clean: {
      dist: [
        'grunt/styles/bootstrap.css',
        'grunt/scripts/bootstrap.min.js'
      ]
    }
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['clean','less','uglify']);
  grunt.registerTask('dev', ['watch']);
};
