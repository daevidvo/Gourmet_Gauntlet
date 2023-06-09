import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Login = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      console.log(data);

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-8">
            <div className="card">
              <header className="card-header bg-dark text-light p-2">
                <h4 className="card-header-title">Login</h4>
              </header>
              <div className="card-content">
                <form onSubmit={handleFormSubmit}>
                  <div className="field">
                    <label className="label">Your email</label>
                    <div className="control">
                      <input
                        className="input"
                        type="email"
                        placeholder="Your email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                      <input
                        className="input"
                        type="password"
                        placeholder="******"
                        name="password"
                        value={formState.password}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <button
                        className="button is-info is-fullwidth"
                        style={{ cursor: "pointer" }}
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
                {error && (
                  <div className="notification is-danger">{error.message}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
