'use strict'

var assert = require('assert')
var doNotDisturb = require('..')

describe('do-not-disturb', function() {

  it('should do something awesome', function(done) {
    if (process.platform === 'darwin') {
      doNotDisturb(function () {
        assert.ok(true)
        done()
      })
    } else {
      assert.throws(doNotDisturb)
      done()
    }
  })
})
