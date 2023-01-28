export const load = async ({ params }) => {
	const { productId } = params;
	const title = 'Product details';
	const response = await fetch(`http://localhost:4000/products/${productId}`);
	const product = await response.json();
	return { title, product };
};
