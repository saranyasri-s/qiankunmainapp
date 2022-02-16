import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { registerMicroApps, start, setDefaultMountApp } from "qiankun";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
registerMicroApps([
  {
    name: "sub_app1", // app name registered
    // entry: "//micro-app1.netlify.app/",
    entry: "//localhost:3001/",
    container: "#subapp-viewport",
    activeRule: "sub_app1",
    props: {
      Routerbase: "/sub_app1",
    },
  },
  {
    name: "sub_app2", // app name registered
    // entry: "//micro-app2.netlify.app/",
    entry: "//localhost:3002/",
    container: "#subapp-viewport",
    activeRule: "/sub_app2",
    props: {
      Routerbase: "/sub_app2",
    },
  },
]);
setDefaultMountApp("./sub_app2");
start();
