var gulp = require('gulp')
var fs = require("fs")
var browserify = require("browserify")
var babelify = require("babelify")
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
gulp.task("react",function(){
  return browserify({
    entries:'./app/assets/javascripts/react/main.js',
    debug: true 
  })
  .transform("babelify",{presets:["react","es2015"]})
  .bundle()
  .pipe(source("bundle.js"))
  .pipe(gulp.dest("./app/assets/javascripts"))
})

gulp.task("watch",["react"],function(){
  gulp.watch("./app/assets/javascripts/react/*.js",["react"])
})
gulp.task("default",["react","watch"])