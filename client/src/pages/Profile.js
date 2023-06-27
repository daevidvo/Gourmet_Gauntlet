import React, { useState, useEffect, useContext } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import { UPDATE_USER } from "../utils/mutations";
import showModal from "../utils/game/showModal";
import createModal from "../utils/game/roundEndModal";
import closeModal from "../utils/game/closeModal";
import "chart.js";
import BarChart from "../components/barChart";
import { ThemeContext } from "../utils/context/ThemeContext";

function Profile(props) {
  const { loading, data: getMeData } = useQuery(GET_ME);
  const username = getMeData?.me?.username;
  const email = getMeData?.me?.email;

  const [formState, setFormState] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    setFormState({ email: email, username: username });
  }, [getMeData]);

  const [updateUser, { error }] = useMutation(UPDATE_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateUser({
        variables: { ...formState },
      });

      createModal("Profile Updated", document.getElementById("root"));
      showModal();

      setTimeout(() => {
        closeModal();
      }, 1500);
    } catch (e) {
      console.error(e);
    }
  };

  const isDark = useContext(ThemeContext);

  return (
    <section className={`section ${isDark ? "has-background-dark" : ""}`}>
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-8">
            <div className="card">
              {loading || !getMeData ? (
                <div>Loading...</div>
              ) : (
                <>
                  <header className="card-header bg-dark text-light p-2">
                    <h4 className="card-header-title">Update Profile</h4>
                  </header>
                  <div className="card-content">
                    <form onSubmit={handleFormSubmit}>
                      <div className="field">
                        <label className="label">Your username</label>
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            placeholder="Your username"
                            name="username"
                            value={formState.username || ""}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Your email</label>
                        <div className="control">
                          <input
                            className="input"
                            type="email"
                            placeholder="Your email"
                            name="email"
                            value={formState.email || ""}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <div className="control">
                          <button
                            className="button is-info"
                            style={{ cursor: "pointer" }}
                            type="submit"
                          >
                            Update
                          </button>
                        </div>
                      </div>
                    </form>
                    {error && (
                      <div className="notification is-danger">
                        {error.message}
                      </div>
                    )}
                  </div>
                  <div className="card-footer has-text-light">
                    <div className="card-footer-item">
                        <button className={`button ${isDark ? "is-light" : "is-dark"}`}
                                onClick={() => props.changeTheme(!isDark)}
                        >
                            Change Theme
                        </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="column is-4">
            <div className="card">
              <header className="card-header bg-dark text-light p-2">
                <h4 className="card-header-title">Update Profile</h4>
              </header>
              <div className="card-content">
                <BarChart width="400" height="400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
