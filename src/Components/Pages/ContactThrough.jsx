import React from "react";
import "./ContactPage.modules.css";
import groupFive4 from "../../Assets/Images/group54.png";

export default function ContactThrough() {
  return (
    <div className="contact-through container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div className="grup-54-div">
            <img src={groupFive4} alt="group54" className="grup-54"></img>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 contact-input">
          <label htmlFor="name">
            <h5>Name</h5>
            <input type="text" placeholder="Enter your name"></input>
          </label>
          <label htmlFor="Email">
            <h5>Email</h5>

            <input type="text" placeholder="Enter your email"></input>
          </label>
          <label htmlFor="message">
            <h5>message</h5>
            <textarea type="text" placeholder="Enter your name"></textarea>
          </label>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}
