import React from "react";
import "./ContactPage.modules.css";
import loco from "../../Assets/Images/location.svg";
import phone from "../../Assets/Images/phone.svg";
import email from "../../Assets/Images/email.svg";

export default function ContactPage() {
  return (
    <div className="Contact container-fluid" id="contact">
      <div className="row contactpage-padding">
        <div className="col-md-6 col-sm-12">
          <span className="page-suggester">Contact</span>
          <h1 className="contact-head">Get in Touch</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tLorem ipsum, or lipsum as it is sometimes known, is dummy
            text used in laying out print, graphic or web designs. The passage
            is attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book. It usually begins with:
            <br />
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="col-md-2 col-sm-12">
          <div className="contact-divs">
            <div>
              <img src={loco} alt=""></img>
            </div>
            <h4>Our Location</h4>
            <p>5055 Keller Springs Rd Suite 150 Addison, TX 75001</p>
          </div>
        </div>
        <div className="col-md-2 col-sm-12">
          <div className="contact-divs">
            <div>
              <img src={phone} alt=""></img>
            </div>
            <h4>Our Location</h4>
            <p>5055 Keller Springs Rd Suite 150 Addison, TX 75001</p>
          </div>
        </div>
        <div className="col-md-2 col-sm-12">
          <div className="contact-divs">
            <div>
              <img src={email} alt=""></img>
            </div>
            <h4>Our Location</h4>
            <p>5055 Keller Springs Rd Suite 150 Addison, TX 75001</p>
          </div>
        </div>
      </div>
    </div>
  );
}
