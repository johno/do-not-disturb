'use strict'
var runApplescript = require('run-applescript')

module.exports = function doNotDisturb(cb) {
  cb = cb || function () {}

  if (process.platform !== 'darwin') {
    throw new Error('do-not-disturb only supports the darwin platform')
  }

  runApplescript(
    'tell application "System Events" to tell process "SystemUIServer"\n' +
      '\tkey down option\n' +
      '\tclick menu bar item 1 of menu bar 2\n' +
      '\tkey up option\n' +
    'end tell',
    cb
  )
}
