<script>
	export let data;
	const title = data.title;
	const products = data.products;
	const Component = data.Component;
</script>

<h1>{title}</h1>

{#each products as product}
	<Component {product} />
{/each}
