import React from "react";
// Animations
import { motion } from 'framer-motion';
import { pageAnimation, fade, fadeNextShowFront, photoAnim, lineAnim, slider, sliderContainer } from "../animation";
import { Frame1, Frame2, Frame3, Frame4 } from "../styles";
import styled from 'styled-components';
import { useScroll } from "../components/useScroll.js";
// Photos
import ayyaBroadway from '../img/AyyaBroadway.jpg';
import ayyaCoolStool from '../img/AyyaCoolStool.jpg';
import ayyaOnStage1 from '../img/AyyaOnStage1.jpg';
import ayyaOnStage2 from '../img/AyyaOnStage2.jpg';
import ayyaOnStage3 from '../img/AyyaOnStage3.jpg';
import ayyaPurpleCouch from '../img/AyyaPurpleCouch.jpg';
import ayyaRedJacket from '../img/AyyaRedJacket.jpg';
import ayyaWhiteWall from '../img/AyyaWhiteWall.jpg';

const Photos = () => {
    // const [element1, controls1] = useScroll();
    // const [element2, controls2] = useScroll();
    // const [element3, controls3] = useScroll();
    // const [element4, controls4] = useScroll();
    return(
        <div> 
            <SlideshowContainer 
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
                
                <PhotoContainer 
                    animate={{ opacity: 1, transition: {delay: 0.9} }}
                    initial={{ opacity: 0 }}
                >
                    <Photo src={ayyaOnStage1} alt="Shenuque on stage at Littlefield"></Photo>
                </PhotoContainer>
                

                <PhotoContainer 
                    animate={{ opacity: 1, transition: {delay: 0.9} }}
                    initial={{ opacity: 0 }}
                >
                    <Photo src={ayyaOnStage2} alt="Shenuque on stage"></Photo>                
                </PhotoContainer>
                

                <PhotoContainer
                    animate={{ opacity: 1, transition: {delay: 0.9} }}
                    initial={{ opacity: 0 }}
                >
                    <Photo src={ayyaOnStage3} alt="Shenuque on stage again"></Photo>
                </PhotoContainer>
                

                <PhotoContainer>
                    <Photo src={ayyaPurpleCouch} alt="Shenuque headshot in front of a purple couch"></Photo>
                </PhotoContainer>

                <PhotoContainer>
                    <Photo src={ayyaRedJacket} alt="Shenuque headshot in a red jacket"></Photo>
                </PhotoContainer>

                <PhotoContainer>
                    <Photo src={ayyaWhiteWall} alt="Shenuque headshot against a white wall"></Photo>
                </PhotoContainer>

                <PhotoContainer>
                    <Photo src={ayyaBroadway} alt="Shenuque at Broadway Comedy Club"></Photo>
                </PhotoContainer>

                <PhotoContainer>
                    <Photo src={ayyaCoolStool} alt="Shenuque headshot at Caveat"></Photo>
                </PhotoContainer>
                
            </SlideshowContainer>
        </div>     
    );
};

const Photo = styled(motion.img)`
    padding-bottom: 4rem;
    width: 100%;
`;

const SlideshowContainer = styled(motion.div)`
    padding-top: 2rem;
    margin: auto;
    max-width: 80%;
    overflow: hidden;
`;

const PhotoContainer = styled(motion.div)`

`;

// const MySlides = styled(motion.div)`
//     display: none;
// `;

// const Prev = styled(motion.a)`
//     cursor: pointer;
//     //position: absolute;
//     //top: 50%;
//     width: auto;
//     //margin-top: -22px;
//     padding: 16px;
//     color: white;
//     font-weight: bold;
//     font-size: 18px;
//     transition: 0.6s ease;
//     border-radius: 0 3px 3px 0;
//     user-select: none;

//     :hover {
//         background-color: rgba(0,0,0,0.8);
//     }
// `;

// const Next = styled(motion.a)`
//     cursor: pointer;
//     //position: absolute;
//     //top: 50%;
//     width: auto;
//     //margin-top: -22px;
//     padding: 16px;
//     color: white;
//     font-weight: bold;
//     font-size: 18px;
//     transition: 0.6s ease;
//     border-radius: 0 3px 3px 0;
//     user-select: none;

//     :hover {
//         background-color: rgba(0,0,0,0.8);
//     }
// `;

// const Dot = styled(motion.span)`
//     cursor: pointer;
//     height: 15px;
//     width: 15px;
//     margin: 0 2px;
//     background-color: #bbb;
//     border-radius: 50%;
//     display: inline-block;
//     transition: background-color 0.6s ease;

//     .active, :hover {
//         background-color: #717171;
//     }
// `;

// const Title = styled.div`
//     margin-bottom: 4rem;
//     color: black;
//     @media (max-width: 1300px){
//         margin-top: 5rem;
//     }
// `;

// const Hide = styled.div`
//     overflow: hidden;
// `;

// const Circle = styled.div`
//     border-radius: 50%;
//     width: 3rem;
//     height: 3rem;
//     background: #353535;
// `;

// const Social = styled(motion.div)`
//     display: flex;
//     align-items: center;
//     h2{
//         margin: 2rem;
//     }
// `;

export default Photos;