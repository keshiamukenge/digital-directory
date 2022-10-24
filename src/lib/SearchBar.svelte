<script>
  import { afterUpdate } from "svelte";
	import DefaultButton from "./DefaultButton.svelte";
	import { isLoading, userResearch } from '../store/store';

	export let data;

	let inputValue = '';
	let suggestions;
	$: valueIsSelected = false;

	function setAutoComplete() {
    return data.filter(value =>
			value.toLowerCase().includes(inputValue.toLowerCase())
    );
  }

	function setEmptySuggestions() {
		suggestions = [];
		valueIsSelected = true;
	}

	function onSelectSuggestion(event) {
		inputValue = event.target.innerText;
		setEmptySuggestions();
	}

	function onSearch() {
		isLoading.set(true);
		setEmptySuggestions();
		userResearch.set(inputValue);
		inputValue = '';

		setTimeout(() => {
			isLoading.set(false);
		}, 2000);
	}

	afterUpdate(() => {
		if(inputValue && !valueIsSelected) {
			suggestions = setAutoComplete();
		} else {
			valueIsSelected = false;
		}

		if(inputValue) {
			userResearch.set('');
		}
	})
</script>

<div class="mt-8 mt-10 flex">
	<div class="w-full mr-4 relative">
		<input  class="w-full p-2 rounded mr-4" placeholder="Rechercher" bind:value={inputValue} />
		{#if inputValue && suggestions?.length > 0}
		<ul id="suggestions" class="bg-slate-50 rounded-b-md p-2 absolute left-0 right-0 overflow-y-scroll max-h-64">
			{#each suggestions as suggestion}
			<li
				class="text-black h-11 text-left pr-4 pl-4 hover:bg-zinc-300 hover:cursor-pointer rounded"
				on:click={onSelectSuggestion}
			>
				<p class="pt-3">{suggestion}</p>
			</li>
			{/each}
		</ul>
		{/if}
	</div>
	<DefaultButton onClick={onSearch} buttonText="Rechercher" />
</div>