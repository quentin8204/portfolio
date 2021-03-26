// React
import React from 'react';

// Styles
import './projects.styles.scss';

import crwnClothing960 from '../../assets/crwnClothing960.jpg';
import crwnClothing1280 from '../../assets/crwnClothing1280.jpg';
import crwnClothing1600 from '../../assets/crwnClothing1600.jpg';
import crwnClothing1920 from '../../assets/crwnClothing1920.jpg';
import crwnClothing2240 from '../../assets/crwnClothing2240.jpg';
import crwnClothing2560 from '../../assets/crwnClothing2560.jpg';
import crwnClothing2880 from '../../assets/crwnClothing2880.jpg';
import crwnClothing3200 from '../../assets/crwnClothing3200.jpg';
import crwnClothing3520 from '../../assets/crwnClothing3520.jpg';
import crwnClothing3840 from '../../assets/crwnClothing3840.jpg';

import portfolio960 from '../../assets/portfolio960.jpg';
import portfolio1280 from '../../assets/portfolio1280.jpg';
import portfolio1600 from '../../assets/portfolio1600.jpg';
import portfolio1920 from '../../assets/portfolio1920.jpg';
import portfolio2240 from '../../assets/portfolio2240.jpg';
import portfolio2560 from '../../assets/portfolio2560.jpg';
import portfolio2880 from '../../assets/portfolio2880.jpg';
import portfolio3200 from '../../assets/portfolio3200.jpg';
import portfolio3520 from '../../assets/portfolio3520.jpg';
import portfolio3840 from '../../assets/portfolio3840.jpg';

const Projects = ({projectsRef}) => (
  <section ref={projectsRef} className="projects">
    <div className="project">
      <img
        className="background"
        sizes="(max-width: 3840px) 100vw, 3840px"
        srcSet={`
        ${crwnClothing960} 320w,
        ${crwnClothing1280} 640w,
        ${crwnClothing1600} 960w,
        ${crwnClothing1920} 1280w,
        ${crwnClothing2240} 1600w,
        ${crwnClothing2560} 1920w,
        ${crwnClothing2880} 2240w,
        ${crwnClothing3200} 2560w,
        ${crwnClothing3520} 2880w,
        ${crwnClothing3840} 3200w`}
        src={crwnClothing3840}
        alt="Crown Clothing"
      />
      <div className="project-info">
        <h3 className="title">Crwn-Clothing</h3>
        <div className="technologies">
          <div className="box">1080p</div>
          <div className="box">HTML5</div>
          <div className="box">CSS / SCSS</div>
          <div className="box">Javascript</div>
          <div className="box">React</div>
          <div className="box">React Router</div>
          <div className="box">Stripe</div>
          <div className="box">Redux libraries</div>
          <div className="box">Redux-Saga</div>
          <div className="box">Firebase</div>
          <div className="box">Reselect</div>
        </div>
        <div className="description">
          <p>I created this project based off a course called Complete React Developer by Andrei Neagoie.</p>
          <p>I worked on this project in order to gain general knowledge of the current web development environment and to brush up on my coding skills. This website has functionality such as sign in/out, sign up, cart functionality and checkout with stripe and more.</p>
          <p>I decide to push this project further by overhauling the look of the site with CSS. I added a fixed menu for easy menu access, used a dark color scheme that fits with the image assets, added animations and made the site responsive to 1080p resolution.</p>
          <p>Future plans are to improve responsiveness, aesthetics, refactor, and expand/add more JavaScript features.</p>
        </div>
        <div className="demo-code">
          <a className="box" href="https://crwn-live-quentin.herokuapp.com/" target="_blank" rel="noopener noreferrer">Demo</a>
          <a className="box" href="https://crwnshop.herokuapp.com/" target="_blank" rel="noopener noreferrer">Original</a>
          <a className="box" href="https://github.com/quentin8204/crwn-clothing" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </div>

    <div className="project even blue">
      <img
        className="background"
        sizes="(max-width: 3840px) 100vw, 3840px"
        srcSet={`
        ${portfolio960} 320w,
        ${portfolio1280} 640w,
        ${portfolio1600} 960w,
        ${portfolio1920} 1280w,
        ${portfolio2240} 1600w,
        ${portfolio2560} 1920w,
        ${portfolio2880} 2240w,
        ${portfolio3200} 2560w,
        ${portfolio3520} 2880w,
        ${portfolio3840} 3200w`}
        src={portfolio3840}
        alt="Portfolio"
      />
      <div className="project-info">
        <h3 className="title">Portfolio</h3>
        <div className="technologies">
          <div className="box">4k</div>
          <div className="box">HTML5</div>
          <div className="box">CSS / SCSS</div>
          <div className="box">Javascript</div>
          <div className="box">React</div>
          <div className="box">Formspree</div>
          <div className="box">Fontawesome</div>
        </div>
        <div className="description">
          <p>I recently created this website to show my projects and my creativity.</p>
          <p>I decided to make this website a single page since I didn't believe it was necessary to have different loading pages for a small website. 
          This website has a bottom fixed navigation menu on smaller mobile devices to improve the user experience. 
          This website supports resolutions up to 4k. The contact form functionality was made with Formspree.</p>
          <p>Future plans are to improve responsiveness, aesthetics, refactor and to get deeper with building contact form functionality.</p>
        </div>
        <div className="demo-code">
          <a className="box" href="https://portfolio-live-quentin.herokuapp.com/" target="_blank" rel="noopener noreferrer">Demo</a>
          <a className="box" href="https://github.com/quentin8204/portfolio" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;