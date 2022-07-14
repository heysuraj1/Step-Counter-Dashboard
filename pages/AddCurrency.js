import React from "react";

const AddCurrency = () => {
  return (
    <div className="app-wrapper">
      <div style={{ marginTop: 100 }} className="container">
        <div style={{ marginBottom: 50 }}>
          <div className="row">
            <div className="col">
              <h3>Add Currency</h3>
            </div>
            <div className="col text-end">
              <button className="btn btn-primary text-white">
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddCurrency;
