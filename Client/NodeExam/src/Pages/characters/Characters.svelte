<script>
  import { onMount } from "svelte";
  import { apiData, about } from "../../store/store.js";
  import Header from "../../components/Header.svelte";
  import { Route, Router, Link } from "svelte-navigator";

  let characters = [];

  onMount(async () => {
    fetch("https://naruto-api.fly.dev/api/v1/characters")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        apiData.set(data);
        characters = data;
      })
      .catch((error) => {
        console.log(error);
        return [];
      });
  });
</script>

<main>
  <div class="container">
    <header>
      <h1>Naruto</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/characters">Characters</Link>
      </nav>
    </header>
  </div>
  <ul>
    {#each characters as character}
      <li>
        <h2>{character.name}</h2>
        <img src={character.images[0]} alt="" width="300" />
        <p>{character.about.slice(0, 100)}</p>
      </li>
    {/each}
  </ul>
</main>

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  h1 {
    margin: 0;
    color: orange;
    font-size: 4rem;
    font-weight: bold;
    font-family: "ninjanaruto";
    -webkit-text-stroke: 2px black;
  }

  h2 {
    margin: 0;
    padding: 10px;
    color: orange;
    font-size: 2rem;
    font-weight: bold;
    font-family: "ninjanaruto";
    -webkit-text-stroke: 2px black;
  }

  .container {
    padding: 20px;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    padding: 15px;
    font-family: "ninjanaruto";
  }
</style>
