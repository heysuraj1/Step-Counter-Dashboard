import React, { useState, useEffect } from "react";
import axios from "axios";
const Notifications = () => {
  const [datas, setDatas] = useState();
  const [showDatas, setShowDatas] = useState(false);

  useEffect(() => {
    axios
      .get("/api/SendNotifications")
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
            <button
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
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

      <div className="container mt-5">
        {showDatas ? (
          <>
            <div className="card m-4">
              <div className="row ">
                <div
                  style={{ fontWeight: "bold", fontSize: 15 }}
                  className="col"
                >
                  User Unique Id
                </div>
                <div
                  style={{ fontWeight: "bold", fontSize: 15 }}
                  className="col"
                >
                  Notification Message
                </div>
               
                <div
                  style={{ fontWeight: "bold", fontSize: 15 }}
                  className="col"
                ></div>
                <div
                  style={{ fontWeight: "bold", fontSize: 15 }}
                  className="col"
                ></div>
                
              </div>
            </div>
            {datas.map((hit) => {
              return (
                <div className="card m-4" key={hit.id}>
                  <div className="row ">
                    <div className="col">{hit.userUniqueId}</div>
                    <div className="col">
                      {hit.notificationMessage.slice(0, 80)}...
                    </div>
                    <div className="col">{hit.updatedAt}</div>
                    <div className="col">{hit.createdAt}</div>
                    <div className="col">
                      <button
                        data-bs-toggle="modal"
                        data-bs-target={`#staticBackdropp${hit.userUniqueId}`}
                        className="btn btn-primary text-white"
                      >
                        Edit
                      </button>
                    </div>

                    {/* show data modal will appear here  */}

                    <div
                      className="modal fade"
                      id={`staticBackdropp${hit.userUniqueId}`}
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabIndex={-1}
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="staticBackdropLabel"
                            >
                              Notifications
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">


                              <label  class="form-label">User Unique Id</label>
                              <input defaultValue={hit.userUniqueId} type="text" class="form-control" />
                              <div className="p-2"></div>
                              <label  class="form-label">Notification Message</label>
                              <textarea defaultValue={hit.notificationMessage} rows={10} type="text" class="form-control"  />
                              <div className="p-2"></div>
                              




                          </div>
                        
                        </div>
                      </div>
                    </div>

                    {/* show data modal will end here */}
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </div>

      {/* add modal will show here  */}

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Create New Notification
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="container mt-2 mb-5">
                <label class="form-label">User Name</label>
                {/* <input type="text" class="form-control" /> */}
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="user1" selected>
                    user1
                  </option>
                  <option value="user2">user2</option>
                  <option value="user3">user3</option>
                  <option value="user4">user4</option>
                </select>

                <div className="p-1"></div>
                <label class="form-label">Notification Message</label>
                <textarea rows={20} type="text" class="form-control" />
                <div className="p-1"></div>

                <div className="continer text-center mt-2">
                  <button
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    className="btn btn-primary text-white"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* add modal ends here  */}
    </div>
  );
};

export default Notifications;
