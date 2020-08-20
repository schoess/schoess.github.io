import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import Foot from "../Foot/Foot";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

class Contact extends Component {
    render() {
        return(
            <div>
                <Navigation />
                <h1>Contact!</h1>
                <Foot />
            </div>
        )
    }
}

export default Contact;