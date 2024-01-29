<script>
    import { onMount } from 'svelte';
    import { fade, fly, scale } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';

    let ready = false;

    onMount(() => ready = true);
</script>

{#if ready}
    <div class="page-about">
        <div class="about__top">
            <div class="pin-contain">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="95" viewBox="0 0 64 95" class="pin" transition:fly={{ delay: 500, duration: 1000, y: -150, opacity: 0, easing: expoOut }}>
                    <path d="M26.5567 85.3958C17.4229 74.405 -3.8147e-06 54.8743 0 32C3.8147e-06 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32C64 54.8743 46.5771 74.405 37.4433 85.3958C36.0005 87.132 34.0002 88 32 88C29.9997 88 27.9995 87.132 26.5567 85.3958Z" />
                    <circle cx="32" cy="32" r="16" fill="white"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="12" viewBox="0 0 64 12" class="shadow" transition:scale={{ duration: 1000, delay: 500, opacity: 0, start: 0, easing: expoOut }}>
                    <ellipse cx="32" cy="6" rx="18" ry="6" />
                </svg>
            </div>
        </div>
        <div class="about__bottom">
            <div class="about__header" in:fade={{delay: 200, duration: 200}}>
                <h1>Thomas Reed-Mu&ntilde;oz</h1>
                <h3>Product &amp; Visual Design in <bold>NYC</bold></h3>
            </div>
        </div>
    </div>
{/if}

<style>
    .page-about {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1 0 0;
        align-self: stretch;

        padding: 0px var(--Padding-Page);
        gap: var(--Padding-Large);
    }

    .about__top {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        flex: 1 0 0;
        align-self: stretch;

        gap: var(--Padding-Small);
    }

    .pin-contain {
        display: flex;
        padding: 12px 0px;
        gap: 6px;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;

        & .pin {
            fill: var(--Primary-Color);
            transition: fill 200ms;
        }

        & .shadow {
            fill: var(--Shadow);
            transition: fill 200ms;
        }
    }

    .about__bottom {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1 0 0;
        align-self: stretch;
    }
    
    .about__header {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: stretch;

        gap: var(--Padding-Medium);
    }
</style>