<script>
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

    let ready = false;

    onMount(() => ready = true);
</script>

<svelte:head>
	<title>Project: BabyV</title>
    <meta name="description" content="A custom case for a unique keyboard.">
</svelte:head>

{#if ready}
    <div class="project-contain" in:fade={{delay: 200, duration: 200}}>
        <div class="project-cover">
            <div class="cover-content">
                <div class="layers-contain">
                    <div class="huge">V</div>
                    <img alt="layer 10" src="/babyv/layer10.png" in:fly={{ duration: 1000, delay: 2800, y: '100vh', opacity: 1, easing: cubicOut }}/>
                    <img alt="layer 1" src="/babyv/layer01.png" in:fly={{ duration: 1000, delay: 1200, y: '100vh', opacity: 1, easing: cubicOut }}/>
                    <img alt="layer 2" src="/babyv/layer02.png" in:fly={{ duration: 1000, delay: 800, y: '100vh', opacity: 1, easing: cubicOut }}/>
                    <img alt="layer 3" src="/babyv/layer03.png" in:fly={{ duration: 1000, delay: 600, y: '100vh', opacity: 1, easing: cubicOut }}/>
                    <img alt="layer 4" src="/babyv/layer04.png" in:fly={{ duration: 1000, delay: 400, y: '100vh', opacity: 1, easing: cubicOut }}/>
                    <img alt="layer 5" src="/babyv/layer05.png" in:fly={{ duration: 1000, delay: 200, y: 0, opacity: 0, easing: cubicOut }}/>
                    <img alt="layer 6" src="/babyv/layer06.png" in:fly={{ duration: 1000, delay: 1600, y: '-100vh', opacity: 1, easing: cubicOut }}/>
                    <img alt="layer 7" src="/babyv/layer07.png" in:fly={{ duration: 1000, delay: 1800, y: '-100vh', opacity: 1, easing: cubicOut }}/>
                    <img alt="layer 8" src="/babyv/layer08.png" in:fly={{ duration: 1000, delay: 2000, y: '-100vh', opacity: 1, easing: cubicOut }}/>
                    <img alt="layer 9" src="/babyv/layer09.png" in:fly={{ duration: 1000, delay: 2800, y: '-100vh', opacity: 1, easing: cubicOut }}/>
                    <img alt="layer 11" src="/babyv/layer11.png" in:fade={{ duration: 0, delay: 3200 }}/>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="currentColor" class="start-scrolling" in:fade={{delay: 4600, duration: 200}}>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1715 24.1717C9.39049 24.9527 9.39049 26.219 10.1715 27.0001L23.5858 40.4143L37 27.0001C37.781 26.219 37.781 24.9527 37 24.1717C36.2189 23.3906 34.9526 23.3906 34.1715 24.1717L25.5858 32.7575L25.5858 9.58588C25.5858 8.48131 24.6903 7.58588 23.5858 7.58588C22.4812 7.58588 21.5858 8.48131 21.5858 9.58588L21.5858 32.7575L13 24.1717C12.2189 23.3906 10.9526 23.3906 10.1715 24.1717Z" />
            </svg>
        </div>
        <div class="project-content">
            <section>
                <h1>What and Why?</h1>
                <p>BabyV was a limited run, semi-ergo, and ortho-linear 40% keyboard kit.  This means that it's small and the keys aren't staggered like a normal keyboard.  I loved the layout, but I didn't love the case that came with the build.  I thought this was a good opportunity to flex some physical-product design muscles.</p>
                <p>I started with a list of requirements and constraints.</p>
                <div class="twocol-contain">
                    <div class="twocol-content">
                        <div class="sub-header">Requirements</div>
                        <ol>
                            <li>High quality materials</li>
                            <li>Low profile design</li>
                            <li>Sturdy and durable</li>
                            <li>Pretty</li>
                        </ol>
                    </div>
                    <div class="twocol-content">
                        <div class="sub-header">Constraints</div>
                        <ol>
                            <li>Layers will be laser cut</li>
                            <li>Must use standardized hardware</li>
                            <li>Designed around PCB</li>
                        </ol>
                    </div>
                </div>
            </section>
            <section>
                <h1>The Design Process.</h1>
                <img class="project-image" src="/babyv/image01.png" alt="PCB Schematic" />
                <p>Before starting on the case, I needed to get the PCB into Fusion.  I used a schematic of the default switch plate to figure out the angles and spacing of the sockets.  For the rest, a pair of calipers and a ruler.  The locations for the sockets and the USB port had to be precise.  If they weren't, the whole thing wouldn't fit together.</p>
            </section>
            <section>
                <img class="project-image" src="/babyv/image02.png" alt="Top Plate Schematic" />
                <p>To keep the case low profile, the top plate (where you seat the switches) would serve as the top layer of the case as well.  I used the switch positions and angles from the PCB to align the cutouts.</p>
            </section>
            <section>
                <img class="project-image" src="/babyv/image03.png" alt="Middle Layers" />
                <p>The middle layers needed to provide enough spacing for PCB between the top and bottom plates.  Made out of the colored acrylic and staggered, they would also add visual interest.  The service I used to cut the acrylic provided several thicknesses to choose from.  I picked one that would allow for the intended design while also maintaining structural rigidity.</p>
            </section>
            <section>
                <img class="project-image" src="/babyv/image04.png" alt="Bottom Plate Design" />
                <p>The bottom plate serves as a canvas for a bit of fun design as well as serving as a final layer of protection.  I designed a vector graphic 'V' to be cut into the metal plate, contrasting with the colored acrylic layer underneath.  A dedicated space for some small rubber feet was also left on the metal.</p>
            </section>
            <section>
                <img class="project-image" src="/babyv/image05.png" alt="Fasteners Cross-Section" />
                <p>To hold the whole thing together, I used a set of threaded spacers of a length to fit inside the middle layers.  A pair of stainless steel M3 screws for each would then hold the stainless steel plates from the top and the bottom.</p>
            </section>
            <section>
                <h1>The Final Build.</h1>
                <p>After completing the design, I exported the plates and acrylic layers as the proper formats and sent them off for cutting.  Fasteners were ordered, and when everything finally arrived I could start assembly.  The finished product:</p>
                <img class="project-image no-border" src="/babyv/image06.jpeg" alt="Finished Top View" />
                <img class="project-image no-border" src="/babyv/image07.jpeg" alt="Finished Bottom View" />
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
        margin-top: var(--Padding-Nav);
        overflow: hidden;

        & .cover-content {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            align-content: center;
            flex: 1 0 0;
            padding: 1 var(--Padding-Inner);
        }

        & .huge {
            display: flex;
            width: 100%;
            height: 100%;
            position: absolute;
            justify-content: center;
            align-items: center;
            font-weight: 800;
            font-size: 200vh;

            color: var(--Border);

            transition: color 200ms;
        }
    }

    .layers-contain {
        position: relative;
        width: 100%;
        max-width: 1000px;
        height: 100%;

        & img {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: scale-down;
        }
    }

    @keyframes -global-animate-scroll {
        0% { transform: translate(0,-30px); opacity: 0; }
        50% {  transform: translate(0,0); opacity: 1; }
        100% { transform: translate(0,0); opacity: 0; }
    }

    .project-image {
        width: 100%;
        max-width: 800px;
        border: 1px solid var(--Border);
        border-radius: 12px;

        transition: border-color 200ms;

        &.no-border {
            border: none;
        }
    }

    .twocol-contain {
        display: flex;
        max-width: 800px;
        width: 100%;
        align-items: center;
        gap: 1px;
        align-self: stretch;
        border-radius: 12px;
        flex-wrap: wrap;
        overflow: hidden;

        & .twocol-content {
            min-width: 220px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            align-self: stretch;
            flex: 1 0 0;

            padding: var(--Padding-Large);
            gap: var(--Padding-Medium);

            background: var(--Background-Base);

            transition: background-color 200ms;
        }

        & ol {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            list-style-type: decimal;
            list-style-position: inside;
            
            gap: var(--Padding-Small);
        }
    }
</style>