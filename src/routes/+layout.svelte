<script>
    import '../lib/base.css';
    import '../lib/colors.css';
    import '../lib/fonts.css';
    import { page } from '$app/stores';
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
 
    inject({ mode: dev ? 'development' : 'production' });

    let dark;
    let nav = false;
    let ready = false;
    let y = 0;
    let w = 0;

    function toggleNav() {
        nav = !nav;
    }

    onMount(() => {
        dark = localStorage.theme === 'dark' ? true : false;
        ready = true;
    });

    function switchTheme() {
        localStorage.setItem('theme', !dark ? 'dark' : 'light');
    }
</script>

<svelte:window bind:scrollY="{y}" bind:innerWidth="{w}"/>

<svelte:head>
    {#if dark == false}
        <style>
            body { background-color: #EEEEEE; }
        </style>
    {/if}
    {#if dark == true}
        <style>
            body { background-color: #111111; }
        </style>
    {/if}
    {#if nav}
        <style>
            body { overflow: hidden; }
        </style>
    {/if}
</svelte:head>	

{#if ready}
    <div class="app-wrapper" class:light={!dark} class:dark={dark}>
        <div class="page-header" in:fade={{delay: 200, duration: 200}} style="height: {w <= 479 ? 120 : w <= 768 ? 180 : y > 30 ? 120 : y <= 0 ? 180 : 180 - (y * 2)}px;">
            <a href="/" aria-label="Navigate Home" class="page-mark" title="Home">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 128 128" fill="none">
                    <rect width="128" height="128" rx="64" fill="black"/>
                    <path d="M36 48H80C86.6274 48 92 53.3726 92 60C92 64.301 89.7373 68.0735 86.3373 70.192L92 80H89.6906C85.4034 80 81.4419 77.7128 79.2983 74L78.1436 72H72V80C67.5817 80 64 76.4183 64 72V64H80C82.2091 64 84 62.2091 84 60C84 57.7909 82.2091 56 80 56H56V80C51.5817 80 48 76.4183 48 72V56H44C39.5817 56 36 52.4183 36 48Z" fill="white"/>
                </svg>
            </a>
            <nav class="page-nav">
                <a href="/" aria-current={$page.url.pathname === '/'} title="About">
                    <div class="icon-contain">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3344 13.7259C16.3567 12.8104 17 11.4803 17 10C17 7.23858 14.7614 5 12 5C9.23859 5 7.00001 7.23858 7.00001 10C7.00001 11.4803 7.64331 12.8104 8.6656 13.7259C6.90649 14.5336 5.49078 15.9606 4.69768 17.7277C4.41777 18.3514 4.91798 19 5.60159 19C6.04498 19 6.43226 18.716 6.63061 18.3194C7.61506 16.3513 9.64972 15 12 15C14.3503 15 16.385 16.3513 17.3694 18.3194C17.5678 18.716 17.955 19 18.3984 19C19.082 19 19.5822 18.3514 19.3023 17.7277C18.5092 15.9606 17.0935 14.5336 15.3344 13.7259ZM15 10C15 11.6569 13.6569 13 12 13C10.3432 13 9.00001 11.6569 9.00001 10C9.00001 8.34315 10.3432 7 12 7C13.6569 7 15 8.34315 15 10Z" />
                        </svg>
                    </div>
                    <span>About</span>
                </a>
                <a href="/skills" aria-current={$page.url.pathname === '/skills'} title="Skills">
                    <div class="icon-contain">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="CurrentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.7071 5.70711C21.0976 5.31658 21.0976 4.68342 20.7071 4.29289C20.3166 3.90237 19.6834 3.90237 19.2929 4.29289L12 11.5858L9.70711 9.29289C9.31658 8.90237 8.68342 8.90237 8.29289 9.29289C7.90237 9.68342 7.90237 10.3166 8.29289 10.7071L11.2929 13.7071C11.6834 14.0976 12.3166 14.0976 12.7071 13.7071L20.7071 5.70711Z" />
                            <path d="M19 16L19 8.82843L17 10.8284V16C17 16.5523 16.5523 17 16 17H8C7.44772 17 7 16.5523 7 16L7 8C7 7.44772 7.44772 7 8 7H15.1716L17.0006 5.17093C16.6877 5.06024 16.3509 5 16 5L8 5C6.34315 5 5 6.34315 5 8L5 16C5 17.6569 6.34315 19 8 19H16C17.6569 19 19 17.6569 19 16Z" />
                        </svg>
                    </div>
                    <span>Skills</span>
                </a>
                <a href="/projects" aria-current={$page.url.pathname === '/projects'} title="Projects">
                    <div class="icon-contain">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 7.24264V10L15.7574 10L16 10.2426V12L13 12C11.8954 12 11 11.1046 11 10L11 7L12.7574 7L13 7.24264Z" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19 17L19 9L14 4L8 4C6.34315 4 5 5.34315 5 7L5 17C5 18.6569 6.34315 20 8 20H16C17.6569 20 19 18.6569 19 17ZM8 6C7.44771 6 7 6.44772 7 7V17C7 17.5523 7.44772 18 8 18L16 18C16.5523 18 17 17.5523 17 17L17 9.82843L13.1716 6L8 6Z" />
                        </svg>
                    </div>
                    <span>Projects</span>
                </a>
                <a href="/contact" aria-current={$page.url.pathname === '/contact'} title="Contact">
                    <div class="icon-contain">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="CurrentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6984 13.2014L6 9.17422V8H7.70326L12 11.6829L16.2967 8L18 8V9.17422L13.3016 13.2014C12.5526 13.8434 11.4474 13.8434 10.6984 13.2014Z" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 8C3 6.34315 4.34315 5 6 5L18 5C19.6569 5 21 6.34315 21 8V16C21 17.6569 19.6569 19 18 19H6C4.34315 19 3 17.6569 3 16L3 8ZM6 7H18C18.5523 7 19 7.44772 19 8V16C19 16.5523 18.5523 17 18 17H6C5.44772 17 5 16.5523 5 16L5 8C5 7.44772 5.44772 7 6 7Z" />
                        </svg>
                    </div>
                    <span>Contact</span>
                </a>
                <div class="page-header-background" style="opacity: {y > 60 ? 1 : y > 30 ? 0 + (((y - 30) * (100 / 30)) / 100) : 0};"></div>
            </nav>

            <button class="page-nav--menu" class:open={nav} aria-label="Navigation Menu" on:click={toggleNav}>
                {#if !nav}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" in:fade={{delay: 200, duration: 200}} out:fade={{duration: 200}}>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6C3.44772 6 3 6.44772 3 7C3 7.55229 3.44772 8 4 8L20 8C20.5523 8 21 7.55229 21 7C21 6.44772 20.5523 6 20 6L4 6ZM3 12C3 11.4477 3.44771 11 4 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L4 13C3.44771 13 3 12.5523 3 12ZM3 17C3 16.4477 3.44772 16 4 16L20 16C20.5523 16 21 16.4477 21 17C21 17.5523 20.5523 18 20 18L4 18C3.44772 18 3 17.5523 3 17Z" />
                    </svg>
                {/if}
                {#if nav}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" in:fade={{delay: 200, duration: 200}} out:fade={{duration: 200}}>
                        <path d="M7.05025 5.63604C6.65973 5.24551 6.02656 5.24551 5.63604 5.63604C5.24552 6.02656 5.24552 6.65973 5.63604 7.05025L10.5858 12L5.63604 16.9497C5.24552 17.3403 5.24552 17.9734 5.63604 18.364C6.02656 18.7545 6.65973 18.7545 7.05025 18.364L12 13.4142L16.9497 18.364C17.3403 18.7545 17.9734 18.7545 18.364 18.364C18.7545 17.9734 18.7545 17.3403 18.364 16.9497L13.4142 12L18.364 7.05025C18.7545 6.65973 18.7545 6.02656 18.364 5.63604C17.9734 5.24552 17.3403 5.24552 16.9497 5.63604L12 10.5858L7.05025 5.63604Z" />
                    </svg>
                {/if}
            </button>

            {#if nav}
                <nav class="page-nav--vertical" transition:fade={{ duration: 100 }}>
                    <a href="/" aria-current={$page.url.pathname === '/'} on:click={toggleNav} title="About">About</a>
                    <a href="/skills" aria-current={$page.url.pathname === '/skills'} on:click={toggleNav} title="Skills">Skills</a>
                    <a href="/projects" aria-current={$page.url.pathname === '/projects'} on:click={toggleNav} title="Projects">Projects</a>
                    <a href="/contact" aria-current={$page.url.pathname === '/contact'} on:click={toggleNav} title="Contact">Contact</a>
                </nav>
            {/if}
        </div>
        
        <div class="page-content">
            <slot />
        </div>
        
        <footer class="page-footer" in:fade={{delay: 200, duration: 200}}>
            <input type="checkbox" id="theme-switch" bind:checked={dark} on:click={switchTheme}/>
            <label for="theme-switch" class="switch">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <mask id="path-1-inside-1_51_3153" fill="white">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.85867 4.64209C9.30785 4.75222 9.74918 4.92703 10.1699 5.16991C12.5613 6.55063 13.3807 9.60858 12 12C10.6193 14.3915 7.56133 15.2109 5.16987 13.8302C4.74918 13.5873 4.37713 13.2925 4.05716 12.9586C4.35008 15.3704 5.73393 17.6199 8 18.9282C11.8263 21.1374 16.7191 19.8264 18.9282 16C21.1373 12.1737 19.8263 7.28098 16 5.07184C13.7339 3.76352 11.0938 3.68984 8.85867 4.64209Z"/>
                    </mask>
                    <path d="M8.85867 4.64209L8.38238 6.58455L2.55199 5.15495L8.07479 2.8021L8.85867 4.64209ZM4.05716 12.9586L2.07174 13.1997L1.34797 7.24038L5.50123 11.5748L4.05716 12.9586ZM9.16987 6.90197C8.9146 6.75459 8.64982 6.65012 8.38238 6.58455L9.33495 2.69962C9.96589 2.85433 10.5838 3.09947 11.1699 3.43786L9.16987 6.90197ZM10.2679 11C11.0964 9.56516 10.6047 7.73039 9.16987 6.90197L11.1699 3.43786C14.5179 5.37086 15.665 9.65199 13.732 13L10.2679 11ZM6.16987 12.0981C7.60475 12.9265 9.43952 12.4349 10.2679 11L13.732 13C11.7991 16.3481 7.51792 17.4952 4.16987 15.5622L6.16987 12.0981ZM5.50123 11.5748C5.69174 11.7737 5.9146 11.9507 6.16987 12.0981L4.16987 15.5622C3.58375 15.2238 3.06252 14.8113 2.61308 14.3423L5.50123 11.5748ZM6.04257 12.7174C6.26294 14.5319 7.30156 16.2156 9 17.1962L7 20.6603C4.1663 19.0243 2.43722 16.2089 2.07174 13.1997L6.04257 12.7174ZM9 17.1962C11.8698 18.853 15.5393 17.8698 17.1961 15L20.6603 17C17.8988 21.783 11.7829 23.4217 7 20.6603L9 17.1962ZM17.1961 15C18.853 12.1303 17.8698 8.46074 15 6.80389L17 3.33979C21.7829 6.10121 23.4217 12.2171 20.6603 17L17.1961 15ZM15 6.80389C13.3016 5.8233 11.3241 5.76568 9.64255 6.48207L8.07479 2.8021C10.8636 1.61401 14.1663 1.70375 17 3.33979L15 6.80389Z" mask="url(#path-1-inside-1_51_3153)"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5ZM6.34315 7.75736C5.95262 7.36684 5.95262 6.73367 6.34315 6.34315C6.73367 5.95262 7.36683 5.95262 7.75736 6.34315C8.14788 6.73367 8.14788 7.36684 7.75736 7.75736C7.36683 8.14788 6.73367 8.14788 6.34315 7.75736ZM16.2426 7.75736C16.6332 8.14788 17.2663 8.14788 17.6569 7.75736C18.0474 7.36683 18.0474 6.73367 17.6569 6.34315C17.2663 5.95262 16.6332 5.95262 16.2426 6.34315C15.8521 6.73367 15.8521 7.36684 16.2426 7.75736ZM12.0623 17C14.8238 17 17.0623 14.7614 17.0623 12C17.0623 9.23858 14.8238 7 12.0623 7C9.30092 7 7.06235 9.23858 7.06235 12C7.06235 14.7614 9.30092 17 12.0623 17ZM7.75736 17.6569C7.36684 18.0474 6.73367 18.0474 6.34315 17.6569C5.95262 17.2663 5.95262 16.6332 6.34315 16.2426C6.73367 15.8521 7.36684 15.8521 7.75736 16.2426C8.14788 16.6332 8.14788 17.2663 7.75736 17.6569ZM16.2426 16.2426C15.8521 16.6332 15.8521 17.2663 16.2426 17.6569C16.6332 18.0474 17.2663 18.0474 17.6569 17.6569C18.0474 17.2663 18.0474 16.6332 17.6569 16.2426C17.2663 15.8521 16.6332 15.8521 16.2426 16.2426ZM18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12ZM5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11C5.55228 11 6 11.4477 6 12C6 12.5523 5.55228 13 5 13ZM12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18ZM12.0623 15C13.7192 15 15.0623 13.6569 15.0623 12C15.0623 10.3431 13.7192 9 12.0623 9C10.4055 9 9.06234 10.3431 9.06234 12C9.06234 13.6569 10.4055 15 12.0623 15Z" />
                </svg>
            </label>
            <div class="copy">&copy; Thomas Reed-Mu&ntilde;oz 2024</div>
            <div class="made-by">
                <span>Designed and built by me with</span>
                <a href="http://figma.com" title="Figma">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" viewBox="0 0 11 16" fill="currentColor">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.96569 5.98639C1.86382 5.98639 0.970588 6.88792 0.970588 8C0.970588 9.11208 1.86382 10.0136 2.96569 10.0136H5.01471V8V5.98639H2.96569ZM7.98039 5.0068L8.03431 5.0068C9.13618 5.0068 10.0294 4.10528 10.0294 2.9932C10.0294 1.88111 9.13618 0.979592 8.03431 0.979592H5.98529V5.0068L7.98039 5.0068ZM9.66064 5.4966C10.4674 4.96166 11 4.04021 11 2.9932C11 1.3401 9.67222 0 8.03431 0H5.98529H5.5H5.01471H2.96569C1.32778 0 0 1.3401 0 2.9932C0 4.04021 0.532641 4.96166 1.33936 5.4966C0.532641 6.03153 0 6.95299 0 8C0 9.04701 0.532641 9.96847 1.33936 10.5034C0.532641 11.0383 0 11.9598 0 13.0068C0 14.6633 1.3446 16 2.97909 16C4.62848 16 5.98529 14.6511 5.98529 12.9796V10.9932V10.5034V10.2147C6.51208 10.6984 7.21212 10.9932 7.98039 10.9932H8.03431C9.67222 10.9932 11 9.6531 11 8C11 6.95299 10.4674 6.03153 9.66064 5.4966ZM8.03431 5.98639L7.98039 5.98639C6.87853 5.98639 5.98529 6.88792 5.98529 8C5.98529 9.11208 6.87853 10.0136 7.98039 10.0136H8.03431C9.13618 10.0136 10.0294 9.11208 10.0294 8C10.0294 6.88792 9.13618 5.98639 8.03431 5.98639ZM0.970588 13.0068C0.970588 11.8947 1.86382 10.9932 2.96569 10.9932H5.01471V12.9796C5.01471 14.1033 4.09926 15.0204 2.97909 15.0204C1.87382 15.0204 0.970588 14.1155 0.970588 13.0068ZM5.01471 5.0068H2.96569C1.86382 5.0068 0.970588 4.10528 0.970588 2.9932C0.970588 1.88111 1.86382 0.979592 2.96569 0.979592H5.01471V5.0068Z" />
                    </svg>
                </a>
                <span>and</span>
                <a href="http://svelte.dev" title="Svelte">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="currentColor">
                        <g clip-path="url(#clip0_269_1733)">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.78402 0.711981C7.85498 -0.639733 10.7194 -0.00944734 12.1697 2.11698C12.5138 2.61048 12.759 3.16944 12.8895 3.76104C13.0199 4.35265 13.0337 4.96499 12.93 5.56212C12.8295 6.13231 12.6172 6.67572 12.3061 7.15955C12.76 8.0469 12.9121 9.06397 12.7383 10.0498C12.6359 10.6352 12.4153 11.1922 12.0907 11.6852C11.7661 12.1783 11.3447 12.5965 10.8533 12.9131L7.21603 15.288C5.14535 16.6401 2.28078 16.0097 0.830514 13.883C0.486415 13.3894 0.241971 12.8305 0.111514 12.2389C-0.0189436 11.6473 -0.032787 11.035 0.0707951 10.4378C0.171347 9.86756 0.38373 9.32408 0.695109 8.84027C0.240763 7.95312 0.0882449 6.93607 0.261701 5.95012C0.364295 5.36471 0.58502 4.80767 0.909759 4.31464C1.2345 3.8216 1.6561 3.40342 2.14761 3.08684L5.78402 0.711981ZM3.69747 13.9938C4.25201 14.2044 4.85627 14.2355 5.42866 14.0831C5.69015 14.0115 5.93939 13.8993 6.16774 13.7504L9.80527 11.3764C10.1007 11.1859 10.3542 10.9344 10.5494 10.6379C10.7446 10.3414 10.8773 10.0064 10.939 9.6544C11.0013 9.29535 10.9929 8.92717 10.9145 8.57147C10.836 8.21576 10.689 7.87969 10.482 7.58297C10.1449 7.08517 9.66686 6.70533 9.11235 6.49474C8.55783 6.28416 7.95359 6.25297 7.38122 6.4054C7.11971 6.47689 6.87045 6.58905 6.64214 6.73797L5.25434 7.64397C5.18535 7.68871 5.11012 7.72243 5.03123 7.74397C4.85872 7.78981 4.67664 7.78031 4.50956 7.71678C4.34248 7.65325 4.19845 7.53873 4.09692 7.38869C4.03463 7.29917 3.9904 7.19782 3.96679 7.09058C3.94318 6.98335 3.94067 6.87236 3.95942 6.76412C3.97801 6.6581 4.01799 6.55723 4.07679 6.46794C4.13559 6.37864 4.21193 6.3029 4.30093 6.24555L7.93902 3.87026C8.00799 3.82548 8.08323 3.79176 8.16214 3.77026C8.33462 3.72432 8.51671 3.73372 8.6838 3.79721C8.85089 3.8607 8.99493 3.97521 9.09645 4.12526C9.20756 4.28644 9.25952 4.48265 9.24314 4.67926L9.2306 4.81755L9.36586 4.85955C9.87703 5.01764 10.3581 5.26404 10.7882 5.58812L10.9745 5.72797L11.043 5.51369C11.0797 5.3999 11.1088 5.28368 11.13 5.16583C11.1923 4.80678 11.1839 4.43861 11.1055 4.08291C11.027 3.72721 10.88 3.39114 10.6731 3.0944C10.3359 2.5966 9.85785 2.21677 9.30331 2.00618C8.74877 1.7956 8.14452 1.76441 7.57213 1.91683C7.31065 1.98847 7.0614 2.10068 6.83305 2.24955L3.19552 4.62426C2.89988 4.81452 2.64625 5.0659 2.45086 5.36232C2.25548 5.65874 2.12263 5.99367 2.06082 6.34569C1.99853 6.70474 2.00687 7.07292 2.08534 7.42863C2.16381 7.78433 2.31084 8.1204 2.5178 8.41712C2.85489 8.91493 3.33299 9.29478 3.88753 9.50537C4.44207 9.71595 5.04634 9.74713 5.61873 9.59469C5.88016 9.52312 6.12939 9.41106 6.3578 9.2624L7.74574 8.35598C7.81472 8.31121 7.88995 8.27749 7.96886 8.25597C8.14137 8.21012 8.32346 8.2196 8.49054 8.28314C8.65762 8.34667 8.80165 8.4612 8.90317 8.61126C8.96545 8.70076 9.00972 8.80207 9.03337 8.90928C9.05703 9.01649 9.0596 9.12745 9.04095 9.23569C9.02226 9.34173 8.98223 9.44262 8.92338 9.53192C8.86453 9.62123 8.78817 9.697 8.69915 9.7544L5.06204 12.1295C4.99308 12.1743 4.91784 12.208 4.83893 12.2295C4.66645 12.2755 4.48435 12.2661 4.31726 12.2026C4.15016 12.1391 4.00612 12.0246 3.90462 11.8745C3.79338 11.7136 3.74136 11.5175 3.75778 11.321L3.77019 11.1827L3.63506 11.1407C3.12391 10.9825 2.64287 10.7361 2.21268 10.4121L2.02624 10.272L1.95777 10.4863C1.92099 10.6 1.89197 10.7162 1.87089 10.8341C1.80862 11.1932 1.81696 11.5613 1.8954 11.917C1.97385 12.2727 2.12083 12.6088 2.32773 12.9055C2.66484 13.4033 3.14294 13.7832 3.69747 13.9938Z" />
                        </g>
                    </svg>
                </a>
            </div>
        </footer>
    </div>
{/if}

<style>
    .app-wrapper {
        min-height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;

        background-position: top;
        background-size: auto 100vh;
        background-repeat: no-repeat;

        background-color: var(--Background-Base);
        color: var(--Body-Text);

        transition: color 200ms, background-color 200ms, background-image 200ms;

        &.light {
            background-image: url('/Map-Light.svg');

            & .page-nav--vertical {
                background-image: url('/Map-Light.svg');
            }
        }

        &.dark {
            background-image: url('/Map-Dark.svg');

            & .page-nav--vertical {
                background-image: url('/Map-Dark.svg');
            }
            
        }
    }

    .page-mark {
        display: block;
        width: 80px;
        height: 80px;
        outline-color: transparent;
        outline-width: 3px;
        outline-style: solid;
        border-radius: 999px;
        z-index: 5;
        
        transition: outline-color 200ms, outline-offset 200ms;

        &:focus-visible {
            outline-color: var(--Primary-Color);
            outline-width: 3px;
            outline-offset: 3px;
            outline-style: solid;
        }
    }

    .page-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        align-self: stretch;
        position: fixed;
        height: 180px;
        top: 0;
        left: 0;
        right: 0;
        z-index: 2;

        padding: 0 var(--Padding-Page);
        gap: var(--Padding-Large);

        & .page-header-background {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
            opacity: 0;

            background-color: var(--Background-Alt);

            transition: background-color 200ms;
        }
    }

    .page-nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 1 0 0;
        font-size: 10px;

        gap: var(--Padding-Small);

        & a {
            display: flex;
            height: 56px;
            justify-content: center;
            align-items: center;
            background-clip: padding-box;
            text-decoration: none;
            font-weight: 700;
            border-radius: 999px;
            outline-color: transparent;
            outline-width: 3px;
            outline-style: solid;

            padding: 0px var(--Padding-Large);
            gap: var(--Padding-Small);

            color: var(--Primary-Color);
            background-color: var(--Background-Primary);

            transition: outline-color 200ms, outline-offset 200ms, background-color 200ms, color 200ms;

            &:focus-visible {
                outline-color: var(--Primary-Color);
                outline-width: 3px;
                outline-offset: 3px;
                outline-style: solid;
            }
        }

        & .icon-contain {
            display: flex;
            width: 16px;
            justify-content: center;
            align-items: center;

            & svg {
                flex-shrink: 0;
            }
        }

        & span {
            font-size: 1.6em;
            letter-spacing: -0.02em;
            text-transform: uppercase;

            color: var(--Header-Text);

            transition: color 200ms;
        }

        & a[aria-current='true'] {
            outline-color: var(--Primary-Color);
        }
    }

    .page-nav--menu {
        display: none;
        width: 80px;
        height: 80px;
        padding: 0;
        border: none;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        outline-color: transparent;
        outline-width: 3px;
        outline-style: solid;
        border-radius: 999px;
        z-index: 5;

        background: var(--Background-Primary);
        color: var(--Primary-Color);

        transition: background-color 200ms, color 200ms, outline-color 200ms, outline-offset 200ms;

        & svg {
            position: absolute;
        }

        &:focus-visible {
            outline-width: 3px;
            outline-offset: 3px;
            outline-style: solid;

            outline-color: var(--Primary-Color);

            padding: 0 var(--Padding-Medium);
        }

        &.open:focus-visible {
            outline-color: var(--Color-Overlay);
        }
    }

    .page-nav--vertical {
        display: none;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 4;
        background-image: url('/Map-Light.svg');

        background-position: top;
        background-size: auto 100vh;
        background-repeat: no-repeat;

        font-size: 14px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;

        background-color: var(--Primary-Color);

        gap: var(--Padding-Medium);
        padding: 180px var(--Padding-Page) var(--Padding-Page);

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0.9;
            z-index: -1;

            background: var(--Primary-Color);
        }

        & a {
            font-size: 5rem;
            text-decoration: none;
            font-weight: 700;
            border-radius: 999px;

            color: var(--Color-Overlay);

            transition: padding 200ms, outline 200ms;

            &:focus-visible {
                outline-width: 3px;
                outline-offset: 10px;
                outline-style: solid;

                outline-color: var(--Color-Overlay);

                padding: 0 var(--Padding-Medium);
            }
        }
    }

    @media screen and (max-width: 992px) {
        .page-nav .icon-contain { display: none; }
    }

    @media screen and (max-width: 768px) {
        .page-nav { display: none; }
        .page-nav--menu { display: flex; }
        .page-nav--vertical { display: flex; }
    }

    .page-content {
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: stretch;
        min-height: 100vh;
    }

    .page-footer {
        display: flex;
        align-items: center;
        align-self: stretch;
        font-size: 1.4rem;
        letter-spacing: -0.02em;
        font-weight: 400;

        padding: var(--Padding-Page);
        gap: var(--Padding-Medium);

        color: var(--Sub-Text);

        transition: color 200ms;

        & .made-by {
            display: flex;
            align-items: center;
            gap: 5px;

            & a {
                color: inherit;
                display: flex;
                justify-content: center;
                border-radius: 999px;
                width: 16px;
                height: 16px;
                outline-color: transparent;
                outline-width: 3px;
                outline-style: solid;
                outline-offset: 10px;

                transition: color 200ms, margin 200ms, outline-color 200ms, outline-offset 200ms;

                &:focus-visible {
                    outline-width: 3px;
                    outline-offset: 13px;
                    outline-style: solid;

                    outline-color: var(--Primary-Color);

                    margin: 0 var(--Padding-Medium);
                }
            }
        }
    }

    @media screen and (max-width: 479px) {
        .page-footer {
            flex-direction: column-reverse;
        }
    }

    #theme-switch {
        display: none;

        &:checked + .switch:after {
            left: 30px;
        }
    }

    @media (hover: hover) {
        .page-nav a:hover {
            outline-color: var(--Border);
            outline-offset: 0px;
        }

        .page-nav a:hover[aria-current='true'] {
            outline-color: var(--Primary-Color);
        }

        .page-nav--vertical a:hover {
            padding-right: var(--Padding-Medium);
        }
    }
</style>