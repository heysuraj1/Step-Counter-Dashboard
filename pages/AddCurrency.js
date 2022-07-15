import React, { useEffect, useState } from "react";
import axios from "axios";
import AddCurrencyEdit from "../components/AddCurrencyEdit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddCurrency = () => {
  const [datas, setDatas] = useState("");
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    axios
      .get("/api/AddCurrencys")
      .then((acc) => {
        setDatas(acc.data);
        console.log(acc.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  const handleDelete = (id) =>{
    console.log(id)


    axios
    .delete("/api/AddCurrencys", {
      data: { id: id },
    })
    .then((acc) => {
      console.log("deleted");
      toast.success("Currency Deleted", {
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
      {showEdit ? (
        <AddCurrencyEdit />
      ) : (
        <div className="app-wrapper">
          <div style={{ marginTop: 100 }} className="container">
            <div style={{ marginBottom: 50 }}>
              <div className="row">
                <div className="col">
                  <h3>Add Currency</h3>
                </div>
                <div className="col text-end">
                  <button
                    onClick={() => setShowEdit(true)}
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
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Sno</th>
                  <th scope="col">Token Name</th>
                  <th scope="col">Symbol</th>
                  <th scope="col">Convert To Token</th>
                  <th scope="col">Wallet Address</th>
                  <th scope="col">Qr Code</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {datas ? (
                  <>
                    {datas.map((hit) => {
                      return (
                        <tr key={hit._id}>
                          <td>Mark</td>
                          <td>{hit.TokenName}</td>
                          <td>{hit.Symbol}</td>
                          <td>{hit.Conversion}</td>
                          <td>{hit.WalletAddress}</td>
                          <td>{hit.QRCode.slice(0, 10)}</td>
                          <td>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-trash3-fill"
                              viewBox="0 0 16 16"
                              style={{color:"red",cursor:"pointer"}}
                              onClick={()=>handleDelete(hit._id)}
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
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default AddCurrency;
