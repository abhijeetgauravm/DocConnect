import React, { Component } from 'react';
import CommonForm from '../component';

class Experience extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <CommonForm name = 'Title' important = '*'/>
                <CommonForm name = 'Employment Type*' important = '*'/>
                <CommonForm name = 'Company Name' important = '*'/>
                <CommonForm name = 'Location'/>
                <CommonForm name ='Start Date' type = 'date' important = '*'/>
                <CommonForm name ='End Date' type = 'date' important = '*'/>
            </div>
        );
    }
}
 
export default Experience;