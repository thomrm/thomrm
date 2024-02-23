<script>
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';

    let ready = false;

    onMount(() => ready = true);
</script>

<svelte:head>
	<title>Thomas Reed-Munoz's Design Skills</title>
    <meta name="description" content="A list of relevant skills and attributes.">
</svelte:head>

{#if ready}
    <div class="page-skills">
        <div class="skill-card" transition:fly={{ delay: 200, duration: 1000, y: 150, opacity: 0, easing: expoOut }}>
            <div class="skill-card__header">
                <h2>Expert</h2>
                <h3>Confident &amp; Knowledgable</h3>
            </div>
            <ul class="skill-card__list">
                <li>Figma</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>Attention to Detail</li>
                <li>Typography</li>
                <li>Iconography</li>
                <li>E2E Process</li>
            </ul>
        </div>
        <div class="skill-card" transition:fly={{ delay: 400, duration: 1000, y: 150, opacity: 0, easing: expoOut }}>
            <div class="skill-card__header">
                <h2>Advanced</h2>
                <h3>Familiar &amp; Capable</h3>
            </div>
            <ul class="skill-card__list">
                <li>Git</li>
                <li>React</li>
                <li>Svelte</li>
                <li>Accessibility</li>
                <li>Fusion 360</li>
                <li>Blender</li>
                <li>Animation</li>
                <li>Mobile</li>
            </ul>
        </div>
        <div class="skill-card" transition:fly={{ delay: 600, duration: 1000, y: 150, opacity: 0, easing: expoOut }}>
            <div class="skill-card__header">
                <h2>Beginner</h2>
                <h3>Willing To Learn</h3>
            </div>
            <ul class="skill-card__list">
                <li>Anything</li>
            </ul>
        </div>
    </div>
{/if}

<style>
    .page-skills {
        display: flex;
        max-width: 1300px;
        align-items: flex-start;
        flex: 1 0 0;
        align-self: stretch;
        flex-wrap: wrap;

        margin-top: var(--Padding-Nav);
        padding: 0px var(--Padding-Page);
        gap: var(--Padding-Medium);
    }

    .skill-card {
        display: flex;
        min-width: 240px;
        flex-direction: column;
        align-items: flex-start;
        flex: 1 0 0;
        border-radius: 1.2rem;

        padding: var(--Padding-XLarge);
        gap: var(--Padding-Large);
        background: var(--Background-Alt);

        transition: background-color 200ms;

        & hr {
            width: 100%;
            margin: 0;
            border: 0;
            border-top: 2px solid;
            border-radius: 999px;
            border-color: var(--Divider);

            transition: border-color 200ms;
        }
    }
    
    .skill-card__header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
    }

    .skill-card__list {
        display: flex;
        align-items: flex-start;
        align-content: flex-start;
        align-self: stretch;
        flex-wrap: wrap;

        gap: var(--Padding-Small);

        & li {
            display: flex;
            height: 44px;
            align-items: center;
            border-radius: 999px;
            font-size: 1.6rem;

            padding: 0 var(--Padding-Medium);

            background: var(--Primary-Color);
            color: var(--Color-Overlay);

            transition: background-color 200ms, color 200ms;
        }
    }
</style>