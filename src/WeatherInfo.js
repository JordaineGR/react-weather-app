import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>

      <div className="row mt-3 mb-5">
        <div className="col-7 mt-3">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
          </ul>
          <ul>
            <li>
              {props.data.description}, humidity: {props.data.humidity}, wind:{" "}
              {props.data.wind}
            </li>
          </ul>
        </div>
        <div className="col-5">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={70} />
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
