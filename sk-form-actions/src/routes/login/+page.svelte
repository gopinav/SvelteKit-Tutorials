<script>
	let username = '';
	let password = '';
	let message = '';
	const handleSubmit = async () => {
		message = '';
		const response = await fetch('/login', {
			method: 'POST',
			body: JSON.stringify({
				username,
				password
			})
		});
		const data = await response.json();
		message = data.message;
	};
	export let form;
</script>

<form on:submit|preventDefault={handleSubmit}>
	<p>{message}</p>
	<p>{form?.message || ''}</p>
	<input type="text" name="username" placeholder="Username" bind:value={username} />
	<input type="password" name="password" placeholder="Password" bind:value={password} />
	<button type="submit">Login</button>
</form>
