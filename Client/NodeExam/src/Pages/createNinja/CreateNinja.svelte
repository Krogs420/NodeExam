<script>
  import { useNavigate } from "svelte-navigator";
  import * as Toastr from "toastr";
  import { user } from "../../store/user.js";
  import "../../../node_modules/toastr/build/toastr.css";

  const navigate = useNavigate();
  if (!$user) {
    navigate("/");
  }

  let name = "";
  let age = "";
  let nation = "";
  let jutsu = "";
  let hokage = false;

  async function createNinja() {
    const url = "http://localhost:8081/creator";
    const body = {
      name: name,
      age: age,
      nation: nation,
      jutsu: jutsu,
      hokage: hokage,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
        credentials: "include",
      });
      navigate("/");
    } catch {
      Toastr.warning("Unable to create ninja");
    }
  }

</script>

<h1>Create a ninja</h1>
<form action="/login" on:submit|preventDefault={createNinja}>
  <label for="name">Name</label>
  <input type="name" id="name" bind:value={name} required placeholder="Name" />
  
  <label for="age">Age</label>
  <input type="age" id="age" bind:value={age} required placeholder="Age" />
  
  <label for="nation">Nation</label>
  <input type="nation" id="nation" bind:value={nation} required placeholder="Nation" />

  <label for="jutsu">Jutsu</label>
  <input type="jutsu" id="jutsu" bind:value={jutsu} required placeholder="Jutsu" />

  <label for="hokage">Hokage</label>
  <input type="hokage" id="hokage" bind:value={hokage} required placeholder="Hokage" />
  
  <button type="submit">Create</button>
</form>
