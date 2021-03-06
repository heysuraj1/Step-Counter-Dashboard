import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import SidePanel from "../components/SidePanel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "../components/Login/Login";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [showScreen, setShowScreen] = useState(false);

  useEffect(() => {
    const checkingValues = localStorage.getItem("jwt");

    console.log(checkingValues);

    if (checkingValues !== null) {
      setShowScreen(true);
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link id="theme-style" rel="stylesheet" href="css/portal.css" />
      </Head>

      {showScreen ? (
        <>
          <>
            <div>
              <header className="app-header fixed-top">
                <div className="app-header-inner">
                  <div className="container-fluid py-2">
                    <div className="app-header-content">
                      <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                          <a
                            id="sidepanel-toggler"
                            className="sidepanel-toggler d-inline-block d-xl-none"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={30}
                              height={30}
                              viewBox="0 0 30 30"
                              role="img"
                            >
                              <title>Menu</title>
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeMiterlimit={10}
                                strokeWidth={2}
                                d="M4 7h22M4 15h22M4 23h22"
                              />
                            </svg>
                          </a>
                        </div>

                        <div className="search-mobile-trigger d-sm-none col">
                          <i  />
                        </div>

                        <div className="app-search-box col">
                          <form className="app-search-form">
                            <input
                              type="text"
                              placeholder="Search..."
                              name="search"
                              className="form-control search-input"
                            />
                            <button
                              type="submit"
                              className="btn search-btn btn-primary"
                              value="Search"
                            >
                              <i className="fas fa-search" />
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <SidePanel />
              </header>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />

              <Component {...pageProps} />
            </div>
          </>
        </>
      ) : (
        <>
          <Login />
        </>
      )}

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
      <Script src="plugins/fontawesome/js/all.min.js" />
      <Script src="plugins/popper.min.js" />
      <Script src="plugins/bootstrap/js/bootstrap.min.js" />
      {/* <Script src="plplugins/chart.js/chart.min.js" /> */}
      {/* <Script src="js/index-charts.js" /> */}
      <Script src="js/app.js" />
    </div>
  );
}

export default MyApp;
