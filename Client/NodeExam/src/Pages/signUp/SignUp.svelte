<script>
  import { Route, Router, Link, useNavigate } from "svelte-navigator";
  import * as Toastr from "toastr";
  import "../../../node_modules/toastr/build/toastr.css";

  const navigate = useNavigate();

  let username = "";
  let mail = "";
  let password = "";

  async function checkEmailAndPas() {
    const url = "http://localhost:8081/signup";
    const body = {
      username: username,
      mail: mail,
      password: password,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
        credentials: "include",
      });
      const data = await response.json();

      navigate("/");
    } catch {
      Toastr.warning("Unable to sign up");
    }
  }
</script>

<div>
  <h1>Sign Up</h1>
</div>
<form action="/login" on:submit|preventDefault={checkEmailAndPas}>
  <label for="username">Username</label>
  <input type="username" id="username" bind:value={username} required placeholder="Username" />

  <label for="mail">Email</label>
  <input type="mail" id="mail" bind:value={mail} required placeholder="Email" />

  <label for="password">Password</label>
  <input type="password" id="password" bind:value={password} required placeholder="Password" />

  <button type="submit">Sign Up</button>
</form>