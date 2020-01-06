const fs = require('fs')
const path = require('path')
const gulp = require('gulp')
const crx = require('@crxs/gulp-crx')
const zip = require('gulp-zip')
const manifest = require('./src/manifest.json')

gulp.task('crx', function() {
  return gulp
    .src('./src')
    .pipe(
      crx({
        privateKey: fs.readFileSync(path.join(__dirname, '../../../certs/key.pem'), 'utf8'),
        filename: manifest.name + '-' + manifest.version + '.crx',
      }),
    )
    .pipe(gulp.dest('./dist/dev'))
})

gulp.task('zip', function() {
  return gulp
    .src('./src/**/*')
    .pipe(zip(manifest.name + '-' + manifest.version + '.zip'))
    .pipe(gulp.dest('./dist/prod'))
})

gulp.task('default', ['crx', 'zip'])
