<script>
  import { Route, Router, Link, useNavigate, useResolvable } from "svelte-navigator";
  import toastr, * as Toastr from "toastr";
  import { user } from "../../store/user.js";
  import "../../../node_modules/toastr/build/toastr.css";
  import { onMount } from "svelte";

  const navigate = useNavigate();
    console.log(user)
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
        console.log(error);
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

<style>
    table {
    width: 70%;
    margin: 0 auto;
    padding: 20px;
    background-color: rgba(51, 51, 51, 0.6);
    border-radius: 5px;
    font-family: "ninjanaruto";
    color: orange;
    -webkit-text-stroke: 1px black;
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
