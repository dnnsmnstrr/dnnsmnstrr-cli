#!/usr/bin/env node
'use strict';
// Const path = require('path');
const meow = require('meow');
// Const termImg = require('term-img');
// const terminalImage = require('terminal-image');
const importJsx = require('import-jsx');
const React = require('react');
const {render} = require('ink');

const ui = importJsx('./ui');

meow(`
	Usage
	  $ dnnsmnstrr
`);

// Const fallback = async () => {
// 	const image = await terminalImage.file(path.join(__dirname, 'avatar-fallback.png'));
// 	console.log(image);
// };

// termImg(path.join(__dirname, 'avatar.png'), {fallback});

render(React.createElement(ui));
