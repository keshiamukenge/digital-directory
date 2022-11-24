<script>
	import { isAuthenticated } from '../store/user';
  import { isLoading } from '../store/main';
	import Loader from '../lib/Loader.svelte';
	import Login from '../lib/Login.svelte';
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	{#if $isAuthenticated}
	<Header />
  <slot />
  {#if $isLoading}
    <Loader />
  {/if}
  {:else}
  <Login />
  {/if}
</div>
