import React from "react";

const Login = () => {
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
                      src="assets/images/app-logo.svg"
                      alt="logo"
                    />
                  </a>
                </div>
                <h2 className="auth-heading text-center mb-5">
                  Log in to Portal
                </h2>
                <div className="auth-form-container text-start">
                  <form className="auth-form login-form">
                    <div className="email mb-3">
                      <label className="sr-only" htmlFor="signin-email">
                        Email
                      </label>
                      <input
                        id="signin-email"
                        name="signin-email"
                        type="email"
                        className="form-control signin-email"
                        placeholder="Email address"
                        required="required"
                      />
                    </div>
                    {/*//form-group*/}
                    <div className="password mb-3">
                      <label className="sr-only" htmlFor="signin-password">
                        Password
                      </label>
                      <input
                        id="signin-password"
                        name="signin-password"
                        type="password"
                        className="form-control signin-password"
                        placeholder="Password"
                        required="required"
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
                        {/*//col-6*/}
                        <div className="col-6">
                          <div className="forgot-password text-end">
                            <a href="reset-password.html">Forgot password?</a>
                          </div>
                        </div>
                        {/*//col-6*/}
                      </div>
                      {/*//extra*/}
                    </div>
                    {/*//form-group*/}
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
                {/*//auth-form-container*/}
              </div>
              {/*//auth-body*/}
              <footer className="app-auth-footer">
                <div className="container text-center py-3">
                  {/*/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) * /*/}
                  <small className="copyright">
                    Designed with <span className="sr-only">love</span>
                    <i
                      className="fas fa-heart"
                      style={{ color: "#fb866a" }}
                    />{" "}
                    by{" "}
                    <a
                      className="app-link"
                      href="http://themes.3rdwavemedia.com"
                      target="_blank"
                    >
                      Xiaoying Riley
                    </a>{" "}
                    for developers
                  </small>
                </div>
              </footer>
              {/*//app-auth-footer*/}
            </div>
            {/*//flex-column*/}
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Login;
