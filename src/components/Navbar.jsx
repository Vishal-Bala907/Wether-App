import React, { useEffect, useRef, useState } from "react";
import { setWethers, setIsWetherLoading } from "../redux/whetherslice";
import { useDispatch } from "react-redux";
import { WHETHER_API_KEY } from "../../config";

export default function Navbar() {
  const area = useRef();
  const [wetherArea, setWetherArea] = useState("Delhi");
  function setWether(event) {
    if (area.current.value === "") {
      alert("please enter location");
    } else {
      event.preventDefault();
      let AREA = area.current.value;
      setWetherArea(AREA);
    }
  }

  const dispatcWhether = useDispatch();
  useEffect(() => {
    dispatcWhether(setIsWetherLoading(true));
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${wetherArea}?key=${WHETHER_API_KEY}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatcWhether(setWethers(data));
      })
      .catch((error) => {
        console.log(error);
      });
    dispatcWhether(setIsWetherLoading(false));
  }, [wetherArea]);

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">Whether</a>
        <form
          className="d-flex"
          role="search"
          onSubmit={(event) => setWether(event)}
        >
          <input
            className="form-control me-2"
            type="search"
            aria-label="Search"
            ref={area}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
