import { useSelector } from "react-redux";

// temprature
import { FaTemperatureEmpty } from "react-icons/fa6";
// humidity and cloud
import { WiHumidity, WiNightCloudyWindy, WiWindy } from "react-icons/wi";
// uvindex
import { TbUvIndex, TbSunrise, TbSunset } from "react-icons/tb";
//dew
import { GiDew, GiWindsock } from "react-icons/gi";

export default function CurrentCondition() {
  const location = useSelector((state) => state.whether.location);
  // let location = "Delhi IN";
  const current = useSelector((state) => state.whether.currentCondition);
  let humidityText = "";
  if (current.humidity < 30) {
    humidityText = "Dry";
  } else if (current.humidity < 70) {
    humidityText = "Comfortable";
  } else {
    humidityText = "Humid";
  }

  return (
    <div>
      <div className="container bg-primary p-2 text-light text-center">
        {/* <span className="mx-4">{current.icon}</span> */}
        <span className="mx-4">{location}</span>
        <span className="mx-4">{current.datetime}</span>
      </div>

      <div className="container  bs-primary bg-subtle d-flex flex-column mt-5 row-gap-3">
        <div className="temprature d-flex flex-row justify-content-center flex-wrap column-gap-5 m-2">
          <div className="temp-current">
            <FaTemperatureEmpty />
            <span>Temprature {current.temp} f</span>
          </div>
          <div className="temp-realFeet">
            <FaTemperatureEmpty />
            <span>Real feel {current.feelslike} f</span>
          </div>
        </div>

        <div className="temprature d-flex flex-row justify-content-center flex-wrap column-gap-5 m-2">
          <div className="humidity">
            <WiHumidity />
            <span>
              Humidity {current.humidity}%f <b> {humidityText}</b>
            </span>
          </div>
          <div className="uvindex">
            <TbUvIndex />
            <span>UV inidex {current.uvindex}</span>
          </div>
        </div>

        <div className="temprature d-flex flex-row justify-content-center flex-wrap column-gap-5 m-2">
          <div className="conditoins">
            <span>
              Conditions <strong> {current.conditions}</strong>{" "}
            </span>
          </div>
          <div className="cloudCover">
            <WiNightCloudyWindy />
            <span>Cloud cover {current.cloudcover} %</span>
          </div>
        </div>

        <div className="temprature d-flex flex-row justify-content-center flex-wrap column-gap-5 m-2">
          <div className="dew">
            <span>
              <GiDew />
              Dew <strong> {current.dew}</strong>
            </span>
          </div>
          <div className="visibility">
            <span>
              Visibility {(Math.round(current.visibility * 1.6) * 100) / 100}{" "}
              Miles
            </span>
          </div>
        </div>

        <div className="temprature d-flex flex-row justify-content-center flex-wrap column-gap-5 m-2">
          <div className="dew">
            <span>
              <TbSunrise />
              Sunrise <strong> {current.sunrise} AM</strong>
            </span>
          </div>
          <div className="visibility">
            <span>
              <TbSunset />
              Sunset <strong> {current.sunset} PM</strong>
            </span>
          </div>
        </div>

        <div className="temprature d-flex flex-row justify-content-center flex-wrap column-gap-5 m-2">
          <div className="windgust">
            <span>
              <WiWindy />
              Windgust <strong> {current.windgust}KM/Hr</strong>
            </span>
          </div>
          <div className="visibility">
            <span>
              <GiWindsock />
              WindSpepd <strong> {current.windspeed}KM/Hr</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
