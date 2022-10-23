<script>
	import DefaultButton from '../lib/DefaultButton.svelte';
	import { user } from '../store/store';
</script>

<div>
	<h1>Bienvenue sur l'annuaire digital {$user.firstName}</h1>
	<DefaultButton onClick={user.logout} buttonText='Déconnexion' />
</div>