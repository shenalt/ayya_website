import React from "react";
// Page Components
import CalendarSection from "../components/CalendarSection";
// Animations
import { motion } from 'framer-motion';
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

const Calendar = () => {
    return(
        <motion.div 
            variants={pageAnimation} 
            initial="hidden" 
            exit="exit" 
            animate="show"
        >
            <CalendarSection />         
        </motion.div>
    );
};

export default Calendar;