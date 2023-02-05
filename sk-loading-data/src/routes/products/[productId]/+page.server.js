import { error } from '@sveltejs/kit';
// import { redirect } from '@sveltejs/kit';

export const load = async ({ fetch, params }) => {
	const { productId } = params;
	if (productId > 3) {
		throw error(404, { message: 'Product not found', hint: 'Try a different product' });
		// throw redirect(307, '/products');
	}
	const title = 'Product details';
	const notification = 'End of season sale! 60% off!';
	const response = await fetch(`http://localhost:4000/products/${productId}`);
	const product = await response.json();
	return { title, notification, product };
};

export const prerender = 'auto';
