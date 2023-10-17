import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs
} from "react-icons/di";
import {
  SiMongodb,
  SiHtml5,
  SiCss3
} from "react-icons/si";
import { FaJava, FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

const Techstack = () => {
  const styles = { fontSize:'1.5rem'}
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <p style={styles}> HTML</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <p style={styles}> CSS</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={styles}> Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={styles}> NodeJs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={styles}> React</p>
      </Col>
     
      

      {/* Icons for Java, Python, SQL, Machine Learning, C, and C++ */}
      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
        <p style={styles}> Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPython />
        <p style={styles}> Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p style={styles}> MySql</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <p style={styles}> Mongodb</p>
      </Col>
      
    </Row>
  );
}

export default Techstack;
