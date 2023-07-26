import React, { Component } from "react";
import MainCloumn from "./components/TopSection";
import logo from "../../images/logo.png";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Card from "./components/Steps";

class HomePage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <MainCloumn
            headline="Find your dream health care job with DocConnect"
            subhead="Get the most exciting jobs from all around the India and grow your carrer in healthcare."
            classVal=" th-home-background th-background "
          />

          <Card />

          <div className="row align-items-center py-5">
            <div className="col-md-6 ">
              <div className="th-home-background-3 th-background"></div>
            </div>
            <div className="col-md-6  ">
              <div>
                <div className="th-fw-600 th-36">
                  Over 10,000+ Talented People Registered in Our Website
                </div>
              </div>
              <div className="pt-2 th-grey">
                Get the most exciting jobs from all around the India and grow
                your carrer in healthcare.
              </div>
              <div className="py-3">
                <button type="button" className="btn btn-primary">
                  Explore More
                </button>
              </div>
            </div>
          </div>

          <div>
            <MainCloumn
              headline="500+ World Top Company Posted Their Job"
              subhead="Get the most exciting jobs from all around the India and grow your carrer in healthcare."
              classVal="th-home-background-2 th-background"
            />
          </div>

          <div className="row py-3 th-display">
            <div className="col-md-4 py-3">
              <img src={logo} width="auto" height="30" alt="" />
              <div className="th-grey py-2">
                Doc Connect brings together physicians/surgeons, nurses, NPs,
                PAs and CRNAs with jobs in every medical specialty.
              </div>
              <div className="th-grey">support@docconnect.in</div>
            </div>

            <div className="col-md-8">
              <Footer />
            </div>
          </div>
          <hr />
          <div className="text-center pb-2 th-grey">
            © DocConnect. All Rights Reserved
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
