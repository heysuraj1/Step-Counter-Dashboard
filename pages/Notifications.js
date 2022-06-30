import React, { useState, useEffect } from "react";
import axios from "axios";
const Notifications = () => {
  const [datas, setDatas] = useState();
  const [showDatas, setShowDatas] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/SendNotifications")
      .then((acc) => {
        setShowDatas(true);
        return setDatas(acc.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div style={{ marginTop: 100 }}>
        <div className="row">
          <div className="col">
            <h3>Send Notifications</h3>
          </div>
          <div className="col text-end">
            <button className="btn btn-primary text-white">
              Create New
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        {showDatas ? (
          <>
          <div className="card m-4">
                  <div className="row text-center">
                    <div style={{fontWeight:"bold",fontSize:15}}  className="col">User Unique Id</div>
                    <div style={{fontWeight:"bold",fontSize:15}}  className="col">Notification Message</div>
                    <div  style={{fontWeight:"bold",fontSize:15}} className="col">Updated At</div>
                    <div  style={{fontWeight:"bold",fontSize:15}} className="col">Created At</div>
                    <div  style={{fontWeight:"bold",fontSize:15}} className="col"></div>
                  </div>
                </div>
            {datas.map((hit) => {
              return (
                <div className="card m-4">
                  <div className="row text-center">
                    <div className="col">{hit.userUniqueId}</div>
                    <div className="col">{hit.notificationMessage.slice(0,10)}...</div>
                    <div className="col">{hit.updatedAt}</div>
                    <div className="col">{hit.createdAt}</div>
                    <div className="col"><button className="btn btn-primary text-white">Edit</button></div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Notifications;
