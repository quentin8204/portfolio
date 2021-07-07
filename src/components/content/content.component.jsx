// React
import React from 'react';

// Styles
import './content.styles.scss';

// Components
import Banner from '../banner/banner.component';
import About from '../about/about.component';
import Projects from '../projects/projects.component';
import Contact from '../contact/contact.component';

const Content = ({homeRef, aboutRef, projectsRef, contactRef, projectsScroll, animation}) => (
  <div className={`content ${animation ? 'runContentAnimation' : null}`} tabIndex='-1'>
    <Banner animation={animation} homeRef={homeRef} projectsScroll={projectsScroll}/>
    <About aboutRef={aboutRef}/>
    <Projects projectsRef={projectsRef}/>
    <Contact contactRef={contactRef}/>
  </div>
);

export default Content;