import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'reactstrap';
import '../Contact/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';



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
    <section id="contact" >
      <Container>
        <Row className='d-flex'>
          <Col md="6" lg="12" className="mb-5 d-flex">
            <h1>Contact</h1>
          </Col>
          <Col md="6" lg="12" className="mb-5 d-flex contact-container justify-content-center rounded-5">
            <form ref={form} onSubmit={sendEmail} className='contact-form'>
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
                      <button type="submit" value="Send" className="btn">
                        Send Message
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </Col>
          <Col className='justify-content-center d-flex'>
            <div className="social-name mt-4 ">
                  <h2>Ayush Hrishikesh Mishra</h2>
            </div>
          </Col>
          <Col md={6} lg={12} className='d-flex justify-content-evenly my-2'>
            <div className="social-container">     
              <div className="social-body align-items-center">
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
              <p className='justify-content-center mt-2'> <center>Thanks for Exploring</center>  </p>
            </div>
          </Col>
          <p className='justify-content-center mt-3 mb-4'> <center> &copy;Ayush Hrishikesh Mishra. All Rights Reserved. </center>  </p>
        </Row>
      </Container>
    </section>
  );
};


export default Contact;
