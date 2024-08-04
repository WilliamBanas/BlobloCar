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

  :global(body) {
    font-family: "Open Sans Variable", sans-serif;
  }


  .app {
    min-height: 100vh;
    background-color:cadetblue;
  }

  main {
    min-height: 92vh;
    z-index: 1;
    background-color: #fff;
  }

  :global(h1) {
    text-align: center;
    padding: 2rem;
  }
</style>


