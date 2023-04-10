<script>
  import Header from "../../components/Header.svelte";
  import { Route, Router, Link } from "svelte-navigator";
</script>

<header>
  <h1>Naruto</h1>

  <nav>
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/signin">Sign In</Link>
    <Link to="/characters">Characters</Link>
  </nav>
</header>

<main>
  <div class="background-image">
    <div class="container">
      <h1>Naruto</h1>
    </div>
  </div>
</main>

<body>
  <p>Welcome !!</p>
</body>

<style>
  /* Global styles */
  body {
    margin: 0;
    font-family: sans-serif;
  }

  /* Header styles */
  header {
    background-color: #333;
    color: #fff;
    padding: 10px;
  }

  nav {
    font-family: "ninjanaruto";
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
    text-decoration: none;
  }

  .background-image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: url("../../../public/NarutoBackground.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Container styles */
  .container {
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 20px;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }

  h1 {
    font-size: 3rem;
    margin: 0;
  }

  p {
    font-size: 16px;
    margin: 0;
  }

  @font-face {
    font-family: "ninjanaruto";
    src: url(../../../public/njnaruto.ttf);
  }

 
</style>
