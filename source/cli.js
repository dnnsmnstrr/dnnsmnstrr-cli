#!/usr/bin/env node
'use strict';
const meow = require('meow');

meow(`
	Usage
	  $ dnnsmnstrr
`);

require('import-jsx')('./ui');
