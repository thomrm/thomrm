<script>
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
	import { quartInOut } from 'svelte/easing';
    import Slide from './Slide.svelte';

    let ready = false;
    let slideNum = 1;
    let slideTotal = 3;
    let dir = -100;

    function nextSlide(e) {
        dir = 100;
        slideNum === 3 ? slideNum = 1 : slideNum += 1;

        const node = e.currentTarget;
        node.disabled = true;
        setTimeout(() => {
            node.disabled = false;
        }, 1000);
    }

    function previousSlide(e) {
        dir = -100;
        slideNum === 1 ? slideNum = slideTotal : slideNum -= 1;

        const node = e.currentTarget;
        node.disabled = true;
        setTimeout(() => {
            node.disabled = false;
        }, 1000);
    }

    onMount(() => ready = true);
</script>

{#if ready}
    <div class="page-projects" in:fade={{delay: 200, duration: 200}}>
        <div class="slides-contain">
            <div class="slides-nav">
                <button class="button icon slides-nav__left" on:click={(e) => previousSlide(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 12L5 12M5 12L11 18M5 12L11 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
                <button class="button icon slides-nav__right" on:click={(e) => nextSlide(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
            </div>
            <ul class="slides-items">

                {#if slideNum == 1}
                    <li class="slide-contain" in:fly={{ delay: 500, duration: 500, x: dir+'vw', opacity: 1, easing: quartInOut }} out:fly={{ duration: 500, x: -dir+'vw', opacity: 1, easing: quartInOut }}>
                        <Slide id=1 name='Slide 1' />
                    </li>
                {/if}

                {#if slideNum == 2}
                    <li class="slide-contain" in:fly={{ delay: 500, duration: 500, x: dir+'vw', opacity: 1, easing: quartInOut }} out:fly={{ duration: 500, x: -dir+'vw', opacity: 1, easing: quartInOut }}>
                        <Slide id=2 name='Slide 2' />
                    </li>
                {/if}

                {#if slideNum == 3}
                    <li class="slide-contain" in:fly={{ delay: 500, duration: 500, x: dir+'vw', opacity: 1, easing: quartInOut }} out:fly={{ duration: 500, x: -dir+'vw', opacity: 1, easing: quartInOut }}>
                        <Slide id=3 name='Slide 3' />
                    </li>
                {/if}

            </ul>
        </div>
    </div>
{/if}

<style>
    .page-projects {
        display: flex;
        align-items: flex-start;
        flex: 1 0 0;
        align-self: stretch;

        padding: 0px var(--Padding-Page);
    }

    .slides-contain {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex: 1 0 0;
        align-self: stretch;
        position: relative;
    }

    .slides-nav {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        gap: 10px;
        position: absolute;
        right: 30px;
        bottom: 33px;
        z-index: 2;
    }

    .slides-items {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        flex: 1 0 0;
        align-self: stretch;
        list-style-type: none;
        overflow: hidden;
    }

    .slide-contain {
        position: absolute;
        width: 100%;
        height: 100%;
    }
</style>