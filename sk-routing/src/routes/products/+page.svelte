<script>
	export let productId = 100;
</script>

<h1>Products</h1>

<h1><a href="/products/1">Product 1</a></h1>
<h1><a href="/products/2">Product 2</a></h1>
<h1><a href="/products/3">Product 3</a></h1>

<h1><a href={`/products/${productId}`}>Product {productId}</a></h1>
