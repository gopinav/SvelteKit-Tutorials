<script>
	export let form;
</script>

<form method="post" action="/auth?/login">
	<p>{form?.message || ''}</p>
	<input type="text" name="username" placeholder="Username" />
	<input type="password" name="password" placeholder="Password" />
	<button>Login</button>
	<button formaction="/auth?/register">Register</button>
</form>
