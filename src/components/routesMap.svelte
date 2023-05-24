<script lang="ts">
    import "leaflet/dist/leaflet.css";
    import L from "leaflet";
    import { MapContainer, Marker } from "react-leaflet";
    import { LeafletMap } from "../services/leaflet-map";
    import { getContext, onMount } from "svelte";

    const mapConfig = {
    location: { latitude: 51.82, longitude: -8.39 },
    zoom: 8,
    minZoom: 1,
  };
  let map = null;

   onMount(async () => {
    map = new LeafletMap("route-map", mapConfig);
    var marker1 = L.marker([55.38, -7.37]).addTo(map);
    marker1.bindPopup("Malin head").openPopup();

    var marker2 = L.marker([53.01, -9.38]).addTo(map);
    marker2.bindPopup("Doolin").openPopup();

    var marker3 = L.marker([51.77, -10.54]).addTo(map);
    marker3.bindPopup("Skellig Michael").openPopup();
  })
</script>

<div class="box" id="route-map" style="height:800px"></div>

