import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { config, a } from "react-spring";

import TreeView from "../tree/Tree";

import NameBanner from "../name-banner/NameBanner";
import ImageSlider from "../vertical-carousel/Slider";
import SlideItems from "../vertical-carousel/items";
import "./styles.css";
const JobDetailCard = (props) => {
 
    return (
      <div>
        
        <Row>
          <Col>
          <img
              className="image"
              
              
              src= ""
            ></img>
          </Col>
        </Row>
      </div>
    );
  }


export default JobDetailCard;
