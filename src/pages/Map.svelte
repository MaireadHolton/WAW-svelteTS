<script lang ="ts">
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import LeafletMap from "../components/LeafletMap.svelte";
    import { onMount } from "svelte";
    import { wawService } from "../services/waw-service";
    import { getMarkerLayer } from "../services/visit-utils";

let map: LeafletMap;

onMount(async () => {
        wawService.reload();
        const visits = await wawService.getAllVisits();
        const wawMarkerLayer = getMarkerLayer(visits);
        map.populateLayer(wawMarkerLayer);
    });

</script>

<div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"Map of Visit Locations"} title={"myWildAtlanticWay"}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>

<LeafletMap bind:this={map} />
