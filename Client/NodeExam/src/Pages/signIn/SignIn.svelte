<script>
  import { Route, Router, Link, useNavigate, useResolvable } from "svelte-navigator";
  import * as Toastr from "toastr";
  import {user} from "../../store/user.js";
  import "../../../node_modules/toastr/build/toastr.css";

  const navigate = useNavigate();

  let mail = "";
  let password = "";

  async function handleSubmit() {
    const url = "http://localhost:8081/login";
    const body = {
      mail: mail,
      password: password,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      user.set(data.data);
      localStorage.setItem("user", JSON.stringify($user));
      navigate("/");
      console.log(data.message);
    } catch {
      Toastr.warning("Unable to sign in");
    }
  }

</script>

<div>
  <h1>Sign In</h1>
</div>
<form action="/login" on:submit|preventDefault={handleSubmit}>
  <label for="mail">Email</label>
  <input type="mail" id="mail" bind:value={mail} required placeholder="Email" />

  <label for="password">Password</label>
  <input type="password" id="password" bind:value={password} required placeholder="Password"/>

  <button type="submit">Sign In</button>
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
    margin: 20px;
    font-weight: bold;
    font-family: "ninjanaruto";
    font-size: 2rem;
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
    background-color: orange;
    color: #0c2fdf;
  }

  input:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }
  
  input::placeholder {
    color: orange;
  }

  textarea:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  textarea::placeholder {
    color: orange;
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
