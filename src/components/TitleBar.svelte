<script lang="ts">
    import { loggedInUser } from "../stores";
    export let title = '';
    export let subTitle = '';
</script>

<div class="box has-text-centered columns m-2">
    <div class="column">
        <img src="./WWW.gif" width="150" alt="img" />
    </div>
    <div class="column">
        <div class="title is-5">{title}</div>
        <div class="subtitle is-5">{subTitle}</div>
    </div>
    <div class="column">
        <img src="./marker.jpg" width="50" alt="marker"/>
        {#if $loggedInUser?.email}
            <div class="is-size-7">{$loggedInUser.email}</div>
        {:else}
        <div class="is-size-7">waw-Svelte 0.1</div>
        {/if}
    </div>
</div>
