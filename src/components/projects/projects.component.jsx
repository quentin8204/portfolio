// React
import React, { useState } from "react";

// Styles
import './projects.styles.scss';

// Images
import crwnClothing320 from '../../assets/crwnClothing320.jpg';
import crwnClothing640 from '../../assets/crwnClothing640.jpg';
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

import portfolio320 from '../../assets/portfolio320.jpg';
import portfolio640 from '../../assets/portfolio640.jpg';
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

const Projects = ({projectsRef}) => {

  const [projects] = useState({
    sections: [{
      id: 'project1',
      images: {
        image1: crwnClothing320,
        image2: crwnClothing640,
        image3: crwnClothing960,
        image4: crwnClothing1280,
        image5: crwnClothing1600,
        image6: crwnClothing1920,
        image7: crwnClothing2240,
        image8: crwnClothing2560,
        image9: crwnClothing2880,
        image10: crwnClothing3200,
        image11: crwnClothing3520,
        image12: crwnClothing3840
      },
      title: 'Crwn-Clothing',
      technologies: ['1080p', 'HTML5', 'CSS3 / SCSS', 'Javascript', 'React', 'React Router', 'Stripe', 'Redux technologies', 'Firebase', 'Reselect', 'Compression', 'Lodash.memoise', 'Node', 'Npm', 'GitHub', 'Git'],
      description: `<p>I created this project based on a course called Complete React Developer by Andrei Neagoie and Yihua Zhang.</p>
      <p>I worked on this project in order to gain general knowledge of the current web development environment and to brush up on my coding skills. 
      This website has functionality such as sign in/out, sign up, cart functionality, checkout with stripe and more.</p>
      <p>I decide to push this project further by overhauling the site's aesthetics. 
      I added a fixed menu for easy menu access, used a dark color scheme that fits with the image assets, added animations and made the site responsive.</p>`,
      sources: {
        demo: 'https://crwn-live-quentin.herokuapp.com/',
        github: 'https://github.com/quentin8204/crwn-clothing',
        original: 'https://crwnshop.herokuapp.com/'
      },
      color: 'default',
      alt: 'Crown Clothing'
    },
    {
      id: 'project2',
      images: {
        image1: portfolio320,
        image2: portfolio640,
        image3: portfolio960,
        image4: portfolio1280,
        image5: portfolio1600,
        image6: portfolio1920,
        image7: portfolio2240,
        image8: portfolio2560,
        image9: portfolio2880,
        image10: portfolio3200,
        image11: portfolio3520,
        image12: portfolio3840
      },
      title: 'Portfolio',
      technologies: ['4K', 'HTML5', 'CSS / SCSS', 'Javascript', 'React', 'Formspree', 'Font Awesome', 'Node', 'Npm', 'GitHub', 'Git'],
      description: `<p>I recently created this website to show my projects, my creativity and my perspective on user interfaces when I push boundaries.</p>
      <p>I decided to make this website a single page since I didn't believe it was necessary to have separate pages for a small website. 
      This responsive website has a bottom fixed navigation menu on smaller devices to improve the user experience, smooth scrolling, image optimization, a preloader to improve the website presentation and a contact form made with Formspree.</p>`,
      sources: {
        demo: 'https://portfolio-live-quentin.herokuapp.com/',
        github: 'https://github.com/quentin8204/portfolio'
      },
      color: 'blue',
      alt: 'Portfolio'
    }]
  });

  return (
    <section ref={projectsRef} className="projects">
    {projects.sections.map(({id, images, title, technologies, description, sources, color, alt}) => (
      <div key={id} className={`project ${color}`}>
        <img
          className="background"
          sizes="(max-width: 3840px) 100vw, 3840px"
          srcSet={`
          ${images.image1} 320w,
          ${images.image2} 640w,
          ${images.image3} 960w,
          ${images.image4} 1280w,
          ${images.image5} 1600w,
          ${images.image6} 1920w,
          ${images.image7} 2240w,
          ${images.image8} 2560w,
          ${images.image9} 2880w,
          ${images.image10} 3200w,
          ${images.image11} 3520w,
          ${images.image12} 3840w`}
          src={images.image12}
          alt={alt}
        />
        <div className="project-info">
          <div className='title'>{title}</div>
          <div className='technologies'>
          {technologies.map((technology, index) => (
            <div key={index} className='box'><span>{technology}</span></div>
          ))}
          </div>
          <div className='description' dangerouslySetInnerHTML={{__html: description}} />
          <div className='demo-code'>
            <a className="box" href={sources.demo} target="_blank" rel="noopener noreferrer">Demo</a>
            {sources.original ? (
              <a className="box" href={sources.original} target="_blank" rel="noopener noreferrer">Original</a>
            ) : (
              null
            )}
            <a className="box" href={sources.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
      ))}
    </section>
  );
}

export default Projects;