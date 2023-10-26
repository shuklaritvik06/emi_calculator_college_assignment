import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import App from "./App";
import CalculatorContext from "./context/CalculatorContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CalculatorContext>
      <App />
    </CalculatorContext>
  </React.StrictMode>
);
