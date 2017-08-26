module.exports = function (grunt) {
    grunt.initConfig ({
        pkg: grunt.file.readJSON('packages.json'),
        uglify: {
            options: {},
            build: {
                src: 'lintTest.js',
                dest: 'dist-grunt/lintTest.min.js'
            }
        }
    }), 

    grunt.loadNpmTasks('grunt-contrib-uglify'),

    grunt.registerTask('default', ['uglify'])
}