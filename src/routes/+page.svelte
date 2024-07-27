<script>
    import { onMount } from 'svelte';
    import { work } from '../lib/projects.js';

    let ready = false;

    onMount(() => ready = true);
</script>

<svelte:head>
	<title>Thomas Reed-Munoz. Product and Visual Design.</title>
    <meta name="description" content="Personal portfolio for Thomas Reed-Munoz.">
</svelte:head>

{#if ready}
    <div class="page-content">
        <section>
            <h1><span>Work</span></h1>
            <ul class="work-contain">
                {#each [...work].reverse() as item, i}
                    <li>
                        <button class="work-item">
                            <img class="work-item__image" srcset="/images/{item.image}.jpg, /images/{item.image}@2x.jpg 2x" src="/images/{item.image}.jpg" alt="{item.name}" />
                            <div class="work-item__label">
                                <div class="small">{item.type}</div>
                                <h3><span>{item.name}</span></h3>
                            </div>
                        </button>
                    </li>
                {/each}
            </ul>
        </section>
        <section>
            <h1><span>About</span></h1>
            <p>I am a detail-oriented, multi talented designer with 15+ years of experience delivering fully-formed products from start to finish.  Focused on building products for everyone, with an emphasis on safety and accessibility.  Believe in asking why, and making sure a problem is truly understood.  Always excited to learn something new.</p>
        </section>
        <section>
            <h1><span>Contact</span></h1>
            <p>Send me a message.  Say hi, ask me a question, or hire me. <br /> You can also find me on <a href="#1">Linkedin</a>.</p>
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
        min-height: calc(100dvh - 181px - 60px);
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
        height: 600px;
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

    @media screen and (max-width: 700px) {
        .work-contain {
            grid-template-columns: repeat(auto-fit, minmax(calc(100dvw - (var(--Padding-Section) * 2)), 1fr));
        }

        .work-item {
            height: calc(100dvw - (var(--Padding-Section) * 2));
        }

        .work-item__image {
            width: calc(100dvw - (var(--Padding-Section) * 2));
        }
    }
</style>