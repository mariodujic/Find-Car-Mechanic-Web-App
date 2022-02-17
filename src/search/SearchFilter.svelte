<script>
  import {Radio} from "svelte-chota";

  let searchBy = ["Gradu", "Adresi", "Nazivu"]
  let selectedSearch = searchBy[0]
</script>

<div class="search-filter">
  {#each searchBy as search}
    <Radio value="{search}" bind:group={selectedSearch}>{search}</Radio>
  {/each}
</div>

<style>
  .search-filter {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 25px 0;
  }
</style>
