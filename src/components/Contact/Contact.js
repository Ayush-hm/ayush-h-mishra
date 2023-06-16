import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'reactstrap';
import '../Contact/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';



const Contact = () => {
  const form = useRef();

  const handleFocus = (e) => {
    const input = e.target;
    const label = input.parentNode.querySelector('label');
    label.style.top = '5px';
    label.style.fontSize = '12px';
    label.style.color = '#007bff';
  };

  const handleBlur = (e) => {
    const input = e.target;
    const label = input.parentNode.querySelector('label');
    if (input.value === '') {
      label.style.top = '50%';
      label.style.fontSize = '';
      label.style.color = '#999';
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f8v5kvu', 'template_eled0hc', form.current, 'IVBzmSsLcnVTlmc0k')
      .then((result) => {
        console.log(result.text);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });

  };

  return (
    <section id="contact">
      <Container>
        <Row className='d-flex'>
          <Col md="6" lg="12" className="mb-5 d-flex">
            <h1>Contact</h1>
          </Col>
          <Col md="6" lg="12" className="mb-5 d-flex contact-container">
            <form ref={form} onSubmit={sendEmail}>
              <table>
                <tbody>
                  <tr>
                    <td className="input-container">
                      <input
                        type="text"
                        name="user_name"
                        id="user_name"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        required
                      />
                      <label htmlFor="user_name">Name*</label>
                    </td>
                  </tr>
                  <tr>
                    <td className="input-container">
                      <input
                        type="email"
                        name="user_email"
                        id="user_email"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        required
                      />
                      <label htmlFor="user_email">Email*</label>
                    </td>
                  </tr>
                  <tr>
                    <td className="input-container">
                      <textarea
                        name="message"
                        id="message"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="5" align="center">
                      <button type="submit" value="Send" className="button-primary" style={{ color: 'aliceblue' }}>
                        SUBMIT
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
            <div className="contact-body justify-content-lg-end column-gap-md-4" style={{ marginLeft: '25rem', marginTop: '5rem' }}>
              <div className="contact-item d-flex flex-row align-items-center">
                <FontAwesomeIcon icon={faEnvelope} className="fa-xl mt-4 mx-2 icon-color" />
                <span className='mt-3 ' style={{ fontFamily: "OpenSans", fontSize: "20px", marginLeft:"5px" }}>h.ayushm@gmail.com</span>
              </div>
              <br />
              <div className="contact-item d-flex flex-row align-items-center">
                <FontAwesomeIcon icon={faPhone} className="fa-2x mt-4 mx-2 icon-color" />
                <span className='mt-3 ' style={{ fontFamily: "OpenSans", fontSize: "20px", marginLeft:"5px"  }}>6376268571</span>
              </div>
              <br />
              <div className="contact-item d-flex flex-row align-items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-2x mt-4 mx-2 icon-color" />
                <span className='mt-3 ' style={{ fontFamily: "OpenSans", fontSize: "20px", marginLeft:"5px"  }}>Mumbai, India</span>
              </div>
            </div>
          </Col>
          <Col md={6} lg={12} className='d-flex justify-content-center my-4'>
            <div className="social-container">
              <div className="social-body">
                <a href="h.ayushm@gmail.com" className="Social-item">
                  <FontAwesomeIcon icon={faEnvelope} className="fa-2xl mt-4 mx-2 icon-color" />
                </a>
                <a href="https://www.linkedin.com/in/ayush-h-mishra/" className="Social-item">
                  <FontAwesomeIcon icon={faLinkedin} className="fa-2xl mt-4 mx-2 icon-color" />
                </a>
                <a href="https://twitter.com/AyushHrishikesh" className="Social-item">
                  <FontAwesomeIcon icon={faTwitter} className="fa-2xl mt-4 mx-2 icon-color" />
                </a>
                <a href="https://github.com/Ayush-hm" className="Social-item">
                  <FontAwesomeIcon icon={faGithub} className="fa-2xl mt-4 mx-2 icon-color" />
                </a>
              </div>
              <p className='justify-content-center mx-2 mt-3 mb-0 text-blue'> <center>Thanks for Exploring</center>  </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


export default Contact;
