<script>
  import {Radio} from "svelte-chota";
  import store from "../redux/store";
  import {SearchActions} from "./search-action";
  import {searchBy} from "./search-reducer";

  let updateSearchType = (type) => {
    store.dispatch({type: SearchActions.ChangeFilter, payload: type})
  }

</script>
<div class="search-filter">
  {#each searchBy as search}
    <Radio
            value="{search}"
            bind:group={$store.filter}
            on:click={()=>updateSearchType(search)}
    >{search}</Radio>
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
