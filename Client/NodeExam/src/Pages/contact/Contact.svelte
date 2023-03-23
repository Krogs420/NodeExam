<!-- <script>

    let name = "";
    let mail = "";
    let message = "";

    async function sendEmail() {
    const url = "http://localhost:8081/mail";

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({mail}),
    });
  }

</script>

<main>
    <div>
        <body>
            <div class="header">
              <h1>Naruto</h1>
            </div>
            <div class="background-image">
                <div class="container">
                    <form>
                        <button on:click={sendEmail} type="button">Send mail</button>
                        <input type="email" bind:value={mail} name="email" />
                    </form>
                  </div>
            </div>
          </body>
    </div>
</main> -->

<main>
    <h1>Hjort</h1>
</main>