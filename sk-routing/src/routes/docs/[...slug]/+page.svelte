<script>
	import { page } from '$app/stores';
	const slugArr = $page.params.slug.split('/');
	console.log($page.params);
</script>

{#if slugArr.length === 1}
	<h1>Viewing docs for feature {slugArr[0]}</h1>
{:else if slugArr.length === 2}
	<h1>Viewing docs for feature {slugArr[0]} and concept {slugArr[1]}</h1>
{/if}
