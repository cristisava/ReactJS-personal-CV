import "./MyOnlineCV.css";
import React from "react";

class MyOnlineCV extends React.Component {
  render() {
    return (
         <div className="personal-cv">
           <header>
             <div className="container">
                 <div className="title">
                   <h1 className="the-title">This is my personal CV</h1>
                   <h1 className="the-title">Check it out</h1>
                 </div>
             </div>
           </header>
           <section className="container">
             <div className="row">
               <div className="about">
                 <h3>First title</h3>
                 <h3>Second title</h3>
                 <p>
                   ceva ceva ceva ceva ceva ceva cevaceevavcaveasfd
                   wedfcsaece
                   sffesfsefsefsfsefssfd
                 </p>
               </div>
               <div className="about">
                 <h3>Skills</h3>
                 <h3>skills</h3>
                 <p>
                   ceva ceva ceva ceva ceva ceva cevaceevavcaveasfd
                   wedfcsaece
                   sffesfsefsefsfsefssfd
                 </p>
               </div>
             </div>
           </section>
         </div>
    );
  }
}

export default MyOnlineCV;
