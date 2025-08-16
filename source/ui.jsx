
import React, {useState} from 'react';
import {Box, Text, useInput, useApp, useStdout, render} from 'ink';
import SelectInput from 'ink-select-input';
import open from 'open';
import pkg from '../package.json';

const {author} = pkg;
const CURRENT_DOMAIN = author.url;
const EMAIL = author.email;
const DEBUG = true;


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
		label: 'X / Twitter',
		url: 'https://x.com/dnnsmnstrr'
	},
	{
		id: 'github',
		label: 'GitHub',
		url: 'https://github.com/dnnsmnstrr'
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
		id: 'quit',
		label: 'Quit'
	}
]);

const Ui = () => {
	const {write} = useStdout();
	const log = message => DEBUG ? write(message) : null;
	const {exit} = useApp();
	const [index, setIndex] = useState(0);

	const handleSelect = item => {
		if (item.url) {
			open(item.url);
			return;
		}
		if (item.id === 'quit') {
			exit();
		}
	};
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
	const updateIndex = (_, nextIndex) => setIndex(nextIndex);
	return (
		<Box flexDirection="column" padding={1}>
			<Box borderStyle="round" marginBottom={1}>
				<Text>Hi, I&apos;m Dennis Muensterer. I like making things.</Text>
			</Box>
			<SelectInput items={items} index={index} onSelect={handleSelect} onHighlight={updateIndex} />
		</Box>
	);
};

render(<Ui/>);
