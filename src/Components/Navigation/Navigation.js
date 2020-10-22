import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/images/schoesslogo_white.png";
import "./Navigation.css";


class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar className="bg-color" variant="dark">
                    <Navbar.Brand href="/">
                        <img className="nav-logo" src={ logo } alt= "Schoess logo" />
                    </Navbar.Brand>
                        <Nav className="mr-auto text-color">
                            <Nav.Link className="btn-nav" href="/">Home</Nav.Link>
                            <Nav.Link className="btn-nav" href="/portfolio">Portfolio</Nav.Link>
                            <Nav.Link className="btn-nav" href="/contact">Contact</Nav.Link>
                        </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;