<script>
  import Header from "../lib/Header.svelte";
  import Footer from "../lib/Footer.svelte";
  import "../styles/styles.css";
</script>

<Header />
<main>
  <slot />
</main>
<Footer />

<style>
  :global(*) {
    box-sizing: border-box;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    box-sizing: border-box;
    height: 100vh;
    min-height: 100%;
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
