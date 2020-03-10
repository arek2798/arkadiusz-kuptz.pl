import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
        font-family: 'Roboto';
        font-size: 16px;
    }

    button {
        padding: 0;
        cursor: pointer;
        font-family: 'Poppins';
    }

    input, textarea {
        font-family: 'Roboto';
        font-size: 16px;
        letter-spacing: 1px;
    }

    ul {
        padding: 0;
        margin: 0;
    }
`

export default GlobalStyle;