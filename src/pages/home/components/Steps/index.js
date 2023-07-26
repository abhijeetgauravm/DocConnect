import React, { Component } from "react";
import FrontCard from "./Card";

class Card extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="row py-5 align-items-center">
          <div className="col-md-5 ">
            <div>
              <div className="th-fw-600 th-36">Follow Easy 4 Steps</div>
              <div className="th-grey">
                You are just 4 steps away from grabbing your dream job in
                healthcare domain.
              </div>
            </div>
          </div>

          <div className="col-md-7">
            <div className="row">
              <FrontCard
                head="Create Account"
                subhead="First you have to create an account here."
                icon="far fa-user"
              />
              <FrontCard
                head="Search job"
                subhead="Find your best job using search or Categories"
                icon="fa-solid fa-magnifying-glass"
              />
            </div>
            <div className="row">
              <FrontCard
                head="CV/Resume"
                subhead="Upload your best CV or Resume."
                icon="fa-solid fa-cloud-arrow-up"
              />
              <FrontCard
                head="Apply Them"
                subhead="Finally you apply your job and enjoy your work."
                icon="fa-regular fa-circle-check"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
