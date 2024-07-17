import { FaTemperatureEmpty } from "react-icons/fa6";
import { GiDew, GiWindsock } from "react-icons/gi";
import { TbSunrise, TbSunset, TbUvIndex } from "react-icons/tb";
import { WiHumidity, WiNightCloudyWindy, WiWindy } from "react-icons/wi";

export default function CreateWhetherCard({ day, color }) {
  return (
    <>
      <div className="container d-flex row-gap-3 flex-column mb-5">
        {day.map((current) => {
          let humidityText = "";
          if (current.humidity < 30) {
            humidityText = "Dry";
          } else if (current.humidity < 70) {
            humidityText = "Comfortable";
          } else {
            humidityText = "Humid";
          }
          return (
            <>
              <div
                key={Math.random}
                className={`container  d-flex flex-column mt-2 row-gap-3 ${color} p-4 rounded-3`}
              >
                <div className="temprature d-flex flex-row justify-content-center flex-wrap column-gap-5 m-2 ">
                  <div>
                    <b>Date : {current.datetime}</b>
                  </div>
                  <div className="temp-current">
                    <FaTemperatureEmpty />
                    <span>Temprature {current.temp} f</span>
                  </div>
                  <div className="temp-realFeet">
                    <FaTemperatureEmpty />
                    <span>Real feel {current.feelslike} f</span>
                  </div>
                  <div className="humidity">
                    <WiHumidity />
                    <span>
                      Humidity {current.humidity}%f <b> {humidityText}</b>
                    </span>
                  </div>
                  <div className="uvindex">
                    <TbUvIndex />
                    <span>UV inidex {current.uvindex} </span>
                  </div>
                </div>
                <hr />
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
                  <div className="dew">
                    <span>
                      <GiDew />
                      Dew <strong> {current.dew}</strong>
                    </span>
                  </div>
                  <div className="visibility">
                    <span>
                      Visibility:
                      {(Math.round(current.visibility * 1.6) * 100) / 100} KM
                    </span>
                  </div>
                </div>
                <hr />
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
            </>
          );
        })}
      </div>
    </>
  );
}
