import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import golobe from "../../Assets/Projects/golobe.png";
import nyus from "../../Assets/Projects/nyus.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="orange">Works </strong>
        </h1>
        <p style={{ color: "#090724 " }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={golobe}
              isBlog={false}
              title="Golobe"
              description="React Template for travel management and hotel booking with animated logo and components."
              ghLink="https://github.com/info-nitesh01/react-temp-golobe"
              demoLink="https://golobe-temp.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nyus}
              isBlog={false}
              title="NYUS"
              description="Pure HTML and CSS Template for Hotel management. Introduce the restaurant’s history, mission, and values. Highlight any unique selling points (USPs), such as farm-to-table ingredients, family recipes, or a cozy atmosphere.."
              ghLink="https://github.com/info-nitesh01/NYUS-Restaurant-Project"
              demoLink="https://nyus-food.netlify.app/#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
