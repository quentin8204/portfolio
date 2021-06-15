// React
import React from 'react';

// Styles
import './banner.styles.scss';

// Viewport height mobile fix
import Div100vh from 'react-div-100vh';

// Responsive images import
import puntaSir960 from '../../assets/puntaSir960.jpg';
import puntaSir1280 from '../../assets/puntaSir1280.jpg';
import puntaSir1600 from '../../assets/puntaSir1600.jpg';
import puntaSir1920 from '../../assets/puntaSir1920.jpg';
import puntaSir2240 from '../../assets/puntaSir2240.jpg';
import puntaSir2560 from '../../assets/puntaSir2560.jpg';
import puntaSir2880 from '../../assets/puntaSir2880.jpg';
import puntaSir3200 from '../../assets/puntaSir3200.jpg';
import puntaSir3520 from '../../assets/puntaSir3520.jpg';
import puntaSir3840 from '../../assets/puntaSir3840.jpg';

const Banner = ({homeRef, projectsScroll}) => (
  <section ref={homeRef} className="banner">
    <img
      className="background"
      sizes="(max-width: 3840px) 100vw, 3840px"
      srcSet={`
      ${puntaSir960} 320w,
      ${puntaSir1280} 640w,
      ${puntaSir1600} 960w,
      ${puntaSir1920} 1280w,
      ${puntaSir2240} 1600w,
      ${puntaSir2560} 1920w,
      ${puntaSir2880} 2240w,
      ${puntaSir3200} 2560w,
      ${puntaSir3520} 2880w,
      ${puntaSir3840} 3200w`}
      src={puntaSir3840}
      alt="Punta Sir"
    />
    <Div100vh>
    <div className="color-overlay">
      <div className="heading">
        <h1 className="name">Quentin Neal</h1>
        <div className="description">Software Engineer</div>
        <a className="projects-button" onClick={projectsScroll} href="#projects">
        <span>Go To Projects</span>
        </a>
      </div>
    </div>
    </Div100vh>
  </section>
);

export default Banner;