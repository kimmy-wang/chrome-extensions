const fs = require('fs')
const path = require('path')

const VangoPackages = fs.readdirSync(path.resolve(__dirname, 'packages/@plugins'))

module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'cli',
        ...VangoPackages
      ].map(name => `$${name}`)
    ]
  }
}
