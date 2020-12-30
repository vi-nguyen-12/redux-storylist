import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Poppins', sans-serif;
        /* background-color:#E9EEF5; */
        background-color: transparent;
    }
    #root{
        height:100vh;
    }
    :root{
        --primary-color: #3bafaa;
    }
`;
