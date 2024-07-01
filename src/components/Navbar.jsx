import React, { useEffect, useRef, useState } from "react";
import { setWethers, setIsWetherLoading } from "../redux/whetherslice";
import { useDispatch } from "react-redux";

export default function navbar() {
  const area = useRef();
  const [wetherArea, setWetherArea] = useState("Delhi");
  function setWether(event) {
    if (area.current.value === "") {
      // alert("please enter location");
    } else {
      event.preventDefault();
      setWetherArea(area.current.value);
      area.current = area.current.value;
    }
  }

  const dispatcWether = useDispatch();
  useEffect(() => {
    dispatcWether(setIsWetherLoading(true));
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${wetherArea}?key=XDFPCPV6VVVGQRFBNHEFXWPUU`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        dispatcWether(setWethers(data));
      })
      .catch((error) => {
        console.log(error);
      });
    dispatcWether(setIsWetherLoading(false));
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
