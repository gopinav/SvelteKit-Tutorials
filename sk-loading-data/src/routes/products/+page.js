import Product from './product.svelte';

export const load = async ({ data }) => {
	console.log('universal load function called');
	const notification = 'End of season sale!';
	return { ...data, notification, Component: Product };
};

export const ssr = true;
export const csr = false;
export const prerender = true;
