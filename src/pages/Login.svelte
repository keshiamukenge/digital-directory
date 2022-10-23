<script>
	import FormButton from '../lib/FormButton.svelte';
	import { user } from '../store/store';

	let userValue = {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	};

	function onSubmit() {
		user.setUser({ data: userValue });
		user.login()
	}
</script>

<h1 class="mb-7">Se connecter</h1>
<form class="flex flex-col w-4/12 m-auto">
	<div class="flex flex-col items-start w-full mb-5">
		<label class="mb-2" for="first-name">Prénom</label>
		<input bind:value={userValue.firstName} class="w-full p-2 rounded" />
	</div>
	<div class="flex flex-col items-start w-full mb-5">
		<label class="mb-2" for="last-name">Nom</label>
		<input bind:value={userValue.lastName} class="w-full p-2 rounded" />
	</div>
	<div class="flex flex-col items-start w-full mb-5">
		<label class="mb-2" for="email">Email</label>
		<input bind:value={userValue.email} class="w-full p-2 rounded" />
	</div>
	<div class="flex flex-col items-start w-full mb-5">
		<label class="mb-2" for="password" type="password">Mot de passe</label>
		<input bind:value={userValue.password} class="w-full p-2 rounded" />
	</div>
	<FormButton onSubmit={onSubmit} buttonText="Connexion" />
</form>