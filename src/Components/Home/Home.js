import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import {Helmet} from 'react-helmet';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/images/IMG_5529.jpg";
import Foot from "../Foot/Foot";

class Home extends Component {
    render() {
        return(
        <div>
            <Helmet>
                <style>{'body { background-color: #25252a; }'}</style>
            </Helmet>

            <Navigation />

            <Container className="container">
                <Row>
                    <Col xs={6} md={4}><img className="headshot" src={ logo } alt= "Headshot of Nick" /></Col>
                    <Col className="body-text" xs={12} md={8}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Col>
                </Row>
            </Container>

            <Foot />
        </div>
        )
    }
}

export default Home;