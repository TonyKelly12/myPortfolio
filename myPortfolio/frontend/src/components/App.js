import React, { Component } from "react";
import ReactDOM from "react-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import Footer from "./layout/footer/footer";
import Header from "./layout/header/header";
import WorkCard from "./card/work-card";

class App extends Component {
  render() {
    return (
      <div>
        <ParallaxProvider>
          <Row style={{ position: "absolute", width: "100%" }}>
            <Header />
            <Col xs={3}  style={{ marginRight: "1%" }}>
              <Container
                style={{ width: "30%", alignContent: "left", margin: 0 }}
              >
                <Jumbotron>
                  <h1>Hello, world!</h1>
                  <p>
                    This is a simple hero unit, a simple jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                  </p>
                  <p>
                    <Button variant="primary">Learn more</Button>
                  </p>
                </Jumbotron>
                <Header />
              </Container>
            </Col>
            <Col xs={6}>
              <ListGroup
                className="overflow-auto"
                style={{ position: "absolute", height: "100vh", width: '100%' }}
              >
                <ListGroup.Item
                  style={{ height: "70%", width: "80%", margin: 50 }}
                >
                  <WorkCard />
                </ListGroup.Item>

                <ListGroup.Item
                  style={{ height: "70%", width: "80%", margin: 50 }}
                >
                  <WorkCard />
                </ListGroup.Item>

                <ListGroup.Item
                  style={{ height: "70%", width: "80%", margin: 50 }}
                >
                  <WorkCard />
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Footer
              style={{
                position: "fixed",
                bottom: "0",
                left: "0",
                width: "100%",
              }}
            />
          </Row>
        </ParallaxProvider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
