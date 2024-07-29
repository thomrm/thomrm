<script>
    import '../lib/base.css';
    import '../lib/work.css';
    import '../lib/colors.css';
    import '../lib/fonts.css';
    import { onMount } from 'svelte';
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
 
    inject({ mode: dev ? 'development' : 'production' });

    let ready = false;

    let app, appScroll, dark;

    onMount(() => {
        dark = localStorage.theme === 'dark' ? true : false;
        ready = true;
    });

    const scrollToTarget = (id) => {
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    function switchTheme() {
        localStorage.setItem('theme', !dark ? 'dark' : 'light');
    }

    let scrollOffset, scrollClient;
    $: scrollWidth = scrollOffset - scrollClient;

    $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<svelte:head>
    {#if dark == false}
        <style>
            body { background-color: #FFFFFF; }
        </style>
    {/if}
    {#if dark == true}
        <style>
            body { background-color: #000000; }
        </style>
    {/if}
</svelte:head>

{#if ready}
    <div class="app-wrapper" 
        class:light={!dark} 
        class:dark={dark} 
        bind:this={app}
        on:scroll={()=>appScroll=app.scrollTop}
        bind:offsetWidth={scrollOffset} 
        bind:clientWidth={scrollClient} 
        style="padding-right: {innerWidth < 700 ? 20 - scrollWidth : 30 - scrollWidth}px"
        >
        <div class="page-nav">
            <nav class="button-container">
                <button class="small-button" on:click={() => scrollToTarget('section-work')}><span>Work</span></button>
                <button class="small-button" on:click={() => scrollToTarget('section-about')}><span>About</span></button>
                <button class="small-button" on:click={() => scrollToTarget('section-contact')}><span>Contact</span></button>
            </nav>
            <div class="switch-contain">
                <input type="checkbox" id="theme-switch" bind:checked={dark} on:click={switchTheme}/>
                <label for="theme-switch" class="switch">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_23_32421" fill="#FFFFFF">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C7.52413 1 7.05935 1.04748 6.61015 1.13797C8.55856 1.63234 10 3.39784 10 5.5C10 7.98528 7.98528 10 5.5 10C3.39784 10 1.63234 8.55856 1.13797 6.61015C1.04748 7.05935 1 7.52413 1 8C1 11.866 4.13401 15 8 15Z" />
                        </mask>
                        <path d="M6.61015 1.13797L6.41267 0.157666L6.36421 2.10726L6.61015 1.13797ZM1.13797 6.61015L2.10726 6.36421L0.157666 6.41267L1.13797 6.61015ZM14 8C14 11.3137 11.3137 14 8 14V16C12.4183 16 16 12.4183 16 8H14ZM8 2C11.3137 2 14 4.68629 14 8H16C16 3.58172 12.4183 0 8 0V2ZM6.80762 2.11828C7.19218 2.04081 7.59081 2 8 2V0C7.45745 0 6.92653 0.0541539 6.41267 0.157666L6.80762 2.11828ZM6.36421 2.10726C7.87982 2.49181 9 3.86634 9 5.5H11C11 2.92933 9.2373 0.772865 6.85608 0.168687L6.36421 2.10726ZM9 5.5C9 7.433 7.433 9 5.5 9V11C8.53757 11 11 8.53757 11 5.5H9ZM5.5 9C3.86634 9 2.49181 7.87982 2.10726 6.36421L0.168687 6.85608C0.772865 9.2373 2.92933 11 5.5 11V9ZM2 8C2 7.59081 2.04081 7.19218 2.11828 6.80762L0.157666 6.41267C0.0541539 6.92653 0 7.45745 0 8H2ZM8 14C4.68629 14 2 11.3137 2 8H0C0 12.4183 3.58172 16 8 16V14Z" fill="currentColor" mask="url(#path-1-inside-1_23_32421)" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_23_32420)">
                            <path d="M2.34317 2.34311L4.46449 4.46443M6.70558 3.16914L5.92893 0.270645M9.29441 3.16913L10.0711 0.27063M11.5355 4.4644L13.6568 2.34308M12.8308 6.7055L15.7293 5.92885M12.8309 9.29436L15.7294 10.071M11.5356 11.5355L13.6569 13.6568M10.0711 15.7293L9.29441 12.8308M5.92893 15.7293L6.70558 12.8308M2.34314 13.6568L4.46446 11.5355M0.270691 10.071L3.16919 9.29433M0.270706 5.92888L3.1692 6.70553M11.5 8.00002C11.5 9.93302 9.93302 11.5 8.00003 11.5C6.06703 11.5 4.50003 9.93302 4.50003 8.00002C4.50003 6.06702 6.06703 4.50002 8.00003 4.50002C9.93302 4.50002 11.5 6.06702 11.5 8.00002Z" stroke="currentColor"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_23_32420">
                                <rect width="16" height="16" fill="#FFFFFF" />
                            </clipPath>
                        </defs>
                    </svg>
                </label>
            </div>
        </div>

        <div class="header-mark">
            <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#shape-tr)">
                    <rect width="90" height="90" fill="#151515" />
                    <path d="M24 33H57C61.9706 33 66 37.0294 66 42C66 45.2257 64.303 48.0551 61.753 49.644L66 57H64.268C61.0526 57 58.0814 55.2846 56.4737 52.5L55.6077 51H51V57C47.6863 57 45 54.3137 45 51V45H57C58.6569 45 60 43.6569 60 42C60 40.3431 58.6569 39 57 39H39V57C35.6863 57 33 54.3137 33 51V39H30C26.6863 39 24 36.3137 24 33Z" fill="#FFFFFF" />
                </g>
                <defs>
                    <clipPath id="shape-tr">
                        <rect width="90" height="90" fill="#FFFFFF" />
                    </clipPath>
                </defs>
            </svg>
        </div>
        <div class="header-name" class:header-name--small={appScroll > 120 && innerWidth > 700}>
            <span>Thomas Reed-Mu&ntilde;oz</span>
        </div>
        <div class="header-sub">UI &amp; UX. Product and Visual Designer.</div>
        
        <slot />
        
        <footer class="page-footer">
            <div class="footer-copy small">&copy; Thomas Reed-Mu&ntilde;oz 2024</div>
            <div class="footer-made-by small">
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
        height: 100dvh;
        background: var(--Color-Base);
        font-family: 'Norms', sans-serif;
        font-weight: 200;
        font-size: 1.8rem;
        color: var(--Color-Secondary);
        cursor: default;
        padding: 0 var(--Padding-Section);
        overflow-y: scroll;
        overflow-x: hidden;
        overscroll-behavior: contain;
        scrollbar-color: var(--Color-Primary) transparent;
        transition: background-color 200ms, scrollbar-color 200ms;

        & ::selection { 
            background: var(--Color-Primary);
            color: var(--Color-Base);
        }
    }

    .page-nav {
        display: flex;
        flex-direction: row;
        gap: var(--Padding-Large);
        align-items: center;
        justify-content: flex-end;
        height: 24px;
        padding: var(--Padding-Section) 0;
        background: var(--Color-Base);
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        z-index: 2;
        transition: background-color 200ms;
    }

    .header-mark {
        display: flex;
        align-items: flex-start;
        position: relative;
        padding: var(--Padding-Section) 0;
        z-index: 3;
        pointer-events: none;
        margin-top: -84px;
    }

    .header-name {
        position: sticky;
        top: var(--Padding-Section);
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 24px;
        z-index: 3;
        font-size: 4rem;
        font-weight: 800;
        letter-spacing: -0.07em;
        color: var(--Color-Primary);
        transition: font-size 400ms, color 200ms;
        pointer-events: none;

        & span {
            padding-top: 3px;
        }
    }

    .header-name--small {
        font-size: 30px;
    }

    .header-sub {
        padding: var(--Padding-Section) 0;
        padding-top: var(--Padding-Medium);
        line-height: 1;
        transition: color 200ms;
    }

    @media screen and (max-width: 700px) {
        .header-mark {
            margin-top: 0;
            z-index: 1;
        }

        .header-name {
            z-index: 1;
            position: static;
            transition: color 200ms;
        }

        .page-nav {
            justify-content: space-between;
        }
    }

    .page-footer {
        display: flex;
        flex-direction: column;
        padding: var(--Padding-Section) 0;
        gap: var(--Padding-XSmall);

        & div {
            height: 16px;
            display: flex;
            align-items: center;
        }
    }

    .footer-made-by {
        display: flex;
        gap: 5px;
        align-items: center;

        & a {
            display: flex;
            color: var(--Color-Primary);
        }
    }
</style>