<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    let ready = false;

    onMount(() => ready = true);
</script>

<svelte:head>
	<title>Project: Twitch Reporting</title>
    <meta name="description" content="Twitch report flow redesign.">
</svelte:head>

{#if ready}
    <div class="project-contain" in:fade={{delay: 200, duration: 200}}>
        <div class="project-cover">
            <div class="cover-content">
                Work in Progress.
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="currentColor" class="start-scrolling" in:fade={{delay: 4600, duration: 200}}>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1715 24.1717C9.39049 24.9527 9.39049 26.219 10.1715 27.0001L23.5858 40.4143L37 27.0001C37.781 26.219 37.781 24.9527 37 24.1717C36.2189 23.3906 34.9526 23.3906 34.1715 24.1717L25.5858 32.7575L25.5858 9.58588C25.5858 8.48131 24.6903 7.58588 23.5858 7.58588C22.4812 7.58588 21.5858 8.48131 21.5858 9.58588L21.5858 32.7575L13 24.1717C12.2189 23.3906 10.9526 23.3906 10.1715 24.1717Z" />
            </svg>
        </div>
        <div class="project-content">
            <section>
                <h1>Nothing yet.</h1>
            </section>
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
        overflow: hidden;

        & .cover-content {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            align-content: center;
            flex: 1 0 0;
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

    @keyframes -global-animate-scroll {
        0% { transform: translate(0,-30px); opacity: 0; }
        50% {  transform: translate(0,0); opacity: 1; }
        100% { transform: translate(0,0); opacity: 0; }
    }

    .project-image {
        display: flex;
        max-width: 800px;
        border: 1px solid var(--Border);
        border-radius: 12px;
        overflow: hidden;

        transition: border-color 200ms;

        &.no-border {
            border: none;
        }

        & img {
            width: 100%;
            height: auto;
        }
    }

    .twocol-contain {
        display: flex;
        max-width: 800px;
        width: 100%;
        align-items: center;
        gap: 1px;
        align-self: stretch;
        border-radius: 12px;
        flex-wrap: wrap;
        overflow: hidden;

        & .twocol-content {
            min-width: 220px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            align-self: stretch;
            flex: 1 0 0;

            padding: var(--Padding-Large);
            gap: var(--Padding-Medium);

            background: var(--Background-Base);

            transition: background-color 200ms;
        }

        & ol {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            list-style-type: decimal;
            list-style-position: inside;
            
            gap: var(--Padding-Small);
        }
    }
</style>