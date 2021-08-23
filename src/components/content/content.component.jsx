// React
import React from 'react';

// Styles
import './content.styles.scss';

// Components
import Banner from '../banner/banner.component';
import About from '../about/about.component';
import Projects from '../projects/projects.component';
import Contact from '../contact/contact.component';

const Content = ({bannerLoaded, homeRef, aboutRef, projectsRef, contactRef, projectsScroll}) => (
  <div className={`content runContentAnimation`} tabIndex='-1'>
    <Banner bannerLoaded={bannerLoaded} homeRef={homeRef} projectsScroll={projectsScroll}/>
    <About aboutRef={aboutRef}/>
    <Projects projectsRef={projectsRef}/>
    <Contact contactRef={contactRef}/>
  </div>
);

export default Content;