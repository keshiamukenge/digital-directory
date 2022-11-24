<script>	
	export let onClick;
	export let buttonText = 'Button';
	export let customClass;
</script>

<button on:click={onClick} class="text-white {customClass}">
	{buttonText}
</button>