var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var LessPluginCleanCSS = require('less-plugin-clean-css');
var autoprefix = new LessPluginAutoPrefix({ browsers: ['last 2 versions'] });
var cleancss = new LessPluginCleanCSS({ advanced: true });

gulp.task('less-mobile', function() {
	gulp.src('mobile/less/*.less')
		.pipe(watch('mobile/less/*.less'))
		.pipe(less({
			plugins: [autoprefix, cleancss]
		}))
		.pipe(gulp.dest('mobile/css/'));
});

gulp.task('less-pc', function() {
	gulp.src('less/*.less')
		.pipe(watch('less/*.less'))
		.pipe(less({
			plugins: [autoprefix]
		}))
		.pipe(gulp.dest('css/'));
});

gulp.task('default', ['less-mobile', 'less-pc']);