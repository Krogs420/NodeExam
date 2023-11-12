<script>
  import Home from "./Pages/home/Home.svelte";
  import { Route, Router } from "svelte-navigator";
  import Contact from "./Pages/contact/Contact.svelte";
  import SignIn from "./Pages/signIn/SignIn.svelte";
  import Navbar from "./components/Navbar.svelte";
  import SignUp from "./Pages/signUp/SignUp.svelte";
  import Users from "./Pages/users/Users.svelte";
</script>

<main>
  <Router>
   <div id="content">
      <Navbar />
    </div>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/contact">
      <Contact />
    </Route>
    <Route path="/users">
      <Users />
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

  main {
    width: 90vw;
  }
</style>
