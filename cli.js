#!/usr/bin/env node
'use strict'

var meow = require('meow')
var doNotDisturb = require('./')

var cli = meow({
  help: [
    'Usage',
    '  empty-trash'
  ]
})

doNotDisturb()
