import React from "react";
import "./App.css";
import Main from "./components/main";
import User from "./components/user";
import LogginPage from "./components/loggin";
function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <LogginPage /> */}
        <Main />
        {/* <User /> */}
      </div>
    </div>
  );
}

export default App;
