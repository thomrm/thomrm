<script>
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';

    let ready = false;

    let slides = [
        {
            id: 1,
            name: 'Juniper',
            desc: 'A simple design system built in figma with clarity and accessibility in mind.',
            skills: ['Typography', 'Iconography', 'Figma'],
            image: '/Slide1.png',
            url: '/projects/juniper'
        },
        {
            id: 2,
            name: 'BabyV Case',
            desc: 'A custom acrylic and stainless steel case for an unconventional keyboard.',
            skills: ['Product Design', 'Fusion 360'],
            image: '/Slide2.png',
            url: '/projects/babyv'
        }
    ]

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

                <a href="{slide.url}" class="project" in:fly|global={{ delay: slide.id*200, duration: 1000, y: 150, opacity: 0, easing: expoOut }}>
                    <img class="project-image" src="{slide.image}" alt="{slide.name}" />
                    <div class="project-main">
                        <div class="project-content">
                            <h2>{slide.name}</h2>
                            <p>{slide.desc}</p>
                            <ul class="project-skills">
                                {#each slide.skills as skill}
                                    <li>{skill}</li>
                                {/each}
                            </ul>
                        </div>
                        <div class="project-view">
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

    .project {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        align-self: stretch;
        border-radius: 12px;
        overflow: hidden;
        text-decoration: none;
        outline-color: transparent;
        outline-width: 3px;
        outline-style: solid;

        gap: var(--Padding-XLarge);
        padding: var(--Padding-XLarge);

        background: var(--Background-Alt);

        transition: outline-color 200ms, outline-offset 200ms, background-color 200ms, color 200ms, transform 200ms;

        &:hover {
            transform: scale(1.01);
        }

        &:focus-visible {
            outline-color: var(--Primary-Color);
            outline-width: 3px;
            outline-offset: 3px;
            outline-style: solid;
            z-index: 3;
        }

        & .project-image {
            height: 16rem;
            width: 16rem;
            border-radius: 999px;
            object-fit: cover;

            margin: var(--Padding-Medium) 0;
        }

        & .project-main {
            display: flex;
            min-width: 260px;
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            flex: 1 0 0;
            align-self: stretch;

            gap: var(--Padding-Large);
        }

        & .project-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            flex: 1 0 0;
            align-self: stretch;

            gap: var(--Padding-XSmall);
        }

        & .project-skills {
            display: flex;
            list-style-type: none;
            align-items: flex-start;
            flex-wrap: wrap;

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

        & .project-view {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-self: stretch;

            color: var(--Sub-Text);

            transition: color 200ms;
        }
    }
</style>