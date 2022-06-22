import React, { useState } from "react";
// Framer Motion
import {motion} from 'framer-motion';
// Styled Components
import styled from 'styled-components';
import {fade, titleAnim, fadeIn, scrollReveal} from '../animation';


const CalendarSection = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    const stopLoadingMessage = () => {
        setIsLoaded(true);
    }

    return (
        <GoogleCalendar>
            {!isLoaded ? (
                    <Spinner variants={fade}>
                        <h3>Google Calendar Loading...</h3>
                    </Spinner>
                ) : ""
            }
            <iframe onLoad={stopLoadingMessage} src="https://calendar.google.com/calendar/embed?height=750&wkst=1&bgcolor=%2333B679&ctz=America%2FNew_York&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=1&src=dGlzc2VyYXNoZW5hbEBnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%237986CB&color=%237986CB" style={{border:0}} frameBorder="0" scrolling="no"></iframe>
        </GoogleCalendar> 
    );
};

const Spinner = styled(motion.div)`
    display: flex;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 45%;
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
    @media (max-width: 480px){
        top: 50%;
        left: 23%;
    }
`;

const GoogleCalendar = styled(motion.div)`
    iframe{
        width: 1500px;
        height: 725px;
        padding-top: 5rem;
        padding-left: 8rem;
        z-index: 2;
    }
    @media (max-width: 480px){
        iframe{
            width: 40rem;
            height: 48rem;
            position: absolute;
            left: -24%;
        }
    }
`;

export default CalendarSection;