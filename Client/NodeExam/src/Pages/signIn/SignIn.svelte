<script>
  import Header from "../../components/Header.svelte";
  import { Route, Router, Link } from "svelte-navigator";

  let email = "";
  let password = "";

  function handleSubmit() {
    alert(`Email: ${email}\nPassword: ${password}`);
  }
</script>

<main>
  <div>
    <h1>Sign In</h1>
  </div>
  <form on:submit|preventDefault={handleSubmit}>
    <label for="email">Email</label>
    <input type="email" id="email" bind:value={email} required />

    <label for="password">Password</label>
    <input type="password" id="password" bind:value={password} required />

    <button type="submit">Sign In</button>
  </form>
</main>

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

  button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #333;
    border: 1px solid rgb(0, 0, 0);
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;
    font-family: "ninjanaruto";
    color: orange;
    -webkit-text-stroke: 1px black;
  }

  button:hover {
    background-color: rgb(34, 27, 166);
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
