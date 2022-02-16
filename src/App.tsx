import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header style={{ backgroundColor: "yellow" }}>
        <Link to="/">home</Link>
        <Link to="/sub_app1">subapp1</Link>
        <Link to="/sub_app2">subapp2</Link>
      </header>
      <main>
        <div id="subapp-viewport"></div>
      </main>
    </div>
  );
}

export default App;
