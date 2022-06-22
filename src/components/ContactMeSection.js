import React, { useRef, useState, useEffect } from "react";
// Import Styles
import styled from 'styled-components';
import { About, Description, Image } from "../styles";
import {fade, titleAnim, fadeIn, scrollReveal} from '../animation';
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
// Import EmailJS
import emailjs from '@emailjs/browser';

const ServicesSection = () => {
    const [element, controls] = useScroll();

    const form = useRef();
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ue74wyi', 'template_mm0690m', e.target, 'Bv_hLNLV5bkd4kKZm')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          setName('');
          setEmail('');
          setMessage('');
          e.target.reset();
      };

    return(
        <EmailForm variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            <motion.h2 variants={fade}>Contact Me</motion.h2>
            <form ref={form} onSubmit={sendEmail}>
                <label></label>
                <motion.input 
                    variants={fade} 
                    type="text" 
                    name="from_name" 
                    placeholder="Name*"
                    onChange={e => setName(e.target.value)} 
                />
                <label></label>
                <motion.input 
                    variants={fade} 
                    type="email" 
                    name="from_email" 
                    placeholder="Email*"
                    onChange={e => setEmail(e.target.value)} 
                />
                <label></label>
                <motion.input 
                    variants={fade} 
                    type="text" 
                    name="subject" 
                    placeholder="Subject" 
                />
                <label></label>
                <motion.textarea 
                    variants={fade} 
                    name="message" 
                    placeholder="Message*"
                    onChange={e => setMessage(e.target.value)}
                />

                {name.length > 0 && email.length > 0 && message.length > 0 ? (
                    <motion.input 
                        variants={fade} 
                        type="submit" 
                        value="Send" 
                        id="submitBtn" 
                    />
                ) : 
                    <motion.input 
                        variants={fade} 
                        type="submit" 
                        value="Send" 
                        id="submitBtn" 
                        disabled
                    />
                }                
            </form>
        </EmailForm>
        // <Services variants={fade} animate={controls} initial="hidden" ref={element}>
        //     <Description>
        //         <h2>High <span>quality</span> services.</h2>
        //         <Cards>
        //             <Card>
        //                 <div className="icon">
        //                     <img src={clock} alt="clock" />
        //                     <h3>Efficiency</h3>
        //                 </div>
        //                 <p>ellsdkndfslk lsieikjfdsl slkjdlf</p>
        //             </Card>
        //             <Card>
        //                 <div className="icon">
        //                     <img src={diaphragm} alt="diaphragm" />
        //                     <h3>Diaphragm</h3>
        //                 </div>
        //                 <p>ellsdkndfslk lsieikjfdsl slkjdlf</p>
        //             </Card>
        //             <Card>
        //                 <div className="icon">
        //                     <img src={money} alt="money" />
        //                     <h3>Affordable</h3>
        //                 </div>
        //                 <p>ellsdkndfslk lsieikjfdsl slkjdlf</p>
        //             </Card>
        //             <Card>
        //                 <div className="icon">
        //                     <img src={teamwork} alt="teamwork" />
        //                     <h3>Teamwork</h3>
        //                 </div>
        //                 <p>ellsdkndfslk lsieikjfdsl slkjdlf</p>
        //             </Card>
        //         </Cards>
        //     </Description>
        //     <Image>
        //         <img src={home2} alt="Second Image" />
        //     </Image>
        // </Services>
    );
};

const EmailForm = styled(About)`
    position: absolute;
    left: 25%;
    width: 60%;
    input{
        width: 70%;
        padding-bottom: 2rem;
        margin-bottom: 1rem;
        margin-left: 1rem;
        align-content: center;
        border-radius: 4px;
    }
    input[type="email"] {
        padding: 5px 0px 5px 5px;
    }
    input[type="text"] {
        padding: 5px 0px 5px 5px;
    }
    #submitBtn{
        margin-left: 12.5rem;
        width: 26%;
        padding: 10px 5px 10px 5px;
        cursor: pointer;
        background-color: #23d997;
    }

    textarea{
        width: 70%;
        height: 10rem;
        margin-bottom: 1rem;
        margin-left: 1rem;
        padding: 5px 0px 5px 5px;
        border-radius: 4px;
    }
    h2{
        text-align: center;
    }

    @media (max-width: 480px){
        position: absolute;
        left: -1%;
        width: 100%;
        padding-top: 10rem;
        #submitBtn{
            margin-left: 2rem;
            width: 26%;
        }
    }
`;

const Services = styled(About)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px){
        justify-content: center;
    }
`;

const Card = styled.div`
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items: center;
        h3{
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`;

export default ServicesSection;