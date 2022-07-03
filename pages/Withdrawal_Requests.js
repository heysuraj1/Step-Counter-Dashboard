import React, { useEffect, useState } from "react";
import axios from "axios";

const Withdrawal_Requests = () => {
  const [datas, setDatas] = useState();
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    axios
      .get("/api/WithdrawRequest")
      .then((acc) => {
        setShowData(true);
        return setDatas(acc.data);
      })
      .catch((err) => {
        return console.log(err);
      });
  }, []);

  console.log(datas);

  return (
    <div>
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
                            <th className="cell">Withdraw Coins</th>
                            <th className="cell">Activation Key</th>
                            <th className="cell">Payment Wallate</th>
                            <th className="cell">Request Created At</th>
                            <th className="cell">Status</th>
                            <th className="cell" />
                          </tr>
                        </thead>
                        <tbody>
                          {showData ? (
                            <>
                              {datas.map((hit) => {
                                return (
                                  <tr key={hit._id}>
                                    <td className="cell">{hit.userUniqueId}</td>
                                    <td className="cell">
                                      <span className="truncate">
                                        {hit.WithdrawCoins}
                                      </span>
                                    </td>
                                    <td className="cell">
                                      {hit.ActivationCode}
                                    </td>
                                    <td className="cell">
                                      {hit.PaymentWallete}{" "}
                                    </td>
                                    <td className="cell">{hit.createdAt}</td>
                                    <td className="cell ">{hit.Status}</td>
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
                                      <div className="modal-dialog  modal-dialog-scrollable  modal-dialog-centered">
                                        <div className="modal-content">
                                          <div className="modal-header">
                                            <h5
                                              className="modal-title"
                                              id="staticBackdropLabel"
                                            >
                                              Withdrawal Requests
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

                                          <label className="form-label">User Id</label>
                                          <input type="text" className="form-control" defaultValue={hit.userUniqueId}/>
                                          <div className="p-2"></div>
                                          <label className="form-label">Coins Requested</label>
                                          <input type="text" className="form-control" defaultValue={hit.WithdrawCoins}/>
                                          <div className="p-2"></div>
                                          <label className="form-label">Activation Key</label>
                                          <input type="text" className="form-control" defaultValue={hit.ActivationCode}/>
                                          <div className="p-2"></div>
                                          <label className="form-label">Payment Wallet</label>
                                          <input type="text" className="form-control" defaultValue={hit.PaymentWallete}/>
                                          <div className="p-2"></div>
                                          <label className="form-label">Requested On</label>
                                          <input type="text" className="form-control" defaultValue={hit.createdAt}/>
                                          <div className="p-2"></div>
                                          <label className="form-label">Status</label>
                                          {/* <input type="text" className="form-control" defaultValue={hit.Status}/> */}




                                         <select className="form-select" aria-label="Default select example">
                                          <option value={hit.Status} selected>{hit.Status}</option>
                                          <option value="Rejected">Rejected</option>
                                          <option value="Missleading Information / Rejected">Missleading Information / Rejected</option>
                                          <option value="Under Inspection">Under Inspection</option>
                                          <option value="Approved">Approved</option>
                                          <option value="Approved">Credited</option>
                                        </select>


                                        

                                          <div className="p-2"></div>
                                          <div className="text-center">
                                          <button data-bs-dismiss="modal" aria-label="Close" className="btn btn-primary text-white">Update</button>
                                          </div>





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
                              <button type="button" className="btn btn-primary">
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
  );
};

export default Withdrawal_Requests;
