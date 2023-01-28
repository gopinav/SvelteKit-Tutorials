<script>
	import { page } from '$app/stores';

	export let data;
	const { username } = data;
</script>

<p>{$page.data.notification}</p>
<div>Welcome, {username}</div>
<slot />
