import React from "react";
// Global Style
import GlobalStyle from "./components/GlobalStyle";
// Pages
import AboutMe from "./pages/AboutMe";
import Photos from "./pages/Photos";
import UpcomingWork from "./pages/UpcomingWork";
import Nav from "./components/Nav";
import Calendar from "./pages/Calendar";
import Videos from "./pages/Videos";
import Where from "./pages/Where";
// Router
import { Routes, Route, useLocation } from 'react-router-dom';
// Animation
import {AnimatePresence} from 'framer-motion';


function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence 
        exitBeforeEnter 
        onExitComplete={() => {
          window.scrollTo(0, 0);
      }}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<AboutMe />} />
          <Route path="/aboutme" exact element={<AboutMe />} />
          <Route path="/work" exact element={<UpcomingWork />} />
          <Route path="/photos" exact element={<Photos />} />
          <Route path="/calendar" exact element={<Calendar />} />
          <Route path="/videos" exact element={<Videos />} />
          <Route path="/where" exact element={<Where />} />
        </Routes>
      </AnimatePresence> 
    </div>
  );
}

export default App;
