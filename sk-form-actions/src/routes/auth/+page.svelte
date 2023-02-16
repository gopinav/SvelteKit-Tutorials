<script>
	export let form;
</script>

<form method="post" action="?/login">
	<p>{form?.message || ''}</p>
	<input type="text" name="username" placeholder="Username" />
	<input type="password" name="password" placeholder="Password" />
	<button>Login</button>
	<button formaction="?/register">Register</button>
</form>
