import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1700px){
            font-size: 75%;
        }
    }

    body{
        background: #E8DFDF;
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
    }

    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: black;
        transition: all 0.5s ease;
        font-family: 'Inter', sans-serif;
        &:hover{
            background-color: #23d997;
            color: white;
        }
        a{
            color: black;
        }
    }

    h1{
        color: black;
    }
    h2{
        color: black;
        font-weight: lighter;
        font-size: 4rem;
    }
    h3{
        color: black;
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
    }

    span{
        font-weight: bold;
        color: #23d997;
    }

    p{
        padding: 3rem 0rem;
        color: black;
        font-size: 1.4rem;
    }

    input, textarea{
        font-family: 'Inter', sans-serif;
    }

    a{
        text-decoration: none;
    }
`;

export default GlobalStyle;