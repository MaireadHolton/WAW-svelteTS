<script lang="ts">
    import LoggedInHeader from '../components/LoggedInHeader.svelte';
    import VisitForm from '../components/VisitForm.svelte';
    import VisitMap from '../components/visitMap.svelte';
    import RouteMap from '../components/routesMap.svelte';

    /**
   * @type {VisitMap | null}
   */
    let visitMap = null;

  /**
   * @param {{ detail: { visit: any; }; }} event
   */
  function visitMade(event) {
    visitMap.addVisitMarker(event.detail.visit);
  }
</script>

<div class="columns is-vcentered">
  <div class="column">
    <LoggedInHeader/>
  </div>
</div>

<div class="border-box">
  <div class="column right has-text-centered">
    <h1 class="title is-4">Share your visits:</h1>
    <VisitForm on:message={visitMade}/>
  </div>
    <div class="column left has-text-centered">
      <header> Visits made:</header>
      <VisitMap bind:this={visitMap}/>
    </div>
    <div class="column left has-text-centered">
      <header> Top sights along the Wild Atlantic Way:</header>
      <RouteMap/>
    </div>
  </div>
