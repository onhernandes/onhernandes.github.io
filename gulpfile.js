var gulp 		= require('gulp'),
	scss 		= require('gulp-sass'),
	concat 		= require('gulp-concat'),
	imagemin    = require('gulp-imagemin'),
	uglify 		= require('gulp-uglify'),
	plumber 	= require('gulp-plumber'),
	bs = require('browser-sync');

var basePath = './',
	baseOut = basePath + '_site/assets',
	dev =  basePath + 'dev',
	assets =  basePath + 'assets',
	paths_dev = {
		js: [dev + '/*.js', dev + '/**/*.js', dev + '/**/**/*.js'],
		main_scss: dev + '/main.scss',
		scss: [dev + '/*', dev + '/**/*.scss', dev + '/**/**/*.scss', dev + '/**/**/**/*.scss'],
		img: [dev + '/image/*.{jpg,png,gif,svg}', dev + '/image/**/*.{jpg,png,gif,svg}'],
		html: ['*.html', '**/*.html']
	},
	paths_assets = assets;

// Generate and minify SCSS
gulp.task('styles', function() {
	gulp.src(paths_dev.main_scss)
		// .pipe(plumber())
		.pipe(scss({outputStyle: 'compressed'}).on('error', scss.logError))
		.pipe(gulp.dest(paths_assets))
		.pipe(bs.reload({stream: true}));
});

// Concat and uglify JS
gulp.task('js', function() {
	gulp.src(paths_dev.js)
		.pipe(plumber())
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest(paths_assets))
		.pipe(bs.reload({stream: true}));
});

// Minify images
gulp.task('image', function() {
	gulp.src(paths_dev.img)
		.pipe(plumber())
		.pipe(imagemin())
		.pipe(gulp.dest(paths_assets.img));
});

// Set a server
gulp.task('server', ['styles', 'js'], function() {
	bs.init({
		open: false,
		server: {
			baseDir: basePath
		}
	});

	gulp.watch(paths_dev.js, ['js']);
	gulp.watch(paths_dev.scss, ['styles']);
	gulp.watch(paths_dev.html).on('change', bs.reload);
});

// Watch files for changes
gulp.task('default', ['server']);