var gulp = require('gulp')
var fs = require("fs")
var browserify = require("browserify")
var babelify = require("babelify")
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var livereload = require('gulp-livereload');
gulp.task("react",function(){
  return browserify({
    entries:'./app/assets/javascripts/react/main.js',
    debug: true 
  })
  .transform("babelify",{presets:["react","es2015","stage-0"],plugins:["transform-es2015-arrow-functions"]})
  .bundle()
  .pipe(source("bundle.js"))
  .pipe(gulp.dest("./app/assets/javascripts"))
  .pipe(livereload())
})

gulp.task("watch",["react"],function(){
  livereload.listen({basePath:'public'})
  gulp.watch("./app/assets/javascripts/react/*/*.js",["react"])
})
gulp.task("default",["watch"])