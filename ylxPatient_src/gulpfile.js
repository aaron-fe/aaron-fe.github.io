var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');

gulp.task('less-watch', function() {
	gulp.src('less/*.less')
		.pipe(watch('less/*.less'))
		.pipe(less())
		// .pipe(minifyCSS())
		.pipe(gulp.dest('../ylxPatient/css/'));
});

gulp.task('default', ['less-watch']);