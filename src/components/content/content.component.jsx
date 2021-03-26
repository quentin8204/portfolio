// React
import React from 'react';

// Styles
import './content.styles.scss';

// Components
import Banner from '../banner/banner.component';
import About from '../about/about.component';
import Projects from '../projects/projects.component';
import Contact from '../contact/contact.component';

const Content = ({homeRef, aboutRef, projectsRef, contactRef, projectsScroll}) => (
  <div className='content' tabIndex='-1'>
    <Banner homeRef={homeRef} projectsScroll={projectsScroll}/>
    <About aboutRef={aboutRef}/>
    <Projects projectsRef={projectsRef}/>
    <Contact contactRef={contactRef}/>
  </div>
);

export default Content;