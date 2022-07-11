import React, { useState, useEffect } from "react";
import axios from "axios";
import CreatePackage from "../components/Package/CreatePackage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Packages = () => {
  const [datats, setdatats] = useState("");
  const [showCraete, setShowCraete] = useState(false);

  useEffect(() => {
    axios
      .get("/api/Package/Packages")
      .then((acc) => {
        console.log(acc.data);
        setdatats(acc.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  const handleDelete = (id) =>{


    axios
    .delete("/api/Package/Packages", {
      data: { id: id },
    })
    .then((acc) => {
      console.log("deleted");
      toast.success("Activation Code Deleted", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
    .catch((err) => {
      console.log(err);
    });

  }

  return (
    <>
      {showCraete ? (
        <>
          <CreatePackage />
        </>
      ) : (
        <>
          <div className="container">
            <div style={{ marginTop: 100 }}>
              <div className="row">
                <div className="col">
                  <h3>Packages</h3>
                </div>
                <div className="col text-end">
                  <button
                    onClick={() => setShowCraete(true)}
                    className="btn btn-primary text-white"
                  >
                    Create New
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-plus"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="app-content pt-3 p-md-3 p-lg-4">
                <div style={{ marginTop: 50 }} className="container-xl">
                  <div className="tab-content" id="orders-table-tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="orders-all"
                      role="tabpanel"
                      aria-labelledby="orders-all-tab"
                    >
                      <div className="app-card app-card-orders-table shadow-sm mb-5">
                        <div className="app-card-body">
                          <div className="table-responsive">
                            <table className="table app-table-hover mb-0 text-left">
                              <thead>
                                <tr>
                                  <th className="cell">Package Name</th>
                                  <th className="cell">Package Price</th>
                                  <th className="cell">Package Period</th>
                                  <th className="cell">Everyday Reward</th>
                                  <th className="cell">Steps Goal</th>
                                  <th className="cell">Account Number</th>
                                  <th className="cell" />
                                </tr>
                                {datats ? (
                                  <>
                                    {datats.map((hit) => {
                                      return (
                                        <tr key={hit._id}>
                                          <td className="cell">
                                            {hit.PackageName}
                                          </td>
                                          <td className="cell">
                                            <span className="truncate">
                                              {hit.PackagePrice}
                                            </span>
                                          </td>
                                          <td className="cell">
                                            {hit.PackagePeriod}
                                          </td>
                                          <td className="cell">
                                            {hit.EveryDayReward}
                                          </td>
                                          <td className="cell">
                                            {hit.StepsGoal}
                                          </td>
                                          <td className="cell ">
                                            {hit.AccountNumber}
                                          </td>
                                          <td className="cell ">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="16"
                                              height="16"
                                              fill="currentColor"
                                              className="bi bi-trash3-fill"
                                              viewBox="0 0 16 16"
                                              onClick={()=>handleDelete(hit._id)}
                                              style={{cursor:"pointer",color:"red"}}
                                            >
                                              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                            </svg>
                                          </td>
                                        </tr>
                                      );
                                    })}
                                  </>
                                ) : (
                                  <></>
                                )}
                              </thead>
                              <tbody></tbody>
                            </table>

                            <div
                              className="modal fade"
                              id="exampleModal"
                              tabIndex={-1}
                              role="dialog"
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5
                                      className="modal-title"
                                      id="exampleModalLabel"
                                    >
                                      Modal title
                                    </h5>
                                    <button
                                      type="button"
                                      className="close"
                                      data-dismiss="modal"
                                      aria-label="Close"
                                    >
                                      <span aria-hidden="true">×</span>
                                    </button>
                                  </div>
                                  <div className="modal-body">...</div>
                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      className="btn btn-secondary"
                                      data-dismiss="modal"
                                    >
                                      Close
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                    >
                                      Save changes
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Packages;
