<script lang ="ts">
  import Header from '../components/Header.svelte';
  import SignupForm from '../components/SignupForm.svelte';
</script>

<Header />

<div class="columns">
  <div class="column">
      <div class="box">
          <h1 class="title">Sign up</h1>
          <SignupForm />
      </div>
  </div>
  <div class="column has-text-centered">
      <img alt="Wild" src="/Wildatlanticway.jpg" width="600" />
  </div>
</div>
