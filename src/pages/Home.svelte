<script>
  import { afterUpdate, onMount } from "svelte";

  import SearchBar from "../lib/SearchBar.svelte";
  import Header from "../lib/Header.svelte";
  import ProfilsList from "../lib/ProfilsList.svelte";
  import { user, userResearch, users } from "../store/store";

  let data = [];

  onMount(() => {
    users.getUsers({ usersLength: 100 });

    if ($users.length === 100) {
      $users.map((user) => {
        data = [...data, user.name.first];
      });
    }
  });

  afterUpdate(() => {
    $users.map((user) => {
      data = [...data, user.name.first];
    });
  });
</script>

<Header />
<div class="min-w-screen min-h-screen ml-60 pl-12 pr-12 pt-12">
  <h1 class="text-left">Bonjour {$user.firstName} !</h1>
  <SearchBar {data} />
  {#if $userResearch}
    <p class="text-left mt-2 text-s">Résultats pour "{$userResearch}"</p>
  {/if}
  <ProfilsList />
</div>
