// Include gulp
var gulp = require('gulp');
var gls = require('gulp-live-server');
var karma = require('karma').Server;

gulp.task('serve', function() { 
  var server = gls.static('src', 8888);
  server.start();
});


gulp.task('test', function (done) {
  new karma({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});