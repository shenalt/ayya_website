import React from "react";
// Framer Motion
import {motion} from 'framer-motion';
// Animation
import { titleAnim, fade, photoAnim, slider, sliderContainer } from "../animation";
import { Frame1, Frame2, Frame3, Frame4 } from "../styles";
// Styled Components
import styled from 'styled-components';

const WhereSection = () => {

    return (
        <GoogleForm>
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <SpecialFrame 
                animate={{ opacity: 1, transition: {delay: 1} }}
                initial={{ opacity: 0 }}
                src="https://docs.google.com/forms/d/e/1FAIpQLSeZ8yG9F4ND5u9UwreSuOh6PaHkSVGqVp2jVlNL4PShtbMXZg/viewform?embedded=true" height="800" frameborder="0" marginheight="0" marginwidth="0"
            >
                Loading…
            </SpecialFrame>
        </GoogleForm>
    );
};

const SpecialFrame = styled(motion.iframe)`
    margin: 4rem 0rem;
    width: 100%;

    @media only screen and (max-width: 768px){
        width: 90%;
        margin: 2rem 0rem;
    }
    @media only screen and (max-width: 420px){
        width: 85%;
    }
`;

const GoogleForm = styled(motion.div)`
    text-align: center;
`;

export default WhereSection;