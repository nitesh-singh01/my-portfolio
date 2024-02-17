import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid rounded-circle w-75" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="orange"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate front-end developer with a strong background in
              <i>
                <b className="orange"> React JS  </b>
              </i>and
              <i>
                <b className="orange">  web development.</b>
              </i>
              <br />
              <br />Proficient in
              <i>
                <b className="orange"> HTML, CSS, </b></i>and<i>
                <b className="orange"> JavaScript.</b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="orange">Web Technologies </b></i>and<i><b className="orange"> Products.</b>
              </i>
              <br />
              <br />
              I've worked in multiple projects with frameworks and libraries like <b className="orange">jQuery, React JS, Redux Toolkit, Bootstrap</b> and
              <i> <b className="orange"> Tailwind CSS. </b> </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="orange">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a href="https://github.com/info-nitesh01" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons" > <AiFillGithub /> </a>
              </li>
              <li className="social-icons">
                <a href="https://twitter.com/im__nts" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons" > <AiOutlineTwitter /> </a>
              </li>
              <li className="social-icons">
                <a href="https://www.linkedin.com/in/nitesh-singh-647866239" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons" > <FaLinkedinIn /> </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
