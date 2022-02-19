<script>
  import {Radio} from "svelte-chota";
  import store, {searchBy} from './filter-store'

  let updateSearchType = (type) => {
    store.dispatch({type: type})
  }
  let selectedSearch = $store

</script>
<div class="search-filter">
  {#each searchBy as search}
    <Radio value="{search}" bind:group={selectedSearch} on:click={()=>updateSearchType(search)}>{search}</Radio>
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
