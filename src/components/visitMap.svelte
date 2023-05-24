<script lang = "ts">
  import "leaflet/dist/leaflet.css";
  import { LeafletMap } from "../services/leaflet-map";
  import { onMount } from "svelte";
  import {wawService} from "../services/waw-service"

  const mapConfig = {
    location: { latitude: 51.82, longitude: -8.39 },
    zoom: 8,
    minZoom: 1,
  };
  let map = null;

  onMount(async () => {
    map = new LeafletMap("visit-map", mapConfig);
    map.showZoomControl();
    map.addLayerGroup('Visits');
    map.showLayerControl();

    const visits = await wawService.getAllVisits();
    visits.forEach(visit => {
      addVisitMarker(visit);
    });
  });

   export function addVisitMarker(visit) {
    const visitStr = `${visit.county.nameEng} ${visit.date}`;
    map.addMarker({ latitude: visit.latitude, longitude: visit.longitude }, visitStr, "Visits" );
    map.moveTo(11, { latitude: visit.latitude, longitude: visit.longitude });
  }
</script>

<div class="box" id="visit-map" style="height:800px"></div>
