export const load = async ({ params, url, route }) => {
	console.log({ params, url, route: route.id });
	const { productId } = params;
	const title = 'Product details';
	const notification = 'End of season sale! 60% off!';
	const response = await fetch(`http://localhost:4000/products/${productId}`);
	const product = await response.json();
	return { title, notification, product };
};