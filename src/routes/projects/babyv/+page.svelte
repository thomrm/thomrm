<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    let ready = false;

    onMount(() => ready = true);
</script>

{#if ready}
    <div class="project-contain" in:fade={{delay: 200, duration: 200}}>
        Nothing here yet.
    </div>
{/if}