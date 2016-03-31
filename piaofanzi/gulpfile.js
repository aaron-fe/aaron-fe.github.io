var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var LessPluginCleanCSS = require('less-plugin-clean-css');
var autoprefix = new LessPluginAutoPrefix({ browsers: ['last 2 versions'] });
var cleancss = new LessPluginCleanCSS({ advanced: true });

gulp.task('less-watch', function() {
	gulp.src('less/*.less')
		.pipe(watch('less/*.less'))
		.pipe(less({
			plugins: [autoprefix, cleancss]
		}))
		.pipe(gulp.dest('css/'));
});

gulp.task('default', ['less-watch']);