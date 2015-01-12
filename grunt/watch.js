'use strict';

module.exports =  {
	express: {
		files:  [ '<%= pck.main %>'],
		tasks:  [ 'express:server' ],
		options: {
			spawn: false, // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
			livereload: true
		}
	},
	livereload: {
		options: {
			livereload: true
		},
		files: [
			'<%= pck.config.app %>/**/*.{html,js}',
			'<%= pck.config.tmp %> %>/styles/**/*.css',
			'<%= pck.config.app %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
		]
	}
};