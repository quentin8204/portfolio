// React
import React, { useState, useEffect, useRef } from 'react';

// Styles
import './App.scss';

// Components
import Header from './components/header/header.component';
import Content from './components/content/content.component';

// Formspree
import { FormspreeProvider } from "@formspree/react";

const App = () => {

  const [darkMode, setDarkMode] = useState(localStorage.getItem('dark-mode') === 'true');
  const [mouseUser, setMouseUser] = useState(false);
  const [logoImageLoaded, setLogoImageLoaded] = useState(false);
  const [bannerImageLoaded, setBannerImageLoaded] = useState(false);

  // Logo and banner images. Functions run when images are loaded.
    const logoLoaded = () => {
      setLogoImageLoaded(true)
    }

    const bannerLoaded = () => {
      setBannerImageLoaded(true)
    }

  // Dark mode
  useEffect(() => {
    localStorage.setItem('dark-mode', darkMode);
  }, [darkMode]);

  const changeColorScheme = () => {
    setDarkMode(prevMode => !prevMode);
  }

  // Keyboard accessibility
  useEffect(() => {

    const mouseDownFunc = () => {
      setMouseUser(true);
      window.removeEventListener('mousedown', mouseDownFunc);
    }
  
    window.addEventListener('mousedown', mouseDownFunc);
    return () => {
      window.removeEventListener('mousedown', mouseDownFunc);
    };

  }, []);

  // Smooth scrolling (css solution shows bugs on some browsers)
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const homeScroll = () => {homeRef.current.scrollIntoView({ behavior: 'smooth' })}
  const aboutScroll = () => {aboutRef.current.scrollIntoView({ behavior: 'smooth' })}
  const projectsScroll = () => {projectsRef.current.scrollIntoView({ behavior: 'smooth' })}
  const contactScroll = () => {contactRef.current.scrollIntoView({ behavior: 'smooth' })}


  return (
    <FormspreeProvider project="1628451151437364529">
      <div id="spinner" className={`spinner ${darkMode ? 'dark' : 'light'} ${logoImageLoaded && bannerImageLoaded ? 'hide-spinner introAnimation' : null}`}>
        <div className="spinner-object"></div>
      </div>
      <div className={`App ${darkMode ? 'dark' : 'light'} ${mouseUser ? 'mousedown' : 'keydown'}`}>
        <Header logoLoaded={logoLoaded} homeScroll={homeScroll} aboutScroll={aboutScroll} projectsScroll={projectsScroll} contactScroll={contactScroll} changeColorScheme={changeColorScheme} colorScheme={`${darkMode ? 'dark' : 'light'}`}/>
        <Content bannerLoaded={bannerLoaded} homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} projectsScroll={projectsScroll}/>
      </div>
    </FormspreeProvider>
  );
}

export default App;