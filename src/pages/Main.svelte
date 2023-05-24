<script lang ="ts">
  import Header from '../components/Header.svelte';
  import { wawService } from '../services/waw-service';

  wawService.logout();
</script>

<Header />

<div class="columns is-vcentered content">
  <div class="column has-text-centered">
      <img width="450" src="/WAW.jpg" alt="waw" />
  </div>
  <div class="column">
      <h1 class="title">myWildAtlanticWay</h1>
      <p>Share your travels along the Wild Atlantic Way</p>
  </div>
</div>

  