<script>
  import { Router, Link, useNavigate } from "svelte-navigator";
  import toastr from "toastr";
  import { user } from "../store/user.js";

  const navigate = useNavigate();

  async function signout() {
    try {
      const response = await fetch(`http://localhost:8081/signout`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
      });

      if (response.ok) {
        navigate("/");
        user.set(null);
        localStorage.removeItem("user");
      } else {
        const json = await response.json();
        toastr.warning(json.message);
      }
    } catch {
      toastr.error("You were unable to sign out");
    }
  }
</script>

<main>
  <Router primary={false}>
    <nav class="nav-link">
      {#if !$user}
        <Link to="/">Forside</Link>
        <Link to="/indlæg">Indlæg</Link>
        <Link to="/kurser">Kurser</Link>
        <Link to="/signin">Log ind</Link>
        <Link to="/signup">Opret</Link>
      {:else if !$user.admin}
        <Link to="/">Forside</Link>
        <Link to="/indlæg">Indlæg</Link>
        <Link to="/kurser">Kurser</Link>
        <Link to="/kontakt">Kontakt</Link>
        <button on:click={signout}>Log ud</button>
      {:else if $user.admin}
        <Link to="/">Forside</Link>
        <Link to="/indlæg">Indlæg</Link>
        <Link to="/kurser">Kurser</Link>
        <Link to="/users">Users</Link>
        <button class="ignore-css" id="signout" on:click={signout}
          >Log ud</button
        >
      {/if}
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

  button {
    display: block;
    width: 15%;
    padding: 10px;
    margin: 0;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;
    font-family: "ninjanaruto";
    font-size: 26px;
    color: orange;
    background: #0c2fdf;
    -webkit-text-stroke: 1px black;
  }

  button:hover {
    background-color: orange;
    color: #0c2fdf;
  }
</style>
