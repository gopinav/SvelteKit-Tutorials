<script>
	let address = '';
	export let data;
	const { addressList } = data;
</script>

<h1>Select your address</h1>

<select bind:value={address}>
	<option value="">Pick an address</option>
	{#each addressList as addressItem}
		<option value={addressItem}>{addressItem}</option>
	{/each}
</select>
