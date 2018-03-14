#!/usr/bin/env node

'use strict';

const meow = require('meow');
const doNotDisturb = require('.');

const cli = meow(`
	Usage
	  $ do-not-disturb [command]

  Commands
    on
    off
`);

const command = cli.input[0];
switch (command) {
  case 'off':
    doNotDisturb.off();
    break;
  case 'on':
  default:
    doNotDisturb.on();
}
