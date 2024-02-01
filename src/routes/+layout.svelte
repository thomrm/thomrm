<script>
    import '../lib/base.css';
    import '../lib/colors.css';
    import '../lib/fonts.css';
    import { page } from '$app/stores';
    import { fade, fly } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';
    import { onMount } from 'svelte';

    let dark = false;
    let nav = false;
    let ready = false;

    function toggleNav() {
        nav = !nav;
    }

    onMount(() => ready = true);
</script>

{#if ready}
    <div class="app-wrapper" class:light={!dark} class:dark={dark}>
        <div class="page-header" in:fade={{delay: 200, duration: 200}}>
            <svg class="page-mark" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 128 128" fill="none">
                <rect width="128" height="128" rx="64" fill="black"/>
                <path d="M36 48H80C86.6274 48 92 53.3726 92 60C92 64.301 89.7373 68.0735 86.3373 70.192L92 80H89.6906C85.4034 80 81.4419 77.7128 79.2983 74L78.1436 72H72V80C67.5817 80 64 76.4183 64 72V64H80C82.2091 64 84 62.2091 84 60C84 57.7909 82.2091 56 80 56H56V80C51.5817 80 48 76.4183 48 72V56H44C39.5817 56 36 52.4183 36 48Z" fill="white"/>
            </svg>
            <nav class="page-nav">
                <a href="/" aria-current={$page.url.pathname === '/'}>
                    <div class="icon-contain">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3344 13.7259C16.3567 12.8104 17 11.4803 17 10C17 7.23858 14.7614 5 12 5C9.23859 5 7.00001 7.23858 7.00001 10C7.00001 11.4803 7.64331 12.8104 8.6656 13.7259C6.90649 14.5336 5.49078 15.9606 4.69768 17.7277C4.41777 18.3514 4.91798 19 5.60159 19C6.04498 19 6.43226 18.716 6.63061 18.3194C7.61506 16.3513 9.64972 15 12 15C14.3503 15 16.385 16.3513 17.3694 18.3194C17.5678 18.716 17.955 19 18.3984 19C19.082 19 19.5822 18.3514 19.3023 17.7277C18.5092 15.9606 17.0935 14.5336 15.3344 13.7259ZM15 10C15 11.6569 13.6569 13 12 13C10.3432 13 9.00001 11.6569 9.00001 10C9.00001 8.34315 10.3432 7 12 7C13.6569 7 15 8.34315 15 10Z" />
                        </svg>
                    </div>
                    <span>About</span>
                </a>
                <a href="/skills" aria-current={$page.url.pathname === '/skills'}>
                    <div class="icon-contain">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="CurrentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.7071 5.70711C21.0976 5.31658 21.0976 4.68342 20.7071 4.29289C20.3166 3.90237 19.6834 3.90237 19.2929 4.29289L12 11.5858L9.70711 9.29289C9.31658 8.90237 8.68342 8.90237 8.29289 9.29289C7.90237 9.68342 7.90237 10.3166 8.29289 10.7071L11.2929 13.7071C11.6834 14.0976 12.3166 14.0976 12.7071 13.7071L20.7071 5.70711Z" />
                            <path d="M19 16L19 8.82843L17 10.8284V16C17 16.5523 16.5523 17 16 17H8C7.44772 17 7 16.5523 7 16L7 8C7 7.44772 7.44772 7 8 7H15.1716L17.0006 5.17093C16.6877 5.06024 16.3509 5 16 5L8 5C6.34315 5 5 6.34315 5 8L5 16C5 17.6569 6.34315 19 8 19H16C17.6569 19 19 17.6569 19 16Z" />
                        </svg>
                    </div>
                    <span>Skills</span>
                </a>
                <a href="/projects" aria-current={$page.url.pathname === '/projects'}>
                    <div class="icon-contain">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 7.24264V10L15.7574 10L16 10.2426V12L13 12C11.8954 12 11 11.1046 11 10L11 7L12.7574 7L13 7.24264Z" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19 17L19 9L14 4L8 4C6.34315 4 5 5.34315 5 7L5 17C5 18.6569 6.34315 20 8 20H16C17.6569 20 19 18.6569 19 17ZM8 6C7.44771 6 7 6.44772 7 7V17C7 17.5523 7.44772 18 8 18L16 18C16.5523 18 17 17.5523 17 17L17 9.82843L13.1716 6L8 6Z" />
                        </svg>
                    </div>
                    <span>Projects</span>
                </a>
                <a href="/contact" aria-current={$page.url.pathname === '/contact'}>
                    <div class="icon-contain">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="CurrentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6984 13.2014L6 9.17422V8H7.70326L12 11.6829L16.2967 8L18 8V9.17422L13.3016 13.2014C12.5526 13.8434 11.4474 13.8434 10.6984 13.2014Z" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 8C3 6.34315 4.34315 5 6 5L18 5C19.6569 5 21 6.34315 21 8V16C21 17.6569 19.6569 19 18 19H6C4.34315 19 3 17.6569 3 16L3 8ZM6 7H18C18.5523 7 19 7.44772 19 8V16C19 16.5523 18.5523 17 18 17H6C5.44772 17 5 16.5523 5 16L5 8C5 7.44772 5.44772 7 6 7Z" />
                        </svg>
                    </div>
                    <span>Contact</span>
                </a>
            </nav>

            <button class="page-nav--menu" on:click={toggleNav}>
                {#if !nav}
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" in:fade={{delay: 200, duration: 200}} out:fade={{duration: 200}}>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6C3.44772 6 3 6.44772 3 7C3 7.55229 3.44772 8 4 8L20 8C20.5523 8 21 7.55229 21 7C21 6.44772 20.5523 6 20 6L4 6ZM3 12C3 11.4477 3.44771 11 4 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L4 13C3.44771 13 3 12.5523 3 12ZM3 17C3 16.4477 3.44772 16 4 16L20 16C20.5523 16 21 16.4477 21 17C21 17.5523 20.5523 18 20 18L4 18C3.44772 18 3 17.5523 3 17Z" />
                    </svg>
                {/if}
                {#if nav}
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" in:fade={{delay: 200, duration: 200}} out:fade={{duration: 200}}>
                        <path d="M7.05025 5.63604C6.65973 5.24551 6.02656 5.24551 5.63604 5.63604C5.24552 6.02656 5.24552 6.65973 5.63604 7.05025L10.5858 12L5.63604 16.9497C5.24552 17.3403 5.24552 17.9734 5.63604 18.364C6.02656 18.7545 6.65973 18.7545 7.05025 18.364L12 13.4142L16.9497 18.364C17.3403 18.7545 17.9734 18.7545 18.364 18.364C18.7545 17.9734 18.7545 17.3403 18.364 16.9497L13.4142 12L18.364 7.05025C18.7545 6.65973 18.7545 6.02656 18.364 5.63604C17.9734 5.24552 17.3403 5.24552 16.9497 5.63604L12 10.5858L7.05025 5.63604Z" />
                    </svg>
                {/if}
            </button>

            {#if nav}
                <nav class="page-nav--vertical" transition:fade={{ duration: 100 }}>
                    <a href="/" aria-current={$page.url.pathname === '/'} on:click={toggleNav}>
                        <div class="icon-contain">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3344 13.7259C16.3567 12.8104 17 11.4803 17 10C17 7.23858 14.7614 5 12 5C9.23859 5 7.00001 7.23858 7.00001 10C7.00001 11.4803 7.64331 12.8104 8.6656 13.7259C6.90649 14.5336 5.49078 15.9606 4.69768 17.7277C4.41777 18.3514 4.91798 19 5.60159 19C6.04498 19 6.43226 18.716 6.63061 18.3194C7.61506 16.3513 9.64972 15 12 15C14.3503 15 16.385 16.3513 17.3694 18.3194C17.5678 18.716 17.955 19 18.3984 19C19.082 19 19.5822 18.3514 19.3023 17.7277C18.5092 15.9606 17.0935 14.5336 15.3344 13.7259ZM15 10C15 11.6569 13.6569 13 12 13C10.3432 13 9.00001 11.6569 9.00001 10C9.00001 8.34315 10.3432 7 12 7C13.6569 7 15 8.34315 15 10Z" />
                            </svg>
                        </div>
                        <span>About</span>
                    </a>
                    <a href="/skills" aria-current={$page.url.pathname === '/skills'} on:click={toggleNav}>
                        <div class="icon-contain">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="CurrentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.7071 5.70711C21.0976 5.31658 21.0976 4.68342 20.7071 4.29289C20.3166 3.90237 19.6834 3.90237 19.2929 4.29289L12 11.5858L9.70711 9.29289C9.31658 8.90237 8.68342 8.90237 8.29289 9.29289C7.90237 9.68342 7.90237 10.3166 8.29289 10.7071L11.2929 13.7071C11.6834 14.0976 12.3166 14.0976 12.7071 13.7071L20.7071 5.70711Z" />
                                <path d="M19 16L19 8.82843L17 10.8284V16C17 16.5523 16.5523 17 16 17H8C7.44772 17 7 16.5523 7 16L7 8C7 7.44772 7.44772 7 8 7H15.1716L17.0006 5.17093C16.6877 5.06024 16.3509 5 16 5L8 5C6.34315 5 5 6.34315 5 8L5 16C5 17.6569 6.34315 19 8 19H16C17.6569 19 19 17.6569 19 16Z" />
                            </svg>
                        </div>
                        <span>Skills</span>
                    </a>
                    <a href="/projects" aria-current={$page.url.pathname === '/projects'} on:click={toggleNav}>
                        <div class="icon-contain">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 7.24264V10L15.7574 10L16 10.2426V12L13 12C11.8954 12 11 11.1046 11 10L11 7L12.7574 7L13 7.24264Z" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19 17L19 9L14 4L8 4C6.34315 4 5 5.34315 5 7L5 17C5 18.6569 6.34315 20 8 20H16C17.6569 20 19 18.6569 19 17ZM8 6C7.44771 6 7 6.44772 7 7V17C7 17.5523 7.44772 18 8 18L16 18C16.5523 18 17 17.5523 17 17L17 9.82843L13.1716 6L8 6Z" />
                            </svg>
                        </div>
                        <span>Projects</span>
                    </a>
                    <a href="/contact" aria-current={$page.url.pathname === '/contact'} on:click={toggleNav}>
                        <div class="icon-contain">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="CurrentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.6984 13.2014L6 9.17422V8H7.70326L12 11.6829L16.2967 8L18 8V9.17422L13.3016 13.2014C12.5526 13.8434 11.4474 13.8434 10.6984 13.2014Z" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 8C3 6.34315 4.34315 5 6 5L18 5C19.6569 5 21 6.34315 21 8V16C21 17.6569 19.6569 19 18 19H6C4.34315 19 3 17.6569 3 16L3 8ZM6 7H18C18.5523 7 19 7.44772 19 8V16C19 16.5523 18.5523 17 18 17H6C5.44772 17 5 16.5523 5 16L5 8C5 7.44772 5.44772 7 6 7Z" />
                            </svg>
                        </div>
                        <span>Contact</span>
                    </a>
                </nav>
            {/if}
        </div>
        
        <div class="page-content">
            <slot />
        </div>
        
        <footer class="page-footer" in:fade={{delay: 200, duration: 200}}>
            <input type="checkbox" id="theme-switch" bind:checked={dark}/>
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
        </footer>
    </div>
{/if}

<style>
    .app-wrapper {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;

        background-position: center;
        background-size: cover;
        background-attachment: fixed;

        color: var(--Body-Text);
        background-color: var(--Background-Base);

        transition: background-color 200ms, background-image 200ms, color 200ms;

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

    .page-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        align-self: stretch;

        padding: var(--Padding-Page);
        gap: var(--Padding-Large);
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

            &:hover {
                outline-color: var(--Border);
                outline-offset: 0px;
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
        position: fixed;
        top: var(--Padding-Page);
        right: var(--Padding-Page);
        border: none;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        border-radius: 999px;
        z-index: 5;

        background: var(--Background-Primary);
        color: var(--Primary-Color);

        transition: background-color 200ms, color 200ms;

        & svg {
            position: absolute;
            left: 50%-16px;
            top: 50%-16px;
        }

        &:hover {
            background: var(--Primary-Color);
            color: var(--Color-Overlay);
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
        background-color: var(--Primary-Color);
        background-image: url('/Map-Light.svg');
        background-position: center;
        background-attachment: fixed;
        background-size: cover;
        font-size: 14px;
        gap: var(--Padding-Medium);

        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
        padding: 180px var(--Padding-Page) var(--Padding-Page);

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--Primary-Color);
            opacity: 0.75;
            z-index: -1;
        }

        & a {
            display: flex;
            height: 70px;
            justify-content: center;
            align-items: center;
            background-clip: padding-box;
            text-decoration: none;
            font-weight: 500;
            border-radius: 999px;
            background: var(--Color-Overlay);
            padding: 0 var(--Padding-Large);
            gap: var(--Padding-Small);
            color: var(--Primary-Color);
            outline: none;

            transition: border 200ms;

            & span {
                font-size: 1.6em;
                letter-spacing: -0.02em;
                color: var(--Header-Text);
                font-weight: 500;
                text-transform: capitalize;
            }

            &:hover {
                border-right: 20px;
            }
        }

        & .icon-contain {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 24px;

            & svg {
                width: 32px;
                height: 32px;
                flex-shrink: 0;
            }
        }
    }

    @media screen and (max-width: 992px) {
        .page-nav { display: none; }
        .page-nav--menu { display: flex; }
        .page-nav--vertical { display: flex; }
    }

    .page-content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1 0 0;
        align-self: stretch;
    }

    .page-footer {
        display: flex;
        align-items: center;
        align-self: stretch;

        padding: var(--Padding-Page);
        gap: var(--Padding-Medium);

        & .copy {
            font-size: 1.4rem;
            letter-spacing: -0.02em;

            color: var(--Sub-Text);
        }
    }

    #theme-switch {
        display: none;

        &:checked + .switch:after {
            left: 30px;
        }
    }

    .switch {
        position: relative;
        display: inline-flex;
        padding: 3px;
        align-items: flex-start;
        align-content: flex-start;
        gap: 0px 3px;
        flex-wrap: wrap;
        border-radius: 999px;
        cursor: pointer;

        background: var(--Primary-Color);
        color: var(--Background-Primary);

        transition: background-color 200ms, color 200ms;

        &::after {
            content: '';
            position: absolute;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            top: 3px;
            left: 3px;

            background-color: var(--Background-Primary);

            transition: all 200ms;
        }
    }
</style>