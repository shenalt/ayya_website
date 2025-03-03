import React from "react";
// Page Components
import WhereSection from "../components/WhereSection";
// Animations
import { motion } from 'framer-motion';
import { pageAnimation } from "../animation";

const Where = () => {
    return(
        <motion.div 
            variants={pageAnimation} 
            initial="hidden" 
            exit="exit" 
            animate="show"
        >
            <WhereSection />         
        </motion.div>
    );
};

export default Where;