import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { config, a } from "react-spring";

import TreeView from "../tree/Tree";
import NameBanner from "../name-banner/NameBanner";
import ImageSlider from "../vertical-carousel/Slider";
import SlideItems from "../vertical-carousel/items";
import { getJobs } from "../../actions/jobs"


class Home extends Component {
    static propTypes = {
        jobs: PropTypes.array.isRequired
    }
  
    state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
  };

  componentDidMount() {
      this.props.getJobs();
  }

  render() {
    return (
      <div>
         
        <Row>
          <Col xm={3} style={{ marginRight: "2%" }}>
            <Container
              style={{ width: "100%", alignContent: "left", margin: 0 }}
            >
              <Row style={{ marginTop: "5%" }}>
                <NameBanner />
              </Row>
              <Row
                style={{
                  position: "fixed",
                  bottom: "7%",
                }}
              >
                <TreeView />
              </Row>
            </Container>
          </Col>
          <Col xs={8}>
            <Row style={{ width: "100%", height: "100vh" }}>
              <ImageSlider slides={SlideItems} />
            </Row>
          </Col>
        </Row>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
    jobs: state.jobsReducer.jobs
})

export default connect(mapStateToProps, {getJobs})(Home);
