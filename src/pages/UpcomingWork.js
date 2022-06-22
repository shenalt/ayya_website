import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
// Images 
import artOfKillinIt from '../img/artOfKillinIt.png';
import weFixedIt from '../img/weFixedIt.png';
import { Image } from "../styles";
// Animations
import { motion } from 'framer-motion';
import { pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer } from "../animation";
import { useScroll } from "../components/useScroll";

const MyWork = () => {
    const [element, controls] = useScroll();
    return(
        <Work 
            variants={pageAnimation} 
            initial="hidden" 
            exit="exit" 
            animate="show"
        >
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>           
            <Show>
                <UpcomingShowText variants={fade}>The Art of Killin' It | June 17th, 8:00PM</UpcomingShowText>        
                <motion.a href="https://www.exploretock.com/theartofkillinit" target="_blank">
                    <NextShowBtn 
                        animate={{ opacity: 1, transition: {delay: 1} }}
                        initial={{ opacity: 0 }}    
                    >
                        Get Tickets
                    </NextShowBtn>              
                </motion.a>                       
                <motion.div variants={lineAnim} className="line"></motion.div>              
                    <Hide>
                        <a href="https://www.theartofkillinit.com/" target="_blank">
                            <NextShowImg>
                                <Image>
                                    <motion.img variants={photoAnim} src={artOfKillinIt} alt="photo"></motion.img>
                                </Image>
                            </NextShowImg>
                        </a>
                    </Hide>                                     
            </Show>
            <Show ref={element} variants={fade} animate={controls} initial="hidden">
                <UpcomingShowText variants={fade}>We Fixed It | July 14th, 8:30PM</UpcomingShowText>
                <motion.a href="https://caveat.stellartickets.com/events/we-fixed-it/occurrences/a63b4966-3c9e-4214-adbe-ef3370220348" target="_blank">
                    <NextShowBtn>Get Tickets</NextShowBtn>              
                </motion.a> 
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Hide>
                    <a href="https://caveat.nyc/series/we-fixed-it/" target="_blank">       
                        <NextShowImg>
                            <Image>
                                <motion.img variants={photoAnim} src={weFixedIt} alt="We Fixed It!"></motion.img>
                            </Image>
                        </NextShowImg>
                    </a>
                </Hide>               
            </Show>
        </Work>
    );
};

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }
    @media (max-width: 1300px){
        padding: 2rem 2rem;
    }
`;

const Show = styled(motion.div)`
    padding-bottom: 10rem;
    color: white;
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`;

const Frame2 = styled(Frame1)`
    background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
    background: #8effa0;
`;

const NextShowBtn = styled(motion.button)`
    float: right;

    @media (max-width: 480px){
        width: 100%;
        margin-top: 1.5rem;
        margin-bottom: -2rem;
    }
`;

const NextShowImg = styled(motion.div)`
    margin: auto;
    width: 100%;
    padding: 1px;
    text-align: center;  
    
    height: auto;
    @media (max-width: 480px){
        margin-top: 5rem;
        img{
            height: 40vh;
        }
    }
`;

const UpcomingShowText = styled(motion.h2)`
    display: inline;   
`;

export default MyWork;