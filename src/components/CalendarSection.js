import React, { useState } from "react";
// Framer Motion
import {motion} from 'framer-motion';
// Styled Components
import styled from 'styled-components';
import {fade, slider, sliderContainer, pageAnimation} from '../animation';
import { Frame1, Frame2, Frame3, Frame4 } from "../styles";

const CalendarSection = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    const stopLoadingWheel = () => {
        setIsLoaded(true);
    }

    return (
        <GoogleCalendar 
            className="container-sm"
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
            {!isLoaded ? (
                    <Spinner variants={fade}>
                        <h3>Google Calendar Loading...</h3>
                    </Spinner>
                ) : ""
            }
            <GoogleIframe 
                onLoad={stopLoadingWheel} 
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showTitle=0&src=c293aGVyZWFyZXlvdXJlYWxseWZyb21AZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043"
                style={{border:0}} 
                frameBorder="0" 
                scrolling="no"
                animate={{ opacity: 1, transition: {delay: 1} }}
                initial={{ opacity: 0 }}
            >       
            </GoogleIframe>
        </GoogleCalendar> 
    );
};

const Spinner = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding-top: 25rem;
    z-index: 1;
    align-items: center;
    ::after{
        content: "";
        width: 25px;
        height: 25px;
        border: 10px solid #E0A2A2;
        border-bottom-color: #23d997;
        border-top-color: #23d997;
        border-radius: 50%;
        animation: loading 1s ease-out infinite;
    }
    @keyframes loading {
        to {
            transform: rotate(1turn);
        }
    }
    h3{
        padding-right: 5px;
    }
`;

const GoogleCalendar = styled(motion.div)`
    iframe{
        width: 100%;
        padding-top: 2rem;
        z-index: 2;
    }
    @media (max-width: 480px){
        iframe{
            height: 45rem;
        }
    }
    @media (max-width: 576px){
        iframe{
            height: 45rem;
        }
    }
    @media (max-width: 768px){
        iframe{
            height: 50rem;
        }
    }
    @media (max-width: 992px){
        iframe{
            height: 50rem;
        }
    }
    @media (max-width: 1200px){
        iframe{
            height: 50rem;
        }
    }
    @media (max-width: 1400px){
        iframe{
            height: 51rem;
        }
    }
    @media (max-width: 2600px){
        iframe{
            height: 51rem;
        }
    }
`;

const GoogleIframe = styled(motion.iframe)``;

export default CalendarSection;