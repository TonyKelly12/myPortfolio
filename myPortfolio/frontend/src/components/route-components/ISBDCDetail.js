import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { config, a } from "react-spring";


import JobDetailCard from "../job-detail-card/JobDetailCard"
class ISBDCDetail extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
  };
  render() {
    return (
      <div>
        
        <JobDetailCard />
      </div>
    );
  }
}

export default ISBDCDetail;
