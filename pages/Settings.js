import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
const Settings = () => {
  const [datas, setDatas] = useState(null);
  const [limit, setLimit] = useState("");
  const router = useRouter();

  useEffect(() => {
    axios
      .get("/api/Refer/GetReferalCoinLimit")
      .then((acc) => {
        console.log(acc.data);
        setDatas(acc.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateCoin = (id) => {
    axios
      .put("/api/Refer/GetReferalCoinLimit", {
        id: id,
        updatedLimit: limit,
      })
      .then((acc) => {
        router.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="app-wrapper">
      {datas ? (
        <div className="container" style={{ marginTop: 100 }}>
          <div className="row">
            <div className="col-sm-6">
              <label className="form-label">Referal Coins Earning</label>

              <input
                type="number"
                onChange={(e) => {
                  setLimit(e.target.value);
                }}
                defaultValue={datas.ReferalCoinLimit}
                className="form-control"
              />

              <button
                onClick={() => updateCoin(datas._id)}
                className="btn btn-primary text-white mt-3"
              >
                Update
              </button>
              {/* </div> */}
            </div>
            <div className="col-sm-6"></div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Settings;
