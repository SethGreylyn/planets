/**
 * GULPFILE MODIFIED FROM http://ramkulkarni.com/blog/setting-up-es6-babel-gulp/
 */
'use strict';
//Include required modules
let gulp = require("gulp"),
    babelify = require('babelify'),
    browserify = require("browserify"),
    connect = require("gulp-connect"),
    source = require("vinyl-source-stream")
;

//Default task. This will be run when no task is passed in arguments to gulp
gulp.task("default", ["html", "build", "startServer"]);

//Copy html file(s) from src folder to dist folder
gulp.task("html", function(){
   return gulp.src(["./src/*.html"])
    .pipe(gulp.dest("dist"));
});

//Convert ES6 code in all js files in src folder and copy to
//dist folder as index.js
gulp.task("build", function(){
    return browserify({
        entries: ["./src/game.js"]
    })
    .transform(babelify.configure({
        presets : ["es2015"]
    }))
    .bundle()
    .pipe(source("index.js"))
    .pipe(gulp.dest("./dist"));
});

//Start a test server with doc root at build folder and
//listening to 9001 port. Home page = http://localhost:9001
gulp.task("startServer", function(){
    connect.server({
        root : "./dist",
        port : 9001
    });
});