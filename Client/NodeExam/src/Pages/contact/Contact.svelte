<script>
  import Header from "../../components/Header.svelte";
  import { Route, Router, Link } from "svelte-navigator";

  let name = "";
  let mail = "";
  let message = "";

  async function sendMail() {
    const url = "http://localhost:8081/mail";
    console.log("mail");
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ name, mail, message }),
    });
  }
</script>

<!-- <header>
    <h1>Naruto</h1>
  
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/characters">Characters</Link>
    </nav>
  </header> -->

<!-- <div class="background-image" /> -->
<!-- <div class="background-image" /> -->
<Router primary={false}>
  <div>
    <!-- <div class="header">
      <h1>Contact Us</h1>
    </div> -->
      <div class="container">
        <form
          on:submit|preventDefault={sendMail}
          id="contact_form"
          method="POST"
          action="/contact"
        >
          <input type="name" bind:value={name} placeholder="Your Name" />
          <input type="email" bind:value={mail} placeholder="Your Email" />
          <textarea bind:value={message} placeholder="Your Message" />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
</Router>

<style>
  /* Global styles */
  body {
    margin: 0;
    padding: 20px;
    background-color: #f0f5f9;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Styling for the header */
  .header {
    background-color: #1c2541;
    color: #fff;
    text-align: center;
    padding: 20px;
  }

  /* Styling for the form container */
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 20px 40px;
  }

  /* Styling for the form elements */
  input,
  textarea,
  button {
    display: block;
    margin: 10px 0;
    padding: 10px;
    width: 100%;
    max-width: 500px;
    border-radius: 5px;
    border: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    font-size: 16px;
    background-color: #fff;
    color: #333;
  }

  input:hover,
  textarea:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  button {
    background-color: #1c2541;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }

  button:hover {
    background-color: #293d5a;
  }

  ::placeholder {
    color: #999;
    font-size: 14px;
  }

  .background-image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: url("../../../public/NarutoBackground.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header {
    top: 0;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 20px;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 10px;
    font-family: "ninjanaruto";
  }
</style>
