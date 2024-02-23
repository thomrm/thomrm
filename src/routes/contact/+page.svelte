<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    let ready = false;
    let tooltip = "Copy to Clipboard";

    onMount(() => ready = true);

    function copyClick(event) {
        navigator.clipboard.writeText('thomas@reedmunoz.com');
        tooltip = "Copied!";
    }
</script>

<svelte:head>
	<title>Contact Thomas Reed-Munoz</title>
    <meta name="description" content="Send a message to Thomas Reed-Munoz.">
</svelte:head>

{#if ready}
    <div class="page-contact" in:fade={{delay: 200, duration: 200}}>
        <div class="contact__header">
            <h1>Send Me a Message.</h1>
            <div class="sub-header">Say hi, ask me a question, or hire me.</div>
        </div>
        <div class="contact__buttons">
            <a href="mailto:thomas@reedmunoz.com" aria-label="Email Thomas Reed-Munoz" class="button">mailto:thomas@reedmunoz.com</a>
            <div class="tooltip-contain">
                <button on:click={copyClick} aria-label="Copy Email Address" class="button icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="currentColor">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 18L9.5 18H17.3293C16.9175 19.1652 15.8062 20 14.5 20H7.5C5.84315 20 4.5 18.6569 4.5 17V10C4.5 8.69378 5.33481 7.58254 6.5 7.17071L6.5 10L6.5 15L6.5 17C6.5 17.5523 6.94771 18 7.5 18ZM17.5 15L10.5 15C9.94771 15 9.5 14.5523 9.5 14L9.5 7C9.5 6.44772 9.94772 6 10.5 6H17.5C18.0523 6 18.5 6.44772 18.5 7L18.5 14C18.5 14.5523 18.0523 15 17.5 15ZM20.5 14C20.5 15.6569 19.1569 17 17.5 17L10.5 17C8.84315 17 7.5 15.6569 7.5 14L7.5 7C7.5 5.34315 8.84315 4 10.5 4L17.5 4C19.1569 4 20.5 5.34315 20.5 7L20.5 14Z" />
                    </svg>
                </button>
                <div class="tooltip">
                    {tooltip}
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    .page-contact {
        display: flex;
        max-width: 1300px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        flex: 1 0 0;
        align-self: stretch;
        
        padding: 0px var(--Padding-Page);
        gap: var(--Padding-XLarge);
    }

    .contact__header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;

        gap: var(--Padding-Small);
    }

    .contact__buttons {
        display: flex;
        align-items: flex-start;
        
        gap: var(--Padding-Small);
    }

    .tooltip-contain {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;

        & .tooltip {
            position: absolute;
            top: -35px;
            height: 35px;
            padding: 0px 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-wrap: nowrap;
            border-radius: 6px;
            font-size: 1.4rem;

            background: var(--Header-Text);
            color: var(--Color-Overlay);
            opacity: 0;
            transition: opacity 200ms, top 200ms;

            &::after {
                content: "";
                position: absolute;
                top: 100%;
                left: 50%;
                margin-left: -5px;
                border-width: 5px;
                border-style: solid;
                border-color: var(--Header-Text) transparent transparent transparent;
            }
        }

        &:hover {
            & .tooltip {
                top: -45px;
                opacity: 1;
                transition-delay: 400ms;
            }
        }
    }
</style>