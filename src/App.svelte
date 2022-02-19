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
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
