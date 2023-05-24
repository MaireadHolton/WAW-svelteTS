<script lang = "ts">
  import Header from '../components/Header.svelte';
  import LoginForm from '../components/LoginForm.svelte';
</script>

<Header />

<div class="columns">
  <div class="column has-text-centered">
      <img alt="skellig" src="/skellig.jpg" width="500" />
  </div>
  <div class="column">
      <div class="box">
          <h1 class="title">Login</h1>
          <LoginForm />
      </div>
  </div>
</div>
