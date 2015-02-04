module.exports = function(grunt) {

  

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    

    express: {
      all: {
        options: {
          port: 9000,
          hostname: "0.0.0.0",
          bases: ['dist'],
          livereload: true
        }
      }
    },

    autoprefixer: {
      main: {
        src: 'dist/css/main.css',
        dest: 'dist/css/main.css'
      }
    },

    cssmin: {
      combine: {
        files: {
          'dist/css/main.css': 'dist/css/main.css'
        }
      }
    },

//    imagemin: {
//      dynamic: {
//        options: {
//          optimizationLevel: 7,
//        },
//        files: [{
//          expand: true,
//          cwd: 'img/',
//          src: ['**/*.{png,jpg}'],
//          dest: 'dist/img/'
//        }]
//      }
//    },

    sass: {
    	dist: {
    		options: {
    			style: 'expanded'
    		},
    		files: {
    			'dist/css/main.css' : 'css/main.scss'
    		}
    	}
    },

    watch: {
      css: {
        files: ['css/**/*.scss'],
        tasks: ['sass', 'autoprefixer', 'cssmin'],
        options: {
          livereload: true,
          spawn: false
        }
      },
      html: {
        files: ['*.html', 'inc/*.html'],
        tasks: ['includereplace'],
        options: {
          livereload: true,
          spawn: false
        }
      },
      js: {
        files: ['js/**/*.js'],
        tasks: ['bower_concat', 'uglify'],
        options: {
          livereload: true,
          spawn: false
        }
      }
    },

    open: {
      all: {
        path: 'http://localhost:<%= express.all.options.port%>'
      }
    },
    
    bower_concat: {
      all: {
        dest: 'dist/js/vendor.js',
        include: ['hammerjs', 'imagesloaded', 'masonry', 'jquery-smooth-scroll', 'FitText.js', 'fastclick', 'underscore', 'response.js'],
        mainFiles: {
          'imagesloaded': 'imagesloaded.pkgd.min.js',
          'masonry': 'dist/masonry.pkgd.min.js'
        }
      }
    },

    uglify: {
      my_target: {
        files: {
          'dist/js/main.js': ['dist/js/vendor.js', 'js/main.js', 'js/project/*.js']
        }
      }
    },

    copy: {
    	js: {
    		files: [ {
	    		cwd: 'js/',
	    		src: '**/*',
	    		dest: 'dist/js/',
	    		expand: true
    		}]
    	},
      // imageMin build currently failing
      // if imageMin is working correctly do not copy images like this
      // instead run imageMin to send minned images to dist folder
      img: {
        files: [ {
          cwd: 'img/',
          src: '**/*',
          dest: 'dist/img/',
          expand: true
        }]
      }
    },

    includereplace: {
        your_target: {
          options: {
            // Task-specific options go here.
          },
          // Files to perform replacements and includes with
          src: '*.html',
          // Destination directory to copy files to
          dest: 'dist/'
        }
	}
	
	
	

  });

  // Load the plugins that provides our tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-include-replace');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-autoprefixer');


  // Default task(s).
  

  // Create server task
  grunt.registerTask('build', [
    'copy',
    'sass',
    'autoprefixer',
    'bower_concat',
    'uglify',
    //'imagemin',
    'includereplace'
  ]);

  grunt.registerTask('server', [
    'build',
    'express',
    'open',
    'watch'
  ]);

};