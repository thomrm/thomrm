<script>
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';

    let ready = false;

    onMount(() => ready = true);
</script>

{#if ready}
    <div class="page-skills">
        <div class="skill-card" transition:fly={{ delay: 200, duration: 1000, y: 150, opacity: 0, easing: expoOut }}>
            <div class="skill-card__header">
                <h2>Expert</h2>
                <p>Confident & Knowledgable</p>
            </div>
            <div class="skill-card__divider"></div>
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
                <p>Familiar & Capable</p>
            </div>
            <div class="skill-card__divider"></div>
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
                <p>Willing To Learn</p>
            </div>
            <div class="skill-card__divider"></div>
            <ul class="skill-card__list">
                <li>Anything</li>
            </ul>
        </div>
    </div>
{/if}

<style>
    .page-skills {
        display: flex;
        padding: 0px 50px;
        align-items: flex-start;
        gap: 20px;
        flex: 1 0 0;
        align-self: stretch;
    }

    .skill-card {
        display: flex;
        padding: 30px;
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
        flex: 1 0 0;
        align-self: stretch;
        border-radius: 12px;
        border-bottom: 3px solid var(--Primary-Color);
        background: var(--Background-Alt);
        transition: background-color 200ms, border-color 200ms;
    }
    
    .skill-card__header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
        align-self: stretch;

        & h2 {
            color: var(--Header-Text);
            font-family: "Norms Bold";
            line-height: 60px;
            font-size: 60px;
            letter-spacing: -0.04em;
            text-transform: uppercase;
            transition: color 200ms;
        }

        & p {
            color: var(--Sub-Text, #666);
            font-size: 24px;
            letter-spacing: -0.02em;
            text-transform: capitalize;
            transition: color 200ms;
        }
    }

    .skill-card__divider {
        width: 100%;
        height: 2px;
        background-color: var(--Divider);
        border-radius: 999px;
        transition: background-color 200ms;
    }

    .skill-card__list {
        display: flex;
        align-items: flex-start;
        align-content: flex-start;
        gap: 10px;
        align-self: stretch;
        flex-wrap: wrap;

        & li {
            display: flex;
            height: 44px;
            padding: 0 20px;
            align-items: center;
            border-radius: 999px;
            background: var(--Primary-Color);
            color: var(--Color-Overlay);
            transition: background-color 200ms, color 200ms;
        }
    }
</style>