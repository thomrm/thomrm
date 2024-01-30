<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    let ready = false;

    onMount(() => ready = true);
</script>

{#if ready}
    <div class="page-contact" in:fade={{delay: 200, duration: 200}}>
        <div class="contact__header">
            <h1>Send Me a Message.</h1>
            <h3>Say hi, ask me a question, or hire me.</h3>
        </div>
        <div class="contact__buttons">
            <a href="mailto:thomas@reedmunoz.com" class="button split-left">mailto:thomas@reedmunoz.com</a>
            <button class="button icon split-right">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="currentColor">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 18L9.5 18H17.3293C16.9175 19.1652 15.8062 20 14.5 20H7.5C5.84315 20 4.5 18.6569 4.5 17V10C4.5 8.69378 5.33481 7.58254 6.5 7.17071L6.5 10L6.5 15L6.5 17C6.5 17.5523 6.94771 18 7.5 18ZM17.5 15L10.5 15C9.94771 15 9.5 14.5523 9.5 14L9.5 7C9.5 6.44772 9.94772 6 10.5 6H17.5C18.0523 6 18.5 6.44772 18.5 7L18.5 14C18.5 14.5523 18.0523 15 17.5 15ZM20.5 14C20.5 15.6569 19.1569 17 17.5 17L10.5 17C8.84315 17 7.5 15.6569 7.5 14L7.5 7C7.5 5.34315 8.84315 4 10.5 4L17.5 4C19.1569 4 20.5 5.34315 20.5 7L20.5 14Z" />
                </svg>
            </button>
        </div>
    </div>
{/if}

<style>
    .page-contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1 0 0;
        align-self: stretch;

        padding: 0px var(--Padding-Page);
        gap: var(--Padding-XLarge);
    }

    .contact__header {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: stretch;

        gap: var(--Padding-Medium);
    }

    .contact__buttons {
        display: flex;
        align-items: flex-start;
        gap: 1px;
    }
</style>