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
import { FaJava, FaPython, FaDatabase, FaBrain, FaCode } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>

      {/* Icons for Java, Python, SQL, Machine Learning, C, and C++ */}
      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      
    </Row>
  );
}

export default Techstack;
