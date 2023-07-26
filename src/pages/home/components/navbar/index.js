import React, { useEffect, useState } from "react";
import logo from "../../../../images/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate(`/`);
  };

  return (
    <div className="container">
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{ padding: "0.5rem 0rem 0.5rem 0rem" }}
      >
        <Link class="navbar-brand" to="/home">
          <img src={logo} width="auto" height="30" alt="#" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item ">
              <Link
                className="nav-link"
                to="/home"
                style={{ fontWeight: "Bold" }}
              >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/jobs"
                style={{ fontWeight: "Bold" }}
              >
                Jobs
              </Link>
            </li>
          </ul>

          <div className="">
            <Link
              className="pr-3 py-2"
              to="/profile"
              style={{
                fontWeight: "Bold",
                color: "rgba(0,0,0,.5)",
                textDecoration: "none",
              }}
            >
              Profile
            </Link>
            <Link to="/">
              <button
                type="button"
                className="btn btn-primary px-4"
                onClick={logout}
              >
                Logout
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
