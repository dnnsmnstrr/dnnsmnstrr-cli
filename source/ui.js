'use strict';
const React = require('react');
const {Box, Text, useInput, useApp, useStdout} = require('ink');
const SelectInput = require('ink-select-input').default;
const open = require('open');
const simpleGit = require('simple-git');

const git = simpleGit();
const CURRENT_DOMAIN = 'https://muensterer.xyz/';
const EMAIL = 'dennismuensterer@gmail.com';
const DEBUG = false;
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
		id: 'website',
		label: 'Website',
		url: CURRENT_DOMAIN
	},
	{
		id: 'twitter',
		label: 'Twitter',
		url: 'https://twitter.com/dnnsmnstrr'
	},
	{
		id: 'github',
		label: 'GitHub',
		url: 'https://github.com/dnnsmnstrr'
	},
	{
		id: 'dotfiles',
		label: 'Dotfiles',
		url: 'https://github.com/dnnsmnstrr/dotfiles',
		action() {
			git.clone('https://github.com/dnnsmnstrr/dotfiles.git');
		}
	},
	{
		id: 'blog',
		label: 'Blog',
		url: CURRENT_DOMAIN + 'blog'
	},
	{
		id: 'contact',
		label: 'Contact',
		url: 'mailto:' + EMAIL
	},
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

const Ui = () => {
	const {write} = useStdout();
	const log = message => DEBUG ? write(message) : null;

	const {exit} = useApp();
	const [index, setIndex] = React.useState(0);
	useInput(input => {
		if (input === 'q') {
			exit();
		} else {
			const itemIndex = items.findIndex(
				({id, label}) => (id || label)[0] === input
			);
			log(itemIndex.toString());
			if (itemIndex >= 0) {
				setIndex(itemIndex);
			}
		}
	});
	const updateIndex = (item, nextIndex) => setIndex(nextIndex);
	return (
		<Box flexDirection="column" padding={1}>
			<Box borderStyle="round" marginBottom={1}>
				<Text>Hi, I&apos;m Dennis Muensterer. I like making things.</Text>
			</Box>
			<SelectInput items={items} index={index} onSelect={handleSelect} onHighlight={updateIndex}/>
		</Box>
	);
};

render(<Ui/>);
