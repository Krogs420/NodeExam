<script>
  import { Router, useNavigate} from "svelte-navigator";
  import toastr, * as Toastr from "toastr";
  import "../../../node_modules/toastr/build/toastr.css";

  const navigate = useNavigate();

  let name = "";
  let mail = "";
  let message = "";

  async function sendMail() {
    const url = "http://localhost:8081/mail";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name, mail, message }),
        credentials: "include",
      });
      navigate("/");
      Toastr.success("Your mail has been sent")
    } catch {
      toastr.warning("Something went wrong!")
    }
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