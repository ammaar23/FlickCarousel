module.exports = function(grunt) {
    
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        jsAssetsPath: 'js',
        sassAssetsPath: 'sass',
        jsDistPath: 'dist/js',
        cssDistPath: 'dist/css',
        
        sass: {
            options: {
                style: 'expanded'
            },
            dist: {
                files: {
                    '<%= cssDistPath %>/flick-carousel.css': '<%= sassAssetsPath %>/build.scss'
                }
            }
        },
        
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9']
            },
            dist: {
                src: '<%= cssDistPath %>/flick-carousel.css'
            }
        },
        
        cssmin: {
            dist: {
                files: {
                    '<%= cssDistPath %>/flick-carousel.min.css': '<%= cssDistPath %>/flick-carousel.css'
                }
            }
        },
        
        concat: {
            js: {
                src: [
                    '<%= jsAssetsPath %>/lib/*.js',
                    '<%= jsAssetsPath %>/*.js'
                ],
                dest: '<%= jsDistPath %>/<%= pkg.name %>.js'
            }
        },
        
        uglify: {
            build: {
                src: '<%= jsDistPath %>/<%= pkg.name %>.js',
                dest: '<%= jsDistPath %>/<%= pkg.name %>.min.js'
            }
        }
    });
    
    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // Default task(s).
    grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin', 'concat', 'uglify']);
    
};