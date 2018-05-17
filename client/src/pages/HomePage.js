import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Weather, Forecast } from '../components/Weather';
import { Temp, Discharge, Gage } from '../components/River';
import './HomePage.css';

class HomePage extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col sm="12">
                        <h1>Current Conditions for Rocky River, OH</h1>
                        <hr className="dark"/>
                    </Col>
                </Row>
                <Row className="background-light">
                    <Col lg="8" md="12">
                        <h5 className="section-title">Temperature</h5>
                        <Row>
                            <Col lg="4" md="12">
                                <Temp />
                            </Col>
                            <Col lg="8" md="12">
                                <img className="data-graph" src="https://waterdata.usgs.gov/nwisweb/graph?agency_cd=USGS&site_no=04201500&parm_cd=00010&period=7" alt="Temperature" />
                            </Col>
                        </Row>
                        <hr />
                        <h5 className="section-title">Discharge, cubic feet per second</h5>
                        <Row>
                            <Col lg="4" md="12">
                                <Discharge />
                            </Col>
                            <Col lg="8" md="12">
                                <img className="data-graph" src="https://waterdata.usgs.gov/nwisweb/graph?agency_cd=USGS&site_no=04201500&parm_cd=00060&period=7" alt="Discharge" />
                            </Col>
                        </Row>
                        <hr />
                        <h5 className="section-title">Gage Height, feet</h5>
                        <Row>
                            <Col lg="4" md="12">
                                <Gage />
                            </Col>
                            <Col lg="8" md="12">
                                <img className="data-graph" src="https://waterdata.usgs.gov/nwisweb/graph?agency_cd=USGS&site_no=04201500&parm_cd=00065&period=7" alt="Gage Height" />
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="4" md="6" sm="12">
                        <Weather />
                        <Forecast />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default HomePage;