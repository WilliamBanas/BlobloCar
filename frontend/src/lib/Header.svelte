<script>
  import avatar from "./assets/icon-avatar.png";
  import search from "./assets/icon-search.png";
  import add from "./assets/icon-add.png";
  import logoWithoutText from "./assets/logoNoFont.png";
  import logoWithText from "./assets/logoFont.png";
  import arrow from "./assets/icon-arrow.png";

  let sidebar = false;
  const handleSidebar = () => {
    sidebar = !sidebar;
  };
</script>

<header class="header">
  <div class="header-container">
    <div class="header-left">
      <button class="sidebar-button" type="button" on:click={handleSidebar}>
        <img class="avatar" src={avatar} alt="" />
        <img class={sidebar ? "upArrow" : "downArrow"} src={arrow} alt="" />
      </button>
    </div>

    <a href="/" class="main-logo">
      <img class="logo-mobile" src={logoWithoutText} alt="" width="40px" />
      <img class="logo-desktop" src={logoWithText} alt="" width="200px" />
    </a>

    <div class="header-right">
      <button type="button">
        <img src={search} alt="" width="25px" />
      </button>
      <!-- <button type="button">
        <img src={add} alt="" width="30px" />
      </button> -->
    </div>

    <nav class={sidebar ? "nav" : "nav-hidden"}>
      <a id="trip-button" class="nav-button" href="#">
        <p>Nouveau trajet</p>
        <img src={arrow} alt="" width="20px" />
      </a>
      <div class="nav-divider">
        <hr />
      </div>
      <a class="nav-button" href="#">
        <p>Inscription</p>
        <img src={arrow} alt="" width="20px" />
      </a>
      <a class="nav-button" href="#">
        <p>Connexion</p>
        <img src={arrow} alt="" width="20px" />
      </a>
    </nav>
  </div>
</header>

<style>
  .header {
    height: 6vh;
    width: 100vw;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 1.5rem;
    width: 100%;
    max-width: 1200px;
    position: relative;
    z-index: 2;
  }

  .sidebar-button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  .avatar {
    padding: 0.25rem;
    background-color: #e5e4e2;
    border-radius: 100px;
    width: 20px;
  }

  .downArrow {
    transform: rotate(90deg);
    transition: transform 0.25s ease-in-out;
    width: 20px;
  }

  .upArrow {
    transform: rotate(270deg);
    transition: transform 0.25s ease-in-out;
    width: 20px;
  }

  .header-left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    gap: 0.25rem;
  }

  .nav,
  .nav-hidden {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    left: 0;
    width: 25rem;
    max-width: 25rem;
    height: 100vh;
    box-shadow:
      5px 36px 29px 2px rgba(155, 155, 155, 1),
      -25px 0px 20px -20px rgba(0, 0, 0, 0.45);
    transition: transform 0.25s ease-in-out;
    top: 6.2vh;
    position: absolute;
    z-index: 1;
  }

  .nav {
    transform: translateX(0);
  }

  .nav-hidden {
    transform: translateY(-250%);
  }

  .main-logo {
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
  }

  .header-right {
    display: flex;
    gap: 1rem;
    display: flex;
    justify-content: flex-end;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  .nav-button {
    color: black;
    text-decoration: none;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.15s ease-in-out;
  }

  .nav-button:hover {
    background-color: #f5f5f5;
  }

  .nav-button > p {
    font-size: 0.8em;
  }

  .nav-divider {
    padding: 0.5rem 1.75rem;
  }

  .nav-divider > hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 400px) {
    .nav,
    .nav-hidden {
      width: 100%;
    }
  }

  @media (max-width: 767px) {
    .logo-desktop {
      display: none;
    }
  }

  @media (min-width: 768px) {
    #trip-button,
    .nav-divider,
    .logo-mobile {
      display: none;
    }

    .header {
      height: 8vh;
    }
    .nav,
    .nav-hidden {
      top: 8.2vh;
      height: fit-content;
    }

    .avatar {
      width: 35px;
    }
  }
</style>
