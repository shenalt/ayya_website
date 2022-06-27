import React, {useState} from "react";
import styled from 'styled-components';
import { About, Image, ImageFlexTwo } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout, LayoutGroup, MotionConfig, motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal, photoAnimExit, fade } from "../animation";
import weFixedIt from '../img/weFixedIt.png';


const FaqSection = () => {
    const [element, controls] = useScroll();
    return(
        <OGProjects variants={scrollReveal} ref={element} animate={controls} initial="hidden">
                <WeFixedItText>
                    <motion.h2>Original Projects</motion.h2>
                    <motion.h4>We Fixed It!</motion.h4>
                    <motion.h3>We Fixed It! is a comedy variety show hosted by Shenuque Tissera, Peter Grosz and Vivek Netrakanti every month at Caveat in Manhattan. The show was featured in the
                        Brooklyn Star Gazette. The show aims to whimsically take on the problems within entertainment by providing a platform for a diverse group of comedians.</motion.h3>
                </WeFixedItText>
                <WeFixedItImg>            
                    <ImageFlexTwo>
                        <motion.img variants={photoAnimExit} src={weFixedIt} alt="photo"></motion.img>
                    </ImageFlexTwo>
                </WeFixedItImg>
        </OGProjects>
    );
};

const OGProjects = styled(motion.div)`

`;

const WeFixedItText = styled(motion.div)`
    margin: auto;
    text-align: center;
    width: 50%;
    padding-bottom: 12px;
    h2{
        padding-bottom: 5px;
    }
    h3{
        color: black;
        background-color: #C1E0E5;
    }
    h4{
        padding-bottom: 8px;
    }
`;

const WeFixedItImg = styled(motion.div)`
    margin: auto;
    width: 90%;
    padding: 1px;
    text-align: center;  
    img{
        height: 20%;
    }
`;

export default FaqSection;