<script>
  import Home from "./Pages/home/Home.svelte";
  import { Route, Router } from "svelte-navigator";
  import Characters from "./Pages/characters/Characters.svelte";
  import Contact from "./Pages/contact/Contact.svelte";
  import SignIn from "./Pages/signIn/SignIn.svelte";
  import Clans from "./Pages/clans/Clans.svelte";
  import Navbar from "./components/Navbar.svelte";
  import SignUp from "./Pages/signUp/SignUp.svelte";
  import CreateNinja from "./Pages/createNinja/CreateNinja.svelte";
  import Users from "./Pages/users/Users.svelte";
  import Ninjas from "./Pages/ninjas/Ninjas.svelte";
</script>

<main>
  <Router>
   <div id="content">
      <Navbar />
    </div>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/characters">
      <Characters />
    </Route>
    <Route path="/contact">
      <Contact />
    </Route>
    <Route path="/creator">
      <CreateNinja />
    </Route>
    <Route path="/clans">
      <Clans />
    </Route>
    <Route path="/users">
      <Users />
    </Route>
    <Route path="/ninjas">
      <Ninjas />
    </Route>
    <Route path="/signin">
      <SignIn />
    </Route>
    <Route path="/signup">
      <SignUp />
    </Route>
    
  </Router>
  <div class="background-image" />
</main>

<style>
  #content {
    display: flex;
    min-width: 100%;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    margin-top: -10px;
    padding: 10px;
    font-family: "ninjanaruto";
    font-size: 26px;
    -webkit-text-stroke: 1px black;
    display: inline;
    padding-right: 30px;
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

  main {
    width: 90vw;
  }
</style>
