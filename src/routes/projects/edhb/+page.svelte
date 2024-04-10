<script>
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
	import { quartOut } from 'svelte/easing';
    import { slides } from '../../../lib/projects';

    let ready = false;

    onMount(() => ready = true);
</script>

<svelte:head>
	<title>Project: EDHb</title>
    <meta name="description" content="A Commander finding app for Magic: The Gathering">
</svelte:head>

{#if ready}
    <div class="project-contain" in:fade={{delay: 200, duration: 200}}>
        <div class="project-cover">
            <div class="cover-content">
                <div class="card-contain">
                    <img src="/edhb/cover-image.svg" alt="Elder Dragon Handbook" in:fly={{ duration: 400, delay: 200, y: '50px', opacity: 0, easing: quartOut }}/>
                    <img src="/edhb/cover-image.svg" alt="Elder Dragon Handbook" in:fly={{ duration: 400, delay: 300, y: '50px', opacity: 0, easing: quartOut }}/>
                    <img src="/edhb/cover-image.svg" alt="Elder Dragon Handbook" in:fly={{ duration: 400, delay: 400, y: '50px', opacity: 0, easing: quartOut }}/>
                    <img class="selected-card selected-card--a" src="/edhb/cover-image.svg" alt="Elder Dragon Handbook" in:fly={{ duration: 400, delay: 500, y: '50px', opacity: 0, easing: quartOut }}/>
                    <img src="/edhb/cover-image.svg" alt="Elder Dragon Handbook" in:fly={{ duration: 400, delay: 600, y: '50px', opacity: 0, easing: quartOut }}/>
                    <img src="/edhb/cover-image.svg" alt="Elder Dragon Handbook" in:fly={{ duration: 400, delay: 700, y: '50px', opacity: 0, easing: quartOut }}/>
                    <img class="selected-card selected-card--b" src="/edhb/cover-image.svg" alt="Elder Dragon Handbook" in:fly={{ duration: 400, delay: 800, y: '50px', opacity: 0, easing: quartOut }}/>
                    <img src="/edhb/cover-image.svg" alt="Elder Dragon Handbook" in:fly={{ duration: 400, delay: 900, y: '50px', opacity: 0, easing: quartOut }}/>
                    <img src="/edhb/cover-image.svg" alt="Elder Dragon Handbook" in:fly={{ duration: 400, delay: 1000, y: '50px', opacity: 0, easing: quartOut }}/>
                    <img src="/edhb/cover-image.svg" alt="Elder Dragon Handbook" in:fly={{ duration: 400, delay: 1100, y: '50px', opacity: 0, easing: quartOut }}/>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="currentColor" class="start-scrolling" in:fade={{delay: 5000, duration: 200}}>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1715 24.1717C9.39049 24.9527 9.39049 26.219 10.1715 27.0001L23.5858 40.4143L37 27.0001C37.781 26.219 37.781 24.9527 37 24.1717C36.2189 23.3906 34.9526 23.3906 34.1715 24.1717L25.5858 32.7575L25.5858 9.58588C25.5858 8.48131 24.6903 7.58588 23.5858 7.58588C22.4812 7.58588 21.5858 8.48131 21.5858 9.58588L21.5858 32.7575L13 24.1717C12.2189 23.3906 10.9526 23.3906 10.1715 24.1717Z" />
            </svg>
        </div>
        <div class="project-content">
            <section>
                <h1>Elder Dragon Handbook</h1>
                <p>EDH (or Commander) is a variant of Magic: The Gathering where players choose a legendary creature card (their commander) to build a deck around.  There are many resources for finding and viewing the cards that are able to be a commander, but none of them make it as simple as I wanted.  EDHbook was not intended to be better than these other resources, who have many more features and options, but it was intended to be easier.</p>
            </section>
            <section>
                <div class="project-image no-border"><img srcset="/edhb/image01.jpg, /edhb/image01@2x.jpg 2x" src="/edhb/image01.jpg" alt="App view" /></div>
                <p>Usually, when looking for a new commander, the color identity of the card is the most important.  I wanted to build a flexible filtering system to view all of the cards for a combination of colors, that could also be changed easily.  Additional sorting and filtering options can be used and combined to find exactly what you're looking for.  This formed the core of the designed user experience.</p>
            </section>
            <section>
                <div class="project-image no-border"><img srcset="/edhb/image02.jpg, /edhb/image02@2x.jpg 2x" src="/edhb/image02.jpg" alt="App view" /></div>
                <p>Card art is another important aspect for choosing a new commander to build around.  Showing all printings of each card, as well as prices of those printings, was another important aspect of the app's experience.</p>
            </section>
            <section>
                <div class="project-image no-border"><img srcset="/edhb/image03.jpg, /edhb/image03@2x.jpg 2x" src="/edhb/image03.jpg" alt="App view" /></div>
                <p>The app needed to be responsive to be usable on mobile devices and smaller screens.</p>
            </section>
            <section>
                <p>I used Scryfall's API to pull in card data, and built the search, sort, and filtering on top.  I designed the app in Figma and built it with Sveltekit as a fully functioning proof-of-concept.  You can view and use it at <a class="link" href="http://edhbook.com">edhbook.com</a>!</p>
            </section>
            <section>
                <div class="sub-header">Keep Reading</div>
                <a href="{slides[1].url}" class="project-item with-border">
                    <div class="item-main">
                        <div class="item-content">
                            <h2>{slides[1].name}</h2>
                            <p>{slides[1].desc}</p>
                            <ul class="item-skills">
                                {#each slides[1].skills as skill}
                                    <li>{skill}</li>
                                {/each}
                            </ul>
                        </div>
                        <div class="item-view">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L16.4142 12L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z" />
                            </svg>
                        </div>
                    </div>
                </a>
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

        & .cover-content {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            align-content: center;
            flex: 1 0 0;
            gap: 50px;
            padding: 0 var(--Padding-Inner);
        }
    }

    .card-contain {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        width: 100%;
        max-width: 900px;
        gap: 1vw;

        & img {
            width: 100%;
            border-radius: 6.5% / 5%;
            border: 2px solid var(--Background-Primary);
            box-sizing: border-box;
        }
    }

    .selected-card {
        animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
        border-radius: 6.5% / 5%;
        box-shadow: 0 0 0 6px rgba(0,0,0,0);

        outline: 4px;
        outline-style: solid;
        outline-color: transparent;
    }

    .selected-card--a {
        animation-name: selected-in, selected-out;
        animation-duration: 400ms, 400ms;
        animation-fill-mode: forwards, forwards;
        animation-delay: 1500ms, 3000ms;
    }

    .selected-card--b {
        animation-name: selected-in;
        animation-duration: 400ms;
        animation-fill-mode: forwards;
        animation-delay: 2700ms;
    }

    @keyframes -global-selected-in {
        0% { 
            transform: scale(1);
            outline-color: transparent;
        }
        100% {
            transform: scale(1.2);
            outline-color: #47FFFF;
        }
    }

    @keyframes -global-selected-out {
        0% {
            transform: scale(1.2);
            box-shadow: 0 0 0 6px rgba(0,0,0,0.85);
            outline-color: #47FFFF;
        }
        100% { 
            transform: scale(1);
            box-shadow: 0 0 0 6px rgba(0,0,0,0);
            outline-color: transparent;
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
        box-shadow: 0 0 0 1px var(--Border);
        border-radius: 6px;
        overflow: hidden;

        transition: box-shadow 200ms;

        &.no-border {
            box-shadow: none;
        }

        & img {
            width: 100%;
            height: auto;
        }
    }
</style>