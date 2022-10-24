<script>
  import Login from './pages/Login.svelte';
  import Home from './pages/Home.svelte';
  import Loader from './lib/Loader.svelte';
  import { isAuthenticated, isLoading } from './store/store.js';
</script>

<main class="w-auto h-auto min-w-screen min-h-screen">
  {#if $isAuthenticated}
  <Home />
  {#if $isLoading}
    <Loader />
  {/if}
  {:else}
  <Login />
  {/if}
</main>
