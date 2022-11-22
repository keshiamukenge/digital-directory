<script>
  import ProfilCard from "./ProfilCard.svelte";
  import { displayUsers } from "../store/store";
</script>

<div class="grid gap-8 grid-cols-4 mt-10">
  {#each $displayUsers as user}
    <ProfilCard {user} />
  {/each}
</div>
