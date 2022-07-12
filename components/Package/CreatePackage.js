import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CreatePackage = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [period, setPeriod] = useState("");
  const [reward, setReward] = useState("");
  const [goal, setGoal] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [media, setMedia] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    const mediaUrl = await imageUpload();

    axios
      .post("/api/Package/Packages", {
        PackageName: name,
        PackagePrice: price,
        PackagePeriod: period,
        EveryDayReward: reward,
        StepsGoal: goal,
        QRCode: mediaUrl,
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
        router.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };












  const imageUpload = async () => {
    const data = new FormData();
    data.append("file", media);
    data.append("upload_preset", "mystore");
    data.append("cloud_name", "learnerboy");
    const res = await fetch(
      "	https://api.cloudinary.com/v1_1/learnerboy/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const res2 = await res.json();
    return res2.url;
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
              <label htmlFor="exampleInputEmail1" className="form-label mt-2">
                Upload Image
              </label>
              <input
                accept="image/*"
                onChange={(e) => {
                  setMedia(e.target.files[0]);
                }}
                type="file"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="text-center">
              <img
                src={
                  media
                    ? URL.createObjectURL(media)
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZEhBSYCK3ueHMx5lenuCqxrl2NR-QlblZVg&usqp=CAU"
                }
                className="img-fluid henc text-center"
                alt="..."
                width="auto"
              />
            </div>
          </div>
        </div>
        <button className="btn btn-primary mt-3 text-white">Submit</button>
      </form>
    </div>
  );
};

export default CreatePackage;
