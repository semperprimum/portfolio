import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --fs-logo: 1.5rem;  // Logo (24px)
        --fs-50  : 1rem;    // Small Text (16px)
        --fs-100 : 1rem;    // Main Text (16px)
        --fs-200 : 1.5rem;  // Subheading (24px)
        --fs-300 : 3rem;    // Heading (48px)

        --fw-regular: 500;
        --fw-bold   : 700;

        --ff-main: "Inter Variable", sans-serif;
        --ff-accent: "Montserrat Variable", sans-serif;

        @media only screen and (min-width: 48em) {
            --fs-50 : 1.125rem;
            --fs-100: 1.5rem;
            --fs-200: 2rem;
            --fs-300: 5rem;
        }
    }

    body {
        background: ${(props) => props.theme.background};
        color     : ${(props) => props.theme.text};

        font-weight: var(--fw-regular);

        font-family: "Inter Variable", sans-serif;
    }

    html {
        color-scheme: dark light;
    }
`;
