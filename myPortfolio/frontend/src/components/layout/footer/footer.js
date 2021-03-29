import React, { Component } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export class Footer extends Component {
  render() {
    return (
      <div style={phantom}>
        <div style={style}>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Hi, Im Tony Kelly</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default Footer;

var style = {
  
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
};

var phantom = {
  display: "block",
 
  height: "60px",
  width: "100%",
};
