<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	const greetings = {
		en: 'Hello!',
		es: 'Hola!',
		fr: 'Bonjour!'
	};

	const { lang = 'en' } = $page.params;
	const greeting = greetings[lang];

	function gotoVishwas() {
		goto('/about/vishwas');
	}
</script>

<h1>{greeting} Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<a href="/about/vishwas">About Vishwas</a>
<button on:click={gotoVishwas}>About Vishwas</button>
