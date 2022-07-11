import React, { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CreatePackage = () => {
    const router = useRouter()

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [period, setPeriod] = useState("");
  const [reward, setReward] = useState("");
  const [goal, setGoal] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/Package/Packages", {
        PackageName: name,
        PackagePrice: price,
        PackagePeriod: period,
        EveryDayReward: reward,
        StepsGoal: goal,
        QRCode: "thisisademowr",
        AccountNumber: accountNumber,
      })
      .then((acc) => {
        console.log(acc.data);
        toast.success("Package Added", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        router.reload()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <h3 style={{ marginTop: 100 }}>Create New Packages</h3>
      <form onSubmit={handleSubmit}>
        <div className="row mt-5">
          <div className="col-sm-6">
            <div>
              <label htmlFor="exampleInputEmail1" className="form-label">
                Package Name
              </label>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                className="form-control"
              />
              <label htmlFor="exampleInputEmail1" className="form-label">
                Package Price
              </label>
              <input
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                type="text"
                className="form-control"
              />
              <label htmlFor="exampleInputEmail1" className="form-label">
                Package Period
              </label>
              <input
                onChange={(e) => {
                  setPeriod(e.target.value);
                }}
                type="text"
                className="form-control"
              />
              <label htmlFor="exampleInputEmail1" className="form-label">
                Everyday Reward
              </label>
              <input
                onChange={(e) => {
                  setReward(e.target.value);
                }}
                type="text"
                className="form-control"
              />
              <label htmlFor="exampleInputEmail1" className="form-label">
                Steps Goal
              </label>
              <input
                onChange={(e) => {
                  setGoal(e.target.value);
                }}
                type="text"
                className="form-control"
              />
              <label htmlFor="exampleInputEmail1" className="form-label">
                Account Number
              </label>
              <input
                onChange={(e) => {
                  setAccountNumber(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-sm-6"></div>
        </div>
        <button className="btn btn-primary mt-3 text-white">Submit</button>
      </form>
    </div>
  );
};

export default CreatePackage;
