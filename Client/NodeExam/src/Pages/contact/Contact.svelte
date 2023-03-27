<script>
    let name = "";
    let mail = "";
    let message = "";
  
    async function sendMail() {
      console.log("HEllo")
      const url = "http://localhost:8081/mail";
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name, mail, message }),
      });
    }
  </script>
  
  <main>
    <div class="header">
      <h1>Naruto</h1>
    </div>
    <div class="background-image">
      <div class="container">
        <form on:submit|preventDefault={sendMail} id="contact_form" method="POST" action="/contact">
          <input type="name" bind:value={name} placeholder="Name" />
          <input type="email" bind:value={mail} placeholder="Email" />
          <textarea bind:value={message} placeholder="Message"></textarea>
          <button type="submit">Send mail</button>
        </form>
      </div>
    </div>
  </main>
  
  <style>
    /* Styling for the header */
    .header {
      background-color: #000;
      color: #fff;
      text-align: center;
      padding: 10px;
    }
  
    /* Styling for the form container */
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 20px;
    }
  
    /* Styling for the form elements */
    input,
    textarea,
    button {
      display: block;
      margin: 10px;
      padding: 10px;
      width: 100%;
      max-width: 500px;
      border-radius: 5px;
      border: none;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
  
    button {
      background-color: #000;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #444;
    }
  </style>
  