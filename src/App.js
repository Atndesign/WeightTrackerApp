import React from "react";
import "./App.css";
import Bmi from "./components/Bmi";
import Goal from "./components/Goal";
import Graph from "./components/Graph";
import HistoryList from "./components/HistoryList";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <User />
      <Graph />
      <Goal />
      <Bmi />
      <HistoryList />
    </div>
  );
}

export default App;
