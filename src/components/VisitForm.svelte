<script lang ="ts">
  import { createEventDispatcher, getContext, onMount } from "svelte";
  import Coordinates from "./Coordinates.svelte";
  import {wawService} from '../services/waw-service'

 const dispatch = createEventDispatcher();

  let location = "";
  let latitude = 51.82;
  let longitude = 8.39;
  let date = "";
  let details = "";
  let img = "";
  let countyList = [];
  let selectedCounty = "";

  let message = "Please share your visit";

  onMount(async () => {
    countyList = await wawService.getAllCounties()
  });

async function createVisit(){
  if (selectedCounty && latitude && longitude) {
    const countyNames = selectedCounty.split(',')
    const county = countyList.find(county => county.nameEng == countyNames[0] && county.nameIrish == countyNames[1]);
    const visit = {
          location: location,
          latitude: latitude,
          longitude: longitude,
          date: date,
          details: details,
          county: county._id,
          img: img,
    };
    const success = await wawService.createVisit(visit);
    if (!success) {
     message = "visit details not saved - some error occurred";
     return;
    }
    message = "Thanks! You created a new visit";
    dispatch("message", {
      visit: visit,
    });
  } else {message = "Please enter visit details";}
  }
   
  </script>
    
  <form on:submit|preventDefault={createVisit}>
    <div class="field">
      <label class="label" for="location">Location</label>
      <input bind:value={location} class="input" id="location" name="location" type="text">
    </div>
    <div class="field">
      <label class="label" for="latitude">Latitude</label>
      <input bind:value={latitude} class="input" id="latitude" name="latitude" type="float">
    </div>
    <div class="field">
      <label class="label" for="longitude">Longitude</label>
      <input bind:value={longitude} class="input" id="longitude" name="longitude" type="float">
    </div>
    <Coordinates bind:latitude={latitude} bind:longitude={longitude}/>
    <div class="field">
      <label class="label" for="date">Date</label>
      <input bind:value={date} class="input" id="date" name="date" type="text">
    </div>
    <div class="field">
      <label class="label" for="details">Details</label>
      <input bind:value={details} class="input" id="details" name="details" type="text">
    </div>
    <div class="field">
      <div class="select">
        <select bind:value={selectedCounty}>
          {#each countyList as county}
            <option>{county.nameEng}</option>
          {/each}
        </select>
      </div>
    </div>
    <div class="field">
      <label class="label" for="details">Image</label>
      <input bind:value={img} class="input" id="img" name="img" type="image" alt="kinsale.jpg">
    </div>
    <div class="field">
      <div class="control">
        <button class="button is-link is-light">Create visit entry</button>
      </div>
    </div>
    <div class="section">
      {message}
    </div>
  </form>  