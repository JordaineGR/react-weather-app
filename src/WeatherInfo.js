import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-5 mb-5">
        <div className="col-7">
          <h1>{props.data.city}</h1>
          <p className="currentDate">
            <FormattedDate date={props.data.date} />
          </p>
          <ul>
            <li> {props.data.description}</li>
            <li>
              Humidity: <strong> {props.data.humidity}% </strong>
            </li>
            <li>
              Wind: <strong>{props.data.wind}km/h </strong>
            </li>
          </ul>
        </div>
        <div className="col-5">
          <div className="clearfix mt-4">
            <div className="float-left mt-4 me-3">
              <WeatherIcon code={props.data.icon} size={60} />
            </div>
            <div className="float-right">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
