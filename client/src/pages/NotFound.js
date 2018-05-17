import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './NotFound.css';

class NotFound extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col lg={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2}} sm="12">
                        <div className="giphy-div">
                            <iframe title="flop" src="https://giphy.com/embed/3NWNbk6Ja391S" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                        </div>
                        <p className="giphy-caption"><a href="https://giphy.com/gifs/askreddit-3NWNbk6Ja391S">via GIPHY</a></p>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <h1 className="text-center fish-flop">Fish Flop!</h1>
                        <h2 className="text-center">404: This page cannot be found</h2>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default NotFound;