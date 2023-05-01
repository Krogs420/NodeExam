<script>
  import { Route, Router, Link, useNavigate, useResolvable } from "svelte-navigator";
  import toastr, * as Toastr from "toastr";
  import { user } from "../../store/user.js";
  import "../../../node_modules/toastr/build/toastr.css";
  import { onMount } from "svelte";

  const navigate = useNavigate();
  if ($user?.admin !== 1) {
    navigate("/");
  }

  let users = [];

  onMount(async () => {
    const url = "http://localhost:8081/api/users";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        users = data.data.map((element) => Object.values(element));
      })
      .catch((error) => {
        return [];
      });
  });
</script>

<h1>Admin Area</h1>
<table>
    <tr>
        <th>Id</th>
        <th>Username</th>
        <th>Email</th>
        <th>Admin</th>
    </tr>

    {#each users as user}
        <tr>
            {#each user as cell}
            <td>{cell}</td>
            {/each}
        </tr>
        {/each}
</table>
