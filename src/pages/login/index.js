import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate(`home`);
    }
  }, [navigate]);

  async function login() {
    let item = { email, password };
    let result = await fetch(
      "https://web-production-2d7b.up.railway.app/token/",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    var data = await result.json();

    if (result.status === 200) {
      var token = data.access;
      localStorage.setItem("token", token);
      let resultNew = await fetch(
        "https://web-production-2d7b.up.railway.app/apiV1/current-user/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `JWT ${token}`,
          },
        }
      );
      if (resultNew.status === 200) {
        var userData = await resultNew.json();
        localStorage.setItem("userData", JSON.stringify(userData));
        navigate(`home`);
      }
    }
  }

  return (
    <div className="th-fixed">
      <div className="row align-items-center ">
        <div className="col-md-8 th-display th-login-background">
          <div className="th-login-background "></div>
        </div>
        <div className="col-md-4 p-5">
          <div className="pb-3">
            <img src={logo} width="auto" height="30" alt="" />
          </div>
          <div className="th-fw-600 th-20 pb-3">Welcome to DocConnect</div>
          <form>
            <label htmlFor="email" className="">
              Enter Email
            </label>
            <br />
            <input
              type="text"
              placeholder="xyz@emailcom"
              className="th-form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="password">Enter Password</label>
            <br />
            <input
              type="password"
              placeholder="********"
              className="th-form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button
              type="button"
              className="w-100 btn btn-primary"
              onClick={login}
            >
              Login
            </button>

            <div className="d-flex">
              <div className="col-md-4"></div>
              <div className="col-md-4 text-center">
                {/* <Link to="/">
                  <br />
                  <i
                    className="fa-solid fa-house-crack pr-1"
                    style={{ color: "#7b7b7c" }}
                  ></i>
                </Link> */}
              </div>
              <div className="col-md-4"></div>
            </div>

            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
