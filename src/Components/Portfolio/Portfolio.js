import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import Foot from "../Foot/Foot";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Portfolio.css";

class Portfolio extends Component {
    render() {
        return(
            <div>
                <Navigation />
                <h1>Portfolio!</h1>
                <Foot />
            </div>
        )
    }
}

export default Portfolio;