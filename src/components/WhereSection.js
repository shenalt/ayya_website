import React from "react";
// Framer Motion
import {motion} from 'framer-motion';
// Animation
import { titleAnim, fade, photoAnim } from "../animation";
// Styled Components
import styled from 'styled-components';


const WhereSection = () => {

    return (
        <GoogleForm>
            <SpecialFrame src="https://docs.google.com/forms/d/e/1FAIpQLSeZ8yG9F4ND5u9UwreSuOh6PaHkSVGqVp2jVlNL4PShtbMXZg/viewform?embedded=true" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</SpecialFrame>
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