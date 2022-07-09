import React, { useState, useEffect } from "react";
import axios from "axios";
const Signup = () => {
  const [emil, setEmil] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emil, password,username);

    axios
      .post("/api/Admin/Signup", {
        email: emil,
        password: password,
        username:username
      })
      .then((acc) => {
        console.log(acc.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <div className="row g-0 app-auth-wrapper">
          <div className="col-12 auth-main-col text-center p-5">
            <div className="d-flex flex-column align-content-end">
              <div className="app-auth-body mx-auto">
                <div className="app-auth-branding mb-4">
                  <a className="app-logo" href="index.html">
                    <img
                      className="logo-icon me-2"
                      src="/images/logo.png"
                      alt="logo"
                    />
                  </a>
                </div>
                <h2 className="auth-heading text-center mb-5">
                  Hey Admin 
                </h2>
                <div className="auth-form-container text-start">
                  <form
                    onSubmit={handleSubmit}
                    className="auth-form login-form"
                  >
                    <div className="email mb-3">
                      <label className="sr-only" htmlFor="signin-email">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control signin-email"
                        placeholder="Email address"
                        required="required"
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                      />
                    </div>
                    <div className="email mb-3">
                      <label className="sr-only" htmlFor="signin-email">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control signin-email"
                        placeholder="Email address"
                        required="required"
                        onChange={(e) => {
                          setEmil(e.target.value);
                        }}
                      />
                    </div>

                    <div className="password mb-3">
                      <label className="sr-only" htmlFor="signin-password">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control signin-password"
                        placeholder="Password"
                        required="required"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                      <div className="extra mt-3 row justify-content-between">
                        <div className="col-6">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="RememberPassword"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="RememberPassword"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>

                        <div className="col-6">
                          <div className="forgot-password text-end">
                            <a href="reset-password.html">Forgot password?</a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn app-btn-primary w-100 theme-btn mx-auto"
                      >
                        Log In
                      </button>
                    </div>
                  </form>
                  <div className="auth-option text-center pt-5">
                    No Account? Sign up{" "}
                    <a className="text-link" href="signup.html">
                      here
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
