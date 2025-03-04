import React from "react";
import styled from 'styled-components';
import {Link, useLocation} from 'react-router-dom';
import { motion } from "framer-motion";

const Nav = () => {
    const activepath = useLocation();
    return(
            <StyledNav>
                <h1>
                    <Link id="logo" to="/">
                        Shenuque               
                    </Link>
                </h1>
                <SocialMediaBar>
                    <a href="https://twitter.com/shenuque" target="_blank">
                        <li className="social-media" id="twitter">                   
                            <i class="fa-brands fa-twitter"></i>
                        </li>
                    </a>
                    <a href="https://www.youtube.com/channel/UC47cERyYBJbsxR3rt8Lh6DQ" target="_blank">
                        <li className="social-media" id="youtube">
                            <i class="fa-brands fa-youtube"></i>
                        </li>
                    </a>
                    
                    <a href="https://www.tiktok.com/@fakeshenuque?lang=en" target="_blank">
                        <li className="social-media" id="tiktok">
                            <i class="fa-brands fa-tiktok"></i>
                        </li>
                    </a>
                    
                    <a href="https://www.instagram.com/shenuque/" target="_blank">
                        <li className="social-media" id="instagram">
                            <i class="fa-brands fa-instagram"></i>
                        </li>
                    </a>                
                </SocialMediaBar>
                <ul>
                    <li className="nav-text">
                        <Link to="/">
                            About Me
                        </Link>
                        <Line 
                            transition={{ duration: 0.75 }} 
                            initial={{ width: "0%" }} 
                            animate={{ width: activepath.pathname === "/" ? "50%" : "0%" }} 
                        />
                    </li>
                    <li className="nav-text">
                        <Link to="/photos">
                            Photos
                        </Link>
                        <Line 
                            transition={{ duration: 0.75 }} 
                            initial={{ width: "0%" }} 
                            animate={{ width: activepath.pathname === "/photos" ? "50%" : "0%" }} 
                        />
                    </li>
                    {/* <li className="nav-text">
                        <Link to="/work">
                            Next Show
                        </Link>
                        <Line 
                            transition={{ duration: 0.75 }} 
                            initial={{ width: "0%" }} 
                            animate={{ width: activepath.pathname === "/work" ? "50%" : "0%" }} 
                        />
                    </li> */}
                    <li className="nav-text">
                        <Link to="/calendar">
                            Calendar
                        </Link>
                        <Line 
                            transition={{ duration: 0.75 }} 
                            initial={{ width: "0%" }} 
                            animate={{ width: activepath.pathname === "/calendar" ? "50%" : "0%" }} 
                        />
                    </li>
                    <li className="nav-text">
                        <Link to="/videos">
                            Videos
                        </Link>
                        <Line 
                            transition={{ duration: 0.75 }} 
                            initial={{ width: "0%" }} 
                            animate={{ width: activepath.pathname === "/videos" ? "50%" : "0%" }} 
                        />
                    </li>
                    <li className="nav-text special-text">
                        <Link to="/where">
                            Tell Me Where to Perform
                        </Link>
                        <Line 
                            transition={{ duration: 0.75 }} 
                            initial={{ width: "0%" }} 
                            animate={{ width: activepath.pathname === "/where" ? "40%" : "0%" }} 
                        />
                    </li>
                </ul>
            </StyledNav>
        
    );
};

const StyledNav = styled.div`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #E0A2A2;
    position: sticky;
    top: 0;
    z-index: 50;
    a{
        color: white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;
        flex-direction: row;
        flex-wrap: wrap;
    }
    #logo{
        font-size: 1.8rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }
    #logo:hover{
        color: #23d997;
    }
    li{
        padding-left: 6rem;
        position: relative;
    }
    .nav-text{
        a:hover{
            color: #23d997;
        }
    }
    .special-text{
        font-size: .8rem;
    }
    .social-media{
        padding-left: 3rem;
        width: 5rem;
        color: #ffffff;
    }
    #youtube:hover{
        color: #FF0000;
        cursor: pointer;
    }
    #twitter:hover{
        color: #00acee;
        cursor: pointer;
    }
    #tiktok:hover{
        color: black;
        cursor: pointer;
    }
    #instagram:hover{
        color: #8a3ab9;
        cursor: pointer;
    }
    @media (max-width: 1300px){
        flex-direction: column;
        padding: 1rem;
        ul {
            padding: 1.2rem;
            justify-content: space-around;
            width: 100%;
            li {
                padding: 0;
            }
        }
    }
    @media only screen and (max-width: 420px){
        ul{
            gap: 20px;
        }
    }
`;

const SocialMediaBar = styled.ul`
    @media (max-width: 480px){
        margin-right: 1rem;
    }
    @media (max-width: 576px){
        margin-right: 1rem;
    }
`;

const Line = styled(motion.div)`
    height: 0.3rem;
    background: #23d997;
    width: 0%;
    position: absolute;
    bottom: -80%;
    left: 60%;
    @media (max-width: 1300px){
        left: 0%;
    }
`;

export default Nav;