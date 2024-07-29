<script>
    import { onMount } from 'svelte';
    import { work } from '../lib/projects.js';
    import { skills } from '../lib/skills.js';

    let ready = false;

    onMount(() => ready = true);
</script>

<svelte:head>
	<title>Thomas Reed-Munoz. Product and Visual Design.</title>
    <meta name="description" content="Personal portfolio for Thomas Reed-Munoz.">
</svelte:head>

{#if ready}
    <div class="page-content">
        <section id="section-work">
            <h1><span>Work</span></h1>
            <ul class="work-contain">
                {#each [...work].reverse() as item, i}
                    <li>
                        <button class="work-item">
                            <img class="work-item__image" srcset="/images/{item.image}_1x.webp, /images/{item.image}_2x.webp 2x" src="/images/{item.image}_1x.webp" alt="{item.name}" />
                            <div class="work-item__label">
                                <div class="small">{item.type}</div>
                                <h3><span>{item.name}</span></h3>
                            </div>
                            <div class="work-item__number"><span>{(i+1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}</span></div>
                        </button>
                    </li>
                {/each}
            </ul>
        </section>
        <section id="section-about">
            <h1><span>About</span></h1>
            <p>I am a detail-oriented, multi talented designer with 15+ years of experience delivering fully-formed products from start to finish.  Focused on building products for everyone, with an emphasis on safety and accessibility.  Believe in asking why, and making sure a problem is truly understood.  Always excited to learn something&nbsp;new.</p>
            <div class="skills">
                <div class="skills__header">
                    <div class="skills__header-left">
                        <span>
                            Skill
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 11.0566L3.90212 4.5H12.0979L8 11.0566Z" stroke="currentColor" />
                            </svg>
                        </span>
                        <span>
                            Level
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.0566 8L4.5 12.0979L4.5 3.90212L11.0566 8Z" stroke="currentColor" />
                            </svg>
                        </span>
                    </div>
                    <div class="skills__header-right">
                        <span>Basic</span>
                        <span>Expert</span>
                    </div>
                </div>
                <div class="skills__container skills--green">
                    {#each skills
                        .filter(item => item.type === 'design')
                        .sort((a, b) => {
                            return (b.level - a.level) || a.skill.localeCompare(b.skill);
                        }) 
                    as item, i}
                        <div class="skills__skill skills__skill--{item.level}">
                            <div class="skills__header-left">
                                <span class="skills__circle"></span>
                                <span>{item.skill}</span>
                            </div>
                            <div class="skills__level"></div>
                            <div class="skills__level"></div>
                            <div class="skills__level"></div>
                            <div class="skills__level"></div>
                            <div class="skills__level"></div>
                        </div>
                    {/each}
                </div>
                <div class="skills__container skills--orange">
                    {#each skills
                        .filter(item => item.type === 'tech')
                        .sort((a, b) => {
                            return (b.level - a.level) || a.skill.localeCompare(b.skill);
                        }) 
                    as item, i}
                        <div class="skills__skill skills__skill--{item.level}">
                            <div class="skills__header-left">
                                <span class="skills__circle"></span>
                                <span>{item.skill}</span>
                            </div>
                            <div class="skills__level"></div>
                            <div class="skills__level"></div>
                            <div class="skills__level"></div>
                            <div class="skills__level"></div>
                            <div class="skills__level"></div>
                        </div>
                    {/each}
                </div>
                <div class="skills__container skills--red">
                    {#each skills
                        .filter(item => item.type === 'app')
                        .sort((a, b) => {
                            return (b.level - a.level) || a.skill.localeCompare(b.skill);
                        }) 
                    as item, i}
                        <div class="skills__skill skills__skill--{item.level}">
                            <div class="skills__header-left">
                                <span class="skills__circle"></span>
                                <span>{item.skill}</span>
                            </div>
                            <div class="skills__level"></div>
                            <div class="skills__level"></div>
                            <div class="skills__level"></div>
                            <div class="skills__level"></div>
                            <div class="skills__level"></div>
                        </div>
                    {/each}
                </div>
                <div class="skills__header">
                    <div class="skills__header-left">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 5V5.5H8H15C15.2761 5.5 15.5 5.72386 15.5 6V8.79289L13.7929 10.5H12.2071L11.3536 9.64645L11 9.29289L10.6464 9.64645L9.79289 10.5H8H7.5V11V11.4384C7.5 12.1267 7.03155 12.7267 6.3638 12.8937L2.3638 13.8937C1.41708 14.1303 0.5 13.4143 0.5 12.4384V3.56155C0.5 2.5857 1.41708 1.86966 2.3638 2.10634L6.3638 3.10634C7.03155 3.27328 7.5 3.87325 7.5 4.56155V5Z" stroke="currentColor" />
                            <path d="M3 6H4V10H3V6Z" fill="currentColor" />
                        </svg>
                        <div class="skills__key">
                            <div class="skills__key-item skills--green"><span class="skills__circle"></span>Design</div>
                            <div class="skills__key-item skills--orange"><span class="skills__circle"></span>Tech</div>
                            <div class="skills__key-item skills--red"><span class="skills__circle"></span>App</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="section-contact">
            <h1><span>Contact</span></h1>
            <p>Send me a message.  <br />Say hi, ask me a question, or hire me.  <br />You can also find me on&nbsp;<a href="#1">Linkedin</a>.</p>
            <div class="flex">
                <a href="mailto:thomas@reedmunoz.com" aria-label="Email Thomas Reed-Munoz" class="button">mailto:thomas@reedmunoz.com</a>
            </div>
        </section>
    </div>
{/if}

<style>
    .page-content {
        display: flex;
        flex-direction: column;
        gap: 60px;
    }

    section {
        display: flex;
        flex-direction: column;
        padding: var(--Padding-Section);
        gap: var(--Padding-Section);
        min-height: calc(100dvh - ((var(--Padding-Section) * 4) + 24px));
        scroll-margin-top: calc((var(--Padding-Section) * 2) + 24px);
    }

    section:last-child {
        min-height: calc(100dvh - ((var(--Padding-Section) * 6) + 62px));
    }

    .work-contain {
        list-style-type: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
        gap: var(--Padding-Min);

        & li {
            display: flex;
            flex: 1 0 0;
        }
    }

    .work-item {
        position: relative;
        display: flex;
        flex: 1 0 0;
        justify-content: center;
        background: var(--Color-Object);
    }

    .work-item__image {
        width: 600px;
    }

    .work-item__label {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: var(--Padding-Large);
        gap: var(--Padding-Small);

        & h3 {
            color: var(--White);
        }

        & .small {
            color: var(--Color-Overlay);
        }
    }

    .work-item__number {
        font-size: 6rem;
        font-weight: 800;
        letter-spacing: -0.06em;
        height: 5rem;
        line-height: 1;
        color: var(--Color-Object);
        -webkit-text-stroke: 1px var(--Color-Overlay);
        position: absolute;
        top: 0;
        left: 0;
        padding: var(--Padding-Large);
        user-select: none;

        & span {
            display: block;
            margin-top: -2px;
        }
    }

    .skills {
        display: flex;
        flex-direction: column;
        gap: var(--Padding-XSmall);
        font-size: 12px;
        font-weight: 800;
        color: var(--White);
        max-width: 800px;
    }

    .skills__header {
        display: flex;
        gap: 1px;
    }

    .skills__header-left {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        background: var(--Color-Object);
        height: 30px;
        width: 200px;

        & span {
            display: flex;
            align-items: center;
            gap: 5px;
        }

        & svg {
            color: var(--Color-Overlay);
        }
    }

    .skills__header-right {
        display: flex;
        align-items: center;
        flex: 1 0 0;
        justify-content: space-between;
        padding: 0 10px;
        background: var(--Color-Object);
        height: 30px;
    }

    .skills__skill {
        display: flex;
        gap: 1px;
    }

    .skills__skill--5 {
        & .skills__level:not(:nth-child(-n+6)) {
            background: none;
        }
    }

    .skills__skill--4 {
        & .skills__level:not(:nth-child(-n+5)) {
            background: none;
        }
    }

    .skills__skill--3 {
        & .skills__level:not(:nth-child(-n+4)) {
            background: none;
        }
    }

    .skills__skill--2 {
        & .skills__level:not(:nth-child(-n+3)) {
            background: none;
        }
    }

    .skills__skill--1 {
        & .skills__level:not(:nth-child(-n+2)) {
            background: none;
        }
    }

    .skills__level {
        height: 30px;
        display: flex;
        flex: 1 0 0;
    }

    .skills__circle {
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 999px;
    }

    .skills__container {
        display: flex;
        flex-direction: column;
        gap: 1px;
    }

    .skills--green {
        & .skills__circle {
            background: var(--Color-Green);
        }

        & .skills__level {
            background: var(--Color-Green);
        }
    }

    .skills--orange {
        & .skills__circle {
            background: var(--Color-Orange);
        }

        & .skills__level {
            background: var(--Color-Orange);
        }
    }

    .skills--red {
        & .skills__circle {
            background: var(--Color-Red);
        }

        & .skills__level {
            background: var(--Color-Red);
        }
    }

    .skills__key {
        display: flex;
        gap: 10px;
    }

    .skills__key-item {
        display: flex;
        gap: 5px;
        align-items: center;
    }

    @media screen and (max-width: 700px) {
        .work-contain {
            grid-template-columns: repeat(auto-fit, minmax(calc(100dvw - (var(--Padding-Section) * 2)), 1fr));
        }

        .work-item__image {
            width: calc(100dvw - (var(--Padding-Section) * 2));
        }
    }

    @media screen and (max-width: 440px) {
        .work-item {
            padding: 20px 0;
        }
    }
</style>