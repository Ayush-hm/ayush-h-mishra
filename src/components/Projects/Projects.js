import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../Projects/Projects.css';
import '../Projects/Carousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import VisualTech from '../../Assets/Projects/Tech_for_visually_impaired.png';
import NewsWave from '../../Assets/Projects/NewsWave.png';
import Savoura from '../../Assets/Projects/Savoura.png';
import Nexusgear from '../../Assets/Projects/NexusGear.png';
import { Fade } from "react-awesome-reveal";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


const Projects = () => {

  const cardData = [
    {
      title: 'Synthetic Customer Dataset for Market Segmentation',
      imageSrc: 'https://www.madlytics.com/wp-content/uploads/2017/08/Customar-Sagmantation-1-400x322.png?x54336',
      githubLink: 'https://github.com/Ayush-hm/Market-Segmentation',
      tags: ['Data Analytics', 'R', 'Synthpop'],
    },
    {
      title: 'Smart Attendance System using Face Recognition',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRos4zZYJpFrIeD_-j61rc_OxC3LePEpibJXZpGHdbhWA&usqp=CAU&ec=48600112',
      githubLink: 'https://github.com/Ayush-hm/Face-Recognition-Attendance-System',
      tags: ['Python', 'Raspberry Pi', 'PiCAM', 'Flask', 'OpenCV'],
    },
    {
      title: 'Diagnosing Alzheimer with Handwriting',
      imageSrc: 'https://bestlifeonline.com/wp-content/uploads/sites/3/2022/06/person-writing-by-hand.jpg?quality=82&strip=all',
      githubLink: 'https://github.com/Ayush-hm/Detecting-Alzheimer-using-ML',
      tags: ['Python', 'Machine Learning'],
    },
    {
      title: 'Wearable Technology to aid the Visually Impaired',
      imageSrc: VisualTech,
      githubLink: 'https://github.com/username/project2',
      tags: ['Arduino', 'ESP-32', 'C', 'Python'],
    },
    {
      title: 'NewsWave',
      imageSrc: NewsWave,
      githubLink: 'https://github.com/Ayush-hm/NewsWave',
      siteLink: 'https://newswave.onrender.com/?q=top-headlines',
      tags: ['HTML5', 'TailwindCSS', 'Node.js', 'Express.js'],
    },
    {
      title: 'Savoura',
      imageSrc: Savoura,
      githubLink: 'https://github.com/Ayush-hm/Savoura',
      siteLink: 'https://ayush-hm.github.io/Savoura/',
      tags: ['React.js', 'TailwindCSS', 'Node.js', 'Express.js'],
    },
    {
      title: 'NexusGear',
      imageSrc: Nexusgear,
      githubLink: 'https://github.com/aryanX23/Nexus-Gear',
      siteLink: 'https://nexus-gear-production.up.railway.app/',
      tags: ['React.js', 'TailwindCSS', 'Node.js', 'Express.js'],
    },
  ];

  const renderCarousel = () => {
    return cardData.map((card, index) => (
      <Col key={index}>
        <div className="carousel-card">
          <div className="card">
            <div className="image-container">
              <img src={card.imageSrc} alt="Project" />
            </div>
            <div className="card-body">
              <Fade>
                <h5 className="card-title">{card.title}</h5>
                {card.siteLink && (
                  <a
                    href={card.siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGlobe}
                      className="fa-lg mt-4"
                    />
                  </a>
                )}
                <a
                  href={card.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="fa-lg mt-4 mx-3"
                  />
                </a>
              </Fade>
            </div>
          </div>
        </div>
      </Col>
    ));
  };

  return (
    <section className='projects-section d-flex mb-5' id="projects">
      <Container>
        <Row>
          <Col md="6" lg="12" className='mb-5 '>
            <h1>Projects</h1>
          </Col>
          <Carousel
            showStatus={false}
            showThumbs={false}
            showIndicators={true}
            showArrows={true} 
            infiniteLoop={false} 
            useKeyboardArrows={true} 
            emulateTouch={true} 
            centerMode={true} 
            swipeable={false}
            centerSlidePercentage={38.2} 
            renderThumbs={() => {}}
          >
            {renderCarousel()}
          </Carousel>
        </Row>
      </Container>
    </section>
  );
};


export default Projects;
