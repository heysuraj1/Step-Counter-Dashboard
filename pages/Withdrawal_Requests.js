import React, { useEffect, useState } from "react";
import axios from "axios";

const Withdrawal_Requests = () => {
  const [datas, setDatas] = useState();
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    
    axios
      .get("https://step-counter-dashboard.vercel.app/api/WithdrawRequest")
      .then((acc) => {
        setShowData(true)
        return setDatas(acc.data);
      })
      .catch((err) => {
        return console.log(err);
      });
  }, []);


  console.log(datas)

  return <div>















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

                          {/* <th className="cell" /> */}
                          {/* <th className="cell" /> */}
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
                                  <td className="cell">{hit.ActivationCode}</td>
                                  <td className="cell">{hit.PaymentWallete} </td>
                                  <td className="cell">{hit.createdAt}</td>
                                  <td className="cell ">{hit.Status}</td>
                                  <td className="cell">
                                    <a
                                      className="btn-sm app-btn-secondary"
                                      type="button"
                                      data-toggle="modal" data-target="#exampleModal"
                                    >
                                      Approve
                                    </a>
                                  </td>
                                </tr>
                              );
                            })}
                          </>
                        ) : (
                          <></>
                        )}
                      </tbody>
                    </table>


                   <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
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
  </div>;
};

export default Withdrawal_Requests;
