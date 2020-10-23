import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
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
                            <NavDropdown className="drop-menu" title="Pages" id="basic-nav-dropdown">
                                <NavDropdown.Item className="btn-nav" href="/">Home</NavDropdown.Item>
                                <NavDropdown.Item className="btn-nav" href="/portfolio">Portfolio</NavDropdown.Item>
                                <NavDropdown.Item className="btn-nav" href="/contact">Contact</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;