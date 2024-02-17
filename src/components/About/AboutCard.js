import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="orange">Nitesh Singh </span>
            from <span className="orange"> Surat, Gujarat.</span>
            <br />
            I am currently looking for a job as a <span className="orange">ReactJS developer.</span>.
            <br />
            I have completed Bachelor of Engineering in Information Technology at KJIT Savli, Vadodara.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight className="orange" /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight className="orange" /> Watching Series
            </li>
            <li className="about-activity">
              <ImPointRight className="orange" /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
