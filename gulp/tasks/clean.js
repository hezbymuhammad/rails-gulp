var gulp = require('gulp');
var del = require('del');
var config = require('../config');

gulp.task('clean', function (done) {
  sw_path = config.sw.targetDir + config.sw.target;
  del([sw_path], done);

  done();
});
