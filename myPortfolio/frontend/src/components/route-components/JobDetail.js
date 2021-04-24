import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { config, a } from "react-spring";

import TreeView from "../tree/Tree";

import NameBanner from "../name-banner/NameBanner";
import ImageSlider from "../vertical-carousel/Slider";
import SlideItems from "../vertical-carousel/items";

class JobDetail extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
  };
  render() {
    return (
      <div>
        <Row>
          <Col>
            <ImageSlider slides={SlideItems} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default JobDetail;
