<script>
  import { afterUpdate, onMount } from "svelte";

  import Login from '../lib/Login.svelte';
  import SearchBar from "../lib/SearchBar.svelte";
  import Loader from '../lib/Loader.svelte';
  import ProfilsList from "../lib/ProfilsList.svelte";
  import { user, userResearch } from "../store/user";
  import { users } from "../store/users";

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

<main class="w-auto h-auto min-w-screen min-h-screen">
  <div class="min-w-screen min-h-screen ml-60 pl-12 pr-12 pt-12">
    <h1 class="text-left">Bonjour {$user.firstName} !</h1>
    <SearchBar {data} />
    {#if $userResearch}
      <p class="text-left mt-2 text-s">Résultats pour "{$userResearch}"</p>
    {/if}
    <ProfilsList />
  </div>
</main>