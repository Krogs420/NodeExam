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
      });
      navigate("/");
      const data = await response.json();
      console.log(data.message);
    } catch {
      Toastr.warning("Unable to sign up");
    }
  }
</script>

<body>
  <div class="main">
    <div class="signup">
      <form action="/signup" on:submit|preventDefault={checkEmailAndPas}>
        <label for="chk" aria-hidden="true">Sign up</label>
        <input type="text" id="username" bind:value={username} required placeholder="User name" />
        <input type="email" id="mail" bind:value={mail} required placeholder="Email" />
        <input type="password" id="password" bind:value={password} required placeholder="Password" />
        <button type="submit" on:click={() => Toastr.success("You did it!")}>
          Signup
        </button>
      </form>
    </div>
  </div>

  <!-- <div class="background-image">
    <div class="header">
      <h1>Login</h1>
    </div>
    <div class="container">
      <form>
        <input type="email" bind:value={mail} name="email" />

        <input type="password" bind:value={password} name="password" />

        <button on:click={checkEmailAndPas} type="button">Login</button>
      </form>
    </div>
  </div> -->
</body>

<style>
  @font-face {
    font-family: "ninjanaruto";
    src: url(../../../public/njnaruto.ttf);
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: "ninjanaruto", sans-serif;
    background: linear-gradient(to bottom, #0f0c29, #0c2fdf, #24243e);
  }
  .main {
    width: 350px;
    height: 500px;
    background: orange;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 5px 20px 50px #000;
  }
  #chk {
    display: none;
  }
  .signup {
    position: relative;
    width: 100%;
    height: 100%;
  }
  label {
    -webkit-text-stroke: 0.1px white;
    color: black;
    font-size: 2.3em;
    justify-content: center;
    display: flex;
    margin: 60px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s ease-in-out;
  }
  input {
    width: 60%;
    height: 20px;
    background: #e0dede;
    justify-content: center;
    display: flex;
    margin: 20px auto;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
  }
  button {
    -webkit-text-stroke: 0.1px white;
    font-family: "ninjanaruto", sans-serif;
    width: 60%;
    height: 40px;
    margin: 10px auto;
    justify-content: center;
    display: block;
    color: black;
    background: #0c2fdf;
    font-size: 1em;
    font-weight: bold;
    margin-top: 20px;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: 0.2s ease-in;
    cursor: pointer;
  }
  button:hover {
    background: orange;
  }
  .login {
    height: 460px;
    background: #0c2fdf;
    border-radius: 60% / 10%;
    transform: translateY(-180px);
    transition: 0.8s ease-in-out;
  }
  .login label {
    color: black;
    transform: scale(0.6);
  }

  #chk:checked ~ .login {
    transform: translateY(-500px);
  }
  #chk:checked ~ .login label {
    transform: scale(1);
  }
  #chk:checked ~ .signup label {
    transform: scale(0.6);
  }
</style>
