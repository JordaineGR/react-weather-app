import React from "react";

import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by j'ordaine guiseppi-ramos and is {""}
          <a href="https://github.com/JordaineGR/react-weather-app">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
