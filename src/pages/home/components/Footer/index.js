import React, { Component } from 'react';
import FooterLink from './FooterLinks';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <div className="row">
              <div className="col-md-4">
                <div className="th-fw-600 py-3">Useful Links</div>
                <FooterLink alink="#" name="Find a Job" />
                <FooterLink alink="#" name="Post a Job" />
                <FooterLink alink="#" name="About Us" />
                <FooterLink alink="#" name="Terms & Conditions" />
                <FooterLink alink="#" name="Privacy Policy" />
              </div>
              <div className="col-md-4">
                <div className="th-fw-600 py-3">City</div>
                <FooterLink alink="#" name="Hello" />
                <FooterLink alink="#" name="Hello" />
                <FooterLink alink="#" name="Hello" />
                <FooterLink alink="#" name="Hello" />
              </div>
              <div className="col-md-4">
                <div className="th-fw-600 py-3">Follow Us</div>
                <FooterLink alink="#" name="Facebook" />
                <FooterLink alink="#" name="Instagram" />
                <FooterLink alink="#" name="Linkedin" />
              </div>
            </div>
        );
    }
}
 
export default Footer;