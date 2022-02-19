<script>
  import {Input} from "svelte-chota";
  import store from "../redux/store";

  let searchKeyword = $store.keyword
</script>

<div class="overview-component">
  <div class="overview-list">
    <Input bind:value={searchKeyword} placeholder="{$store.filter}"/>
  </div>
  <div class="overview-map">
    <div>
    </div>
  </div>
</div>

<style>
  .overview-component {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .overview-list {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 250px;
    justify-content: start;
    align-items: start;
    height: 100%;
    padding: 8px;
  }

  .overview-map {
    flex: 4;
    height: 100%;
    background: white;
  }
</style>
