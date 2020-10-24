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
                <Navbar className="bg-color" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">
                        <img className="nav-logo" src={ logo } alt= "Schoess logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link className="btn-nav text-color" href="/">Home</Nav.Link>
                            <Nav.Link className="btn-nav text-color" href="/portfolio">Portfolio</Nav.Link>
                            <Nav.Link className="btn-nav text-color" href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;