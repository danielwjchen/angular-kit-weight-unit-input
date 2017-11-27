'use strict';
module.exports = function(grunt, configs) {
	grunt.config.set('uglify', {
        options : {
            mangle: false, // changes function and variable names
            compress: true,
            preserveComments: false,
            sourceMap: true,
        },
        my_target: {
            files : {
                'dist/ng-kit.weight-unit-input.min.js': [
                    'dist/ng-kit.weight-unit-input.templates.js',
                    'src/weight-unit-input.js',
                    'src/weight-unit-input.directive.js',
                ],
            }
        },
	});
    grunt.loadNpmTasks('grunt-contrib-uglify');
};
