<script>
  import DefaultButton from "../lib/DefaultButton.svelte";
  import { friends } from "../store/friends";
  import { user } from "../store/user";
  import siteIcon from "../assets/svelte.svg";
  import iconProfil from "../assets/profil.svg";
</script>

<header
  class="w-60 flex h-full fixed flex-col pr-8 pl-8 pt-12 pb-4 fixed top-0 bottom-0 left-0 bg-zinc-300 text-black"
>
  <div class="hover:cursor-pointer flex items-center ml-auto mr-auto mb-16">
    <img class="h-full mr-2" src={siteIcon} alt="svelte-icon" />
    <span class="block font-black text-lg">SVELTE</span>
  </div>
  <div>
    <div class="mb-16">
      <img
        src={iconProfil}
        alt="profil-icon"
        class="w-1/3 ml-auto mr-auto mb-2"
      />
      <span class="block text-lg font-black">{$user.firstName}</span>
      <span class="block text-lg">{$user.lastName}</span>
    </div>
  </div>
  <p class="w-full text-left mb-4 font-black">
    <strong>
      <a href="/">ACCUEIL</a>
    </strong>
  </p>
  <ul class="w-full text-left mb-4">
    <p>MES AMIS({$friends.length})</p>
    {#each $friends as friend}
      <li class="ml-2">{friend.name.first} {friend.name.last}</li>
    {/each}
  </ul>
  <p class="w-full text-left mb-4 font-black">
    <a href="/about">A PROPOS</a>
  </p>
  <DefaultButton
    onClick={user.logout}
    customClass=""
    buttonText="Déconnexion"
  />
</header>