import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import bookourvans from "../assets/projects/bookourvans.png";
import tictactoe from "../assets/projects/tictactoe.png";
import visualSorting from "../assets/projects/visualSortify.png"
import moviefy from "../assets/projects/moviefy.png"
import simplifyCalc from "../assets/projects/simplifyCalc.png"
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
              title="Book our vans"
              description="This online ride-sharing platform boasts a responsive front-end design, complete with an admin panel built using React and Material-UI. With the integration of Google Maps API, users can easily access directions on the map. "
              ghLink="https://github.com/beingshahidali/van-life"
              wbLink="https://cheery-frangollo-3de57e.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={visualSorting}
              isBlog={false}
              title="Visual Sortify"
              description="Visual Sortify is a web application designed to help users understand and visualize various sorting algorithms. It provides an interactive platform where users can see how algorithms like bubble sort, merge sort, quicksort, and more work in real-time. "
              ghLink="https://github.com/beingshahidali/visual-sortify"
              wbLink="https://github.com/beingshahidali/visual-sortify"
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic Tac Toe"
              description="This a 2 player game ,created a captivating two-player Tic-Tac-Toe game with an intuitive interface and smooth gameplay. Engineered robust game logic and polished the user experience for seamless competitive entertainment."
              ghLink="https://github.com/beingshahidali/van-life"
              wbLink="https://ticx3.netlify.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simplifyCalc}
              isBlog={false}
              title="Simplify Calc"
              description="Performs operations like Addition, Multiplication, Subtraction, Division.. It offers a seamless and interactive experience for performing various arithmetic operations.

              The React-based calculator employs component-driven development, enhancing code modularity and maintainability."
              ghLink="https://github.com/beingshahidali/simplify-calc"
              wbLink="https://github.com/beingshahidali/simplify-calc"
            />
          </Col>
        

         
        </Row>
      </Container>
    </Container>
  )
}

export default Projects