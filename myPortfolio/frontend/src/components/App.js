import React, { Component } from "react";
import ReactDOM from "react-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

import { config } from "react-spring";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import Deck from "./card-deck/CardDeck"
import Footer from "./layout/footer/footer";
import Header from "./layout/header/header";
import WorkCard from "./card/work-card";
import TreeView from "./tree/Tree";
import Viewpager from "./view-pager/Viewpager";
import NameBanner from "./name-banner/NameBanner";
import  Global  from "./Styles"


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
         <Global />
          <Header />
          
          <Row>
            <Col xs={4} style={{ marginRight: "10%" }}>
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
