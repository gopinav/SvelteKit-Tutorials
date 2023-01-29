<script>
	import { page } from '$app/stores';

	export let data;
	const { username } = data;
</script>

<svelte:head>
	<title>{$page.data.title || 'Codevolution'}</title>
</svelte:head>

<p>{$page.data.notification}</p>
<div>Welcome, {username}</div>
<slot />
