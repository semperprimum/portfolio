import { createGlobalStyle } from "styled-components";
import ellipseBlue from "../../assets/ellipse-blue.png";
import ellipsePurple from "../../assets/ellipse-purple.png";

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
            --fs-100: 1.25rem;
            --fs-200: 2rem;
            --fs-300: 5rem;
        }
    }

    body {
        background-color: ${(props) => props.theme.background};
        color           : ${(props) => props.theme.text};

        font-weight: var(--fw-regular);
        font-family: "Inter Variable", sans-serif;
        /* font-size: var(--fs-100); */

        /* background-image: url(${ellipseBlue}), url(${ellipsePurple});
        background-size: min(55.5rem, 180%), min(55.5rem, 180%);
        background-position: top 15vh left -60vw, top -20vh right -60vw;
        background-repeat: no-repeat */
    }

    html {
        color-scheme: dark light;
    }
`;
