import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";

/**
 * IMPORTANT:
 * theme.css MUST be imported before index.css
 * so CSS variables are available to Tailwind + inline styles
 */
import "./theme.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);