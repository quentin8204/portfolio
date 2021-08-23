// React
import React from 'react';

// Styles
import './banner.styles.scss';

// Viewport height mobile fix
import Div100vh from 'react-div-100vh';

// Responsive images import
import puntaSir320 from '../../assets/puntaSir320.jpg';
import puntaSir640 from '../../assets/puntaSir640.jpg';
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

const Banner = ({bannerLoaded, homeRef, projectsScroll}) => (
  <section ref={homeRef} className={`banner runBannerAnimation`}>
    <img
      onLoad={bannerLoaded}
      className="background"
      sizes="(max-width: 3840px) 100vw, 3840px"
      srcSet={`
      ${puntaSir320} 320w,
      ${puntaSir640} 640w,
      ${puntaSir960} 960w,
      ${puntaSir1280} 1280w,
      ${puntaSir1600} 1600w,
      ${puntaSir1920} 1920w,
      ${puntaSir2240} 2240w,
      ${puntaSir2560} 2560w,
      ${puntaSir2880} 2880w,
      ${puntaSir3200} 3200w,
      ${puntaSir3520} 3520w,
      ${puntaSir3840} 3840w`}
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