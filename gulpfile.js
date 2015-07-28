var gulp = require('gulp');
var replace = require('gulp-replace-task');
var fileinclude = require('gulp-file-include');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify');

// Default task to be run with `gulp`
gulp.task('default', function () {
    gulp.watch('src/grid-map-style.css', ['replace-css']);
    gulp.watch(['src/responsive-grid-map.js', '.tmp/grid-map-style.css'], ['replace-js']);
    gulp.watch(['src/inline.js'], ['uglify-js', 'replace-js']);
    gulp.watch(['index.html', '*.css', '*.js'], ['browser-sync-reload']);
    gulp.start('browser-sync');
});

gulp.task('replace-css', function () {
	gulp.src('src/grid-map-style.css')
		.pipe(replace({
			patterns: [
				{
					match: /\t/g,
					replacement: '\\t'
				}, {
					match: /\n/g,
					replacement: '\\n'
				}, {
					match: 'max',
					replacement: '\' + _input.breakpoint + \''
				}
			]
		}))
		.pipe(gulp.dest('.tmp'));
});

gulp.task('replace-js', function () {
	gulp.src('src/responsive-grid-map.js')
		.pipe(fileinclude())
    	.pipe(gulp.dest('./'))
    	.pipe(browserSync.reload({ stream: true }));
});

gulp.task('uglify-js', function () {
	gulp.src('src/inline.js')
		.pipe(uglify())
    	.pipe(gulp.dest('.tmp'))
    	.pipe(browserSync.reload({ stream: true }));
});

// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './',
            index: 'index.html'
        },
        notify: false,
        ghostMode: false
    });
});

gulp.task('browser-sync-reload', function () {
    browserSync.reload();
});