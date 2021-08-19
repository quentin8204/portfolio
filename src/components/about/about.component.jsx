// React
import React from 'react';

// Styles
import './about.styles.scss';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faHtml5, faJs, faPhp, faReact, faSass, faBootstrap, faNode, faNpm, faWordpress, faGithub, faLinkedin, faStripe, faGitAlt, faConnectdevelop } from '@fortawesome/free-brands-svg-icons';

const About = ({aboutRef}) => (
  <section ref={aboutRef} className="about">
    <h2 className="title">About</h2>
    <div className="bio">
      <a className="bio-image-background" href="https://www.linkedin.com/in/quentin-neal-6b257218a/" target="_blank" rel="noopener noreferrer">
        <img className="bio-image" alt=""/> {/* redesign to add alt text */}
        <div className="color-overlay">
          <FontAwesomeIcon className="fa-fw" icon={faLinkedin} />
        </div>
      </a>
      <div className="bio-description">
      <p>Hello! I am a software engineer in Seattle that specializes in font end web development.
      I've always had a strong need to solve problems and keep everything organized which has led me to this industry.
      I enjoy pushing my limits and experimenting with effective and modern user interfaces. 
      I am now committed to learn about all the web technologies until mastery.</p>

      <p>I also have many years of experience in customer service roles where I developed my communication and teamwork skills. 
      I am looking forward to working with others to learn and build software.</p>
      </div>
    </div>
    <div className="skills">
      <ul className="skills-list">
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faHtml5} /><span>HTML5</span></li>
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faCss3Alt} /><span>CSS3</span></li>
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faJs} /><span>Javascript</span></li>
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faPhp} /><span>PHP</span></li>
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faWordpress} /><span>Wordpress</span></li>
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faReact} /><span>React</span></li>
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faConnectdevelop} /><span>Redux</span></li>
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faConnectdevelop} /><span>Firebase</span></li>
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faConnectdevelop} /><span>Router</span></li>
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faStripe} /><span>Stripe</span></li>
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faSass} /><span>Sass</span></li>
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faBootstrap} /><span>Bootstrap</span></li>
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faNode} /><span>Node.js</span></li>
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faNpm} /><span>Npm</span></li>
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faGithub} /><span>Github</span></li>
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faGitAlt} /><span>Git</span></li>
      </ul>
    </div>
  </section>
);

export default About;