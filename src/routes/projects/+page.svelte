<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

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
            <div class="slides-leftcol">
                <div class="slides-content">
                    <h1>Juniper</h1>
                    <h3>A simple design system built in figma with clarity and accessibility in mind.</h3>
                    <ul class="slides-skills">
                        <li>Typography</li>
                        <li>Iconography</li>
                        <li>Figma</li>
                    </ul>
                </div>
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
                    <div class="right-buttons">
                        <a href="#1" class="button">View Project</a>
                    </div>
                </div>
            </div>
            <div class="slides-image slide-1"></div>
        </div>
    </div>
{/if}

<style>
    .page-projects {
        display: flex;
        max-width: 1300px;
        align-items: flex-start;
        flex: 1 0 0;
        align-self: stretch;

        padding: 0px var(--Padding-Page);
    }

    .slides-contain {
        display: flex;
        align-items: flex-start;
        flex: 1 0 0;
        align-self: stretch;
        border-radius: 12px;
        overflow: hidden;

        border-bottom: 3px solid var(--Primary-Color);
        background: var(--Background-Alt);

        transition: background-color 200ms, border-color 200ms;
    }

    .slides-leftcol {
        display: flex;
        max-width: 350px;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;

        padding: var(--Padding-Page);
        gap: var(--Padding-Large);

        & .slides-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            flex: 1 0 0;
            align-self: stretch;

            gap: var(--Padding-Small);
        }

        & .slides-skills {
            display: flex;
            list-style-type: none;
            align-items: flex-start;

            gap: var(--Padding-XSmall);
            padding: var(--Padding-Small) 0;

            & li {
                display: flex;
                height: 32px;
                padding: 0 15px;
                align-items: center;
                border-radius: 999px;
                font-size: 1.4rem;
                font-weight: 500;

                gap: var(--Padding-Small);

                background: var(--Primary-Color);
                color: var(--Color-Overlay);

                transition: background-color 200ms, color 200ms;
            }
        }

        & .slides-nav {
            display: flex;
            align-items: flex-end;
            align-self: stretch;

            gap: var(--Padding-Small);
        }

        & .right-buttons {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            flex: 1 0 0;

            gap: var(--Padding-Small);
        }
    }

    .slides-image {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1 0 0;
        align-self: stretch;
        background-position: center;
        background-size: cover;

        gap: var(--Padding-Large);

        &.slide-1 {
            background-image: url(/Slide1.png);
        }
    }
</style>