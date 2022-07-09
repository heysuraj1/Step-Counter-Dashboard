import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from 'next/router'


const ViewUserDetails = (props) => {
  const router = useRouter()

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [wallet, setWallet] = useState("");
  const [name, setName] = useState("");
  const [SelectStatus, setSelectStatus] = useState("");

  useEffect(() => {
    console.log(
      props.mainId,
      props.userid,
      props.transectionId,
      props.paymentScreenshot,
      props.status,
      props.remark
    );

    axios
      .post("/api/dynamic/singleUser", {
        activeUserId: props.userid,
      })
      .then((acc) => {
        console.log(acc.data);
        setUsername(acc.data[0].username);
        setEmail(acc.data[0].email);
        setWallet(acc.data[0].wallate);
        setName(acc.data[0].Name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);




  const handleUpdate = () =>{

    // console.log(SelectStatus)



    axios.post("/api/Deposit/UpdateStatus",{
      userId:props.mainId,
      status:SelectStatus
    }).then((acc)=>{
      console.log("updated")
      router.reload()
    }).catch((err)=>{
      console.log(err)
    })

  }

  return (
    <div style={{ marginTop: 100 }} className=" container">
      <h3>Payment Details</h3>

      <div className="mt-3">
        <div className="row">
          <div className="col-sm-6">
            <label className="form-label">User ID</label>
            <input value={props.userid} type="text" className="form-control" />
            <label className="form-label mt-3">User Name</label>
            <input value={username} type="text" className="form-control" />
            <label className="form-label mt-3">Name</label>
            <input value={name} type="text" className="form-control" />
            <label className="form-label mt-3">Email</label>
            <input value={email} type="text" className="form-control" />
            <label className="form-label mt-3">Wallet</label>
            <input value={wallet} type="text" className="form-control" />
          </div>
          <div className="col-sm-6">
            <label className="form-label">Transection ID</label>
            <input
              value={props.transectionId}
              type="text"
              className="form-control"
            />
            <label className="form-label mt-3">Payment Screenshort</label>{" "}
            <br />
            <div style={{ textAlign: "center" }}>
              <a
                target="__blank"
                href="https://1.bp.blogspot.com/-sOqv9sI50hQ/X_lfiyxtucI/AAAAAAAABPc/KTIY-B8X2fQDhNzXVnAPrG0u15vYPXTyACLcBGAsYHQ/w309-h589/google%2Bpay%2Breceipt.jpg"
              >
                <img
                  style={{ width: 100 }}
                  src="https://1.bp.blogspot.com/-sOqv9sI50hQ/X_lfiyxtucI/AAAAAAAABPc/KTIY-B8X2fQDhNzXVnAPrG0u15vYPXTyACLcBGAsYHQ/w309-h589/google%2Bpay%2Breceipt.jpg"
                  className="img-fluid"
                  alt=""
                />
              </a>
            </div>
            <br />
            <label className="form-label mt-3">Status</label>
            <select onChange={(e) => {
                          setSelectStatus(e.target.value);
                        }} class="form-select" aria-label="Default select example">
              <option   className="bg-primary text-white" selected value={props.status}>
              {props.status}
              </option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
            {/* <label className="form-label mt-3">Remark</label>
            <textarea
              defaultValue={props.remark}
              rows={10}
              type="text"
              className="form-control"
            /> */}
          </div>
        </div>

        <div className="container text-center mt-5">
          <button onClick={handleUpdate} style={{width:"20%"}} className="btn btn-primary text-white">Save</button>
          <div className="mt-4">
          <a style={{cursor:"pointer"}}  onClick={()=>router.reload()}> <h6>Back</h6> </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUserDetails;
