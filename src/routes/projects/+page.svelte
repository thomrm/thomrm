<script>
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';
    import { slides } from '../../lib/projects.js';

    let ready = false;

    onMount(() => ready = true);
</script>

<svelte:head>
	<title>Thomas Reed-Munoz's Design Projects</title>
    <meta name="description" content="A selection of personal design projects.">
</svelte:head>

{#if ready}
    <div class="page-projects">
        <div class="projects-contain">

            {#each slides as slide}

                <a href="{slide.url}" class="project-item" in:fly|global={{ delay: slide.id*200, duration: 1000, y: 150, opacity: 0, easing: expoOut }}>
                    <img class="item-image" src="{slide.image}" alt="{slide.name}" />
                    <div class="item-main">
                        <div class="item-content">
                            <h2>{slide.name}</h2>
                            <p>{slide.desc}</p>
                            <ul class="item-skills">
                                {#each slide.skills as skill}
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

            {/each}

        </div>
    </div>
{/if}

<style>
    .page-projects {
        display: flex;
        max-width: 1300px;
        align-items: center;
        justify-content: center;
        flex: 1 0 0;
        align-self: stretch;

        margin-top: var(--Padding-Nav);
        padding: 0px var(--Padding-Page);
    }

    .projects-contain {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        align-self: stretch;

        gap: var(--Padding-Medium);
    }
</style>