var gulp = require('gulp');
var watch = require('gulp-watch');
gulp.task('watch', ['sass'], function () {
  console.warn('HELLO:::::', process.env.npm_config_env);
    watch('./src/scss/**/*.scss', function(){
      gulp.start('sass');
    });
});
