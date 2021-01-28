import React, { Component } from 'react';
import Pdf from "../assests/images/Resume CODE.pdf";

class ResumeCard extends Component {

  render() {

    return (
        <div className = "App">
          <a href = {Pdf} target = "blank">Download Pdf</a>
        </div>
    );

  }
}

export default ResumeCard;