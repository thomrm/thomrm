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
                    <div class="huge">V</div>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="currentColor" class="start-scrolling" in:fade={{delay: 4600, duration: 200}}>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1715 24.1717C9.39049 24.9527 9.39049 26.219 10.1715 27.0001L23.5858 40.4143L37 27.0001C37.781 26.219 37.781 24.9527 37 24.1717C36.2189 23.3906 34.9526 23.3906 34.1715 24.1717L25.5858 32.7575L25.5858 9.58588C25.5858 8.48131 24.6903 7.58588 23.5858 7.58588C22.4812 7.58588 21.5858 8.48131 21.5858 9.58588L21.5858 32.7575L13 24.1717C12.2189 23.3906 10.9526 23.3906 10.1715 24.1717Z" />
            </svg>
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

        & .huge {
            display: flex;
            width: 100%;
            height: 100%;
            position: absolute;
            justify-content: center;
            align-items: center;
            font-weight: 800;
            font-size: 200vh;

            color: var(--Border);

            transition: color 200ms;
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

    @keyframes -global-animate-scroll {
        0% { transform: translate(0,-30px); opacity: 0; }
        50% {  transform: translate(0,0); opacity: 1; }
        100% { transform: translate(0,0); opacity: 0; }
    }
</style>