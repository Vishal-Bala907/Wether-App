import { useState } from "react";
import styles from "../styles/Category.module.css";
import { Link } from "react-router-dom";

export default function CategotyHeader() {
  let [active, setActive] = useState("");

  return (
    <div className="container-fluid">
      <header className="d-flex justify-content-center py-3">
        <ul className={`nav nav-pills ${styles.gap}`}>
          <li className={`nav-item`} onClick={() => setActive("Today")}>
            <Link
              to="/current"
              className={`nav-link ${active === "Today" ? "active" : ""}`}
              aria-current="page"
            >
              Today
            </Link>
          </li>
          <li
            className={`nav-item ${active === "hour" ? "active" : ""}`}
            onClick={() => setActive("hour")}
          >
            <Link
              to="/hourly"
              className={`nav-link ${active === "hour" ? "active" : ""}`}
            >
              Hourly
            </Link>
          </li>
          <li
            className={`nav-item ${active === "3days" ? "active" : ""}`}
            onClick={() => setActive("3days")}
          >
            <Link
              to="three"
              className={`nav-link ${active === "3days" ? "active" : ""}`}
            >
              3 Days
            </Link>
          </li>
          <li
            className={`nav-item ${active === "7days" ? "active" : ""}`}
            onClick={() => setActive("7days")}
          >
            <Link
              to="/seven"
              className={`nav-link ${active === "7days" ? "active" : ""}`}
            >
              7 Days
            </Link>
          </li>
          <li
            className={`nav-item ${active === "15days" ? "active" : ""}`}
            onClick={() => setActive("15days")}
          >
            <Link
              to="/fourteen"
              className={`nav-link ${active === "15days" ? "active" : ""}`}
            >
              15 Days
            </Link>
          </li>
          <li className="nav-item" onClick={() => setActive("about")}>
            <Link
              to="/about"
              className={`nav-link ${active === "about" ? "active" : ""}`}
            >
              About
            </Link>
          </li>
        </ul>
      </header>
      <hr />
    </div>
  );
}
