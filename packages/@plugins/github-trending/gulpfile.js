var fs = require('fs')
var gulp = require('gulp')
var crx = require('@crxs/gulp-crx')
var manifest = require('./src/manifest.json')

gulp.task('crx', function() {
  return gulp
    .src('./src')
    .pipe(
      crx({
        privateKey: fs.readFileSync('./key.pem', 'utf8'),
        filename: manifest.name + '-' + manifest.version + '.crx',
      }),
    )
    .pipe(gulp.dest('./dist'))
})

gulp.task('default', ['crx'])
