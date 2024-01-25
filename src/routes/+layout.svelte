<script>
    import '../lib/reset.css';
    import '../lib/colors.css';
    import '../lib/fonts.css';
    import { page } from '$app/stores';
</script>

<div class="wrapper light">
    <div class="page-header">
        <div class="page-header__content">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 128 128" fill="none">
                <rect width="128" height="128" rx="64" fill="black"/>
                <path d="M36 48H80C86.6274 48 92 53.3726 92 60C92 64.301 89.7373 68.0735 86.3373 70.192L92 80H89.6906C85.4034 80 81.4419 77.7128 79.2983 74L78.1436 72H72V80C67.5817 80 64 76.4183 64 72V64H80C82.2091 64 84 62.2091 84 60C84 57.7909 82.2091 56 80 56H56V80C51.5817 80 48 76.4183 48 72V56H44C39.5817 56 36 52.4183 36 48Z" fill="white"/>
            </svg>
            <nav>
                <a href="/" aria-current={$page.url.pathname === '/'}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3344 13.7259C16.3567 12.8104 17 11.4803 17 10C17 7.23858 14.7614 5 12 5C9.23859 5 7.00001 7.23858 7.00001 10C7.00001 11.4803 7.64331 12.8104 8.6656 13.7259C6.90649 14.5336 5.49078 15.9606 4.69768 17.7277C4.41777 18.3514 4.91798 19 5.60159 19C6.04498 19 6.43226 18.716 6.63061 18.3194C7.61506 16.3513 9.64972 15 12 15C14.3503 15 16.385 16.3513 17.3694 18.3194C17.5678 18.716 17.955 19 18.3984 19C19.082 19 19.5822 18.3514 19.3023 17.7277C18.5092 15.9606 17.0935 14.5336 15.3344 13.7259ZM15 10C15 11.6569 13.6569 13 12 13C10.3432 13 9.00001 11.6569 9.00001 10C9.00001 8.34315 10.3432 7 12 7C13.6569 7 15 8.34315 15 10Z" />
                    </svg>
                    <span>About</span>
                </a>
                <a href="/skills" aria-current={$page.url.pathname === '/skills'}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="CurrentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.7071 5.70711C21.0976 5.31658 21.0976 4.68342 20.7071 4.29289C20.3166 3.90237 19.6834 3.90237 19.2929 4.29289L12 11.5858L9.70711 9.29289C9.31658 8.90237 8.68342 8.90237 8.29289 9.29289C7.90237 9.68342 7.90237 10.3166 8.29289 10.7071L11.2929 13.7071C11.6834 14.0976 12.3166 14.0976 12.7071 13.7071L20.7071 5.70711Z" />
                        <path d="M19 16L19 8.82843L17 10.8284V16C17 16.5523 16.5523 17 16 17H8C7.44772 17 7 16.5523 7 16L7 8C7 7.44772 7.44772 7 8 7H15.1716L17.0006 5.17093C16.6877 5.06024 16.3509 5 16 5L8 5C6.34315 5 5 6.34315 5 8L5 16C5 17.6569 6.34315 19 8 19H16C17.6569 19 19 17.6569 19 16Z" />
                    </svg>
                    <span>Skills</span>
                </a>
                <a href="/projects" aria-current={$page.url.pathname === '/projects'}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 7.24264V10L15.7574 10L16 10.2426V12L13 12C11.8954 12 11 11.1046 11 10L11 7L12.7574 7L13 7.24264Z" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19 17L19 9L14 4L8 4C6.34315 4 5 5.34315 5 7L5 17C5 18.6569 6.34315 20 8 20H16C17.6569 20 19 18.6569 19 17ZM8 6C7.44771 6 7 6.44772 7 7V17C7 17.5523 7.44772 18 8 18L16 18C16.5523 18 17 17.5523 17 17L17 9.82843L13.1716 6L8 6Z" />
                    </svg>
                    <span>Projects</span>
                </a>
                <a href="/contact" aria-current={$page.url.pathname === '/contact'}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="CurrentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6984 13.2014L6 9.17422V8H7.70326L12 11.6829L16.2967 8L18 8V9.17422L13.3016 13.2014C12.5526 13.8434 11.4474 13.8434 10.6984 13.2014Z" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 8C3 6.34315 4.34315 5 6 5L18 5C19.6569 5 21 6.34315 21 8V16C21 17.6569 19.6569 19 18 19H6C4.34315 19 3 17.6569 3 16L3 8ZM6 7H18C18.5523 7 19 7.44772 19 8V16C19 16.5523 18.5523 17 18 17H6C5.44772 17 5 16.5523 5 16L5 8C5 7.44772 5.44772 7 6 7Z" />
                    </svg>
                    <span>Contact</span>
                </a>
            </nav>
        </div>
    </div>
    
    <div class="content">
        <slot />
    </div>
    
    <footer>
        <input type="checkbox" class="theme-switch" />
    </footer>
</div>

<style>
    .wrapper {
        background-color: var(--Background-Base);
        font-family: 'Norms Medium';
        color: var(--Body-Text);
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex-shrink: 0;
    }

    .page-header {
        display: flex;
        padding: 50px;
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
        align-self: stretch;

        & nav {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 10px;
            flex: 1 0 0;

            & a {
                display: flex;
                height: 50px;
                padding: 0px 20px;
                justify-content: center;
                align-items: center;
                gap: 5px;
                border-radius: 999px;
                background: var(--Background-Primary);
                background-clip: padding-box;
                text-decoration: none;
                color: var(--Primary-Color);
                border: 3px solid transparent;
                transition: all .2s;

                &:hover {
                    border: 3px solid var(--Border);
                }
            }

            & span {
                color: var(--Header-Text);
                font-size: 16px;
                letter-spacing: -0.32px;
                text-transform: uppercase;
            }

            & a[aria-current='true'] {
                border: 3px solid var(--Primary-Color);
            }
        }
    }

    .page-header__content {
        display: flex;
        align-items: center;
        gap: 30px;
        align-self: stretch;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        flex: 1 0 0;
        align-self: stretch;
    }

    footer {
        display: flex;
        padding: 50px;
        align-items: center;
        gap: 20px;
        align-self: stretch;
    }

</style>