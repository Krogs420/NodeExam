<script>
  import { onMount } from "svelte";
  import { apiData, about } from "../../store/store.js";
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
    font-family: "ninjanaruto";
    -webkit-text-stroke: 1px black;
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
</style>
