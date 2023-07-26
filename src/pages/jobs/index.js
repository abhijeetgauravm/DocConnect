import React, { Component } from "react";
import Navbar from "../home/components/navbar";

class JobPage extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="">
          <Navbar />
        </div>
        <div className="">
          <div className="th-job-background">
            <div className="text-center">
              <div className="th-fw-600 th-48 p-2">
                A true pioneer in medical recruiting
              </div>
              <div className="p-3">
                Frustrated by the difficulty in finding legitimate, flexible,
                opportunities?
                <br /> Doctodo is here for you to find best for you.
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default JobPage;
