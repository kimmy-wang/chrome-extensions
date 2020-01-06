var fs = require('fs')
var path = require('path')
var gulp = require('gulp')
var crx = require('@crxs/gulp-crx')
var manifest = require('./src/manifest.json')

gulp.task('crx', function() {
  return gulp
    .src('./src')
    .pipe(
      crx({
        privateKey: fs.readFileSync(path.join(__dirname, '../../../certs/key.pem'), 'utf8'),
        filename: manifest.name + '-' + manifest.version + '.crx',
      }),
    )
    .pipe(gulp.dest('./dist'))
})

gulp.task('default', ['crx'])
