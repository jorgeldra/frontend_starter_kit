// Include gulp
var gulp = require('gulp');
var gls = require('gulp-live-server');

gulp.task('serve', function() { 
  var server = gls.static('src', 8888);
  server.start();
});