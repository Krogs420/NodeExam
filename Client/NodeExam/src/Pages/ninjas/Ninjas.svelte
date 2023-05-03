<script>
  import { useNavigate } from "svelte-navigator";
  import { user } from "../../store/user.js";
  import "../../../node_modules/toastr/build/toastr.css";
  import { onMount } from "svelte";


  const navigate = useNavigate();
  if (!$user) {
    navigate("/");
  }
    let ninjas = [];
  
    onMount(async () => {
      const url = "http://localhost:8081/api/ninjas";
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          ninjas = data.data.map((element) => Object.values(element));
        })
        .catch((error) => {
          return [];
        });
    });
  
  </script>
  
  <h1>Ninjas</h1>
  <table>
      <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Nation</th>
          <th>Jutsu</th>
          <th>Hokage</th>
          <th>User id</th>
      </tr>
  
      {#each ninjas as ninja}
          <tr>
              {#each ninja as cell}
              <td>{cell}</td>
              {/each}
          </tr>
          {/each}
  </table>
  