// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import App from "./App";
import "./index.css";

axios.defaults.baseURL = "http://localhost:5000";

ReactDOM.render(<App />, document.getElementById("root"));
