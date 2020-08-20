import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import Foot from "../Foot/Foot";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Helmet} from 'react-helmet';
import Email from "../../assets/images/mail.png";
import Phone from "../../assets/images/cell.png";
import Resume from "../../assets/images/portfolio.png";
import Document from "../../assets/documents/Nick_Schoess_Resume.pdf"


class Contact extends Component {
    render() {
        return(
            <div>
            <Helmet>
                <style>{'body { background-color: #25252a; }'}</style>
            </Helmet>

            <Navigation />
                <Container fluid="sm" className="contact-container">
                    <Row>
                        <Col className="body-text">
                            <img className="conatct-image" src={Email} alt="Email Icon"/>
                            <h3 className="display-style contact-heading">Email:</h3>
                            <h5 className="contact-heading">schoessnick@gmail.com</h5>

                            <img className="conatct-image" src={Phone} alt="Phone Icon"/>
                            <h3 className="display-style contact-heading">Phone:</h3>
                            <h5 className="contact-heading">651-262-6768</h5>

                            <img className="conatct-image" src={Resume} alt="Resume Icon"/>
                            <h3 className="display-style contact-heading">Resume:</h3>
                            <h5 className="contact-heading"><a href={Document}>View PDF Resume</a></h5>
                        </Col>
                    </Row>
                </Container>
            <Foot />
            </div>
        )
    }
}

export default Contact;