export const load = async () => {
	console.log('load function called');
	const response = await fetch('http://localhost:4000/products');
	const products = await response.json();
	return { products };
};
