<script>
  
    let clans = [];
  
    const fetchClans = async () => {
        const response = await fetch('https://api.narutodb.xyz/clan?limit=100');
        const data = await response.json();
        clans = data.clans;
  };
  
    fetchClans();
  </script>
  
  <ul>
    {#each clans as clan}
      <li>
        <h2>{clan.name}</h2>
        <p>Members:</p>
        <ul>
          {#each clan.characters as character}
            <li>{character.name}</li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>