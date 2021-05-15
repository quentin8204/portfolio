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

  useEffect(() => {
    localStorage.setItem('dark-mode', darkMode);
  }, [darkMode]);

  const changeColorScheme = () => {
    setDarkMode(prevMode => !prevMode);
  }

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
      <div className={`App ${darkMode ? 'dark' : 'light'} ${mouseUser ? 'mousedown' : 'keydown'}`}>
        <Header homeScroll={homeScroll} aboutScroll={aboutScroll} projectsScroll={projectsScroll} contactScroll={contactScroll} changeColorScheme={changeColorScheme} colorScheme={`${darkMode ? 'dark' : 'light'}`}/>
        <Content homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} projectsScroll={projectsScroll}/>
      </div>
    </FormspreeProvider>
  );
}

export default App;