import React, { Component } from "react";
import { Redirect } from "react-router";
import UserStorage from "./UserStorage";

const userStorage = new UserStorage();
const SignIn = () => {
  const handleSignIn = (event) => {
    event.preventDefault();
    let userName = event.target.email.value;
    let goal = event.target.goal.value;
    let height = event.target.height.value;
    if (userName && goal) {
      userStorage.save("username", userName);
      userStorage.save("height", height);
      userStorage.save("goal", goal);
      return <Redirect to="/" />;
    } else {
      alert("you must enter your name or a goal");
      return null;
    }
  };

  if (userStorage.load("username")) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1 className="login__title">WeightTracker</h1>
      <form className="login" onSubmit={(e) => handleSignIn(e)}>
        <label className="login__label" htmlFor="email">
          It seems that it's your first connection, what's your name ?
        </label>
        <input name="email" id="email" className="login__inputs" type="text" />
        <label className="login__label" htmlFor="email">
          What is your goal ?
        </label>
        <input name="goal" id="goal" className="login__inputs" type="number" />
        <label className="login__label" htmlFor="email">
          What is your height (in M) ?
        </label>
        <input
          name="height"
          id="height"
          className="login__inputs"
          type="number"
        />
        <button className="submit-btn" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default SignIn;
