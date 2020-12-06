import "./MyOnlineCV.css";
import React from "react";

class MyOnlineCV extends React.Component {
  render() {
    return (
         <div className="onlinecv">
         <div className="header">Cristian Sava</div>
         <div className="header">Check out my personal CV</div>
        <div className="details">
          I am an outgoing and energetic (ask anybody) young person, seeking for
           a career that fits my personality and skills. I am the type of person
           that always seeks for learning something new and really appreciates
           constructive criticism.
         </div>
           <div className="titles">
             Education
           </div>
       </div>
    );
  }
}

export default MyOnlineCV;
