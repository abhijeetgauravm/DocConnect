import Navbar from "./../home/components/navbar";
import logo from "./../../images/logo.png";
import Experience from "./background";
import CommonForm from "./component";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import BasicProfile from './basic';
const SideMenuTemp = ["name", "title", "dob"];

function Profile() {
  const [data, setData] = useState({
    contact: "",
    email: "",
    name: "",
  });

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      var userData = JSON.parse(localStorage.getItem("userData"));
      console.log(userData);
      setData(userData);
    } else {
      navigate(`/login`);
    }
  }, []);

  return (
    <div className="container">
      <Navbar />
      <div className="row pt-3 ">
        <div className="col-md-4 p-0 align-item-center th-display">
          <div className="card" style={{ width: "18rem" }}>
            <div className="p-5">
              <img src={logo} className="card-img-top" alt="..." />
            </div>
            <ul className="list-group list-group-flush">
              {SideMenuTemp?.map((item) => {
                return <li className="list-group-item">{item}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="col-md-8 ">
          <div
            className="py-3"
            style={{
              width: "auto",
              boxShadow: "10px 10px 10px 10px #f2f2f2",
              padding: "10px",
            }}
          >
            <div className="" style={{ fontSize: "24px" }}>
              <b>Basic Information</b>
            </div>
            <CommonForm name="Your Name" type="text" for="name" important="*" />
            <CommonForm
              name="Professional Title"
              type="text"
              for="title"
              important="*"
            />
            <CommonForm name="DOB" type="date" important="*" />

            <div className="pt-3">
              <label for="description" className="">
              {data.name} <span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <textarea
                id="description"
                name="description"
                className="th-form-control"
                style={{
                  backgroundColor: "#e6f7ff",
                  width: "100%",
                  height: "50%",
                }}
              ></textarea>
            </div>

            <div className="py-3">
              <div className="" style={{ fontSize: "24px" }}>
                <b>My Resume</b>
              </div>
              <div className="py-3">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Add Experience
                </button>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Add Experience
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <Experience />
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <BasicProfile/> */}
    </div>
  );
}

export default Profile;
