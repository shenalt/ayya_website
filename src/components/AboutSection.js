import React from "react";
import ayyaPho from '../img/aiyaReplacement.jpg';
// Framer Motion
import {motion} from 'framer-motion';
import Wave from "./Wave";
// Animation
import { titleAnim, fade, photoAnim } from "../animation";
// Styled Components
import { About, Description, Hide } from "../styles";
import styled from 'styled-components';


const AboutSection = () => {

    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h1 variants={titleAnim}>Shenuque Tissera</motion.h1>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>Actor. <span>Comedian.</span> Writer.</motion.h2>
                        <a href="/work"><motion.button variants={fade}>Next Show</motion.button></a>
                    </Hide>                                      
                </motion.div>
                <Summary variants={fade}>
                    Shenuque is a Queer Sri Lankan actor, writer, and comedian born and raised in Staten Island, New York. He is currently playing 'Jaylen' in the 
                    Off-Broadway production of the Art of Killin It! Shenuque has recently written and performed for HBO Max's Human by Orientation platform. Shenuque is also currently a writer
                    for Someecards.com. Shenuque has been performing standup for 4 years. Throughout that time he's hosted and produced the successful stand up show Token White Guy at QED and
                    Caroline's on Broadway and is now co-producing and hosting the comedy show We Fixed It! alongside Peter Grosz and Vivek Netrakanti. Shenuque was a featured writer and performer
                    at the People's Improv Theater House Sketch program writing and performing live sketch comedy. Shenuque has performed in festivals such as NY Sketchfest, YAAASFest, 5th Borough
                    Comedy Festival, Very Big Very Asian Comedy Festival and was a Quarterfinalist at the San Diego Comedy Festival. Come see him perform!
                </Summary>                
            </Description>
            <FrontPageImg>
                <motion.img variants={photoAnim} src={ayyaPho} alt="photo" />
            </FrontPageImg>
            <Wave />
        </About>
    );
};

const Summary = styled(motion.p)`
    padding: 1rem 0rem;
    font-size: 1.2rem;
`;

const FrontPageImg = styled(motion.div)`
    z-index: 2;
    flex: 1;
    overflow: hidden;
    img{
        width: 90%;
        height: auto;
        object-fit: cover;
    }
    @media (max-width: 480px){
        img{
        width: 80%;
    }
    }
    @media (max-width: 576px){
        img{
        width: 80%;
    }
    }
`;

export default AboutSection;