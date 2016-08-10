module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.registerTask('test', ['mochaTest']);
	grunt.registerTask('lint', ['jshint']);
	grunt.registerTask('compress', ['uglify']);
	grunt.registerTask('build', ['babel']);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: [ './dist' ],
		mochaTest: {
			options: {
				require: 'babel/register'
			},
			test: {
				src: [ './test/**/*.js' ]
			}
		},
		jshint: {
			all: [ './src/**/*.js' ],
			options: {
				jshintrc: true,
				reporter: require('jshint-stylish')
			}
		},
		babel: {
			options: {
				sourceMap: true,
				modules: 'umd'
			},
			dist: {
				files: [{
					expand: true,
					cwd: './src',
					src: [ '**/*.js' ],
					dest: './dist/plain'
				}]
			}
		},
		watch: {
			scripts: {
				files: [ './src/**/*.js' ],
				tasks: [ 'build' ]
			}
		},
		uglify: {
			dist: {
				files: [{
					expand: true,
					cwd: './dist/plain',
					src: [ '**/*.js' ],
					dest: './dist/min'
				}]
			}
		},
		packer: {
			files: {
				expand: true,
				cwd: './dist/min',
				src: [ '**/*.js' ],
				dest: './dist/packed'
			}
		}
	});
};