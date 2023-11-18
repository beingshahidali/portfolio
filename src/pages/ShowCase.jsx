import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import bookourvans from "../assets/projects/bookourvans.png";
import tictactoe from "../assets/projects/tictactoe.png";
// import visualSorting from "../assets/projects/visualSortify.png"
import { Link } from "react-router-dom";
import moviefy from "../assets/projects/moviefy.png"
import flowmate from "../assets/projects/flowmate.gif"
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookourvans}
              isBlog={false}
              title="Connect and Chat"
              description="This online ride-sharing platform boasts a responsive front-end design, complete with an admin panel built using React and Material-UI. With the integration of Google Maps API, users can easily access directions on the map. "
              ghLink="https://github.com/beingshahidali/van-life"
              wbLink="https://cheery-frangollo-3de57e.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flowmate}
              isBlog={false}
              title="Flow-mate"
              description="Visual Sortify is a web application designed to help users understand and visualize various sorting algorithms. It provides an interactive platform where users can see how algorithms like bubble sort, merge sort, quicksort, and more work in real-time. "
              ghLink="https://github.com/beingshahidali/visual-sortify"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moviefy}
              isBlog={false}
              title="Moviefy"
              description="This project was born out of a passion for cinema and a desire to create a user-friendly platform for movie enthusiasts. With a sleek and intuitive design, our app allows users to effortlessly explore a vast collection of films, ranging from timeless classics to the latest blockbusters."
              ghLink="https://github.com/beingshahidali/moviefy"
              wbLink="https://moviefy-sa08.netlify.app"
            />
          </Col>

         
         
        

         
        </Row>
      </Container>
     <div >
     <Link to="/project" id="more-projects-container" >
      <img width="30" height="30" src="https://img.icons8.com/sf-regular-filled/48/6900e5/visible.png" alt="visible" style={{marginBottom:"2px"}}/>    
          View more Projects
          </Link>
     </div>
    </Container>
  )
}

export default Projects