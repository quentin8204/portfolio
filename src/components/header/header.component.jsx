// React
import React from 'react';

// Styles
import './header.styles.scss';

// Images
import photo560square from '../../assets/photo560square.jpg';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressCard, faCode, faEnvelope, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Header = ({ changeColorScheme, colorScheme, homeScroll, aboutScroll, projectsScroll, contactScroll, animation }) => (
  <header className={`header ${animation ? 'runHeaderAnimation' : null}`}>
    <a className="logo" href="https://www.linkedin.com/in/quentin-neal-6b257218a/">
      <img className="logo-image" alt="logo" src={photo560square} />
    </a>
    <div className="menu">
      <nav className="navigation">
        <a className="home-link" onClick={homeScroll} href="#home"><FontAwesomeIcon icon={faHome} /><span>Home</span></a>
        <a className="about-link" onClick={aboutScroll} href="#about"><FontAwesomeIcon icon={faAddressCard}/><span>About</span></a>
        <a className="projects-link" onClick={projectsScroll} href="#projects"><FontAwesomeIcon icon={faCode}/><span>Projects</span></a>
        <a className="contact-link" onClick={contactScroll} href="#contact"><FontAwesomeIcon icon={faEnvelope}/><span>Contact</span></a>
      </nav>
      <div className="tools">
      {colorScheme === 'dark' 
      ? <button className="light-toggle" onClick={changeColorScheme}><FontAwesomeIcon icon={faSun}/><span>Light Mode</span></button> 
      : <button className="dark-toggle" onClick={changeColorScheme}><FontAwesomeIcon icon={faMoon}/><span>Dark Mode</span></button>}
      </div>
    </div>
    <a className="logo hide" href="https://www.linkedin.com/in/quentin-neal-6b257218a/">
      <img className="logo-image" alt="logo"  src={photo560square} />
    </a>
  </header>
);

export default Header;