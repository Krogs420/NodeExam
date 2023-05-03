<script>
  import { useNavigate } from "svelte-navigator";
  import { user } from "../../store/user.js";
  import "../../../node_modules/toastr/build/toastr.css";
  import { onDestroy, onMount } from "svelte";
  import io from "socket.io-client";

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

  const socket = io("ws://localhost:8081");
  socket.on(`users`, (data) => {
    users.push(data);
    users = users;
  });

  onDestroy(() => {
    socket.close();
  });

</script>

<h1>Users</h1>
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
