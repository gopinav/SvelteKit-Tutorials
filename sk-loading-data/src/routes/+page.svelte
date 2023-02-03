<script>
	import { goto, preloadData } from '$app/navigation';
</script>

<h1 class="tall">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<a href="/products" data-sveltekit-preload-data="hover">Products</a>
<button
	on:focus={() => {
		preloadData('/products');
	}}
	on:mouseover={() => {
		preloadData('/products');
	}}
	on:click={() => {
		goto('/products');
	}}>Go to products</button
>

<!-- <style>
	.tall {
		height: 100vh;
	}
</style> -->
