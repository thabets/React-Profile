import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import FoodieLove from "../../assets/expimg/foodielove.png";
import Moolah from "../../assets/expimg/moolah.png";
import WeatherTracker from "../../assets/expimg/weathertracker.PNG";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Dbschenker from "../../assets/expimg/DB.jpg";
import ttec from "../../assets/expimg/ttec.png";
import hsa from "../../assets/expimg/hsa.jpg";
import psu from "../../assets/expimg/psu.jpg";

function Experience() {
  return (
    <section className="my-5">
      <h1 className="center" id="about">
        Experience
      </h1>

      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Moolah} />
              <Card.Body>
                <Card.Title>Moolah</Card.Title>
                <Card.Text>
                  Keep track of your crypto portfolio with the latest crypto
                  news
                </Card.Text>
                <Row>
                  <Col>
                    <a href="https://moolahwallet.herokuapp.com/">
                      <Button variant="dark">Website</Button>
                    </a>
                  </Col>
                  <Col>
                    <a href="https://github.com/TPhondeth/Moolah">
                      <Button variant="dark">Github Repo</Button>
                    </a>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={WeatherTracker} />
              <Card.Body>
                <Card.Title>Weather Tracker</Card.Title>
                <Card.Text>
                  Keep track of the latest weather in the area with the Weather
                  Tracker App
                </Card.Text>
                <Row>
                  <Col>
                    <a href="https://thabets.github.io/Weatherman/">
                      <Button variant="dark">Website</Button>
                    </a>
                  </Col>
                  <Col>
                    <a href="https://github.com/thabets/Weatherman.git">
                      <Button variant="dark">Github Repo</Button>
                    </a>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={FoodieLove} />
              <Card.Body>
                <Card.Title>Foodie Love</Card.Title>
                <Card.Text>
                  Find recommendations to your favorite cuisine
                </Card.Text>
                <Row>
                  <Col>
                    <a href="https://jasongrossman.github.io/team-2/">
                      <Button variant="dark">Website</Button>
                    </a>
                  </Col>
                  <Col>
                    <a href="https://github.com/jasongrossman/team-2">
                      <Button variant="dark">Github Repo</Button>
                    </a>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <div>
        <Card className="pd mar">
          <VerticalTimeline lineColor="#6C757D">
            <VerticalTimelineElement
              className="vertical-timeline--two-columns"
              contentStyle={{ background: "#495057", color: "#fff" }}
              position={{ element: "right" }}
              contentArrowStyle={{ borderRight: "7px solid  #495057" }}
              layout="1-column-left"
              date="2021 - present"
              icon={
                <img
                  className="vertical-timeline-element-icon"
                  src={Dbschenker}
                ></img>
              }
            >
              <h3 className="vertical-timeline-element-title">
                Business Operations Specialist
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Toronto, ON
              </h4>
              <p>
                Creative Direction, Customs Rating, Optimization Designer,
                Project Management.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#6C757D", color: "#fff" }}
              date="2020-2021"
              iconStyle={{ background: "#495057", color: "#fff" }}
              icon={
                <img
                  className="vertical-timeline-element-icon"
                  src={ttec}
                ></img>
              }
              contentArrowStyle={{ borderRight: "7px solid  #6C757D" }}
            >
              <h3 className="vertical-timeline-element-title">
                Customer Experience Specialist
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Montreal, QC
              </h4>
              <p>Operational Exellence Marketing</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#ADB5BD", color: "#495057" }}
              date="2015-2017"
              iconStyle={{ background: "#495057", color: "#fff" }}
              icon={
                <img className="vertical-timeline-element-icon" src={hsa}></img>
              }
              contentArrowStyle={{ borderRight: "7px solid  #ADB5BD" }}
            >
              <h3 className="vertical-timeline-element-title">
                Project Manager
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Portland, OR
              </h4>
              <p>Operational & Optimization Engineer</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="August 2017"
              contentStyle={{ background: "#CED4DA", color: "#495057" }}
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={
                <img className="vertical-timeline-element-icon" src={psu}></img>
              }
              contentArrowStyle={{ borderRight: "7px solid  #CED4DA" }}
            >
              <h3 className="vertical-timeline-element-title">
                Engineering & Technology Management
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Masters</h4>
              <p>
                Received a masters of engineering as well as a certificate in
                Project Management
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="August 2017"
              contentStyle={{ background: "#DEE2E6", color: "#495057" }}
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={
                <img className="vertical-timeline-element-icon" src={psu}></img>
              }
              contentArrowStyle={{ borderRight: "7px solid  #CED4DA" }}
            >
              <p>Click for Resume</p>
              <br></br>
              <Button variant="light">
                {
                  <a
                    href="../../assets/personal/SallamThabetResume.pdf"
                    download
                  >
                    Resume
                  </a>
                }{" "}
              </Button>{" "}
            </VerticalTimelineElement>
          </VerticalTimeline>
        </Card>
      </div>
    </section>
  );
}

export default Experience;
