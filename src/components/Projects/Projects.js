import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../Projects/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import VisualTech from '../../Assets/Projects/Tech_for_visually_impaired.png';
import NewsWave from '../../Assets/Projects/NewsWave.png';
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const cardData = [
    {
      title: 'Synthetic Customer Dataset for Market Segmentation',
      description: 'A robust, representative, and privacy-compliant data set that accurately reflects customer behavior and preferences across multiple dimensions. Created a synthetic dataset using the synthpop library based on real data of "Customer Segmentation dataset". ',
      imageSrc: 'https://website-assets-fw.freshworks.com/attachments/ck3u3jhzb004mbsfzx6ahm011-take-segmentation-to-the-next-level.full.png',
      githubLink: 'https://github.com/Ayush-hm/Market-Segmentation',
      tags: ['Data Analytics', 'R', 'Synthpop'],
    },
    {
      title: 'Smart Attendance System using Face Recognition',
      description: 'A computerized system that uses facial recognition technology to capture and record employee attendance.',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRos4zZYJpFrIeD_-j61rc_OxC3LePEpibJXZpGHdbhWA&usqp=CAU&ec=48600112',
      githubLink: 'https://github.com/Ayush-hm/Face-Recognition-Attendance-System',
      tags: ['Python', 'Raspberry Pi', 'PiCAM', 'Flask', 'OpenCV'],
    },
    {
      title: 'Diagnosing Alzheimer with Handwriting',
      description: "Used Machine learning to analyze the changes in handwriting of a person suffering from Alzeimer's disease and developed a predictive model for diagnosing the disease based on handwriting features.",
      imageSrc: 'https://bestlifeonline.com/wp-content/uploads/sites/3/2022/06/person-writing-by-hand.jpg?quality=82&strip=all',
      githubLink: 'https://github.com/Ayush-hm/Detecting-Alzheimer-using-ML',
      tags: ['Python', 'Machine Learning'],
    },
    {
      title: 'Wearable Technology to aid the Visually Impaired',
      description: 'Technology to enable Blind People in commute and Transport in their Day to Day Lives. It uses a ESP-32 Camera, and ultrasonic sensors to detect obstacle and notifies the user by haptic sensors.',
      imageSrc: VisualTech,
      githubLink: 'https://github.com/username/project2',
      tags: ['Arduino', 'ESP-32', 'C', 'Python'],
    },
    {
      title: 'NewsWave',
      description: 'A News App using express.js that delivers the latest and most relevant news from around the world.',
      imageSrc: NewsWave,
      githubLink: 'https://github.com/Ayush-hm/NewsWave',
      siteLink: 'https://newswave.onrender.com/?q=top-headlines',
      tags: ['HTML5', 'TailwindCSS', 'Node.js', 'Express.js'],
    },
    // Add more card data as needed
  ];

  const cardsPerPage = 3;
  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  const renderCards = () => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    return cardData.slice(startIndex, endIndex).map((card, index) => (
      <Col key={index} xs={12} sm={6} md={4} lg={4}>
        <Fade cascade damping={0.5}>
          <div className="card">
            <div className="image-container">
              <img src={card.imageSrc} alt="Project" />
            </div>
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <div className="card-text">{card.description}</div>
              <div className="tags">
                {card.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
              {card.siteLink && (
                <a href={card.siteLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGlobe} className="fa-lg mt-4" />
                </a>
              )}
              <a href={card.githubLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="fa-lg mt-4 mx-3" />
              </a>
            </div>
          </div>
        </Fade>
      </Col>
    ));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className='projects-section d-flex mb-5' id="projects">
      <Container>
        <Row>
          <Col md="6" lg="12" className='mb-5 d-flex'>
            <h1>Projects</h1>
          </Col>
          <div className="flex-row-container mt-3 mb-4">
            {renderCards()}
          </div>
          <div className="page-navigator">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button
                key={page}
                className={`page-btn ${page === currentPage ? 'active' : ''}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
