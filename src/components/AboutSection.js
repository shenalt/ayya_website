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
                    Shenuque is a Queer Sri Lankan actor, writer, and comedian hailing from Staten Island, New York. With a passion for storytelling, he's graced the stage in Off-Broadway productions and 
                    contributed his writing talents to HBO Max. As a co-founder of Many Sided Media, Shenuque's creativity shines in the award-winning show My First Dungeon, which has earned numerous accolades.               
                </Summary>       
                <Summary variants={fade}>
                    Currently, Shenuque is working on his stand-up special, Where Do We Belong?, and has performed at renowned festivals such as the New York Comedy Festival, NY Sketchfest, YAAASFest, 5th 
                    Borough Comedy Festival, and the Very Big Very Asian Comedy Festival. He was also a Quarterfinalist at the San Diego Comedy Festival.
                </Summary>    
                <Summary variants={fade}>
                    In addition to his stand-up work, Shenuque is the producer and performer of the comedy show Petty Claims, where audience members can bring their petty grievances against friends or family 
                    to be hilariously litigated in a court of comedy.
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