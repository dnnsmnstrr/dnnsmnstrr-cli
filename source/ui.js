'use strict';
// Const path = require('path');
const React = require('react');
const {Box, Text} = require('ink');
const SelectInput = require('ink-select-input').default;
const open = require('open');
// Const terminalImage = require('terminal-image')
// const git = require('simple-git');

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const createItems = items => {
	for (const item of items) {
		item.key = item.url || item.label;
	}

	return items;
};

const items = createItems([
	{
		label: 'Website',
		url: 'https://muensterer.tech'
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/dnnsmnstrr'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/dnnsmnstrr'
	},
	{
		label: 'Dotfiles',
		url: 'https://github.com/dnnsmnstrr/dotfiles'
		// Action () {
		//   git.clone('https://github.com/dnnsmnstrr/dotfiles.git')
		// }
	},
	{
		label: 'Blog',
		url: 'https://muensterer.tech/blog'
	},
	{
		label: 'Contact',
		url: 'mailto:dennismuensterer@gmail.com'
	},
	// {
	// 	label: 'Unicorns!',
	// 	async action() {
	// 		console.log(await terminalImage.file(path.join(__dirname, 'unicorn1.gif')));
	// 		console.log(await terminalImage.file(path.join(__dirname, 'unicorn2.gif')));
	// 		console.log(await terminalImage.file(path.join(__dirname, 'unicorn3.gif')));
	// 	}
	// },
	// TODO: Add separator item here when https://github.com/vadimdemedes/ink-select-input/issues/4 is done
	{
		label: '---------'
	},
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
]);

module.exports = () => (
	<Box flexDirection="column">
		<Box marginBottom={1}>
			<Text>Dennis Muensterer. I like making things.</Text>
		</Box>
		<SelectInput items={items} onSelect={handleSelect}/>
	</Box>
);
