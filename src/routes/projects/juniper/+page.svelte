<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    let ready = false;

    onMount(() => ready = true);
</script>

{#if ready}
    <div class="project-contain" in:fade={{delay: 200, duration: 200}}>
        <div class="project-cover">
            <div class="cover-content">
                <div class="juniper-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="118" viewBox="0 0 70 118" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M35 0C37.722 0 39.9286 2.20127 39.9286 4.91667V27.4635L51.2293 16.1901C53.154 14.27 56.2746 14.27 58.1993 16.1901C60.124 18.1101 60.124 21.2232 58.1993 23.1433L39.9286 41.3699V56.9635L61.0864 35.8567C63.0111 33.9366 66.1317 33.9366 68.0565 35.8567C69.9812 37.7768 69.9812 40.8899 68.0565 42.8099L61.6843 49.1667H64.5714C67.2934 49.1667 69.5 51.3679 69.5 54.0833C69.5 56.7987 67.2934 59 64.5714 59H51.8272L39.9286 70.8699V86.4634L61.0864 65.3567C63.0111 63.4366 66.1317 63.4366 68.0565 65.3567C69.9812 67.2768 69.9812 70.3899 68.0565 72.3099L56.7558 83.5833H64.5714C67.2934 83.5833 69.5 85.7846 69.5 88.5C69.5 91.2154 67.2934 93.4167 64.5714 93.4167H46.8986L39.9286 100.37V118H30.0714V85.6199L23.1014 78.6667H5.42857C2.7066 78.6667 0.5 76.4654 0.5 73.75C0.5 71.0346 2.7066 68.8333 5.42857 68.8333H13.2442L1.94355 57.5599C0.0188182 55.6399 0.0188182 52.5268 1.94355 50.6067C3.86827 48.6866 6.98887 48.6866 8.9136 50.6067L30.0714 71.7134V56.1199L9.3364 35.4349C7.41168 33.5149 7.41168 30.4018 9.3364 28.4817C11.2611 26.5616 14.3817 26.5616 16.3065 28.4817L30.0714 42.2135V26.6199L21.6578 18.2266C19.7331 16.3065 19.7331 13.1935 21.6578 11.2734C23.5826 9.35331 26.7032 9.35331 28.6279 11.2734L30.0714 12.7135V4.91667C30.0714 2.20127 32.278 0 35 0Z" fill="white"/>
                    </svg>
                </div>
                <div class="juniper-title">
                    <h1>Juniper</h1>
                    <h3>A Design System</h3>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="currentColor" class="start-scrolling" in:fade={{delay: 1200, duration: 200}}>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1715 24.1717C9.39049 24.9527 9.39049 26.219 10.1715 27.0001L23.5858 40.4143L37 27.0001C37.781 26.219 37.781 24.9527 37 24.1717C36.2189 23.3906 34.9526 23.3906 34.1715 24.1717L25.5858 32.7575L25.5858 9.58588C25.5858 8.48131 24.6903 7.58588 23.5858 7.58588C22.4812 7.58588 21.5858 8.48131 21.5858 9.58588L21.5858 32.7575L13 24.1717C12.2189 23.3906 10.9526 23.3906 10.1715 24.1717Z" />
            </svg>
        </div>
        <div class="project-content">
            <section>
                <h1>No one gets it right on the first try.</h1>
                <p>When I started to redesign my personal portfolio, I wanted to approach it as I would any other project. Consistency and ease of iteration has always been an important part of my design process. Making it easier to revise and change reduces the eventual friction and frustrations. Juniper is the design system that I built to help with this.</p>
            </section>
            <div class="juniper-colors-contain">
                <div class="juniper-colors-left small">
                    A set of neutral base colors to provide a clean slate for content, in both light and dark themes.
                </div>
                <div class="juniper-colors">
                    <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M94.7273 277.055L84.7589 294.321C83.0885 297.214 84.0979 300.925 87.0705 302.45C106.687 312.513 128.653 318.643 151.928 319.8C155.267 319.966 158 317.256 158 313.914V293.985C135.05 293.65 113.497 287.544 94.7273 277.055Z" />
                    </svg>
                    <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M44.9478 228.735L27.6918 238.698C24.7948 240.37 23.8158 244.096 25.6352 246.903C37.9283 265.871 54.1288 282.072 73.0968 294.365C75.904 296.184 79.6298 295.205 81.3024 292.308L91.2651 275.052C72.2676 263.678 56.3217 247.732 44.9478 228.735Z" />
                    </svg>
                    <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.0146 162H6.08622C2.74377 162 0.0342231 164.733 0.200093 168.072C1.35656 191.347 7.48671 213.313 17.5496 232.929C19.0745 235.902 22.7855 236.911 25.6788 235.241L42.9446 225.273C32.4556 206.503 26.3504 184.95 26.0146 162Z" />
                    </svg>
                    <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M98.7762 270.042C100.415 267.205 104.02 266.221 106.959 267.671C120.723 274.465 135.979 278.697 152.102 279.744C155.371 279.957 158 282.611 158 285.886V289.985C135.779 289.65 114.909 283.739 96.7278 273.59L98.7762 270.042Z" />
                        <path d="M51.9703 224.68C54.8044 223.044 58.4142 223.99 60.2357 226.709C68.9854 239.769 80.2314 251.015 93.2908 259.764C96.0095 261.586 96.9557 265.196 95.3195 268.03L93.2656 271.587C74.8749 260.565 59.4351 245.125 48.4129 226.734L51.9703 224.68Z" />
                        <path d="M34.1136 162C37.3891 162 40.0434 164.629 40.2557 167.898C41.3033 184.021 45.5352 199.277 52.3288 213.041C53.7791 215.98 52.7954 219.585 49.9575 221.224L46.4097 223.272C36.2607 205.091 30.3502 184.221 30.0151 162H34.1136Z" />
                        <path d="M162 30.0151V34.1136C162 37.3891 164.63 40.0435 167.899 40.2559C227.88 44.1533 275.847 92.1203 279.744 152.101C279.957 155.37 282.611 158 285.886 158H289.985C288.926 87.7907 232.209 31.074 162 30.0151Z" />
                    </svg>
                    <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M162 26.0146C234.419 27.0742 292.926 85.5815 293.985 158H313.914C317.256 158 319.966 155.259 319.8 151.921C315.725 69.9853 250.015 4.27538 168.079 0.200413C164.741 0.034385 162 2.7437 162 6.08615V26.0146Z" />
                    </svg>
                    <img src="/JuniperBerries.jpg" alt="Juniper Berries" />
                </div>
                <div class="juniper-colors-right small">
                    The blue-green foliage and berries of the rocky mountain juniper inspire the primary colors.
                </div>
            </div>
            <section>
                <h1>Make it accessible.</h1>
                <p>Accessibility has become an important aspect of design for me. One that I've tried to bake into the foundation of my process. Making sure a design is usable by all types of people. Understanding difficulties they might face when using a product. I choose colors and define typography to meet Web Content Accessibility Guidelines.</p>
                <div class="graphic-contain">
                    <div class="graphic-content light">
                        <div class="graphic-label xsmall">Light Theme</div>
                        <div class="content-colors">
                            <div class="colors">
                                <div class="color color-1">
                                    <div class="label">
                                        <p class="label-header">#000000</p>
                                        <p class="xsmall">Contrast 18.10</p>
                                    </div>
                                </div>
                                <div class="color color-2">
                                    <div class="label">
                                        <p class="label-header">#333333</p>
                                        <p class="xsmall">Contrast 10.89</p>
                                    </div>
                                </div>
                                <div class="color color-3">
                                    <div class="label">
                                        <p class="label-header">#666666</p>
                                        <p class="xsmall">Contrast 4.95</p>
                                    </div>
                                </div>
                                <div class="color color-4">
                                    <div class="label">
                                        <p class="label-header">#00645B</p>
                                        <p class="xsmall">Contrast 6.09</p>
                                    </div>
                                </div>
                            </div>
                            <div class="base-color">
                                <p class="label-header">#EEEEEE</p>
                                <p class="xsmall">Base Color</p>
                            </div>
                        </div>
                    </div>
                    <div class="graphic-content dark">
                        <div class="graphic-label xsmall">Dark Theme</div>
                        <div class="content-colors">
                            <div class="colors">
                                <div class="color color-1">
                                    <div class="label light">
                                        <p class="label-header">#FFFFFF</p>
                                        <p class="xsmall">Contrast 18.88</p>
                                    </div>
                                </div>
                                <div class="color color-2">
                                    <div class="label light">
                                        <p class="label-header">#DDDDDD</p>
                                        <p class="xsmall">Contrast 13.90</p>
                                    </div>
                                </div>
                                <div class="color color-3">
                                    <div class="label light">
                                        <p class="label-header">#BBBBBB</p>
                                        <p class="xsmall">Contrast 9.84</p>
                                    </div>
                                </div>
                                <div class="color color-4">
                                    <div class="label light">
                                        <p class="label-header">#00C396</p>
                                        <p class="xsmall">Contrast 8.31</p>
                                    </div>
                                </div>
                            </div>
                            <div class="base-color">
                                <p class="label-header">#111111</p>
                                <p class="xsmall">Base Color</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h1>Build quickly.</h1>
                <p>I created a basic typographic guide with headers, sub-headers, body text, and footers. The clean and minimal style intended to take a back seat to content, but still remain appealing. Accompanying UI elements like buttons, switches, navigation, and labels kept simple as well. I built each piece in Figma as a component. Local Variables manage theming and Component Properties control the content.</p>
                <div class="graphic-contain">
                    <div class="graphic-content">
                        <div class="graphic-label xsmall">Typography</div>
                        <div class="content-typography">
                            <h1>Main Header</h1>
                            <h2>Secondary Header</h2>
                            <h3>Sub Header</h3>
                            <p>Body Text</p>
                            <p class="small">Small Text</p>
                        </div>
                    </div>
                    <div class="graphic-content">
                        <div class="graphic-label xsmall">Iconography</div>
                        <div class="content-iconography">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6688 27.4518C32.7134 25.6208 34 22.9606 34 20C34 14.4772 29.5229 10 24 10C18.4772 10 14 14.4772 14 20C14 22.9606 15.2866 25.6208 17.3312 27.4518C13.813 29.0671 10.9816 31.9212 9.39537 35.4555C8.83555 36.7028 9.83596 38 11.2032 38C12.09 38 12.8645 37.432 13.2612 36.6389C15.2301 32.7027 19.2994 30 24 30C28.7006 30 32.7699 32.7027 34.7388 36.6389C35.1355 37.432 35.9101 38 36.7969 38C38.1641 38 39.1645 36.7028 38.6047 35.4555C37.0185 31.9212 34.1871 29.0671 30.6688 27.4518ZM30 20C30 23.3137 27.3137 26 24 26C20.6863 26 18 23.3137 18 20C18 16.6863 20.6863 14 24 14C27.3137 14 30 16.6863 30 20Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
                                <path d="M41.4142 11.4142C42.1953 10.6332 42.1953 9.36684 41.4142 8.58579C40.6332 7.80474 39.3668 7.80474 38.5858 8.58579L24 23.1716L19.4142 18.5858C18.6332 17.8047 17.3668 17.8047 16.5858 18.5858C15.8047 19.3668 15.8047 20.6332 16.5858 21.4142L22.5858 27.4142C23.3668 28.1953 24.6332 28.1953 25.4142 27.4142L41.4142 11.4142Z" />
                                <path d="M38 32L38 17.6569L34 21.6569V32C34 33.1046 33.1046 34 32 34H16C14.8954 34 14 33.1046 14 32L14 16C14 14.8954 14.8954 14 16 14H30.3431L34.0013 10.3419C33.3754 10.1205 32.7018 10 32 10L16 10C12.6863 10 10 12.6863 10 16L10 32C10 35.3137 12.6863 38 16 38H32C35.3137 38 38 35.3137 38 32Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
                                <path d="M26 14.4853V20L31.5147 20L32 20.4853V24L26 24C23.7909 24 22 22.2091 22 20L22 14L25.5147 14L26 14.4853Z" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M38 34L38 18L28 8L16 8C12.6863 8 10 10.6863 10 14L10 34C10 37.3137 12.6863 40 16 40H32C35.3137 40 38 37.3137 38 34ZM16 12C14.8954 12 14 12.8954 14 14V34C14 35.1046 14.8954 36 16 36L32 36C33.1046 36 34 35.1046 34 34L34 19.6569L26.3431 12L16 12Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
                                <path d="M21.3968 26.4029L12 18.3484V16H15.4065L24 23.3659L32.5935 16L36 16V18.3484L26.6032 26.4029C25.1052 27.6868 22.8948 27.6868 21.3968 26.4029Z" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 16C6 12.6863 8.68629 10 12 10L36 10C39.3137 10 42 12.6863 42 16V32C42 35.3137 39.3137 38 36 38H12C8.6863 38 6 35.3137 6 32L6 16ZM12 14H36C37.1046 14 38 14.8954 38 16V32C38 33.1046 37.1046 34 36 34H12C10.8954 34 10 33.1046 10 32L10 16C10 14.8954 10.8954 14 12 14Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
                                <path d="M22 10C22 8.89543 22.8954 8 24 8C25.1046 8 26 8.89543 26 10C26 11.1046 25.1046 12 24 12C22.8954 12 22 11.1046 22 10Z" />
                                <path d="M12.6863 15.5147C11.9052 14.7337 11.9052 13.4673 12.6863 12.6863C13.4673 11.9052 14.7337 11.9052 15.5147 12.6863C16.2958 13.4673 16.2958 14.7337 15.5147 15.5147C14.7337 16.2958 13.4673 16.2958 12.6863 15.5147Z" />
                                <path d="M32.4853 15.5147C33.2663 16.2958 34.5327 16.2958 35.3137 15.5147C36.0948 14.7337 36.0948 13.4673 35.3137 12.6863C34.5327 11.9052 33.2663 11.9052 32.4853 12.6863C31.7042 13.4673 31.7042 14.7337 32.4853 15.5147Z" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.1247 34C29.6475 34 34.1247 29.5228 34.1247 24C34.1247 18.4772 29.6475 14 24.1247 14C18.6018 14 14.1247 18.4772 14.1247 24C14.1247 29.5228 18.6018 34 24.1247 34ZM24.1247 30C27.4384 30 30.1247 27.3137 30.1247 24C30.1247 20.6863 27.4384 18 24.1247 18C20.811 18 18.1247 20.6863 18.1247 24C18.1247 27.3137 20.811 30 24.1247 30Z" />
                                <path d="M15.5147 35.3137C14.7337 36.0948 13.4673 36.0948 12.6863 35.3137C11.9052 34.5327 11.9052 33.2663 12.6863 32.4853C13.4673 31.7042 14.7337 31.7042 15.5147 32.4853C16.2958 33.2663 16.2958 34.5327 15.5147 35.3137Z" />
                                <path d="M32.4853 32.4853C31.7042 33.2663 31.7042 34.5327 32.4853 35.3137C33.2663 36.0948 34.5327 36.0948 35.3137 35.3137C36.0948 34.5327 36.0948 33.2663 35.3137 32.4853C34.5327 31.7042 33.2663 31.7042 32.4853 32.4853Z" />
                                <path d="M36 24C36 25.1046 36.8954 26 38 26C39.1046 26 40 25.1046 40 24C40 22.8954 39.1046 22 38 22C36.8954 22 36 22.8954 36 24Z" />
                                <path d="M10 26C8.89543 26 8 25.1046 8 24C8 22.8954 8.89543 22 10 22C11.1046 22 12 22.8954 12 24C12 25.1046 11.1046 26 10 26Z" />
                                <path d="M24 36C22.8954 36 22 36.8954 22 38C22 39.1046 22.8954 40 24 40C25.1046 40 26 39.1046 26 38C26 36.8954 25.1046 36 24 36Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.9995 7.99757C23.189 7.99835 22.3819 8.06077 21.5851 8.18293C20.2558 8.38674 18.9555 8.75683 17.7173 9.28432C18.6157 9.50459 19.4984 9.8542 20.3397 10.34C21.1818 10.8261 21.9264 11.4163 22.5667 12.0848C25.5633 15.2136 26.2753 20.0594 24 24.0002C21.7247 27.9411 17.1722 29.7474 12.9643 28.7167C12.0652 28.4964 11.1818 28.1466 10.3397 27.6605C9.49836 27.1747 8.75427 26.5851 8.11432 25.9172C8.27658 27.2533 8.60623 28.5644 9.09438 29.8175C9.38696 30.5686 9.73649 31.2989 10.1411 32.0011C11.4985 34.3575 13.4755 36.3991 16 37.8566C23.6527 42.2749 33.4381 39.6529 37.8564 32.0002C42.2747 24.3475 39.6527 14.5621 32 10.1438C29.4755 8.68631 26.719 7.99494 23.9995 7.99757ZM16.0407 32.9843C16.6338 33.5085 17.2879 33.9814 18 34.3925C23.7395 37.7062 31.0786 35.7397 34.3923 30.0002C37.706 24.2607 35.7395 16.9216 30 13.6079C29.2879 13.1968 28.5513 12.8668 27.8008 12.6152C29.8897 16.7012 29.9294 21.7302 27.4641 26.0002C24.9988 30.2703 20.6237 32.7503 16.0407 32.9843Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
                                <path d="M8 12C6.89543 12 6 12.8954 6 14C6 15.1046 6.89543 16 8 16L40 16C41.1046 16 42 15.1046 42 14C42 12.8954 41.1046 12 40 12L8 12Z" />
                                <path d="M6 24C6 22.8954 6.89543 22 8 22L40 22C41.1046 22 42 22.8954 42 24C42 25.1046 41.1046 26 40 26L8 26C6.89543 26 6 25.1046 6 24Z" />
                                <path d="M6 34C6 32.8954 6.89544 32 8 32L40 32C41.1046 32 42 32.8954 42 34C42 35.1046 41.1046 36 40 36L8 36C6.89544 36 6 35.1046 6 34Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
                                <path d="M14.1005 11.2723C13.3194 10.4913 12.0531 10.4913 11.2721 11.2723C10.491 12.0534 10.491 13.3197 11.2721 14.1007L21.1716 24.0002L11.2721 33.8997C10.491 34.6808 10.491 35.9471 11.2721 36.7282C12.0531 37.5092 13.3194 37.5092 14.1005 36.7282L24 26.8287L33.8995 36.7282C34.6805 37.5092 35.9469 37.5092 36.7279 36.7282C37.509 35.9471 37.509 34.6808 36.7279 33.8997L26.8284 24.0002L36.7279 14.1007C37.509 13.3197 37.509 12.0534 36.7279 11.2723C35.9469 10.4913 34.6805 10.4913 33.8995 11.2723L24 21.1718L14.1005 11.2723Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5858 10.5858C25.3668 9.80474 26.6332 9.80474 27.4142 10.5858L40.8284 24L27.4142 37.4142C26.6332 38.1953 25.3668 38.1953 24.5858 37.4142C23.8047 36.6332 23.8047 35.3668 24.5858 34.5858L33.1716 26H10C8.89543 26 8 25.1046 8 24C8 22.8954 8.89543 22 10 22H33.1716L24.5858 13.4142C23.8047 12.6332 23.8047 11.3668 24.5858 10.5858Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.4142 10.5858C22.6332 9.80474 21.3668 9.80474 20.5858 10.5858L7.17157 24L20.5858 37.4142C21.3668 38.1953 22.6332 38.1953 23.4142 37.4142C24.1953 36.6332 24.1953 35.3668 23.4142 34.5858L14.8284 26H38C39.1046 26 40 25.1046 40 24C40 22.8954 39.1046 22 38 22H14.8284L23.4142 13.4142C24.1953 12.6332 24.1953 11.3668 23.4142 10.5858Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1715 24.1714C9.39049 24.9525 9.39049 26.2188 10.1715 26.9998L23.5858 40.4141L37 26.9998C37.781 26.2188 37.781 24.9525 37 24.1714C36.2189 23.3904 34.9526 23.3904 34.1715 24.1714L25.5858 32.7572L25.5858 9.58564C25.5858 8.48107 24.6903 7.58564 23.5858 7.58564C22.4812 7.58564 21.5858 8.48107 21.5858 9.58564L21.5858 32.7572L13 24.1714C12.2189 23.3904 10.9526 23.3904 10.1715 24.1714Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
                                <path d="M14 36L33.6586 36C32.8349 38.3304 30.6124 40 28 40H14C10.6863 40 8 37.3137 8 34L8 20C8 17.3876 9.66962 15.1651 12 14.3414L12 34C12 35.1046 12.8954 36 14 36Z" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M40 28C40 31.3137 37.3137 34 34 34H20C16.6863 34 14 31.3137 14 28L14 14C14 10.6863 16.6863 8 20 8H34C37.3137 8 40 10.6863 40 14L40 28ZM34 30H20C18.8954 30 18 29.1046 18 28L18 14C18 12.8954 18.8954 12 20 12H34C35.1046 12 36 12.8954 36 14L36 28C36 29.1046 35.1046 30 34 30Z" />
                            </svg>
                        </div>
                    </div>
                    <div class="graphic-content">
                        <div class="graphic-label xsmall">Buttons</div>
                        <div class="content-buttons">
                            <button class="button">Label</button>
                            <button class="button icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="graphic-content">
                        <div class="graphic-label xsmall">Toggle</div>
                        <div class="content-buttons">
                            <input type="checkbox" id="test-switch" />
                            <label for="test-switch" class="switch">
                                
                            </label>
                        </div>
                    </div>
                </div>
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

        & .cover-content {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            align-content: center;
            flex: 1 0 0;
            gap: 50px;
            padding: 0 var(--Padding-Inner);
        }
    }

    @keyframes -global-animate-scroll {
        0% { transform: translate(0,-30px); opacity: 0; }
        50% {  transform: translate(0,0); opacity: 1; }
        100% { transform: translate(0,0); opacity: 0; }
    }

    .start-scrolling {
        position: absolute;
        bottom: 50px;
        left: 50%;
        margin-left: -24px;

        color: var(--Sub-Text);

        animation-name: animate-scroll;
        animation-duration: 2000ms;
        animation-iteration-count: infinite;
        animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
    }

    .juniper-icon {
        display: flex;
        padding: 5rem;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        border-radius: 24px;

        background: var(--Gradient, linear-gradient(180deg, #00C396 0%, #00645B 100%));

        & svg {
            width: 7rem;
        }
    }

    .juniper-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .juniper-colors-contain {
        display: flex;
        max-width: 800px;
        padding: 0 var(--Padding-Page);
        align-items: center;
    }

    .juniper-colors-left, .juniper-colors-right {
        display: flex;
        flex: 1 0 0;
        align-self: stretch;
        max-width: 280px;
    }

    .juniper-colors-left {
        align-items: flex-end;
    }

    .juniper-colors-right {
        display: flex;
        align-items: flex-start;
    }

    @media screen and (max-width: 768px) {
        .juniper-colors-contain {
            flex-direction: column-reverse;
            gap: var(--Padding-Large);
        }

        .juniper-colors-left, .juniper-colors-right {
            margin: 0 auto;
            text-align: center;
        }
    }

    .juniper-colors {
        width: 320px;
        height: 320px;
        position: relative;

        & svg {
            position: absolute;
            top: 0;
            left: 0;

            &:nth-child(1) { fill: var(--Header-Text); }
            &:nth-child(2) { fill: var(--Body-Text); }
            &:nth-child(3) { fill: var(--Sub-Text); }
            &:nth-child(4) { fill: var(--Background-Base); }
            &:nth-child(5) { fill: var(--Primary-Color); }
        }

        & img {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 160px;
            height: 160px;
            margin-left: -80px;
            margin-top: -80px;
            object-fit: cover;
            border-radius: 999px;
        }
    }

    .project-content {
        display: flex;
        width: 100vw;
        padding: 25rem 0px;
        flex-direction: column;
        align-items: center;
        gap: 25rem;

        background: var(--Background-Alt);

        transition: background-color 200ms;

        & section {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5rem;
            padding: 0 var(--Padding-Page);

            & h1, h2, h3, p {
                max-width: 800px;
                width: 100%;
            }
        }
    }

    .graphic-contain {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 800px;
        width: 100%;
        gap: 1px;
        border-radius: 12px;
        overflow: hidden;

        & .graphic-content {
            display: flex;
            position: relative;
            padding: 10rem 0;
            justify-content: center;
            align-items: center;
            align-self: stretch;
            gap: var(--Padding-XLarge);

            background: var(--Background-Base);

            transition: background-color 200ms;

            & .content-colors {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                align-self: stretch;

                padding: 0 var(--Padding-Large);
                gap: var(--Padding-XLarge);
            }

            & .content-typography {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                align-self: stretch;
                
                padding: 0 var(--Padding-Inner);
                gap: var(--Padding-Medium);
            }

            & .content-iconography, .content-buttons, .content-toggle {
                width: 100%;
                display: flex;
                align-items: flex-end;
                align-content: flex-end;
                align-self: stretch;
                flex-wrap: wrap;

                padding: 0 var(--Padding-Inner);
                gap: var(--Padding-Large);
            }
        }

        & .graphic-label {
            position: absolute;
            left: var(--Padding-Large);
            top: var(--Padding-Large);
        }
    }

    .colors {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: flex-start;
        align-self: stretch;

        gap: var(--Padding-Small);

        & .color {
            display: flex;
            position: relative;
            width: 14rem;
            height: 20rem;
            padding: 2px;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-start;
            border-radius: 12px;

            &.color-1 { background: var(--Header-Text); }
            &.color-2 { background: var(--Body-Text); }
            &.color-3 { background: var(--Sub-Text); }
            &.color-4 { background: var(--Primary-Color); }

            &::before {
                content: '';
                width: 1.6rem;
                height: 1.6rem;
                position: absolute;
                right: 1.2rem;
                top: 1.2rem;
                border-radius: 999px;

                background: var(--Background-Base);
            }

            & .label {
                display: flex;
                padding: 2rem;
                flex-direction: column;
                align-items: flex-start;
                align-self: stretch;
                border-radius: 10px;

                gap: var(--Padding-XSmall);

                background: var(--Background-Alt);

                & .xsmall {
                    line-height: 1;
                }
            }
        }
    }

    .label-header {
        color: var(--Header-Text);
        font-weight: 700;
        line-height: 1;
    }

    .base-color {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: var(--Padding-XSmall);

        & p {
            text-align: center;
        }
    }

    #test-switch {
        display: none;

        &:checked + .switch:after {
            left: 30px;
        }
    }
</style>