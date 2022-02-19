<script>
  import {Input} from "svelte-chota";
  import store from "../redux/store";
  import {OverviewAction} from "./overview-action";

  let searchKeyword = $store.search.keyword
  store.dispatch({type: OverviewAction.LoadData})
</script>

<div class="overview-component">
  <div class="overview-list">
    <Input bind:value={searchKeyword} placeholder="{$store.search.filter}"/>
    {#each $store.overview.result as result}
      <div class="overview-list-item">
        <p>{result.name}</p>
        <p>{result.address}, {result.town}</p>
        <p>{result.country}</p>
        <p>{result.phone}</p>
      </div>
    {/each}
  </div>
  <div class="overview-map">
    <div>
    </div>
  </div>
</div>

<style>
  p {
    font-size: 85%;
    line-height: 1.15;
    margin: 0 0 5px 0;
  }

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

  .overview-list-item {
    width: 100%;
    margin: 0 0 12px 0;
    cursor: pointer;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    transition: 0.3s;
    background: white;
    padding: 12px;
  }

  .overview-list-item:hover {
    background: #f0ecec;
  }

  .overview-map {
    flex: 4;
    height: 100%;
    background: white;
  }
</style>
