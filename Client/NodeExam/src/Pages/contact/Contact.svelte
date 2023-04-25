<script>
  import { Route, Router, Link } from "svelte-navigator";
  import * as Toastr from 'toastr';
  import '../../../node_modules/toastr/build/toastr.css';

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

<Router primary={false}>
  <div>
    <div>
      <h1>Contact Us</h1>
    </div>
      <div class="container">
        <form
          on:submit|preventDefault={sendMail}
          id="contact_form"
          method="POST"
          action="/contact"
        >
          <input type="name" bind:value={name} placeholder="Your Name. . ." />
          <input type="email" bind:value={mail} placeholder="Your Email. . ." />
          <textarea bind:value={message} placeholder="Your Message. . ." />
          <button class="button-color" type="submit">Send Message</button>
        </form>
      </div>
    </div>
</Router>

<style>
  .container {
    max-width: 400px;
    margin: 0 auto;
    padding: 30px;
    background-color: rgba(51, 51, 51, 0.6);
    border-radius: 5px;
  }

  /* Styling for the form elements */
  input {
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid rgb(0, 0, 0);
    border-radius: 5px;
    box-sizing: border-box;
    font-family: "ninjanaruto";
    color: orange;
    -webkit-text-stroke: 1px black;
  }
  
  textarea {
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid rgb(0, 0, 0);
    border-radius: 5px;
    box-sizing: border-box;
    font-family: "ninjanaruto";
    color: orange;
    -webkit-text-stroke: 1px black;
  }

  button {
    display: block;
    width: 100%;
    padding: 10px;
    margin-top: 30px;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;
    font-family: "ninjanaruto";
    color: orange;
    background: #0c2fdf;
    -webkit-text-stroke: 1px black;
  }

  button:hover {
    background-color: orange;
    color: #0c2fdf;
  }

  input:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  input::placeholder {
    color: orange;
  }

  textarea:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  textarea::placeholder {
    color: orange;
  }

  h1 {
    font-size: 60px;
    margin: 0;
    font-family: "ninjanaruto";
    -webkit-text-stroke: 1.5px black;
    color: orange;
    padding: 30px;
  }

  ::placeholder {
    color: #999;
    font-size: 14px;
  }
</style>
