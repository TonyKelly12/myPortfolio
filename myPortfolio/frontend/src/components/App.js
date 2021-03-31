import React, { Component } from "react";
import ReactDOM from "react-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

import { config } from "react-spring";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import Footer from "./layout/footer/footer";
import Header from "./layout/header/header";
import WorkCard from "./card/work-card";
import TreeView from "./tree/Tree";
import Viewpager from "./view-pager/Viewpager";
import NameBanner from "./name-banner/NameBanner";

let slides = [
  {
    key: 1,
    content: "1",
  },
  {
    key: 2,
    content: "2",
  },
  {
    key: 3,
    content: "2",
  },
  {
    key: 4,
    content: "3",
  },
  {
    key: 5,
    content: "4",
  },
  {
    key: 6,
    content: "5",
  },
  {
    key: 7,
    content: "6",
  },
  {
    key: 8,
    content: "7",
  },
];

class App extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
  };
  render() {
    return (
      <div>
        <ParallaxProvider>
          <Header />
          <Row>
            <Col xs={3} style={{ marginRight: "10%" }}>
              <Container
                style={{ width: "100%", alignContent: "left", margin: 0 }}
              >
                <Row style={{marginTop: '5%'}}>
                  <NameBanner />
                </Row>
                <Row style={{
              position: "fixed",
              bottom: "7%",
              
             
            }}>
                  <TreeView  />
                </Row>
              </Container>
            </Col>
            <Col xs={6}>
              <Row>
                <WorkCard />
              </Row>
            </Col>
          </Row>
          <Footer
            style={{
              position: "fixed",
              bottom: "0",
              left: "0",
              width: "100%",
            }}
          />
        </ParallaxProvider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
