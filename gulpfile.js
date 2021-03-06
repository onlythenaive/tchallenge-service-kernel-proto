(function ($) {

  'use strict';

  $.gulp.task('start', function (callback) {

    var started = false;

    return $.nodemon({
             script: './sources/main/application.js'
           })
           .on('start', function () {
             if (!started) {
               callback();
               started = true; 
             } 
           });
   });
})({

  gulp: require('gulp'),
  nodemon: require('gulp-nodemon')
});
