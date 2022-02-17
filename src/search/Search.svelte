<script>
  import {Button, Field, Input} from "svelte-chota";
  import {mdiFilter} from '@mdi/js'
</script>

<div class="search-component">
  <div class="search-intro">
    <h1>Nađi Automehaničara</h1>
    <p>Baza podataka automehaničara u bližoj i daljoj okoloci. <br>
      Ukoliko ne postoji vaš traženi automehaničar, molim da ga dodate u bazu podataka.</p>
  </div>
  <Field gapless>
    <Input placeholder="Traži"/>
    <Button icon={mdiFilter} primary/>
  </Field>
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
