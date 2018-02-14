var gulp         = require('gulp');
var config_sw    = require('../config').sw;
var sw           = require('sw-precache');

gulp.task('build', function(done) {
  var target = config_sw.targetDir + config_sw.target;
  var rootDir = config_sw.targetDir;

  sw.write(target, {

    staticFileGlobs: [rootDir+ '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}'],
    stripPrefix: rootDir

  });

  done();
});
