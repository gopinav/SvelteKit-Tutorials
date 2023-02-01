export const load = async (loadEvent) => {
	const { fetch, depends } = loadEvent;
	depends('stocks:actively-trading');
	const response = await fetch('http://localhost:4000/stocks');
	const stocks = await response.json();
	return { stocks };
};
