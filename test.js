import test from 'ava'
import doNotDisturb from './'

test('turns on do-not-disturb when appropriate', t => {
  t.plan(1)

  if (process.platform === 'darwin') {
    doNotDisturb(function () {
      t.ok(true)
    })
  } else {
    t.throws(doNotDisturb)
  }
})
