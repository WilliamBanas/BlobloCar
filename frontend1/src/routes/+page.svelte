<script>

</script>

  <div class="background">
    <div class="background-text">
      <p>Voyagez ensemble, partagez plus qu'une route.</p>
    </div>
  </div>
    
  <div class="content">

  </div>

<style>
  
  .background {
      background-image: none;
      background-color: black;
      justify-content: center;
      height: 25rem;
      padding: 0 1.5rem;
      
    }

  .background-text > p {
    color: #fff;
    font-size: 2em;
    font-weight: 600;
    padding: 1.5rem;    
  }

  .content {
    height: 25rem;
    background-color: aqua;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 767px) {

    .background {
    height: 25rem;
    overflow: hidden;
    background-image: url("../lib/assets/homepage-homepage1.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

    .background-text > p {
      color: #fff;
    font-size: 4em;
    font-weight: 600;
    padding: 1.5rem 0;
    text-align: center;
    max-width: 1200px;
  }

  }
</style>
