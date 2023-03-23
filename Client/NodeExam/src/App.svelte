<script>
import Home from "./Pages/home/Home.svelte";
import {Route, Router} from "svelte-navigator";
import Characters from "./Pages/characters/Characters.svelte";
import Contact from "./Pages/characters/Characters.svelte";
import SignIn from "./Pages/characters/Characters.svelte";
import Navbar from "./components/Navbar.svelte";
</script>

<main>
 
  <Router>
    <Navbar></Navbar>
    <Route path="/">
      <Home></Home>
    </Route>
    <Route path="/characters">
      <Characters></Characters>
    </Route>
    <Route path="/contact">
      <Contact></Contact>
    </Route>
    <Route path="/signin">
      <SignIn></SignIn>
    </Route>
    
  </Router>
</main>

<style>

</style>
