<script>
	import { page } from '$app/stores';

	export let data;
	const { username } = data;
</script>

<svelte:head>
	<title>{$page.data.title || 'Codevolution'}</title>
</svelte:head>

{#if $page.data.notification}
	{$page.data.notification}
{/if}
<div>Welcome, {username}</div>
<slot />
