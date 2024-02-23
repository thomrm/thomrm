<script>
    import { onMount, afterUpdate } from 'svelte';
    import { fade, fly, scale } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';

    let ready = false;

    onMount(() => ready = true);
</script>

<svelte:head>
	<title>Thomas Reed-Munoz. Product and Visual Design in NYC.</title>
    <meta name="description" content="Personal portfolio for product and visual designer, Thomas Reed-Munoz.">
</svelte:head>

{#if ready}
    <div class="page-about">
        <div class="about__top">
            <div class="pin-contain">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="95" viewBox="0 0 64 95" class="pin" transition:fly={{ duration: 1000, delay: 500, y: -150, opacity: 0, easing: expoOut }}>
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
                <h1>Thomas Reed&#x2011;Mu&ntilde;oz</h1>
                <div class="sub-header">Product and Visual Design in NYC.</div>
            </div>
        </div>
    </div>
{/if}

<style>
    .page-about {
        display: flex;
        position: absolute;
        top: 0;
        height: 100vh;
        max-width: 1300px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1 0 0;
        align-self: stretch;

        padding: 0px var(--Padding-Page);
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

    @keyframes -global-animate-pin {
        0% { transform: translate(0,0); }
        50% { transform: translate(0,-10px); }
        100% { transform: translate(0,0); }
    }

    @keyframes -global-animate-shadow {
        0% { transform: scale(1); opacity: 1; }
        50% { transform: scale(0.75); opacity: 0.75; }
        100% { transform: scale(1); opacity: 1; }
    }

    .pin-contain {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        opacity: var(--pin-o);

        transition: opacity 10ms;

        & .pin {
            fill: var(--Primary-Color);
            transition: fill 200ms;
            animation-name: animate-pin;
            animation-duration: 4000ms;
            animation-iteration-count: infinite;
            animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
        }

        & .shadow {
            fill: var(--Shadow);
            transition: fill 200ms;
            animation-name: animate-shadow;
            animation-duration: 4000ms;
            animation-iteration-count: infinite;
            animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
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

        padding: var(--Padding-Medium) 0;
        gap: var(--Padding-Small);

        & h1 {
            text-align: center;
        }

        & h3 {
            max-width: 800px;
            text-align: center;
        }
    }
</style>