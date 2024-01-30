<script>
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
	import { quartInOut } from 'svelte/easing';

    let ready = false;
    let slideNum = 1;
    let dir = -100;

    function nextSlide(e) {
        slideNum === 2 ? slideNum = 1 : slideNum += 1;
        dir = 100;

        const node = e.currentTarget;
        node.disabled = true;
        setTimeout(() => {
            node.disabled = false;
        }, 1000);
    }

    function previousSlide(e) {
        slideNum === 1 ? slideNum = 2 : slideNum -= 1;
        dir = -100;

        const node = e.currentTarget;
        node.disabled = true;
        setTimeout(() => {
            node.disabled = false;
        }, 1000);
    }

    onMount(() => ready = true);
</script>

{#if ready}
    <div class="page-projects" in:fade={{delay: 200, duration: 200}}>
        <div class="slides-contain">
            <div class="slides-nav">
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
            <ul class="slides-items">
                {#if slideNum == 1}
                    <li class="slide slide--1" in:fly={{ delay: 500, duration: 500, x: dir+'vw', opacity: 1, easing: quartInOut }} out:fly={{ duration: 500, x: -dir+'vw', opacity: 1, easing: quartInOut }}>
                        <div class="slide-info-contain">
                            <div class="slide-info">
                                <div class="left">
                                    <p class="name">Keycap Set <span class="sub">Product Design</span></p>
                                </div>
                                <div class="right">
                                    <div class="skills-hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7071 5.70711C21.0976 5.31658 21.0976 4.68342 20.7071 4.29289C20.3166 3.90237 19.6834 3.90237 19.2929 4.29289L12 11.5858L9.70711 9.29289C9.31658 8.90237 8.68342 8.90237 8.29289 9.29289C7.90237 9.68342 7.90237 10.3166 8.29289 10.7071L11.2929 13.7071C11.6834 14.0976 12.3166 14.0976 12.7071 13.7071L20.7071 5.70711ZM19 16L19 8.82843L17 10.8284L17 16C17 16.5523 16.5523 17 16 17L8 17C7.44772 17 7 16.5523 7 16L7 10.0012L7 9.99878L7 8C7 7.44772 7.44772 7 8 7L15.1716 7L17.0006 5.17093C16.6877 5.06024 16.3509 5 16 5L8 5C6.34315 5 5 6.34315 5 8L5 16C5 17.6569 6.34315 19 8 19L16 19C17.6569 19 19 17.6569 19 16Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                {/if}
                {#if slideNum == 2}
                    <li class="slide slide--2" in:fly={{ delay: 500, duration: 500, x: dir+'vw', opacity: 1, easing: quartInOut }} out:fly={{ duration: 500, x: -dir+'vw', opacity: 1, easing: quartInOut }}>
                        <div class="slide-info-contain">
                            <div class="slide-info">
                                <div class="left">
                                    <p class="name">Keycap Set <span class="sub">Product Design</span></p>
                                </div>
                                <div class="right">
                                    <div class="skills-hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7071 5.70711C21.0976 5.31658 21.0976 4.68342 20.7071 4.29289C20.3166 3.90237 19.6834 3.90237 19.2929 4.29289L12 11.5858L9.70711 9.29289C9.31658 8.90237 8.68342 8.90237 8.29289 9.29289C7.90237 9.68342 7.90237 10.3166 8.29289 10.7071L11.2929 13.7071C11.6834 14.0976 12.3166 14.0976 12.7071 13.7071L20.7071 5.70711ZM19 16L19 8.82843L17 10.8284L17 16C17 16.5523 16.5523 17 16 17L8 17C7.44772 17 7 16.5523 7 16L7 10.0012L7 9.99878L7 8C7 7.44772 7.44772 7 8 7L15.1716 7L17.0006 5.17093C16.6877 5.06024 16.3509 5 16 5L8 5C6.34315 5 5 6.34315 5 8L5 16C5 17.6569 6.34315 19 8 19L16 19C17.6569 19 19 17.6569 19 16Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                {/if}
            </ul>
        </div>
    </div>
{/if}

<style>
    .page-projects {
        display: flex;
        align-items: flex-start;
        flex: 1 0 0;
        align-self: stretch;

        padding: 0px var(--Padding-Page);
    }

    .slides-contain {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex: 1 0 0;
        align-self: stretch;
        position: relative;
    }

    .slides-nav {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        gap: 10px;
        position: absolute;
        right: 30px;
        bottom: 33px;
        z-index: 2;
    }

    .slides-items {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        flex: 1 0 0;
        align-self: stretch;
        list-style-type: none;
        overflow: hidden;
    }

    .slide {
        position: absolute;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        padding: 30px;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        gap: 20px;
        flex: 1 0 0;
        align-self: stretch;
        
        border-radius: 12px;
        border-bottom: 3px solid var(--Primary-Color);

        background-color: #333;
        background-size: cover;
        background-position: center center;

        transition: background-color 200ms, border-color 200ms, color 200ms;

        & .slide-info-contain {
            display: flex;
            align-items: center;
            align-self: stretch;
        }

        & .slide-info {
            display: flex;
            height: 60px;
            padding: 0px 8px 0px 30px;
            justify-content: center;
            align-items: center;
            gap: 20px;
            border-radius: 999px;
            background: var(--Background-Primary, #FFF);

            transition: background-color 200ms;

            & .left {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
            }

            & .right {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
            }

            & .name {
                color: var(--Header-Text);
                font-family: "Norms";
                font-size: 16px;
                font-weight: 500;
                line-height: normal;
                letter-spacing: -0.32px;

                transition: color 200ms;

                & .sub {
                    color: var(--Sub-Text);
                    margin-left: 10px;

                    transition: color 200ms;
                }
            }
        }
    }

    .skills-hover {
        display: flex;
        padding: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 999px;

        background: var(--Primary-Color);
        color: var(--Background-Primary);

        transition: background-color 200ms, color 200ms;
    }

    .slide--1 {
        background-image: url('/TestImage.png');
    }
</style>