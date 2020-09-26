import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import {Helmet} from 'react-helmet';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/images/Headshot_upload.jpg";
import Foot from "../Foot/Foot";
import "../../themes/theme.css";

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
                    <Col className="body-text" xs={12} md={8}>
                        <h3 className="home-heading">Driven artist turned full-stack web devloper.</h3>
                        <p>Growing up as a multi faceted artist, I have always looked for new creative outlets to channel my need to build and create. As I age, and my patience level has risen, I have decided to make a career change and pursue web development. For me, It's a pefect blend of creativity, critical thinking, teamwork and personal growth.</p>
                        <br />
                        <p>My passion for most things in life comes from learning. That's why I decided to attend the University of Minnesota Coding Bootcamp for Full-Stack web development after finishing my two previous degrees. I look forward to being a part of a team, learning from those around me, and being involved with something bigger than myself.</p>
                    </Col>
                </Row>
            </Container>

            <Foot />
        </div>
        )
    }
}

export default Home;