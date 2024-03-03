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

            {#each [...slides].reverse() as slide, i}

                <a href="{slide.url}" class="project-item" in:fly|global={{ delay: (i+1)*200, duration: 1000, y: 150, opacity: 0, easing: expoOut }}>
                    <img class="item-image" srcset="{slide.image}.jpg, {slide.image}@2x.jpg 2x" src="{slide.image}.jpg" alt="{slide.name}" />
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
        align-items: flex-start;
        justify-content: center;
        flex: 1 0 0;
        align-self: stretch;

        margin-top: var(--Padding-Nav);
        padding: 0px var(--Padding-Page);
    }

    .projects-contain {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(30ch, 1fr));
        width: 100%;

        gap: var(--Padding-Medium);
    }
</style>