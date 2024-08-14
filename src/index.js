import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Create a root for the React application.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component into the root.
// <React.StrictMode>: This is a wrapper component provided by React that
// helps identify potential problems in your application. It activates
// additional checks and warnings for its child components, but it doesn't render any UI.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
