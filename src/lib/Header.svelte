<script>
	import DefaultButton from './DefaultButton.svelte';
	import { user } from '../store/store';
	import siteIcon from '../assets/svelte.svg';
	import iconProfil from '../assets/profil.svg';
</script>

<header class="w-60 flex h-full fixed flex-col pr-8 pl-8 pt-12 pb-4 fixed top-0 bottom-0 left-0 bg-zinc-300 text-black">
	<div class="hover:cursor-pointer flex items-center ml-auto mr-auto mb-16">
		<img class="h-full mr-2" src={siteIcon} alt="svelte-icon" />
		<span class="block font-black text-lg">SVELTE</span>
	</div>
	<div>
		<div class="mb-16">
			<img src={iconProfil} alt="profil-icon" class="w-1/3 ml-auto mr-auto mb-2" />
			<span class="block text-lg font-black">{$user.firstName}</span>
			<span class="block text-lg">{$user.lastName}</span>
		</div>
	</div>
	<DefaultButton onClick={user.logout} buttonText='Déconnexion' />
</header>