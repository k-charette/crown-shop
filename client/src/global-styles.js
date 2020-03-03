import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans Condensed';
        padding: 20px 60px;

        @media only screen and (min-device-width: 375px)
        and (max-device-width: 812px)
        and (-webkit-device-pixel-ratio : 3) {
            padding: 5px;
        }
    }   

    .fa-crown {
        color: black;
        font-size: 50px;
    }

    a {
        text-decoration: none;
        color: black;
    }

    * {
        box-sizing: border-box;
    }  
`;
