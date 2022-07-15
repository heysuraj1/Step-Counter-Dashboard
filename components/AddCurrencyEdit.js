import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const AddCurrencyEdit = () => {
  const router = useRouter();
  const [tokenname, setTokenname] = useState("");
  const [symbol, setSymbol] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [media, setMediaUrl] = useState("");
  const [conversion, setConversion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form submited");
    const mediaUrl = await imageUpload();

    axios
      .post("/api/AddCurrencys", {
        TokenName: tokenname,
        Symbol: symbol,
        WalletAddress: walletAddress,
        QRCode: mediaUrl,
        Conversion: conversion,
      })
      .then((acc) => {
        console.log(acc.data);
        // alert("done");
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
      "https://api.cloudinary.com/v1_1/learnerboy/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const res2 = await res.json();
    // console.log(res2);
    return res2.url;
  };

  return (
    <div className="app-wrapper">
      <div style={{ marginTop: 100 }} className="container">
        <div className="row">
          <div className="col-sm-6">
            <form onSubmit={handleSubmit}>
              <label className="form-label">Token Name</label>
              <input
                onChange={(e) => {
                  setTokenname(e.target.value);
                }}
                type="text"
                className="form-control"
              />
              <label className="form-label mt-4">Symbol</label>
              <input
                onChange={(e) => {
                  setSymbol(e.target.value);
                }}
                type="text"
                className="form-control"
              />
              <label className="form-label mt-4">Wallet Address</label>
              <input
                onChange={(e) => {
                  setWalletAddress(e.target.value);
                }}
                type="text"
                className="form-control"
              />
              <label className="form-label mt-4">Conversion</label>
              <input
                onChange={(e) => {
                  setConversion(e.target.value);
                }}
                type="number"
                className="form-control"
              />
              <label className="form-label mt-4">Qr Code</label>
              <input
                onChange={(e) => {
                  setMediaUrl(e.target.files[0]);
                }}
                type="file"
                class="form-control"
              />

              <button className="btn btn-primary text-white mt-5">
                SUBMIT
              </button>
            </form>
          </div>
          <div className="col-sm-6"></div>
        </div>
      </div>
    </div>
  );
};

export default AddCurrencyEdit;
