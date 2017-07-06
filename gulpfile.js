var gulp = require("gulp");
var clean = require('gulp-clean');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

// 굳이 사용할 필요 없음. package 참고
gulp.task("default", ["clean"], function () {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("dist"));
});

gulp.task('clean', function(){
  return gulp.src('dist/*')
    .pipe(clean());
});