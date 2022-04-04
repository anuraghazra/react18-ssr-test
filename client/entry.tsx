import React from "react";
import App from "./src/App";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = hydrateRoot(
  document.getElementById("root")!,
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
