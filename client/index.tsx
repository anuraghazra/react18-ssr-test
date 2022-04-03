import React from "react";
import { App } from "./src/App";
import { hydrateRoot } from "react-dom/client";

const container = document.body;
const root = hydrateRoot(container, <App />);
