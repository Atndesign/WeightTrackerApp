import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/main";
import User from "./components/user";
import SignIn from "./components/loggin/signin";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/user" component={User} />
        </div>
      </div>
    </Router>
  );
}

export default App;
