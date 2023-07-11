'use client';

import { createGlobalStyle } from "styled-components";
import { colors } from "./assets/colors/colors";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');

    *, *:before, *:after{
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    html, body{
        padding:0px;
        margin:0px;
        height: 100%;
    }

    body{
        background: ${colors.black02};
    }

    html,
    h1, 
    h2, 
    h3, 
    h4, 
    h5, 
    h6 {
        font-family: 'Open Sans', sans-serif;
        font-size: $font__size--body;
        color: $color__black--100;
        font-weight: $font__weight--normal;
    }

    h1, h1 a, 
    h2, h2 a, 
    h3, h3 a, 
    h4, h4 a, 
    h5, h5 a, 
    h6, h6 a {
        padding:0px;
        margin:0px;
    }

    a {
        cursor:pointer;
        text-decoration:none;
    }

    p {
        line-height:20px;
        margin:0px;
    }

    ul, ol {
        list-style:none;
        padding:0px;
        margin:0px;
    }

    table, caption, tbody, tfoot, thead, tr, th, td {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        text-align: inherit;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    hr{
        border: 0;
        height: 0;
        border-top: 1px solid ${colors.black20};
    }
`;