import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import FoodieLove from "../../assets/expimg/foodielove.png";
import Moolah from "../../assets/expimg/moolah.png";
import WeatherTracker from "../../assets/expimg/weathertracker.PNG";

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
                </a></Col>
                <Col>
                <a href="https://github.com/TPhondeth/Moolah">
                  <Button variant="dark">Github Repo</Button>
                </a></Col>
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
                </a></Col>
                <Col>
                <a href="https://github.com/thabets/Weatherman.git">
                  <Button variant="dark">Github Repo</Button>
                </a></Col>
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
                </a></Col>
                <Col>
                <a href="https://github.com/jasongrossman/team-2">
                  <Button variant="dark">Github Repo</Button>
                </a></Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
