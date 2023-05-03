<script>
  import { useNavigate } from "svelte-navigator";
  import * as Toastr from "toastr";
  import { user } from "../../store/user.js";
  import "../../../node_modules/toastr/build/toastr.css";

  const navigate = useNavigate();

  if ($user) {
    navigate("/");
    Toastr.info("You are already signed in.");
  }

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
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        user.set(data.data);
        localStorage.setItem("user", JSON.stringify($user));
        Toastr.success("You are now signed in");
        navigate("/");
      } else {
        Toastr.warning("Unable to sign in");
      }
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
  <input
    type="password"
    id="password"
    bind:value={password}
    required
    placeholder="Password"
  />

  <button type="submit">Sign In</button>
</form>
