<script>
  import { Route, Router, Link, useNavigate, useResolvable } from "svelte-navigator";
  import * as Toastr from "toastr";
  import { user } from "../../store/user.js";
  import "../../../node_modules/toastr/build/toastr.css";

  const navigate = useNavigate();

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
      });
      const data = await response.json();
      console.log(data.message);
      navigate("/");
    } catch {
      Toastr.warning("Unable to sign up");
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

  
<style>
form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: rgba(51, 51, 51, 0.6);
    border-radius: 5px;
    font-family: "ninjanaruto";
    color: orange;
    -webkit-text-stroke: 1px black;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    font-family: "ninjanaruto";
    color: orange;
    -webkit-text-stroke: 1px black;
  }

  input {
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid rgb(0, 0, 0);
    border-radius: 5px;
    box-sizing: border-box;
    font-family: "ninjanaruto";
    color: orange;
    -webkit-text-stroke: 1px black;
  }

  label {
    display: block;
    margin: 20px;
    font-weight: bold;
    font-family: "ninjanaruto";
    font-size: 2rem;
    color: orange;
    -webkit-text-stroke: 1px black;
  }

  button {
    display: block;
    width: 100%;
    padding: 10px;
    margin-top: 30px;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;
    font-family: "ninjanaruto";
    color: orange;
    background: #0c2fdf;
    -webkit-text-stroke: 1px black;
  }

  button:hover {
    background: orange;
    color: #0c2fdf;
  }

  h1 {
    font-size: 60px;
    margin: 0;
    font-family: "ninjanaruto";
    -webkit-text-stroke: 1.5px black;
    color: orange;
    padding: 30px;
  }

</style>
