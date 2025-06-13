import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App"; // Will be rendered by AppWrapper
import AppWrapper from "./AppWrapper"; // Import AppWrapper
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppWrapper /> {/* Use AppWrapper here */}
    </BrowserRouter>
  </React.StrictMode>
);
