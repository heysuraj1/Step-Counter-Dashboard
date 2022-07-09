import React, { useState, useEffect } from "react";
import axios from "axios";
import ViewUserDetails from "../components/Payment/ViewUserDetails";

const Payments = () => {
  const [datas, setDatas] = useState("");
  const [goToEdit, setGoToEdit] = useState(false);

  const [userId, setUserId] = useState("");
  const [transectionId, setTransectionId] = useState("");
  const [paymentScreenshot, setPaymentScreenshot] = useState("");
  const [status, setStatus] = useState("");
  const [remark, setRemark] = useState("");
  const [mainId, setMainId] = useState("");

  useEffect(() => {
    axios
      .get("/api/Deposit/PaymentRequest")
      .then((acc) => {
        // console.log(acc.data);
        setDatas(acc.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(datas);

  const handleChangeStatus = (mainid,id, transid, payscreenshot, status, remark) => {
    setGoToEdit(true);
    setMainId(mainid)
    setUserId(id);
    setTransectionId(transid);
    setPaymentScreenshot(payscreenshot);
    setStatus(status);
    setRemark(remark);
  };

  return (
    <div className="container">
      {goToEdit ? (
        <>
          <ViewUserDetails mainId={mainId}  userid={userId} transectionId={transectionId}  paymentScreenshot={paymentScreenshot} status={status} remark={remark}   />
        </>
      ) : (
        <>
          <h2 style={{ marginTop: 100 }}>Payment Requests</h2>

          <table className="table table-striped mt-5">
            <thead>
              <tr>
                <th scope="col">UserId</th>
                <th scope="col">Transection Id</th>
                <th scope="col">Payment Screenshort</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {datas ? (
                <>
                  {datas.map((hit) => {
                    return (
                      <tr key={hit.id}>
                        <td>{hit.UserId}</td>
                        <td>{hit.transectionId}</td>
                        <td>{hit.paymentScreenshort}</td>
                        <td>{hit.approvalStatus}</td>
                        <td>
                          <button
                            // onClick={() => setGoToEdit(true)}
                            onClick={() =>
                              handleChangeStatus(
                                hit._id,
                                hit.UserId,
                                hit.transectionId,
                                hit.paymentScreenshort,
                                hit.approvalStatus,
                                hit.remark
                              )
                            }
                            className="btn btn-primary text-white"
                          >
                            Edit
                          </button>
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
        </>
      )}
    </div>
  );
};

export default Payments;
