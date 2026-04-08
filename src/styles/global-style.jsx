import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

    :root {
        --color-background: #1E192C;
        --color-background-alt: #151515;
        --color-background-neutral: #565656;
        --color-accent: #E4105D;
        --color-accent-alt: #8647AD;
        --color-yellow: #E5E044;
        --color-green: #23DD7A;
        --color-white: #FFF;

        --font-open-sans: "Open Sans", sans-serif;
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
`

export default GlobalStyle