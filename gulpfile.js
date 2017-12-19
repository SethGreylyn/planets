'use strict';
//Required modules
let gulp = require("gulp"),
    babelify = require('babelify'),
    browserify = require("browserify"),
    connect = require("gulp-connect"),
    source = require("vinyl-source-stream"),
    typescript = require("gulp-tsc")
;

gulp.task("default", ["html", "tscompile", "build", "startServer"]);

//Copy html file(s) from src folder to dist folder
gulp.task("html", function() {
   return gulp.src(["./src/*.html"])
    .pipe(gulp.dest("dist"));
});

gulp.task("tscompile", function() {
    return gulp.src(["./src/*.ts"])
     .pipe(typescript())
     .pipe(gulp.dest('./tsDist'));
});

//Convert ES6 code in all js files in src folder and copy to
//dist folder as index.js
gulp.task("build", function() {
    return browserify({
        entries: ["./tsDist/game.js"]
    })
    .transform(babelify.configure({
        presets : ["es2015"]
    }))
    .bundle()
    .pipe(source("index.js"))
    .pipe(gulp.dest("dist"));
});

//Start a test server with doc root at build folder and
//listening to 9001 port. Home page = http://localhost:9001
gulp.task("startServer", function() {
    connect.server({
        root : "./dist",
        port : 9001
    });
});