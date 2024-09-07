import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "Clear_sky",
    "clear-sky-night": "Clear_sky",
    "few-clouds-day": "Few_clouds",
    "few-clouds-night": "Few_clouds",
    "scattered-clouds-day": "Scattered_clouds",
    "scattered-clouds-night": "Scattered_clouds",
    "broken-clouds-day": "Broken_clouds",
    "broken-clouds-night": "Broken_clouds",
    "shower-rain-day": "Shower_rain",
    "shower-rain-night": "Shower_rain",
    "rain-day": "Rain",
    "rain-night": "Rain",
    "thunderstorm-day": "Thunderstorm",
    "thunderstorm-night": "Thunderstorm",
    "snow-day": "Snow",
    "snow-night": "Snow",
    "mist-day": "Mist",
    "mist-night": "Mist",
  };
  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="red"
      size={20}
      animate={true}
    />
  );
}
