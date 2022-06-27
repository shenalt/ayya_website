import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
// Images 
import artOfKillinIt from '../img/artOfKillinIt.png';
import weFixedIt from '../img/weFixedIt.png';
import { Image } from "../styles";
// Animations
import { motion } from 'framer-motion';
import { pageAnimation, fade, fadeNextShowFront, photoAnim, lineAnim, slider, sliderContainer } from "../animation";
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
            <Show className="container-sm">
                <div className="row">
                    <div className="col-md-10 col-sm-9">
                        <UpcomingShowText className="" variants={fadeNextShowFront}>The Art of Killin' It | June 17th, 8:00PM</UpcomingShowText>
                    </div>
                    <div className="col-md-2 col-sm-3 center-block">
                        <motion.a href="https://www.exploretock.com/theartofkillinit" target="_blank">
                            <NextShowBtn 
                                animate={{ opacity: 1, transition: {delay: 1} }}
                                initial={{ opacity: 0 }}    
                            >
                                Get Tickets
                            </NextShowBtn>              
                        </motion.a>
                    </div>
                    <motion.div variants={lineAnim} className="line"></motion.div>              
                        <Hide>
                            <a href="https://www.theartofkillinit.com/" target="_blank">
                                <NextShowImg variants={photoAnim} src={artOfKillinIt} alt="We Fixed It"></NextShowImg>
                            </a>
                        </Hide> 
                </div>                                    
            </Show>
            <Show className="container-sm" ref={element} variants={fade} animate={controls} initial="hidden">
                <div className="row">
                    <div className="col-md-10 col-sm-9">
                        <UpcomingShowText className="" variants={fade}>We Fixed It | July 14th, 8:30PM</UpcomingShowText>
                    </div>
                    <div className="col-md-2 col-sm-3">
                        <motion.a href="https://caveat.stellartickets.com/events/we-fixed-it/occurrences/a63b4966-3c9e-4214-adbe-ef3370220348" target="_blank">
                            <NextShowBtn>Get Tickets</NextShowBtn>              
                        </motion.a>
                    </div>
                    <motion.div variants={lineAnim} className="line"></motion.div>              
                        <Hide>
                            <a href="https://www.theartofkillinit.com/" target="_blank">
                                <NextShowImg variants={photoAnim} src={weFixedIt} alt="We Fixed It"></NextShowImg>
                            </a>
                        </Hide> 
                </div>                                    
            </Show>



            
        </Work>
    );
};

const NextShowImg = styled(motion.img)`
    margin: auto;
    width: 100%;
    padding: 0.5rem;
    text-align: center;
`;

const NextShowBtn = styled(motion.button)`
    float: right;
    align-items: center;
    @media (min-width: 1px) and (max-width: 480px){
        width: 100%;
        margin: 1rem 0rem 2rem 0rem;
    }
    @media (min-width: 481px) and (max-width: 576px){
        width: 100%;
        margin: 1rem 0rem 2rem 0rem;
    }
    @media (min-width: 577px) and (max-width: 768px){
        margin-top: 50%;
    }
    @media (min-width: 769px) and (max-width: 992px){
        margin-top: 50%;
    }
    @media (min-width: 993px) and (max-width: 1200px){
        margin-top: 20%;
    }
    @media (min-width: 1201px) and (max-width: 1400px){
        margin-top: 10%;
    }
    @media (min-width: 1701px){
        margin-top: 20%;
    }
`;

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }
    @media (max-width: 1300px){
        padding: 1rem 1rem;
    }
    /* @media (max-width: 768px){
        padding: 0.1rem 0.1rem;
    } */
`;

const Show = styled(motion.div)`
    padding-bottom: 10rem;
    color: white;
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
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

const UpcomingShowText = styled(motion.h2)``;

export default MyWork;