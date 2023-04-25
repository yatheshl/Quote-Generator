import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import { createRoot } from "react-dom/client";

// Replace the following line:
// ReactDOM.render(<App />, document.getElementById('root'));

// With these lines:
const root = createRoot(document.getElementById("root"));
root.render(<App />);
