import React, { Component } from "react";

class CommonForm extends Component {
  state = {};
  render() {
    return (
      <div className="pt-3">
        <label for={this.props.for} className="">
          {this.props.name} <span style={{ color: "red" }}>{this.props.important}</span>
        </label>
        <br />
        <input
          type={this.props.type}
          placeholder=""
          className="th-form-control"
          style={{ backgroundColor: "#e6f7ff", width: "100%" }}
        />
      </div>
    );
  }
}

export default CommonForm;
