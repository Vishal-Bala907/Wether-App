import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/About.css"; // Make sure to create this CSS file
import img from "../images/IMG_20230813_105918_666.jpg";

const About = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-3 mb-5 bg-white rounded">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={img} className="card-img" alt="Profile" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">About This App</h1>
              <p className="card-text">
                This weather app allows you to check the weather for today, the
                next 24 hours, the next 3 days, 7 days, and 14 days. This
                project was built using React.js and the weather data is sourced
                from the{" "}
                <a href="https://weather.visualcrossing.com">
                  Weather Visual Crossing
                </a>{" "}
                API.
              </p>

              <h2>About Me</h2>
              <p>
                Hi, Im Vishal Bala, a Spring Boot and MERN developer. My
                skillset includes:
              </p>
              <div className="row">
                {[
                  "Spring",
                  "JWT",
                  "Hibernate",
                  "Thymeleaf",
                  "MERN",
                  "MySQL",
                  "Docker",
                  "Bootstrap",
                ].map((skill) => (
                  <div className="col-md-6 mb-3" key={skill}>
                    <div className="card skill-card">
                      <div className="card-body">
                        <h5 className="card-title">{skill}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3>Contact Me</h3>
              <p>Feel free to reach out to me via the following platforms:</p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="tel:+9079018358" className="btn btn-outline-primary">
                    <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="mailto:vishal.bala.100@gmail.com"
                    className="btn btn-outline-secondary"
                  >
                    <FontAwesomeIcon icon={faEnvelope} /> Email
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.linkedin.com/in/vishal-bala-4311a817a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    className="btn btn-outline-info"
                  >
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.instagram.com/dev_vishalbala?igsh=MWU5eW56bmN4NGVqZg=="
                    className="btn btn-outline-danger"
                  >
                    <FontAwesomeIcon icon={faInstagram} /> Instagram
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://x.com/dev_VishalBala?t=yzzpVQE1iljmp4sCByUojQ&s=08"
                    className="btn btn-outline-dark"
                  >
                    <FontAwesomeIcon icon={faTwitter} /> Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
