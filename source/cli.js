#!/usr/bin/env node
'use strict';
const meow = require('meow');
const React = require('react');

meow(`
	Usage
	  $ dnnsmnstrr
`);

require('import-jsx')('./ui');
