<script>
  import DefaultButton from "./DefaultButton.svelte";
  import { friends } from "../store/store";

  export let user;
</script>

<div class="w-full h-[30rem] bg-gray-400 rounded relative text-black">
  <img
    class="rounded-full mr-auto ml-auto mt-4 mb-4"
    src={user.picture.large}
    alt="photo de profil"
  />
  <span class="mr-2 block">
    <strong>{user.name.first}</strong>
    {user.name.last}
  </span>
  <span>Sexe : {user.gender}</span>
  <div class="absolute bottom-4 left-4 right-4">
    <DefaultButton
      customClass="w-full mb-2"
      onClick={() => friends.set([...$friends, user])}
      buttonText="Ajouter aux amis"
    />
    <DefaultButton
      customClass="w-full"
      onClick={() => {}}
      buttonText="Voir plus"
    />
  </div>
</div>
