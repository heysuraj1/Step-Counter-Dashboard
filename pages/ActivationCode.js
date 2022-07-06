import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ActivationCode = () => {
  const [generatedCode, setGeneratedCode] = useState("");
  const [copyButtonClicked, setCopyButtonClicked] = useState("Copy");
  const [datas, setDatas] = useState("");

  useEffect(() => {
    axios
      .get("/api/ActivationCode/CreateNewActivationCode")
      .then((acc) => {
        // console.log(acc.data);
        setDatas(acc.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSingleGenerate = () => {
    setCopyButtonClicked("Copy");
    var GereratedActivationCode = (Math.random() + 5).toString(9).substring(7);
    setGeneratedCode(GereratedActivationCode);

    axios
      .post("/api/ActivationCode/CreateNewActivationCode", {
        activationKey: GereratedActivationCode,
      })
      .then((acc) => {
        // console.log(acc.data)
        toast.success("Activation Code Generated", {
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
        // console.log(err);
      });
  };

  const handleDeleteIt = (id) => {
    console.log(id);

    axios
      .delete("/api/ActivationCode/CreateNewActivationCode", {
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
  };

  return (
    <div className="container">
      <h3 style={{ marginTop: 100 }}>Generate Activation Code</h3>

      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6 mt-4">
            <input value={generatedCode} type="text" class="form-control" />
          </div>
          <div className="col-sm-6 mt-4">
            <button
              onClick={handleSingleGenerate}
              className="btn btn-primary text-white"
            >
              Generate
            </button>
            <CopyToClipboard text={generatedCode}>
              <button
                style={{ marginLeft: 10 }}
                onClick={() => setCopyButtonClicked("Copied!")}
                className="btn btn-primary text-white"
              >
                {copyButtonClicked}
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </div>

      <div className="container"></div>

      <h3 style={{ marginTop: 100 }}>Activation Code Available</h3>

      <div className="container">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Activation Code</th>
            </tr>
          </thead>
          <tbody>
            {datas ? (
              datas.map((hit) => {
                return (
                  <tr key={hit._id}>
                    <td>{hit.ActivatioKey}</td>
                    <td>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash3-fill"
                        viewBox="0 0 16 16"
                        color="red"
                        onClick={() => handleDeleteIt(hit._id)}
                        style={{ cursor: "pointer" }}
                      >
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                      </svg>
                    </td>
                  </tr>
                );
              })
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivationCode;
