import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram, } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="6" className="footer-copywright text-start">
          <h3>Designed and Developed by Nitesh Singh</h3>
        </Col>
        <Col md="6" className="footer-body text-end">
          <ul className="footer-icons">
            <li className="social-icons">
              <a href="https://github.com/info-nitesh01" style={{ color: "#fff" }} target="_blank" rel="noopener noreferrer" > <AiFillGithub /> </a>
            </li>
            <li className="social-icons">
              <a href="https://twitter.com/im__nts" style={{ color: "#00ACEE" }} target="_blank" rel="noopener noreferrer" > <AiOutlineTwitter /> </a>
            </li>
            <li className="social-icons">
              <a href="https://www.linkedin.com/in/nitesh-singh-647866239" style={{ color: "#0e76a8" }} target="_blank" rel="noopener noreferrer" > <FaLinkedinIn /> </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
