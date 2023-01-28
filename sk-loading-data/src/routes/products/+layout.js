export const load = async () => {
	const title = 'Featured products';
	const response = await fetch('http://localhost:4000/featured-products');
	const featuredProducts = await response.json();
	return { title, featuredProducts };
};
