import React from "react";

import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/JordaineGR" target="_blank">
            J'ordaine Guiseppi-Ramos{" "}
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/JordaineGR/react-weather-app"
            target="_blank"
          >
            {" "}
            open-sourced on GitHub{" "}
          </a>{" "}
          and hosted on{" "}
          <a href="https://weather-app-jgr.netlify.app/" target="_blank">
            {" "}
            Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
