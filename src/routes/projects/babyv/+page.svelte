<script>
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

    let ready = false;

    onMount(() => ready = true);
</script>

{#if ready}
    <div class="project-contain" in:fade={{delay: 200, duration: 200}}>
        <div class="project-cover">
            <div class="cover-content">
                <div class="layers-contain">
                    <img alt="layer 10" src="/layer10.png" in:fly={{ duration: 1000, delay: 2800, y: '100vh', opacity: 1, easing: cubicOut }}/>
                    <img alt="layer 1" src="/layer01.png" in:fly={{ duration: 1000, delay: 1200, y: '100vh', opacity: 1, easing: cubicOut }}/>
                    <img alt="layer 2" src="/layer02.png" in:fly={{ duration: 1000, delay: 800, y: '100vh', opacity: 1, easing: cubicOut }}/>
                    <img alt="layer 3" src="/layer03.png" in:fly={{ duration: 1000, delay: 600, y: '100vh', opacity: 1, easing: cubicOut }}/>
                    <img alt="layer 4" src="/layer04.png" in:fly={{ duration: 1000, delay: 400, y: '100vh', opacity: 1, easing: cubicOut }}/>
                    <img alt="layer 5" src="/layer05.png" in:fly={{ duration: 1000, delay: 200, y: 0, opacity: 0, easing: cubicOut }}/>
                    <img alt="layer 6" src="/layer06.png" in:fly={{ duration: 1000, delay: 1600, y: '-100vh', opacity: 1, easing: cubicOut }}/>
                    <img alt="layer 7" src="/layer07.png" in:fly={{ duration: 1000, delay: 1800, y: '-100vh', opacity: 1, easing: cubicOut }}/>
                    <img alt="layer 8" src="/layer08.png" in:fly={{ duration: 1000, delay: 2000, y: '-100vh', opacity: 1, easing: cubicOut }}/>
                    <img alt="layer 9" src="/layer09.png" in:fly={{ duration: 1000, delay: 2800, y: '-100vh', opacity: 1, easing: cubicOut }}/>
                    <img alt="layer 11" src="/layer11.png" in:fade={{ duration: 0, delay: 3200 }}/>
                </div>
            </div>
        </div>
        <div class="project-content">
            Zzz
        </div>
    </div>
{/if}

<style>
    .project-contain {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
    }

    .project-cover {
        display: flex;
        width: 100vw;
        height: 100vh;
        margin-top: var(--Padding-Nav);
        overflow: hidden;

        & .cover-content {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            align-content: center;
            flex: 1 0 0;
            gap: 50px;
            padding: 1 var(--Padding-Inner);
        }
    }

    .layers-contain {
        position: relative;
        width: 100%;
        max-width: 1000px;
        height: 100%;

        & img {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: scale-down;
        }
    }

    .project-content {
        display: flex;
        width: 100vw;
        padding: 25rem 0px;
        flex-direction: column;
        align-items: center;
        gap: 25rem;

        background: var(--Background-Alt);

        transition: background-color 200ms;

        & section {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5rem;
            padding: 0 var(--Padding-Page);

            & h1, h2, h3, p {
                max-width: 800px;
                width: 100%;
            }
        }
    }
</style>