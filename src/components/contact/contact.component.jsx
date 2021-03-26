// React
import React from 'react';

// Formspree
import { useForm, ValidationError } from "@formspree/react";

// Styles
import './contact.styles.scss';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin  } from '@fortawesome/free-brands-svg-icons';



const Contact = ({contactRef}) => {

  const [state, handleSubmit] = useForm('contactMe');

  if (state.succeeded) {
    return (
      <section ref={contactRef} className="feedback">
        <div className="title">Thank you!</div>
        <div className="description">Your message was received!</div>
      </section>
    );
  }

  return (
    <section ref={contactRef} className="contact">
      <h2 className="title">Contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="name form-group">
          <label className="name-label form-item" htmlFor="name">Name<span></span></label>
          <input className="name-input form-item" type="text" id="name" name="name"/>
          <input className="honeypot" type="text" name="_gotcha" />
        </div>
        <div className="email form-group">
          <label className="email-label form-item" htmlFor="email">Email<span>*</span></label>
          <input className="email-input form-item" type="email" id="email" name="email"/>
          <ValidationError className="email-validator" field="email" prefix="Email" errors={state.errors} />
        </div>
        <div className="message form-group">
          <label className="message-label form-item" htmlFor="message">Message<span></span></label>
          <textarea className="message-textarea form-item" id="message" name="message" rows="8"/>
        </div>
        <div className="buttons form-group">
          <button type="reset" className="form-button">Reset</button>
          <button type="submit" className="form-button">Submit</button>
          <ValidationError errors={state.errors} />
        </div>
      </form>
      <div className="contact-details">
        <p className="contact-description">Thank you for visiting my website! Feel free to contact me using the contact form or linkedin.</p>
        <ul className="contact-links">
          <li className="contact-link">
            <a href="https://www.linkedin.com/in/quentin-neal-6b257218a/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="fa-fw" icon={faLinkedin} /><span>LinkedIn</span>
            </a>
          </li>
          <li className="contact-link">
            <FontAwesomeIcon className="fa-fw" icon={faMapMarkerAlt} /><span>Seattle, Washington</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;