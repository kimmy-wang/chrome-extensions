module.exports = function(grunt) {
  grunt.initConfig({
    pkg: require('./package.json'),
    manifest: require('./manifest.json'),

    crx: {
      staging: {
        src: ['src/**/*', '!.{git,svn}', '!*.pem'],
        dest: 'dist/staging/<%= pkg.name %>-<%= manifest.version %>-dev.crx',
      },
      production: {
        files: {
          'dist/production/<%= pkg.name %>-<%= manifest.version %>-dev.crx': [
            'src/**/*',
            '!.{git,svn}',
            '!*.pem',
            '!dev/**',
          ],
          'dist/production/<%= pkg.name %>-<%= manifest.version %>-dev.zip': [
            'src/**/*',
            '!.{git,svn}',
            '!*.pem',
            '!dev/**',
          ],
        },
      },
    },
  })

  grunt.loadNpmTasks('grunt-crx')
  grunt.registerTask('default', ['crx:staging', 'crx:production'])
}
