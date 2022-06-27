import React from "react";
// Framer Motion
import {motion} from 'framer-motion'
// Styled Components
import { Frame1, Frame2, Frame3, Frame4, Hide } from "../styles";
import { pageAnimation, fade, slider, sliderContainer } from "../animation";
import { useScroll } from "../components/useScroll";
import styled from 'styled-components';

const VideosSection = () => {
    const [element1, controls1] = useScroll();
    const [element2, controls2] = useScroll();
    const [element3, controls3] = useScroll();
    const [element4, controls4] = useScroll();
    return (
        <AllVideos
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
            <VideoContainer 
                animate={{ opacity: 1, transition: {delay: 1} }}
                initial={{ opacity: 0 }}
            >
                <motion.h4 variants={fade}>10/10 Dentists would recommend watching live, but if you can't here's the next best thing!</motion.h4>
                <Hide>
                    <iframe width="900" height="550" src="https://www.youtube.com/embed/Y-IBlRyLsCM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Hide>
            </VideoContainer>
            <VideoContainer ref={element1} variants={fade} animate={controls1} initial="hidden">
                <Hide>
                    <iframe width="900" height="550" src="https://www.youtube.com/embed/SvX12eocbpI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Hide>
            </VideoContainer>
            <VideoContainer ref={element2} variants={fade} animate={controls2} initial="hidden">
                <Hide>
                    <h4>Sri Lankan Food Tour with The Fung Bros</h4>
                    <iframe width="900" height="550" src="https://www.youtube.com/embed/NBmcc_bNi7Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Hide>
            </VideoContainer>
            <VideoContainer ref={element3} variants={fade} animate={controls3} initial="hidden">
                <Hide>
                    <h4>Drink That Drink!</h4>
                    <h4>Written By: Jason Piro</h4>
                    <h4>Directed By: Shenuque Tissera</h4>
                    <iframe width="900" height="550" src="https://www.youtube.com/embed/3xbD3c00gX0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Hide>
            </VideoContainer>
            <VideoContainer ref={element4} variants={fade} animate={controls4} initial="hidden">
                <Hide>
                    <h4>Catch Confessions</h4>
                    <h4>Written By: Vivek Netrakanti</h4>
                    <h4>Directed By: Vivek Netrakanti</h4>
                    <iframe width="900" height="550" src="https://www.youtube.com/embed/yw0ewThfQ0Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Hide>
            </VideoContainer>
        </AllVideos>
    );
};

const AllVideos = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h4{
        color: black;
    }
    h2{
        padding: 1rem 0rem;
    }
    @media (max-width: 1300px){
        padding: 2rem 2rem;
    }
`;

const VideoContainer = styled(motion.div)`
    padding-top: 5rem;
    padding-bottom: 5rem;
    text-align: center;
    
    @media (max-width: 480px){
        height: 90%;
        padding-top: 3rem;
        padding-bottom: 3rem;
        iframe, object, embed {
            border: 0;
            width: 100%;
            height: 100%;
        }
    }
    h4{
        padding-bottom: 2rem;
        color: black;
    }
`;

export default VideosSection;