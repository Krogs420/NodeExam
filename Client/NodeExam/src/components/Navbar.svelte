<script>
  import { Route, Router, Link, useNavigate } from "svelte-navigator";
</script>

<main>
  <Router primary={false}>
    <nav>
      <Link to="/">HOME</Link>
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
    background-color: #333;
    color: #fff;
    padding: 10px;
    font-family: "ninjanaruto";
  }

  /* Navbar link styles */
  .nav-link {
    color: #fff;
    text-decoration: none;
    margin-right: 20px;
    font-weight: bold;
    font-size: 18px;
  }

  .nav-link:hover {
    color: orange;
  }
</style>
