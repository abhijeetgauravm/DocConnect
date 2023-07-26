import React, { Component } from 'react';


class FooterLink extends Component {
    state = {  } 
    render() { 
        return (
            <div className='py-1'>
                <a href={this.props.alink} style={{textDecoration : "none",}} className="th-grey" >{this.props.name}</a>
          </div>
        );
    }
}
 
export default FooterLink;