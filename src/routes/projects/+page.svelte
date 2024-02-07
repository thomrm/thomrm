<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    let ready = false;
    let slideNum = 1;

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
            name: 'Keyboard Case',
            desc: 'A custom acrylic and stainless steel case for an unconventional keyboard.',
            skills: ['Product Design', 'Fusion 360'],
            image: '/Slide2.png'
        }
    ]

    function nextSlide(e) {
        slideNum === slides.length ? slideNum = 1 : slideNum += 1;
    }

    function previousSlide(e) {
        slideNum === 1 ? slideNum = slides.length : slideNum -= 1;
    }

    onMount(() => ready = true);
</script>

{#if ready}
    <div class="page-projects" in:fade={{delay: 200, duration: 200}}>
        <div class="slides-contain">
            <div class="slides-leftcol">
                {#each slides as slide}
                    {#if slideNum == slide.id}
                        <div class="slides-content" in:fade={{delay: 200, duration: 200}} out:fade={{duration: 200}}>
                            <h2>{slide.name}</h2>
                            <p>{slide.desc}</p>
                            <ul class="slides-skills">
                                {#each slide.skills as skill}
                                    <li>{skill}</li>
                                {/each}
                            </ul>
                        </div>
                    {/if}
                {/each}
                <div class="slides-nav">
                    {#each slides as slide}
                        {#if slideNum == slide.id}
                            <a href="{slide.url}" class="button">View Project</a>
                        {/if}
                    {/each}
                    <div class="right-buttons">
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
                    </div>
                </div>
            </div>
            <div class="slides-image-contain">
                {#each slides as slide}
                    {#if slideNum == slide.id}
                        <img class="slides-image" src="{slide.image}" alt="{slide.name}" in:fade={{delay: 200, duration: 200}} out:fade={{duration: 200}}/>
                    {/if}
                {/each}
            </div>
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
        position: relative;
        display: flex;
        width: 45rem;
        box-sizing: border-box;
        flex-direction: column;
        flex-shrink: inherit;
        justify-content: flex-end;
        align-items: flex-start;
        align-self: stretch;

        padding: var(--Padding-XLarge);
        gap: var(--Padding-Large);

        & .slides-content {
            position: absolute;
            top: var(--Padding-XLarge);
            left: var(--Padding-XLarge);
            right: var(--Padding-XLarge);
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            flex: 1 0 0;
            align-self: stretch;

            gap: var(--Padding-Medium);
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
            flex-direction: row;
            align-items: flex-end;
            flex: 1 0 0;
            justify-content: flex-end;

            gap: var(--Padding-Small);
        }
    }

    .slides-image-contain {
        display: block;
        width: 100%;
        height: 100%;
        position: relative;
    }

    .slides-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media screen and (max-width: 768px) {
        .slides-contain {
            flex-direction: column-reverse;
            min-height: 720px;
        }

        .slides-leftcol {
            width: auto;
            flex: 1 1 0;
        }

        .slides-image-contain {
            height: 350px;
        }
    }

    @media screen and (max-width: 479px) {
        .slides-contain {
            min-height: 640px;
        }

        .slides-image-contain {
            height: 250px;
        }
    }
</style>