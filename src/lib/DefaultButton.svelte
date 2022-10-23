<script>	
	export let onClick;
	export let buttonText = 'Button';
</script>

<button on:click={onClick}>{buttonText}</button>