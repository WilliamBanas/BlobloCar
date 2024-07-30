<script lang="ts">
  import { goto } from "$app/navigation";
  import Error from "$lib/Error.svelte";
  import Footer from "$lib/Footer.svelte";
  import Header from "$lib/Header.svelte";
  import { API_URL } from "../../url";

  let email: string = "";
  let password: string = "";
  let error: string = "";

  const login = async () => {
    error = "";
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      
      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      document.cookie = `token=${data.token}; path=/; secure; httponly`;

      // Redirect to a protected page
      goto('/')
    } catch (err) {
      if (err instanceof Error) {
        error = err.message;
      } else {
        error = String(err);
      }
    }
  };

  const handleSubmit = () => {
    login();
  };
</script>

<form on:submit={handleSubmit}>
  <label for="email"></label>
  <input name="email" type="text" bind:value={email} />

  <label for="password"></label>
  <input name="password" type="password" bind:value={password} />

  <button type="submit">Se connecter</button>
</form>

<style>
</style>
