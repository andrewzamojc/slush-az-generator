var gulp     = require('gulp');
var install  = require('gulp-install');
var conflict = require('gulp-conflict');
var template = require('gulp-template');
var inquirer = require('inquirer');

gulp.task('default', function (done) {
    inquirer.prompt([
        {type: 'input', name: 'moduleName', message: 'Give your module a name', default: gulp.args.join('-').toLowerCase()}
    ]).then(function (answers) {
        gulp.src(__dirname + '/templates/**')
            .pipe(template(answers))
            .pipe(conflict('./'))
            .pipe(gulp.dest('./'))
            .pipe(install())
            .on('end', function () {
                done();
            })
            .resume();
    });
});