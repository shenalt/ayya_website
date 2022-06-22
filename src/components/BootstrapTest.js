import React from "react";
import home1 from '../img/home1.png';
import ayyaPho from '../img/ayyaPhoto.webp';
// Framer Motion
import {motion} from 'framer-motion'
import Wave from "./Wave";
// Animation
import { titleAnim, fade, photoAnim } from "../animation";
// Styled Components
import { About, Description, Hide, Image } from "../styles";
import styled from 'styled-components';


const BootstrapTest = () => {

    return (
        <div className="container">
                        <iframe src="https://calendar.google.com/calendar/embed?height=750&wkst=1&bgcolor=%2333B679&ctz=America%2FNew_York&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=1&src=dGlzc2VyYXNoZW5hbEBnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%237986CB&color=%237986CB" style={{border:0}} frameBorder="0" scrolling="no"></iframe>
        </div>
        
    );
};

const Summary = styled(motion.p)`
    padding: 1rem 0rem;
    font-size: 1.2rem;
`;

const IntroText = styled(motion.div)`
    color: black;
`;

export default BootstrapTest;