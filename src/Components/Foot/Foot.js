import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Foot.css";
import Github from "../../assets/images/iconfinder_mark-github_298822.png";
import Instagram from "../../assets/images/iconfinder_38-instagram_1161953.png";
import Website from "../../assets/images/iconfinder_language_326663.png";
import Linkdin from "../../assets/images/iconfinder_11-linkedin_104493.png"

class Foot extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                        <span className="center-footer">
                            <a href="https://github.com/schoess">
                                <img src={Github} alt="Github Icon"/>
                            </a>
                            <a href="https://www.linkedin.com/in/nick-schoess-8a0761156/">
                                <img className="icons" src={Linkdin} alt="Linkdin Icon"/>
                            </a>
                            <a href="https://www.nickschoess.com">
                                <img className="icons" src={Website} alt="Website Icon"/>
                            </a>
                            <a href="https://www.instagram.com/schoess.exe/">
                                <img className="icons" src={Instagram} alt="Instagram Icon"/>
                            </a>
                        </span>
                </footer>
            </div>
        )
    }
}

export default Foot;