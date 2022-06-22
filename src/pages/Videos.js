import React from "react";
// Page Components
import VideosSection from "../components/VideosSection";
// Animations
import { motion } from 'framer-motion';
import { pageAnimation } from "../animation";

const Videos = () => {
    return(
        <motion.div 
            variants={pageAnimation} 
            initial="hidden" 
            exit="exit" 
            animate="show"
        >
            <VideosSection />         
        </motion.div>
    );
};

export default Videos;