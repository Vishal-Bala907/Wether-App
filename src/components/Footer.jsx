import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/Footer.css"; // Make sure to create this CSS file

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-12">
            <h5>Contact Me</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="tel:+9079018357" className="btn btn-outline-light">
                  <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="mailto:vishal.bala.100@gmail.com"
                  className="btn btn-outline-light"
                >
                  <FontAwesomeIcon icon={faEnvelope} /> Email
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/vishal-bala-4311a817a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="btn btn-outline-light"
                >
                  <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.instagram.com/dev_vishalbala?igsh=MWU5eW56bmN4NGVqZg=="
                  className="btn btn-outline-light"
                >
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://x.com/dev_VishalBala?t=yzzpVQE1iljmp4sCByUojQ&s=08"
                  className="btn btn-outline-light"
                >
                  <FontAwesomeIcon icon={faTwitter} /> Twitter
                </a>
              </li>
            </ul>
            <p className="mt-3">
              © {new Date().getFullYear()} Vishal Bala. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
