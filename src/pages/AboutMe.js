import React from "react";
// Page Components
import AboutSection from "../components/AboutSection";
import ContactMeSection from "../components/ContactMeSection";
// Animations
import { motion } from 'framer-motion';
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

const AboutMe = () => {
    return(
        <motion.div 
            variants={pageAnimation} 
            initial="hidden" 
            exit="exit" 
            animate="show"
        >
            <AboutSection />
            <ContactMeSection />                    
        </motion.div>
    );
};

export default AboutMe;