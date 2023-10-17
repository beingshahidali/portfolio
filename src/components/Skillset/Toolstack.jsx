import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiNetlify
} from "react-icons/si";

const Toolstack = () => {
  const styles = { fontSize:'1.5rem'}
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={styles}> VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={styles}> Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <p style={styles}> Netlify</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
