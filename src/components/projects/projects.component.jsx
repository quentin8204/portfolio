// React
import React, { useState } from "react";

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

const Projects = ({projectsRef}) => {

  const [projects] = useState({
    sections: [{
      id: 'project1',
      images: {
        image1: crwnClothing960,
        image2: crwnClothing1280,
        image3: crwnClothing1600,
        image4: crwnClothing1920,
        image5: crwnClothing2240,
        image6: crwnClothing2560,
        image7: crwnClothing2880,
        image8: crwnClothing3200,
        image9: crwnClothing3520,
        image10: crwnClothing3840
      },
      title: 'Crwn-Clothing',
      technologies: ['1080p', 'HTML5', 'CSS / SCSS', 'Javascript', 'React', 'React Router', 'Stripe', 'Redux libraries', 'Redux-Saga', 'Firebase', 'Reselect'],
      description: `<p>I created this project based off a course called Complete React Developer by Andrei Neagoie.</p>
      <p>I worked on this project in order to gain general knowledge of the current web development environment and to brush up on my coding skills. This website has functionality such as sign in/out, sign up, cart functionality and checkout with stripe and more.</p>
      <p>I decide to push this project further by overhauling the look of the site with CSS. I added a fixed menu for easy menu access, used a dark color scheme that fits with the image assets, added animations and made the site responsive to 1080p resolution.</p>
      <p>Future plans are to improve responsiveness, aesthetics, refactor, and expand/add more JavaScript features.</p>`,
      sources: {
        demo: 'https://crwn-live-quentin.herokuapp.com/',
        github: 'https://github.com/quentin8204/crwn-clothing',
        original: 'https://crwnshop.herokuapp.com/'
      }
    },
    {
      id: 'project2',
      images: {
        image1: portfolio960,
        image2: portfolio1280,
        image3: portfolio1600,
        image4: portfolio1920,
        image5: portfolio2240,
        image6: portfolio2560,
        image7: portfolio2880,
        image8: portfolio3200,
        image9: portfolio3520,
        image10: portfolio3840
      },
      title: 'Portfolio',
      technologies: ['4K', 'HTML5', 'CSS / SCSS', 'Javascript', 'React', 'Formspree', 'Font Awesome'],
      description: `<p>I recently created this website to show my projects and my creativity.</p>
      <p>I decided to make this website a single page since I didn't believe it was necessary to have different loading pages for a small website. 
      This website has a bottom fixed navigation menu on smaller mobile devices to improve the user experience. 
      This website supports resolutions up to 4k. The contact form functionality was made with Formspree.</p>
      <p>Future plans are to improve responsiveness, aesthetics, refactor and to get deeper with building contact form functionality.</p>`,
      sources: {
        demo: 'https://portfolio-live-quentin.herokuapp.com/',
        github: 'https://github.com/quentin8204/portfolio'
      }
    }]
  });

  return (

    <section ref={projectsRef} className="projects">
    {projects.sections.map(({id, images, title, technologies, description, sources}) => (
      <div key={id} className='project'>
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
          ${images.image10} 3200w`}
          src={images.image10}
          alt="Crown Clothing"
        />
        <div className="project-info">
          <div className='title'>{title}</div>
          <div className='technologies'>
          {technologies.map((technology, index) => (
            <div key={index} className='box'>{technology}</div>
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