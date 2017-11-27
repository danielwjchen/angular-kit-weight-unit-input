'use strict';
module.exports = function(grunt) {
	grunt.config.set('sass', {
        compile: {
            files: {
                'dist/ng-kit.weight-unit-input.css': 'src/weight-unit-input.directive.scss',
            },
        },
        minify: {
            options: {
                style: 'compressed',
            },
            files: {
                'dist/ng-kit.weight-unit-input.min.css': 'src/weight-unit-input.directive.scss',
            },
        },
	});
    grunt.loadNpmTasks('grunt-contrib-sass');
};
