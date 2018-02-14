var gulp = require('gulp');

gulp.task('default', gulp.series('clean', 'build'));
