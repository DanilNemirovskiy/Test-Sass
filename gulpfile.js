var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'); // Подключаем Sass пакет

gulp.task('sass', function() { // Создаем таск "sass"
  return gulp.src(['src/styles/Why/**/*.sass', 'src/**/*.scss']) // Берем источник
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(gulp.dest('src/styles/Why')) // Выгружаем результата в папку css
  });

gulp.task('watch', function() {
  gulp.watch(['src/styles/Why/**/*.sass', 'styles/**/*.scss'], ['sass']); // Наблюдение за sass файлами в папке sass
});

gulp.task('default', ['watch']);