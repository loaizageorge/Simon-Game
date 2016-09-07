var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

var outputDir = 'builds/development';

gulp.task('pug',function(){
  return gulp.src('src/templates/**/*pug')
    .pipe(pug())
    .pipe(gulp.dest(outputDir))
    .pipe(connect.reload());
});

gulp.task('sass',function(){
  return gulp.src('src/sass/main.scss')
    .pipe(sass({sourceComments: 'map'}))
    .pipe(gulp.dest('builds/development/css'))
    .pipe(connect.reload());
});

gulp.task('watch',function(){
  gulp.watch('src/templates/**/*.pug',['pug']);
  gulp.watch('src/sass/**/*.scss',['sass']);
})

gulp.task('connect',function(){
  return connect.server({
    root:[outputDir],
    port: 8888,
    livereload:true
  });
});

gulp.task('default',['pug','sass','watch','connect']);
