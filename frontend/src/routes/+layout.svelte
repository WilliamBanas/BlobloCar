<script>

  import Header from "../lib/Header.svelte";
  import Footer from "../lib/Footer.svelte";
  import "../styles/styles.css";

</script>

<div class="app">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  .app {
    min-height: 100vh;
    background-color:cadetblue;
  }

  main {
    min-height: 85vh;
  }

  :global(h1) {
    text-align: center;
    padding: 2rem;
  }
</style>


