<script>
  import menu from "./assets/burger-menu.png";
  import search from "./assets/icon-chercher.png";
  import add from "./assets/icon-plus.png";
  import logoWithoutText from "./assets/logoNoFont.png";
  import rightArrow from "./assets/right-arrow.png";

  let sidebar = false;
  const handleSidebar = () => {
    sidebar = !sidebar;
  };
</script>

<header class="header">
  <button class="nav-button" type="button" on:click={handleSidebar}>
    <img src={menu} alt="" width="30px" />
  </button>

  <a href="/" class="main-logo">
    <img src={logoWithoutText} alt="" width="50px" />
  </a>

  <div class="header-icons">
    <button type="button">
      <img src={search} alt="" width="30px" />
    </button>
    <button type="button">
      <img src={add} alt="" width="30px" />
    </button>
  </div>

  <nav class={sidebar ? "sidebar" : "sidebar-hidden"}>
    <a class="page-button" href="#">
      <p>Connexion</p>
      <img src={rightArrow} alt="" width="30px" />
    </a>
    <a class="page-button" href="#">
      <p>Inscritpion</p>
      <img src={rightArrow} alt="" width="30px" />
    </a>
  </nav>
</header>

<style>
  .header {
    height: 8vh;
    width: 100vw;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border-bottom: 2px solid #f5f5f5;
    z-index: 2;
  }

  .nav-button {
    padding-left: 2rem;
    width: 15%;
    display: flex;
  }

  .sidebar,
  .sidebar-hidden {
    display: flex;
    flex-direction: column;
    background-color: red;
    left: 0;
    width: 60%;
    height: 100vh;
    padding: 0 2rem;
    box-shadow: 5px 36px 29px 2px rgba(155,155,155,1),-25px 0px 20px -20px rgba(0,0,0,0.45);  
    transition: transform 0.25s ease-in-out;
    top: 7vh;
    position: absolute;
    z-index: 1;
  }

  .sidebar {
    transform: translateX(0);
  }

  .sidebar-hidden {
    transform: translateX(-150%);
  }

  .main-logo {
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
  }

  .header-icons {
    display: flex;
    gap: 1rem;
    padding-right: 2rem;
    width: 15%;
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

  .page-button {
    color: black;
    text-decoration: none;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.15s ease-in-out;
  }

  .page-button:hover {
    background-color: #f5f5f5;
  }
</style>
