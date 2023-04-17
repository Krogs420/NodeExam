<script>
  import Home from "./Pages/home/Home.svelte";
  import { Route, Router } from "svelte-navigator";
  import Characters from "./Pages/characters/Characters.svelte";
  import Contact from "./Pages/contact/Contact.svelte";
  import SignIn from "./Pages/signIn/SignIn.svelte";
  import Navbar from "./components/Navbar.svelte";
  import SignUp from "./Pages/signUp/SignUp.svelte";
</script>

<main>
  <Router>
   <!-- <div id="content">
      <Navbar />
    </div>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/characters">
      <Characters />
    </Route> -->
    <Route path="/contact">
      <Contact />
    </Route>
    <!-- <Route path="/signin">
      <SignIn />
    </Route>
    <Route path="/signup">
      <SignUp />
    </Route> -->
    
  </Router>
  <div class="background-image" />
</main>

<style>
  /* #content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 10px;
    font-family: "ninjanaruto";
  } */

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
</style>
