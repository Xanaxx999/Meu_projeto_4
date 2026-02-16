const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");

function html() {
    return gulp.src("./src/**/*.html")
        .pipe(gulp.dest("./dist"));
}

function scripts() {
    return gulp.src('./src/scripts/**/*.js')
        .pipe(gulp.dest('./dist/scripts'));
}



function styles() {
    return gulp.src("./src/styles/main.scss")
        .pipe(sass({outputStyle: "compressed"}))
        .pipe(gulp.dest("./dist/styles"));
}

function images() {
    return gulp.src("./src/images/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/images"));
}

exports.default = gulp.parallel(styles, images, html, scripts);

exports.watch = function () {
    gulp.watch("./src/styles/**/*.scss", styles);
    gulp.watch("./src/images/**/*", images);
    gulp.watch("./src/**/*.html", html);
};
