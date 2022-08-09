import React, { useRef, useState } from "react";
// Import Styles
import styled from 'styled-components';
import { About } from "../styles";
import {fade, scrollReveal} from '../animation';
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

                <div>
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
                </div>                           
            </form>
        </EmailForm>
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
    @media (min-width: 1px) and (max-width: 1200px){
        position: absolute;
        left: 0%;
        width: 100%;
        padding-top: 10rem;
        #submitBtn{
            margin-left: 2rem;
            width: 26%;
        }
    }
    @media (min-width: 1201px) and (max-width: 1300px){
        position: absolute;
        left: 0%;
        width: 100%;
        padding-top: 10rem;
        #submitBtn{
            margin-left: 3rem;
            width: 26%;
        }
    }
    @media (min-width: 1301px) and (max-width: 1400px){
        position: absolute;
        left: 0%;
        width: 100%;
        padding-top: 10rem;
        #submitBtn{
            margin-left: 15.5rem;
            width: 26%;
        }
    }
    @media (min-width: 1401px) and (max-width: 1500px){
        position: absolute;
        padding-top: 10rem;
        #submitBtn{
            margin-left: 10rem;
            width: 26%;
        }
    }
    @media (min-width: 1501px) and (max-width: 1700px){
        position: absolute;
        padding-top: 10rem;
        #submitBtn{
            margin-left: 10rem;
            width: 26%;
        }
    }
    @media (min-width: 1701px) and (max-width: 1900px){
        position: absolute;
        padding-top: 10rem;
        #submitBtn{
            margin-left: 8rem;
            width: 26%;
        }
    }
    @media (min-width: 1901px) and (max-width: 3000px){
        position: absolute;
        padding-top: 10rem;
        #submitBtn{
            margin-left: 10.5rem;
            width: 26%;
        }
    }
`;

export default ServicesSection;