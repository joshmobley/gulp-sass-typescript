/*
** @name Project Starter
** @version 1.0.0
** @description A starter package and gulpfile for continuous-build development.
** @author Josh Mobley
** @license GNU GPLv3
*/

// MODULES
var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var typescript   = require('gulp-typescript');
var plumber      = require('gulp-plumber');
var notify       = require('gulp-notify');

// PATHS
var styles = {
    "path": './css/src/',
    "entry": 'main.scss',
    "dist": './css/dist/'
};

var scripts = {
    "path": './js/src/',
    "entry": 'main.js',
    "dist": './js/dist'
};

// BROWSER SYNC
gulp.task('browser-sync', function() {

    // initialize browser-sync, documentation here -> https://browsersync.io/docs/gulp
    browserSync.init({
        proxy: "localhost:8888/tools/project-starters/gulp-sass-typescript"  // this assumes a MAMP-based localhost
    });
    
});
    
// SASS
gulp.task('sass', function() {

    // configure postcss + load modules
    var sassConfig = sass({
        outputStyle: 'compressed'
    });

    // configure error message via notify
    var errorHandler = notify.onError( function(error){
        return "POSTCSS error: " + error.message;
    });

    return gulp
        .src( styles.path + styles.entry )      // file input
        .pipe( sourcemaps.init() )              // create sourcemaps
        .pipe( sassConfig )                     // configure postcss
        .on( 'error', errorHandler )            // report errors via notify
        .pipe( plumber() )                      // continues gulp build on error
        .pipe( autoprefixer() )                   // browser prefixing
        .pipe( sourcemaps.write() )             // write sourcemaps to disk
        .pipe( gulp.dest( styles.dist ))        // write css to disk
        .pipe( browserSync.stream() );          // stream changes into browser
       
});

// TYPESCRIPT 
gulp.task("ts", function() {

    // configure babel
    var tsConfig = typescript({
        noImplicitAny: true,                    // don't allow implicit type "any"
        module: "AMD",
        out: 'main.js'                          // name output file
    });

    // configure error message via notify
    var errorHandler = notify.onError( function(error) {
        return "JavaScript error: " + error.message;
    });

    return gulp
        .src( scripts.path + '**/*.ts' )        // input files
        .pipe( tsConfig )                       // transpile via babel
        .on( 'error', errorHandler )            // report error via notify
        .pipe( plumber() )                      // continue gulp build on error
        .pipe( sourcemaps.init() )              // create sourcemaps
        .pipe( sourcemaps.write() )             // write sourcemaps to disk
        .pipe( gulp.dest( scripts.dist ))       // write js to disk
        .pipe( browserSync.stream() );          // stream change into browser

});

// WATCH
gulp.task( 'watch', function() {

    gulp.watch( styles.path + '**/*.scss', ['sass'] );    // watch css for changes
    gulp.watch( scripts.path + '**/*.ts', ['ts'] );     // watch ts for changes

});

// DEFAULT
gulp.task( 'default', ['sass', 'ts', 'browser-sync', 'watch'] ); // default task to run
