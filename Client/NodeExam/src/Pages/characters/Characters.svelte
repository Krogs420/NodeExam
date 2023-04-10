<script>
  import { onMount } from "svelte";
  import { apiData, about } from "../../store/store.js";

  onMount(async () => {
    fetch("https://naruto-api.fly.dev/api/v1/characters")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        apiData.set(data);
      })
      .catch((error) => {
        console.log(error);
        return [];
      });
  });
</script>

<main>
  <ul>
    {#each $about as about}
      <li>{about}</li>
    {/each}
  </ul>
</main>
