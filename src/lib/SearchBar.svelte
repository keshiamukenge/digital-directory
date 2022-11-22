<script>
  import { afterUpdate } from "svelte";
  import DefaultButton from "./DefaultButton.svelte";
  import {
    isLoading,
    userResearch,
    selectedFilters,
    users,
    displayUsers,
  } from "../store/store";

  export let data;

  let inputValue = "";
  let suggestions;
  $: valueIsSelected = false;
  let openFilters = false;
  let initialId = 0;
  const filters = ["Homme", "Femme"];

  function setAutoComplete() {
    return data.filter((value) =>
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
    displayUsers.set(
      $users.filter((user) => user.name.first === $userResearch)
    );
    console.log(displayUsers);

    setTimeout(() => {
      isLoading.set(false);
    }, 2000);
  }

  afterUpdate(() => {
    if (inputValue && !valueIsSelected) {
      suggestions = setAutoComplete();
    } else {
      valueIsSelected = false;
    }

    if (inputValue) {
      userResearch.set("");
    }

    if (!inputValue) {
      displayUsers.set($users);
    }
  });
</script>

<div class="mt-8 mt-10 h-28">
  <div class="flex">
    <div class="w-full mr-4 relative ">
      <input
        class="w-full p-2 rounded mr-4"
        placeholder="Rechercher par prénom"
        bind:value={inputValue}
      />
      {#if inputValue && suggestions?.length > 0}
        <ul
          id="suggestions"
          class="bg-slate-50 rounded-b-md p-2 absolute left-0 right-0 overflow-y-scroll max-h-64 z-30"
        >
          {#each suggestions as suggestion}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
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
    <DefaultButton onClick={onSearch} buttonText="Rechercher" customClass="" />
  </div>
  <div class="w-full relative flex">
    <DefaultButton
      customClass="mr-4 mt-2 min-w-[8rem]"
      onClick={() => (openFilters = !openFilters)}
      buttonText="+ Filtre"
    />
    <ul
      class="bg-slate-50 w-48 absolute z-10 top-[55px] rounded text-black {openFilters
        ? 'block'
        : 'hidden'}"
    >
      {#each filters as filter}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li
          on:click={() => {
            selectedFilters.set([
              ...$selectedFilters,
              {
                id: initialId + 1,
                label: filter,
                value: "",
              },
            ]);
            openFilters = !openFilters;
          }}
          class="text-left h-8 hover:bg-zinc-300 hover:cursor-pointer m-2 rounded pl-2 pr-2"
        >
          <span class="block pt-1">{filter}</span>
        </li>
      {/each}
    </ul>
    <ul class="w-full flex mt-2">
      {#each $selectedFilters as selectedFilter}
        <li
          class="flex pt-2 pb-2 pr-4 pl-4 rounded border-slate-400 border-solid border-[1.5px] mr-2 ml-2"
        >
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <p
            on:click={() => {
              selectedFilters.set(
                $selectedFilters.splice(0, selectedFilter.id)
              );
            }}
          >
            {selectedFilter.label}
          </p>
        </li>
      {/each}
    </ul>
  </div>
</div>
