<script>
  import { Route, Router, Link, useNavigate } from "svelte-navigator";
</script>

<main>
  <Router primary={false}>
    <nav class="nav-link">
      <Link to="/">Home</Link>
      <Link to="/characters">Characters</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/signin">Sign Up</Link>
    </nav>
  </Router>
</main>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(51, 51, 51, 0.96);
    border-radius: 10px;
    height: 50px;
    color: #fff;
    padding: 10px;
    font-family: "ninjanaruto";
  }

  .nav-link {
    color: orange !important;
    text-decoration: none;
    margin-right: 20px;
    font-size: 25px;
  }
</style>
