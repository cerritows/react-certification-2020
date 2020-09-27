import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif;
        height: 100%;
        background-color: ${(props) => props.theme.backgroundColor};

        & h1, h2, h3, h4, h5, h6 {
            color: ${(props) => props.theme.primaryColor};
            font-weight: 200;
            text-transform: uppercase;
        }

        & h1 {
            font-size: 74px;
            margin: 0;
        }
    }
`;

export default GlobalStyle;
