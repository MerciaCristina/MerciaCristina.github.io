const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const sass = require("gulp-sass");
sass.compiler = require("node-sass");
const cssmin = require("gulp-clean-css");
const merge = require("merge-stream");
const htmlmin = require("gulp-htmlmin");
const browserSync = require("browser-sync").create();
const image = require("gulp-image");

const scripts = require("./scripts");
const styles = require("./styles");

gulp.task("css", function (done) {
  const sassStyle = gulp
    .src("./assets/css/**/*.scss")
    .pipe(sass.sync({ outputStyle: "compressed" }))
    .pipe(concat("style.scss"));
  const cssStyle = gulp.src(styles).pipe(concat("style.css"));

  merge(sassStyle, cssStyle)
    .pipe(concat("index.css"))
    .pipe(cssmin({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist/assets/css"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
  done();
});

gulp.task("js", function (done) {
  gulp
    .src(scripts)
    .pipe(uglify())
    .on("error", (err) => console.log(err))
    .pipe(concat("index.js"))
    .pipe(gulp.dest("dist/js"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
  done();
});

gulp.task("image", function (done) {
  gulp
    .src(["./assets/img/*"])
    .pipe(image())
    .pipe(gulp.dest("dist/assets/img"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
  done();
});

gulp.task("fonts", function (done) {
  gulp.src(["./assets/fonts/*"]).pipe(gulp.dest("dist/assets/fonts/"));
  done();
});

gulp.task("icons", function () {
  return gulp
    .src("./node_modules/@fortawesome/fontawesome-free/webfonts/*")
    .pipe(gulp.dest("dist/assets/webfonts/"));
});

gulp.task("html", function (done) {
  gulp
    .src(["./index.html"])
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(gulp.dest("dist/"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
  done();
});

gulp.task(
  "build",
  gulp.parallel("css", "js", "image", "fonts", "icons", "html"),
  function (done) {
    done();
  }
);

gulp.task("serve", function (done) {
  browserSync.init(null, {
    open: false,
    server: {
      baseDir: "dist",
    },
  });
  gulp.watch("./assets/css/**/*.css", gulp.series("css"));
  gulp.watch("./assets/css/**/*.scss", gulp.series("css"));
  gulp.watch("./js/*.js", gulp.series("js"));
  gulp.watch("./index.html", gulp.series("html"));
  done();
});

gulp.task("default", gulp.series("build", "serve"), function (done) {
  done();
});
