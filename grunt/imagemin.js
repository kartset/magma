'use strict';

module.exports = {
	all: {
		files: [{
			expand: true,
			cwd: '<%= pck.config.app %>/images',
			src: ['**/*.{png,jpg,gif}'],
			dest: '<%= pck.config.dist %>/images'
		}]
	}
};