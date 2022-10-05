import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faReact } from '@fortawesome/free-brands-svg-icons'
import "./Footer.css";

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-item footer-react">
                <p>BUILT WITH
                    <a href="https://reactjs.org/" aria-label="Visit ReactJS Documentation Page">
                        <FontAwesomeIcon icon={faReact} />
                    </a>
                    BY PHILLIP LAM</p>
            </div>
            <div className="footer-item footer-github">
                <p>
                    <a href="https://github.com/philliplam8/barbell-calculator" aria-label="Visit Source Code Github Page">
                        <FontAwesomeIcon icon={faGithub} />
                        SOURCE CODE
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Footer;