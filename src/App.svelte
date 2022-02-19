<script>
  import 'chota';
  import {Route, Router} from "svelte-navigator";
  import Search from "./search/Search.svelte";
  import Overview from "./overview/Overview.svelte";
</script>

<main>
  <Router>
    <Route path="/">
      <Search/>
    </Route>
    <Route path="/overview">
      <Overview/>
    </Route>
  </Router>
</main>

<style>
  main {
    height: 100%;
    background: #e3eae1;
    font-size: 120%;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
