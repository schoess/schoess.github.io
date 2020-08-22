import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import Foot from "../Foot/Foot";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Portfolio.css";
import data from "../../assets/seed/data.json"
import {Helmet} from 'react-helmet';
import Container from "react-bootstrap/Container";
import Projects from "../Projects/Projects";

class Portfolio extends Component {
    state = {
        data
    }

    render() {
        return(
            <div>
            <Helmet>
                <style>{'body { background-color: #25252a; }'}</style>
            </Helmet>
                <Navigation />

                <Container fluid="sm" className="portfolio-container">
                <Projects
                    data={this.state.data}
                />
                </Container>


                <Foot />
            </div>
        )
    }
}

export default Portfolio;