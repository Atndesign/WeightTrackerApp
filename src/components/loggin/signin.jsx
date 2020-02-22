import React, { Component, useContext } from "react";
import { useCallback } from "react";
import app from "../../firebase";
import { AuthContext } from "../../Auth";
import { Redirect } from "react-router";

const SignIn = ({ history }) => {
  const handleSignIn = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1 className="login__title">WeightTracker</h1>
      <form className="login" onSubmit={handleSignIn}>
        <label className="login__label" htmlFor="email">
          Your email
        </label>
        <input name="email" id="email" className="login__inputs" type="email" />

        <label className="login__label" htmlFor="password">
          Password
        </label>
        <input
          name="password"
          id="password"
          className="login__inputs --password"
          type="password"
        />
        <button className="submit-btn" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default SignIn;
