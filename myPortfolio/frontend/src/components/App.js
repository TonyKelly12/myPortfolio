import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Footer from './layout/footer/footer';

import Header from './layout/header/header'

class App extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col>
                        <Header/>
                        <Container fluid>

                        </Container>
                        </Col>
                        <Col>1 of 1</Col>
                    </Row>
                </Container>
                <Footer />
            </div>

        )

    }
}

ReactDOM.render(<App />, document.getElementById('app'))