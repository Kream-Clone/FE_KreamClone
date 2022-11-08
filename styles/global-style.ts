import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "./theme";

export const GlobalStyle = createGlobalStyle`
    ${reset}

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
<<<<<<< HEAD
    }
=======
    }a
>>>>>>> ea3b2080473019c76c2c3a8a7d1e229ecc82baf2
    li{
        cursor:pointer;
    }
    ul, ol, li{
        list-style:none;
    }
    input{
        outline: 0;
        border: 0;
        resize: none;
        border-radius: 0;
        -webkit-appearance: none;
        background-color: transparent;
    }
    h2{
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
        @media (max-width: 768px) {
            margin-block-start: 0;
            margin-block-end: 0;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            font-weight: bold;
        }

    }
    :focus {
        outline: none;
        border: none;
    }
<<<<<<< HEAD
    
=======

>>>>>>> ea3b2080473019c76c2c3a8a7d1e229ecc82baf2
    html{
        font-size: 11px;
        -webkit-text-size-adjust: none;
        font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;       
        font-display: fallback;
        ${media.tablet}{
            font-size: 10px;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        &:disabled {
            cursor: default;
            fill: #f2f3f4;
        }
    }

    .pc-tablet-only {
        display: block;
        ${media.mobile} {
            display: none;
        }
    }
    .tablet-mobile-only{
        display: none;
        ${media.tablet}{
            display:block;
        }
    }
    .mobile-only {
        display: none;
        ${media.mobile} {
            display: block;
        }
    }
`;
