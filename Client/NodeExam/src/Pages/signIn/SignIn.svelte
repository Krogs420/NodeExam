<script>
    let email = "";
    let password = "";
  
    function handleSubmit() {
      alert(`Email: ${email}\nPassword: ${password}`);
    }
  </script>
  
  <main>
    <form on:submit|preventDefault={handleSubmit}>
      <label for="email">Email</label>
      <input type="email" id="email" bind:value={email} required />
  
      <label for="password">Password</label>
      <input type="password" id="password" bind:value={password} required />
  
      <button type="submit">Sign In</button>
    </form>
  </main>
  
  <style>
    body {
      font-family: sans-serif;
    }
  
    form {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    }
  
    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }
  
    input {
      display: block;
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-sizing: border-box;
    }
  
    button {
      display: block;
      width: 100%;
      padding: 10px;
      background-color: #333;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.2s;
    }
  
    button:hover {
      background-color: #444;
    }
  </style>
  