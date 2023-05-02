<script>
  import { onMount } from "svelte";
  import { Route, Router, Link } from "svelte-navigator";

  let characters = [];

  const fetchCharacters = async () => {
  const response = await fetch('https://api.narutodb.xyz/character?limit=500');
  const data = await response.json();
  characters = data.characters.map(character => {
    character.images = character.images.map(image => {
      const index = image.toLowerCase().indexOf(".png");
      const index2 = image.toLowerCase().indexOf(".PNG");
      const indexFinal = Math.max(index, index2);
      return image.substring(0, indexFinal + 4);
    });
    if (!character.jutsu) {
      character.jutsu = []
    }
    return character;
  });
};

  fetchCharacters();
</script>

<ul>
  {#each characters as character}
    <li>
      <h2>{character.name}</h2>
      <img src={character.images[0]} alt={character.name} />
      <p>Jutsu:</p>
      <ul>
        {#each character.jutsu as jutsu}
          <li>{jutsu}</li>
        {/each}
      </ul>
    </li>
  {/each}
</ul>
