'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'src/scripts/*.js'
      ]
    },
    less: {
      dist: {
        options: {
          compile: true,
          compress: true
        },
        files: {
          'images/bootstrap.css': [
            'src/styles/style.less'
             ],
                    'images/ie.css': [
                        'src/styles/ie.less'
                    ]
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'images/app.js': [
            'src/scripts/bootstrap/transition.js',
            'src/scripts/bootstrap/alert.js',
//            'src/scripts/bootstrap/button.js',
//            'src/scripts/bootstrap/carousel.js',
//            'src/scripts/bootstrap/collapse.js',
            'src/scripts/bootstrap/dropdown.js',
//            'src/scripts/bootstrap/modal.js',
//            'src/scripts/bootstrap/tooltip.js',
//            'src/scripts/bootstrap/popover.js',
//            'src/scripts/bootstrap/scrollspy.js',
//            'src/scripts/bootstrap/tab.js',
//            'src/scripts/bootstrap/affix.js',
            'src/scripts/*.js'
          ]
        }
      }
    },
    watch: {
      less: {
        files: [
          'src/styles/*.less',
          'src/styles/bootstrap/*.less'
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
          'images/bootstrap.css',
          'images/app.js'
        ]
      }
    },
    clean: {
      dist: [
        'images/bootstrap.css',
        'images/app.js'
      ]
    }
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['clean','less','uglify']);
  grunt.registerTask('test', ["clean", "less", "uglify"]);
  grunt.registerTask('dev', ['watch']);
};
