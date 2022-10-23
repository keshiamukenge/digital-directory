<script>
  import Login from './pages/Login.svelte';
  import Home from './pages/Home.svelte';
  import { isAuthenticated } from './store/store.js';
</script>

<main class="w-screen" >
  {#if $isAuthenticated}
  <Home />
  {:else}
  <Login />
  {/if}
</main>
