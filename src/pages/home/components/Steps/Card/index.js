import React, { Component } from 'react';

class FrontCard extends Component {
    state = {  } 
    render() { 
        return (
            <div className="col-md-6 p-2">
                <div
                  className="th-home-card-border p-3 align-items-center  text-center"
                >
                  <div>
                    <i class={this.props.icon} style={{ fontSize: "40px" }}></i>
                  </div>
                  <div className="py-2">
                  <div><b>{this.props.head}</b></div>
                  <div className='th-grey py-2'>{this.props.subhead}</div>
                  </div>
                  
                </div>
              </div>
        );
    }
}
 
export default FrontCard;