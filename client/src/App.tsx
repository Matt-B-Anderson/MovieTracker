import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </div>
  );
}

export default App;
