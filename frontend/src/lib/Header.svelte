<script lang="ts">
  import menu from "./assets/icon-menu.png";
  import close from "./assets/icon-close.png";
  import search from "./assets/icon-search.png";
  import logoWithText from "./assets/logoFont.png";

  let sidebar = false;
  const handleSidebar = () => {
    sidebar = !sidebar;
  };
</script>

<header class="header">
  <nav class="nav">
    <div class="left-container">
      <a href="/" on:click={() => (sidebar ? handleSidebar() : null)}>
        <img class="left-container__logo-main" src={logoWithText} alt="logo" />
      </a>
    </div>
    <div class="right-container">
      <img class="right-container__logo-search" src={search} alt="" />
      {#if sidebar}
        <button on:click={handleSidebar}>
          <img class="right-container__logo-menu" src={close} alt="" />
        </button>
      {:else}
        <button on:click={handleSidebar}>
          <img class="right-container__logo-menu" src={menu} alt="" />
        </button>
      {/if}
    </div>
  </nav>
  {#if sidebar}
    <div class="sidebar">
      <ul class="sidebar__list">
        <h3 class="sidebar__title">Trajet</h3>
        <li class="sidebar__item">
          <a class="sidebar__link" href="#"> Nouveau trajet </a>
        </li>
      </ul>
      <div class="sidebar__divider">
        <hr />
      </div>
      <ul class="sidebar__list">
        <h3 class="sidebar__title">Compte</h3>
        <li class="sidebar__item">
          <a
            class="sidebar__link"
            href="/login"
            on:click={() => (sidebar ? handleSidebar() : null)}
          >
            Connexion
          </a>
        </li>
        <li class="sidebar__item">
          <a class="sidebar__link" href="#"> Inscription </a>
        </li>
      </ul>
    </div>
  {/if}
</header>

<style>
  .header {
    height: 70px;
    border-bottom: 1px solid #e5e4e2;
    position: relative;
  }

  .nav {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
  }

  .left-container,
  .right-container {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .left-container__logo-main {
    width: 150px;
  }

  .right-container__logo-search {
    width: 20px;
  }

  .right-container__logo-menu {
    width: 25px;
  }

  .sidebar {
    position: absolute;
    width: 100%;
    background-color: #fff;
  }

  .sidebar__divider {
    padding-left: 1.5rem;
  }

  .sidebar__divider > hr {
    height: 1px;
    border: 0;
    border-top: 1px solid #e5e4e2;
    margin: 0;
  }

  .sidebar__list {
    list-style-type: none;
    padding: 0 1.5rem;
  }

  .sidebar__item {
  }

  .sidebar__link {
    text-decoration: none;
    color: black;
  }
</style>
