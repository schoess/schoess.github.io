import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import Foot from "../Foot/Foot";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Portfolio.css";
import data from "../../assets/seed/data.json"

class Portfolio extends Component {
    state = {
        data
    }

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