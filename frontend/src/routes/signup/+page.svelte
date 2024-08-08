<script lang="ts">
  import { superForm } from "sveltekit-superforms/client";
  import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  const { form, errors } = superForm(data.form);
</script>

<h1>Créer un compte</h1>

<SuperDebug data={$form} />

<form class="form" method="POST">
  <div class="form-control">
    <label class="label" for="firstname"><span class="label-text">Prénom </span></label>
    <input class="input" type="text" name="firstname" bind:value={$form.firstname} />
      {#if $errors.firstname}
        <span class="span-error">{$errors.firstname}</span>
      {/if}
  </div>

  <div class="form-control">
    <label class="label" for="lastname">
      <span class="label-text">Nom</span>
    </label>
    <input class="input" type="text" bind:value={$form.lastname} />
      {#if $errors.lastname}
        <span class="span-error"> {$errors.lastname}</span>
      {/if}
  </div>

  <div class="form-control">
    <label class="label" for="">
      <span class="label-text">Email</span>
    </label>
    <input class="input" type="email" bind:value={$form.email} />
      {#if $errors.email}
        <span class="span-error">{$errors.email}</span>
      {/if}
  </div>

  <div class="form-control">
    <label class="label" for="">
      <span class="label-text">Image</span>
      </label>
      <input class="input" type="text" bind:value={$form.image} />
      {#if $errors.image}
        <span class="span-error">{$errors.image}</span>
      {/if}
  </div>

  <div class="form-control">
    <label class="label" for="">
      <span class="label-text">Mot de passe</span>
    </label>
    <input class="input" type="password" bind:value={$form.password} />
      {#if $errors.password}
        <span class="span-error">{$errors.password}</span>
      {/if}
  </div>

  <div class="form-control">
    <label class="label" for="">
      <span class="label-text">Confirmer le mot de passe</span>
    </label>
    <input
      class="input"
      type="password"
      bind:value={$form.passwordConfirm}
    />
      {#if $errors.passwordConfirm}
        <span class="span-error">{$errors.passwordConfirm}</span>
      {/if}
  </div>

  <div class="form-control">
    <label class="label" for="">
      <input class="checkbox" type="checkbox" bind:value={$form.terms} />
      <span class="label-text">J'accepte les conditions d'utilisation</span>
    </label>
      {#if $errors.terms}
        <span class="span-error">{$errors.terms}</span>
      {/if}
  </div>

  <button type="submit">S'inscrire</button>
</form>

<style>
  .form {
    width: 400px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-control {
    display: flex;
    flex-direction: column;
  }

  .input {
  }

  .label {
    width: 100%;
    height: 2rem;
    padding: 0.5rem 0;
  }

  .span-error {
    width: 100%;
    height: 2rem;
    padding: 0.5rem 0;
  }
</style>
