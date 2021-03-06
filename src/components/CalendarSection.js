import React, { useState } from "react";
// Framer Motion
import {motion} from 'framer-motion';
// Styled Components
import styled from 'styled-components';
import {fade, titleAnim, fadeIn, scrollReveal} from '../animation';


const CalendarSection = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    const stopLoadingWheel = () => {
        setIsLoaded(true);
    }

    return (
        <GoogleCalendar className="container-sm">
            {!isLoaded ? (
                    <Spinner variants={fade}>
                        <h3>Google Calendar Loading...</h3>
                    </Spinner>
                ) : ""
            }
            <iframe onLoad={stopLoadingWheel} src="https://calendar.google.com/calendar/embed?height=750&wkst=1&bgcolor=%2333B679&ctz=America%2FNew_York&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=1&src=dGlzc2VyYXNoZW5hbEBnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%237986CB&color=%237986CB" style={{border:0}} frameBorder="0" scrolling="no"></iframe>
        </GoogleCalendar> 
    );
};

const Spinner = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding-top: 25rem;
    //position: absolute;
    //top: 50%;
    //left: 45%;
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
    /* @media (max-width: 480px){
        top: 50%;
        left: 23%;
    } */
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

export default CalendarSection;