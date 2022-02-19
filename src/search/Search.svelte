<script>
  import {Button, Field, Input} from "svelte-chota";
  import {mdiFilter} from '@mdi/js'
  import SearchFilter from "./SearchFilter.svelte";
  import store from './filter-store';

  let filter = false
  let toggleFilter = () => {
    filter = !filter
  }
</script>

<div class="search-component">
  <div class="search-intro">
    <h1>Nađi Automehaničara</h1>
    <p>Baza podataka automehaničara u bližoj i daljoj okoloci. <br>
      Ukoliko ne postoji vaš traženi automehaničar, molim da ga dodate u bazu podataka.</p>
  </div>
  <div class="search-input">
    <Field gapless>
      <Input placeholder="{$store}"/>
      <Button icon={mdiFilter} primary on:click={toggleFilter}/>
    </Field>
    {#if (filter)}
      <SearchFilter/>
    {/if}
    <Button submit style="width:300px">Traži</Button>
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
    background: #e3eae1;
  }

  .search-intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
</style>
