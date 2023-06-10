import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import { UPDATE_USER } from "../utils/mutations";
import showModal from "../utils/game/showModal";
import createModal from "../utils/game/roundEndModal";
import closeModal from "../utils/game/closeModal";

function Profile() {
  const { loading, data: getMeData } = useQuery(GET_ME);
  const username = getMeData?.me?.username;
  const email = getMeData?.me?.email;

  const [formState, setFormState] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    setFormState({email: email, username: username})
  }, [loading])

  const [updateUser, { error, data: mutationData }] = useMutation(UPDATE_USER);

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
      const { data } = await updateUser({
        variables: { ...formState },
      });

      createModal('Profile Updated', document.getElementById('root'));
      showModal();

      setTimeout(() => {
        closeModal();
      }, 1500);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="section">
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
