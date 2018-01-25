#!/usr/bin/env node

'use strict';

const meow = require('meow');
const doNotDisturb = require('./');

meow(`
	Usage
	  $ do-not-disturb
`);

doNotDisturb.on();
