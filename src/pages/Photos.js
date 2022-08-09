import React from "react";
// Animations
import { motion } from 'framer-motion';
import { pageAnimation, slider, sliderContainer } from "../animation";
import { Frame1, Frame2, Frame3, Frame4 } from "../styles";
import styled from 'styled-components';
// Photos
import ayyaOnStageRed from '../img/shenuqueOnstage1.jpg';
import ayyaBroadway from '../img/ShenuquePortrait.jpg';
import ayyaCoolStool from '../img/shenuqueStool.jpg';
import ayyaOnStage2 from '../img/ShenuqueOnstage2.jpg';
import ayyaOnStage3 from '../img/shenuqueOnstage3.jpg';
import ayyaPurpleCouch from '../img/ShenuquePurple.jpg';
import ayyaRedJacket from '../img/shenuqueRed.jpg';
import ayyaWhiteWall from '../img/ShenuqueOnline.jpg';

const Photos = () => {
    return(
        <PhotosContainer 
            variants={pageAnimation} 
            initial="hidden" 
            exit="exit" 
            animate="show"
            className="container"
        > 
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>

            <FirstPicRow 
                className="row" 
                animate={{ opacity: 1, transition: {delay: 1.5} }}
                initial={{ opacity: 0 }}
            >
                <div class="col-md-6 col-sm-12">
                    <Photo src={ayyaOnStageRed} alt="Shenuque on stage at Littlefield"></Photo>
                </div>
                <div class="col-md-6 col-sm-12">
                    <Photo src={ayyaOnStage2} alt="Shenuque on stage"></Photo> 
                </div>
            </FirstPicRow>

            <SecondPicRow 
                className="row"
                animate={{ opacity: 1, transition: {delay: 1.5} }}
                initial={{ opacity: 0 }}
            >
                <div class="col-12">
                    <Photo src={ayyaOnStage3} loading="lazy" alt="Shenuque on stage again"></Photo>
                </div>
            </SecondPicRow>

            <div className="row">
                <div class="col-md-6 col-sm-12">
                    <Photo src={ayyaPurpleCouch} loading="lazy" alt="Shenuque headshot in front of a purple couch"></Photo>
                </div>
                <div class="col-md-6 col-sm-12">
                    <Photo src={ayyaRedJacket} loading="lazy" alt="Shenuque headshot in a red jacket"></Photo>
                </div>
            </div>

            <div className="row">
                <div class="col-md-6 col-sm-12">
                    <Photo src={ayyaWhiteWall} loading="lazy" alt="Shenuque headshot against a white wall"></Photo>
                </div>
                <div class="col-md-6 col-sm-12">
                    <Photo src={ayyaBroadway} loading="lazy" alt="Shenuque at Broadway Comedy Club"></Photo>
                </div>
            </div>

            <div className="row">
                <div class="col-12">
                    <Photo src={ayyaCoolStool} loading="lazy" alt="Shenuque headshot at Caveat"></Photo>
                </div>
            </div>

        </PhotosContainer>     
    );
};

const Photo = styled(motion.img)`
    padding-bottom: 2rem;
    width: 100%;
`;

const FirstPicRow = styled(motion.div)`
    padding-top: 2rem;
`;

const SecondPicRow = styled(motion.div)``;

const PhotosContainer = styled(motion.div)``;

export default Photos;