<script>	
	export let buttonText = 'Button';
	export let onSubmit;
</script>

<button on:click|preventDefault={onSubmit}>{ buttonText }</button>