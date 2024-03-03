<script>
    import { onMount } from 'svelte';
    import { slides } from '../../../lib/projects';
    import { fade, fly, scale } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';

    let ready = false;

    onMount(() => ready = true);
</script>

<svelte:head>
	<title>Project: Twitch Reporting</title>
    <meta name="description" content="Twitch report flow redesign.">
</svelte:head>

{#if ready}
    <div class="project-contain" in:fade={{delay: 200, duration: 200}}>
        <div class="project-cover">
            <div class="cover-content reports-cover">
                <div class="report-grid">
                    <div class="report-grid-col step1">
                        <img class="step1a"src="/twitchreports/shape1.svg" alt="shape">
                        <img class="step1b" src="/twitchreports/shape5.svg" alt="shape">
                    </div>
                    <div class="report-grid-col step2">
                        <img class="step2a" src="/twitchreports/shape2.svg" alt="shape">
                        <img class="step2b" src="/twitchreports/shape2.svg" alt="shape">
                        <img class="step2c" src="/twitchreports/shape5.svg" alt="shape">
                    </div>
                    <div class="report-grid-col step3">
                        <img class="step3a" src="/twitchreports/shape3.svg" alt="shape">
                        <img class="step3b" src="/twitchreports/shape3.svg" alt="shape">
                        <img class="step3c" src="/twitchreports/shape5.svg" alt="shape">
                    </div>
                    <div class="report-grid-col step4">
                        <img src="/twitchreports/shape4.svg" alt="shape">
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="currentColor" class="start-scrolling" in:fade={{delay: 7500, duration: 200}}>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1715 24.1717C9.39049 24.9527 9.39049 26.219 10.1715 27.0001L23.5858 40.4143L37 27.0001C37.781 26.219 37.781 24.9527 37 24.1717C36.2189 23.3906 34.9526 23.3906 34.1715 24.1717L25.5858 32.7575L25.5858 9.58588C25.5858 8.48131 24.6903 7.58588 23.5858 7.58588C22.4812 7.58588 21.5858 8.48131 21.5858 9.58588L21.5858 32.7575L13 24.1717C12.2189 23.3906 10.9526 23.3906 10.1715 24.1717Z" />
            </svg>
        </div>
        <div class="project-content">
            <section>
                <h1>The Problems.</h1>
                <p>The previous iteration of the Twitch report flow was overwhelming.  A large number of users who started the report process did not finish it.  The flow exposed all available options up front, and there was little consideration for where the report originated.  The flow for reporting a live stream and the flow for reporting a chat message started the same way.  Along with incomplete reports, this also contributed to many misclassified reports.  It placed too much of the burden on the users, and they were not guided to accurate responses.  This added more roadblocks for specialists trying to resolve reports, and degraded user trust in the reporting system.</p>
            </section>
            <section>
                <h1>The Objectives.</h1>
                <div class="three-col">
                    <div>
                        <h3>For Users</h3>
                        <p>Higher completion rate for users who start the report process.</p>
                    </div>
                    <div>
                        <h3>For Specialists</h3>
                        <p>More accuracy for reports generated for specialist review.</p>
                    </div>
                    <div>
                        <h3>For Product/Devs</h3>
                        <p>Easy expandability for report types and reasons added in the future.</p>
                    </div>
                </div>
            </section>
            <section>
                <h1>The Solutions.</h1>
                <p>Breaking the report flow into several progressive steps made for a less intimidating experience for users.  First asking what is being reported, then asking why, and finally asking for more context.  Starting the flow from an advanced step when applicable also reduces the number of decisions required.  Entering the report flow from a live stream would start with 'Live Stream' already selected as the first step.</p>
                <div class="project-image no-border">
                    <img srcset="/twitchreports/image1.jpg, /twitchreports/image1@2x.jpg 2x" src="/twitchreports/image1.jpg" alt="Report Window"/>
                </div>
                <p>For greater report accuracy, we would group relevant reasons with their content types.  Presenting smaller and more focused lists of reasons to users to choose from reduces cognitive load.  It then becomes easier for users to find and select the most accurate reason.</p>
                <div class="project-image no-border">
                    <img srcset="/twitchreports/image2.jpg, /twitchreports/image2@2x.jpg 2x" src="/twitchreports/image2.jpg" alt="Report Window"/>
                </div>
            </section>
            <section class="iframe-contain">
                <h1>The Prototype.</h1>
                <iframe title="Twitch Reporting Prototype" width="100%" height="100%" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F1t2iYrnDkG56f4mRoxHMJL%2FTwitch-Reporting%3Fpage-id%3D5%253A224%26type%3Ddesign%26node-id%3D13-2175%26viewport%3D203%252C215%252C0.49%26t%3Dbi1FwgeqSb1ImIDe-1%26scaling%3Dscale-down%26starting-point-node-id%3D13%253A2175%26mode%3Ddesign" allowfullscreen></iframe>
            </section>
            <section>
                <h1>The Results.</h1>
                <p>The changes we made to the report flow were overwhelmingly successful.  We saw a huge increase in completion rate, and our specialists reported more accurate entries.  The framework we laid also allowed for rapid iteration, and provided a blueprint for adding new report types and reasons.</p>
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
        overflow: hidden;

        & .cover-content {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            align-content: center;
            flex: 1 0 0;

            padding: 1 var(--Padding-Inner);
            gap: var(--Padding-Large);

            & .report-grid {
                display: grid;
                width: 100%;
                max-width: 900px;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                gap: 1vw;
                align-items: end;

                padding: 0 var(--Padding-Page);

                & .report-grid-col {
                    position: relative;
                    display: flex;

                    & img {
                        width: 100%;
                    }
                }
            }
        }
    }

    .step1b {
        position: absolute;
        top: 30%;
        opacity: 0;

        animation-name: animate-step1b-in, animate-step1b, animate-select-in;
        animation-duration: 200ms, 1500ms, 500ms;
        animation-delay: 1000ms, 2000ms, 1000ms;
        animation-fill-mode: forwards, forwards, none;
        animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
    }

    @keyframes -global-animate-step1b-in {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    @keyframes -global-animate-step1b {
        0% { transform: translateY(0); }
        30% {  transform: translateY(125%); }
        70% {  transform: translateY(125%); }
        100% { transform: translateY(0); }
    }

    .step2 {
        opacity: 0;

        animation-name: animate-step2-in, animate-step2, animate-step-in;
        animation-duration: 200ms, 1500ms, 500ms;
        animation-delay: 1000ms, 2000ms, 1000ms;
        animation-fill-mode: forwards, forwards, none;
        animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
    }

    @keyframes -global-animate-step2-in {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    @keyframes -global-animate-step2 {
        0% { transform: translateY(0); }
        30% {  transform: translateY(105%); }
        70% {  transform: translateY(105%); }
        100% { transform: translateY(0); }
    }

    .step2a {
        transform: translateY(-105%);
        opacity: 0;

        animation-name: animate-step2a;
        animation-duration: 1500ms;
        animation-fill-mode: forwards;
        animation-delay: 2000ms;
        animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
    }

    @keyframes -global-animate-step2a {
        0% { opacity: 0; }
        30% {  opacity: 1; }
        70% {  opacity: 1; }
        100% { opacity: 0; }
    }

    .step2b {
        position: absolute;
        bottom: 0;
        left: 0;

        animation-name: animate-step2b;
        animation-duration: 1500ms;
        animation-fill-mode: forwards;
        animation-delay: 2000ms;
        animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
    }

    @keyframes -global-animate-step2b {
        0% { opacity: 1; }
        30% { opacity: 0; }
        70% { opacity: 0; }
        100% { opacity: 1; }
    }

    .step2c {
        position: absolute;
        top: 46.5%;
        opacity: 0;

        animation-name: animate-step2c-in, animate-step2c, animate-select-in;
        animation-duration: 200ms, 1500ms, 500ms;
        animation-delay: 4000ms, 5000ms, 4000ms;
        animation-fill-mode: forwards, forwards, none;
        animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
    }

    @keyframes -global-animate-step2c-in {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    @keyframes -global-animate-step2c {
        0% { transform: translateY(0); }
        30% {  transform: translateY(125%); }
        100% {  transform: translateY(125%); }
    }

    .step3 {
        opacity: 0;

        animation-name: animate-step3-in, animate-step3, animate-step-in;
        animation-duration: 200ms, 1500ms, 500ms;
        animation-delay: 4000ms, 5000ms, 4000ms;
        animation-fill-mode: forwards, forwards, none;
        animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
    }

    @keyframes -global-animate-step3-in {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    @keyframes -global-animate-step3 {
        0% { transform: translateY(0); }
        30% {  transform: translateY(105%); }
        100% {  transform: translateY(105%); }
    }

    .step3a {
        transform: translateY(-105%);
        opacity: 0;

        animation-name: animate-step3a;
        animation-duration: 1500ms;
        animation-fill-mode: forwards;
        animation-delay: 5000ms;
        animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
    }

    @keyframes -global-animate-step3a {
        0% { opacity: 0; }
        30% {  opacity: 1; }
        100% {  opacity: 1; }
    }

    .step3b {
        position: absolute;
        bottom: 0;
        left: 0;

        animation-name: animate-step3b;
        animation-duration: 1500ms;
        animation-fill-mode: forwards;
        animation-delay: 5000ms;
        animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
    }

    @keyframes -global-animate-step3b {
        0% { opacity: 1; }
        30% {  opacity: 0; }
        100% {  opacity: 0; }
    }

    .step3c {
        position: absolute;
        top: -38.5%;
        opacity: 0;

        animation-name: animate-step2c-in, animate-select-in;
        animation-duration: 200ms, 500ms;
        animation-delay: 6000ms, 6000ms;
        animation-fill-mode: forwards, none;
        animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
    }

    @keyframes -global-animate-step2c-in {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    .step4 {
        opacity: 0;

        animation-name: animate-step4-in, animate-step-in;
        animation-duration: 200ms, 500ms;
        animation-delay: 6000ms, 6000ms;
        animation-fill-mode: forwards, none;
        animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
    }

    @keyframes -global-animate-step4-in {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    @keyframes -global-animate-select-in {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }

    @keyframes -global-animate-step-in {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }

    @keyframes -global-animate-scroll {
        0% { transform: translate(0,-30px); opacity: 0; }
        50% {  transform: translate(0,0); opacity: 1; }
        100% { transform: translate(0,0); opacity: 0; }
    }

    .three-col {
        max-width: 800px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        border-radius: 12px;
        overflow: hidden;

        gap: 1px;

        & > div {
            background: var(--Background-Base);
            padding: var(--Padding-Large);
        }

        & h3 {
            margin-bottom: var(--Padding-Small);
        }
    }

    .project-image {
        display: flex;
        max-width: 800px;
        border: 1px solid var(--Border);
        border-radius: 12px;
        overflow: hidden;

        transition: border-color 200ms;

        &.no-border {
            border: none;
        }

        & img {
            width: 100%;
            height: auto;
        }
    }
</style>