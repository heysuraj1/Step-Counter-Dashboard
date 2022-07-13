import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router'


const Users = () => {
  const router = useRouter()

  const [datas, setDatas] = useState();
  const [showData, setShowData] = useState(false);

  const [randomValue, setRandomValue] = useState("");

  useEffect(() => {
    axios
      .get("/api/AllUsers")
      .then((acc) => {
        setShowData(true);

        return setDatas(acc.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("problem hai yaha");
      });
  }, []);

  console.log(datas);

  const handleClick = () => {
    let randomvalue = Math.floor(Math.random() * 15696848648465465400 + 85);
    // alert(randomvalue)
    setRandomValue(randomvalue);
  };

  const handleUserDataUpdate = (id) => {
    axios
    .post("/api/updateuserActivationCode", {
      activationkey: randomValue,
      userid: id,
    })
    .then((acc) => {
      console.log("user activation code updated");
    })
    .catch((err) => {
      console.log(err);
    });
    // alert(id)
    router.push("/")





  };

  return (
    <div className="app-wrapper">
    <div className="container mt-5">
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
                          <th className="cell">UserID</th>
                          <th className="cell">User Name</th>
                          <th className="cell">Type</th>
                          <th className="cell">Wallate</th>
                          <th className="cell">Referal</th>
                          <th className="cell">Activation Key</th>
                          <th className="cell" />
                        </tr>
                      </thead>
                      <tbody>
                        {showData ? (
                          <>
                            {datas.map((hit) => {
                              return (
                                <tr key={hit._id}>
                                  <td className="cell">{hit._id}</td>
                                  <td className="cell">
                                    <span className="truncate">
                                      @{hit.username}
                                    </span>
                                  </td>
                                  <td className="cell">{hit.role}</td>
                                  <td className="cell">{hit.wallate}</td>
                                  <td className="cell">{hit.referal} </td>
                                  <td className="cell">{hit.activationKey}</td>
                                  <td className="cell">
                                    <a
                                      className="btn-sm app-btn-secondary"
                                      type="button"
                                      data-bs-toggle="modal"
                                      data-bs-target={`#staticBackdrop${hit._id}`}
                                    >
                                      Action
                                    </a>
                                  </td>
                                  {/* modal starts from here  */}

                                  <div
                                    className="modal fade"
                                    id={`staticBackdrop${hit._id}`}
                                    // id="staticBackdrop"
                                    data-bs-backdrop="static"
                                    data-bs-keyboard="false"
                                    tabIndex={-1}
                                    aria-labelledby="staticBackdropLabel"
                                    aria-hidden="true"
                                  >
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                      <div className="modal-content">
                                        <div className="modal-header">
                                          <h5
                                            className="modal-title"
                                            id="staticBackdropLabel"
                                          >
                                            User Details
                                          </h5>
                                          <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                          />
                                        </div>
                                        <div className="modal-body">
                                          <div className="container pt-1 pb-5">
                                            <label className="form-label">
                                              Name
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              defaultValue={hit.Name}
                                            />
                                            <div className="p-1"></div>

                                            <label className="form-label">
                                              Username
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              defaultValue={hit.username}
                                            />
                                            <div className="p-1"></div>

                                            <label className="form-label">
                                              Email
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              defaultValue={hit.email}
                                            />
                                            <div className="p-1"></div>

                                            <label className="form-label">
                                              Role
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              defaultValue={hit.role}
                                            />
                                            <div className="p-1"></div>

                                            <label className="form-label">
                                              Activation Key
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              defaultValue={
                                                hit.activationKey === "none"
                                                  ? randomValue
                                                  : hit.activationKey
                                              }
                                            />
                                            {hit.activationKey !== "none" ? (
                                              <></>
                                            ) : (
                                              <p
                                                onClick={handleClick}
                                                style={{
                                                  textDecoration: "underline",
                                                  cursor: "pointer",
                                                }}
                                                className="text-primary text-end"
                                              >
                                                Generate An Activation Code
                                              </p>
                                            )}

                                            <label className="form-label">
                                              Weight
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              defaultValue={hit.Weight}
                                            />
                                            <div className="p-1"></div>

                                            <label className="form-label">
                                              Height
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              defaultValue={hit.Height}
                                            />
                                            <div className="p-1"></div>

                                            <label className="form-label">
                                              DOB
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              defaultValue={hit.DOB}
                                            />
                                            <div className="p-1"></div>

                                            <label className="form-label">
                                              Age
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              defaultValue={hit.Age}
                                            />
                                            <div className="p-1"></div>

                                            <label className="form-label">
                                              Gender
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              defaultValue={hit.Gender}
                                            />
                                            <div className="p-1"></div>

                                            <label className="form-label">
                                              Goal
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              defaultValue={hit.Goal}
                                            />
                                            <div className="p-1"></div>

                                            <label className="form-label">
                                              Wallet
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              defaultValue={hit.wallate}
                                            />
                                            <div className="p-1"></div>

                                            <label className="form-label">
                                              Referal
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              defaultValue={hit.referal}
                                            />
                                            <div className="p-1"></div>

                                            <label className="form-label">
                                              Account Created At
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              defaultValue={hit.createdAt}
                                            />
                                            <div className="p-1"></div>

                                            {
                                              hit.activationKey === "none" ? 

                                            <div className="text-center mt-3">
                                              <button data-bs-dismiss="modal" aria-label="Close" onClick={()=>handleUserDataUpdate(hit._id)} className="btn btn-primary text-white">
                                                Update Activation Code
                                              </button>
                                            </div>

                                              :

                                              <></>
                                            }

                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* modal ends here  */}
                                </tr>
                              );
                            })}
                          </>
                        ) : (
                          <></>
                        )}
                      </tbody>
                    </table>
                  </div>
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

export default Users;
