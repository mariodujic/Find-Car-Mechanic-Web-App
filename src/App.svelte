<script>
  import 'chota';
  import Search from "./search/Search.svelte";
</script>

<main>
  <Search/>
</main>

<style>
  main {
    height: 100%;
    font-size: 120%;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  p {
    font-weight: bolder;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
