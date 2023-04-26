<script>
  export let users = [];
</script>

<table class="table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    {#each users as user (user.id)}
      <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.role}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  @import "../global.css";
</style>
