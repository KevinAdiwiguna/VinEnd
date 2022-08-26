import React from "react";
import { Card, Row, Col, Container, ProgressBar } from "react-bootstrap";
const imgpath = "../../Assets/ImagesSplash";

let isSkills = [
  { name: "HTML", source: "/html.jpg", porgress: 90 },
  { name: "CSS", source: "/css.jpg", porgress: 85 },
  { name: "JS", source: "/css2.jpg", porgress: 40 },
  { name: "Bootstrap", source: "/bootstrap.jpg", porgress: 70 },
  { name: "Tailwind", source: "/css.jpg", porgress: 60 },
  { name: "ReactBootstrap", source: "/react.jpg", porgress: 50 },
  { name: "ReactJS", source: "/css2.jpg", porgress: 35 },
];

function MySkills() {
  return (
    <div className="skill-class" id="skills">
      <div className="skill-container">
        <h1 className="text-white text-center">My Skill</h1>
        <div className="skill-content ">
          <Container>
            <Row className="mb-4 justify-content-center">
              {isSkills.map((res) => {
                return (
                  <Col xl={3} lg={4} md={4} sm={6} className="mb-4 justify-content-center">
                    <Card >
                      <Card.Img variant="top" src={require("../../Assets/ImagesSplash" + res.source)}/>
                      <Card.Body>
                        <Card.Title>{res.name}</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default MySkills;
