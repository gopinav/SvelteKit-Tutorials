import Product from './Product.svelte';

export const load = async ({ data }) => {
	console.log('universal load function called');
	return { ...data, Component: Product };
};
