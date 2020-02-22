import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/main";
import User from "./components/user";
import SignIn from "./components/loggin/signin";
import SignUp from "./components/loggin/signup";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./privateRoute";
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <div className="container">
            <PrivateRoute exact path="/" component={Main} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/user" component={User} />
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
