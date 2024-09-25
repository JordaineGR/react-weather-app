import React from "react";

import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Port of Spain" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/JordaineGR"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jordaine{" "}
          </a>{" "}
          and is open-sourced on {""}
          <a
            href="https://github.com/JordaineGR/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            GitHub{" "}
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://weather-app-jgr.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
