import meow from 'meow';

meow(`
	Usage
		$ dnnsmnstrr
`, {
	importMeta: import.meta
});

(async () => {
	await import('./ui.jsx');
})();
