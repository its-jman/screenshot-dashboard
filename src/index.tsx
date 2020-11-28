import "normalize.css";
import "src/styles/_reset.css";
import "src/styles/base.css";

import React from "react";
import ReactDOM from "react-dom";
import * as MobX from "mobx";

import App from "./app";

MobX.configure({ enforceActions: "always" });

ReactDOM.render(<App />, document.getElementById("root"));
