import React from "react";
import { useSelector } from "react-redux";

export default function Hourly() {
  const data = useSelector((state) => state.whether.todayHourly);

  return (
    <div className="container d-flex row-gap-3 flex-column mb-5">
      {data.map((hourly) => {
        return (
          <>
            {" "}
            <div className="whether-card bg-primary p-4 rounded-3 text-light">
              <ul className="d-flex gap-5 list-unstyled justify-content-center">
                <li>
                  condition : <b>{hourly.conditions}</b>
                </li>
                <li>
                  cloudcover : <b>{hourly.cloudcover}</b>
                </li>
                <li>
                  datetime : <b>{hourly.datetime}</b>
                </li>
                <li>
                  dew : <b>{hourly.dew}</b>
                </li>
                <li>
                  visibilit :y{" "}
                  <b>{(Math.round(hourly.visibility * 1.6) * 100) / 100}KM</b>
                </li>
              </ul>
              <hr />
              {/* ********************************************************* */}
              <ul className="d-flex gap-5 list-unstyled justify-content-center">
                <li>
                  temp : <b>{hourly.temp} F</b>
                </li>
                <li>
                  feelslike : <b>{hourly.feelslike} F</b>
                </li>
                <li>
                  windgust : <b>{hourly.windgust} MPH</b>
                </li>
                <li>
                  windspeed : <b>{hourly.windspeed} MPH</b>
                </li>
              </ul>
              <hr />
              {/* ***************************************************  */}
              <ul className="d-flex gap-5 list-unstyled justify-content-center">
                <li>
                  uvindex : <b>{hourly.uvindex}</b>
                </li>
                <li>
                  humidity : <b>{hourly.humidity} %</b>
                </li>
                <li>
                  precip : <b>{hourly.precip}</b>
                </li>
                <li>
                  precipprob : <b>{hourly.precipprob} %</b>
                </li>
                <li>
                  preciptype : <b>{hourly.preciptype}</b>
                </li>
              </ul>
            </div>
          </>
        );
      })}
    </div>
  );
}
