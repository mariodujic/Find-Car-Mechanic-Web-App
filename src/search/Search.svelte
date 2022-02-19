<script>
  import {Button, Field, Input} from "svelte-chota";
  import {mdiFilter} from '@mdi/js'
  import SearchFilter from "./SearchFilter.svelte";
  import store from "../redux/store";
  import {SearchActions} from "./search-action";
  import {useNavigate} from "svelte-navigator";
  import {Route} from "../navigation/routes";

  let filter = false
  let toggleFilter = () => {
    filter = !filter
  }
  let navigate = useNavigate()
  let search = (keyword) => {
    store.dispatch({type: SearchActions.Search, payload: keyword})
    navigate(Route.OVERVIEW)
  }
  let searchKeyword = ""
</script>

<div class="search-component">
  <div class="search-intro">
    <h1>Nađi Automehaničara</h1>
    <p>Baza podataka automehaničara u bližoj i daljoj okoloci. <br>
      Ukoliko ne postoji vaš traženi automehaničar, molim da ga dodate u bazu podataka.</p>
  </div>
  <div class="search-input">
    <Field gapless>
      <Input bind:value={searchKeyword} placeholder="{$store.filter}"/>
      <Button icon={mdiFilter} primary on:click={toggleFilter}/>
    </Field>
    {#if (filter)}
      <SearchFilter/>
    {/if}
    <Button
            submit
            style="width:300px"
            on:click={()=>search(searchKeyword)}
            to="overview"
    >Traži
    </Button>
  </div>
</div>

<style>
  .search-component {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    align-items: center;
    height: 100%;
  }

  .search-intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
</style>
