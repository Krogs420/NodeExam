<script>
  import Header from "../../components/Header.svelte";
  import { Route, Router, Link } from "svelte-navigator";
</script>

<header>
  <h1>Naruto</h1>

  <!-- <nav>
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/signin">Sign In</Link>
    <Link to="/characters">Characters</Link>
  </nav> -->
</header>

<body>
  <div>
    <h1>Konohagakure</h1>
  </div>
  <div>
    <p>
      "Village Hidden in the Leaves" or "Hidden Leaf Village" is the hidden
      village of the Land of Fire. As the village of one of the Five Great
      Shinobi Countries, Konohagakure has a Kage as its leader known as the
      Hokage, of which there have been seven in its history. Konoha resides deep
      within a forest at the base of a mountain known as the Hokage Rock, which
      has the faces of all those who have taken the office of Hokage engraved on
      it. It is surrounded on all sides by enormous walls. While generally seen
      as the most powerful of the ninja villages, Konoha has enjoyed many years
      of relative peace and stability.
    </p>
  </div>
</body>

<style>
  @font-face {
    font-family: "ninjanaruto";
    src: url(../../../public/njnaruto.ttf);
  }

  /* Global styles */
  body {
    margin: 0;
    font-family: "ninjanaruto";
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-text-stroke: 1px black;
  }

  /* Header styles */
  header {
    top: 0;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 20px;
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

  /* Container styles */

  h1 {
    font-size: 3rem;
    margin: 0;
    font-family: "ninjanaruto";
    color: orange;
  }

  p {
    font-size: 16px;
    margin: 0;
  }
</style>
