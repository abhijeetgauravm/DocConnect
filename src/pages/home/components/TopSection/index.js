import React, { Component } from "react";
class MainCloumn extends Component {
  state = {};
  render() {
    return (
      <div className="row align-items-center py-5">
        <div className="col-md-6 pr-5">
          <div>
            <div className="th-fw-600 th-36">{this.props.headline}</div>
          </div>
          <div className="pt-2 th-grey ">
          {this.props.subhead}
          </div>
        </div>
        <div className="col-md-6 py-3">
          <div className={this.props.classVal}></div>
        </div>
      </div>
    );
  }
}

export default MainCloumn;
