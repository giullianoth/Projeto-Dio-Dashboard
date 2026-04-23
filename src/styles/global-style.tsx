import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --color-background: #1E192C;
        --color-background-alt: #151515;
        --color-background-neutral: #565656;
        --color-background-neutral-alt: #3B4651;
        --color-accent: #E4105D;
        --color-accent-alt: #8647AD;
        --color-accent-neutral: #3B3450;
        --color-yellow: #E5E044;
        --color-green: #23DD7A;
        --color-white: #FFF;

        --font-open-sans: "Open Sans", sans-serif;

        --transition: all 0.3s ease;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--color-background);
        color: var(--color-white);
        font-family: var(--font-open-sans);
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    img {
        display: block;
        max-width: 100%;
    }

    svg {
        vertical-align: middle;
    }
`

export default GlobalStyle