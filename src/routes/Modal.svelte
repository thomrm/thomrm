<script>
    import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

    const next = () => dispatch('next-work');
    const previous = () => dispatch('previous-work');

    export let modalOpen = false;
    export let closeModal;
    export let current, max;

    // Get scrollbar width
    let scrollOffset;
    let scrollClient;
    $: scrollWidth = scrollOffset - scrollClient;

    $: innerWidth = 0;

    console.log(max);
</script>

<svelte:window bind:innerWidth />

{#if modalOpen}
    <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
    <div class="modal-container" tabindex="0" role="button" on:click={closeModal} style="display: {modalOpen ? 'block' : 'none'}" transition:fade={{duration: 100}}>
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="modal" on:click|stopPropagation bind:offsetWidth={scrollOffset} bind:clientWidth={scrollClient} style="padding-right: {innerWidth < 700 ? 20 - scrollWidth : 30 - scrollWidth}px" in:fade={{duration: 100, delay: 100}}>
            <div class="modal__nav">
                <div class="button-container">
                    <button class="small-button" on:click={previous} disabled={current == 0}>
                        <span>Previous</span>
                    </button>
                    <button class="small-button" on:click={next} disabled={current == max - 1}>
                        <span>Next</span>
                    </button>
                </div>
                <button class="small-button" on:click={closeModal}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" />
                    </svg>
                    <span>Close</span>
                </button>
            </div>
            <div class="modal__content">
                <slot />
            </div>
        </div>
    </div>
{/if}

<style>
    .modal-container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(21,21,21,0.9);
        z-index: 3;
    }

    .modal {
        display: flex;
        flex-direction: column;
        background: var(--Color-Base);
        padding: 0 var(--Padding-Section);
        box-sizing: border-box;
        max-width: 860px;
        height: 100dvh;
        margin: 0 auto;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    .modal__nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: var(--Padding-Section) 0;
        background: var(--Color-Base);
        position: sticky;
        top: 0;
    }

    .modal__content {
        display: flex;
        flex-direction: column;
        gap: var(--Padding-Section);
        padding: var(--Padding-Section) 0;
        padding-top: 0;
    }
</style>