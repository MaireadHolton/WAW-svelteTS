<script lang="ts">
    import TitleBar from './TitleBar.svelte';
    import WelcomeNavigator from './WelcomeNavigator.svelte';
</script>

<div class="columns is-vcentered">
    <div class="column is-two-thirds">
        <TitleBar title={'myWildAtlanticWay'} subTitle={'Sign up or Log in'} />
    </div>
    <div class="column">
        <WelcomeNavigator />
    </div>
</div>
