<script>
  import { Route, Router, Link } from "svelte-navigator";
</script>

<body>
  <div class="fixed-div">
    <h1>Konohagakure</h1>
    <div>
      <div>
        <p>
          "Village Hidden in the Leaves" or "Hidden Leaf Village" is the hidden
          village of the Land of Fire. As the village of one of the Five Great
          Shinobi Countries, Konohagakure has a Kage as its leader known as the
          Hokage, of which there have been seven in its history. Konoha resides
          deep within a forest at the base of a mountain known as the Hokage
          Rock, which has the faces of all those who have taken the office of
          Hokage engraved on it. It is surrounded on all sides by enormous
          walls. While generally seen as the most powerful of the ninja
          villages, Konoha has enjoyed many years of relative peace and
          stability.
        </p>
      </div>
    </div>
    <div>
      <h1>Flemming</h1>
    </div>
  </div>
</body>

<style>
  @font-face {
    font-family: "ninjanaruto";
    src: url(../../../public/njnaruto.ttf);
  }

  /* Global styles */
  body {
    font-family: "ninjanaruto";
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-text-stroke: 1px black;
  }

  /* Container styles */

  h1 {
    font-size: 3rem;
    margin: 0;
    font-family: "ninjanaruto";
    -webkit-text-stroke: 1px black;
    color: orange;
    padding: 30px;
  }

  p {
    font-size: 16px;
    margin: 0;
  }

  .fixed-div {
    position: static;
    padding: 15px;
  }
</style>
