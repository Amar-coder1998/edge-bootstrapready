import React from "react";
// import "./StatTalk.modules.css";
import "./footer.Modules.css";
import Locationimg from "../../Logos/Footer/Location/Location.png";
import Phonecall from "../../Logos/Footer/phone call/phone call@2x.png";
import Email from "../../Logos/Footer/Email/Email@2x.png";
import Worldmap from "../../Logos/Footer/world_map/world_map@2x.png";
import Location2x from "../../Logos/Footer/Location/Location@2x.png";
import Logo from "../../Logos/Footer/logo.PNG"
import Facebook from "../../Logos/Footer/facebook/facebook@2x.png"
import Google from "../../Logos/Footer/google/google@2x.png";
import Instagram from "../../Logos/Footer/instagram/instagram@2x.png"
import Linkedin from "../../Logos/Footer/linkedin/linkedin@2x.png";
import Twitter from "../../Logos/Footer/twitter/twitter@2x.png";
import Youtube from  "../../Logos/Footer/youtube/youtube@2x.png";

const Footer = () => {
  return (
    <div className="startTalk container-fluid" id="starttalk">
      <div className="row contact-padding">
        <div className="col-3">
          <img src={Logo} alt="" className="logo" />
          <div className="headings">
            <div className="box1">
              <hr className="line" /> <span className="foot">HEADQUATER</span>
              <br />
              <br />
              <img src={Locationimg} alt="" />
              <div className="details">
                5055 Keller Springs Rd Suite 150 Addison, TX 75001
              </div>
              <br />
              <img
                src={Phonecall}
                alt="muppa"
                className="phone_call"
              />
              <div className="numbers">
                USA + 1 855 585 7344 <br />
                India + 91 40 4286 5599 <br />
                UAE + 971 4 3132770
              </div>
              <br />
              <img
                src={Email}
                alt="muppa"
                className="Email"
              />
              <span className="mail"> info@appstekcorp.com</span>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="box2">
            <hr className="line" /> <span className="foot"> OUR LOCATION</span>
            <br />
            <br />
            <img
              src={Worldmap}
              alt="muppa"
              className="map"
            />
            <span className="location">
              <img
                src={Location2x}
                alt="muppa"
                className="image"
              />{" "}
              USA: + 1 855 585 7344
              <br />
              <br />
              <img
                src={Location2x}
                alt="muppa"
                className="image"
              />{" "}
              India: + 91 40 4286 5599
              <br />
              <br />
              <img
                src={Location2x}
                alt="muppa"
                className="image"
              />{" "}
              UAE: + 971 4 3132770
            </span>
            <br />
            <br />
          </div>
        </div>
        <div className="col-3">
          <div className="box3">
            <hr className="line" /> <span className="foot">LINKS</span>
            <br />
            <br />
            <span className="aboutus">
              {" "}
              About
              <br />
              <br />
              Services
              <br />
              <br />
              Portfolio
              <br />
              <br />
              Careers
              <br />
              <br />
              Contact
            </span>
          </div>
        </div>
        <div className="col-3">
          <div className="box4">
            <hr className="line" /> <span className="foot">GET IN TOUCH</span>
            <br />
            <br />
            <span className="contact">
              {" "}
              Connect with us
              <br />
              <br />
            </span>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <img
                src={Facebook}
                alt="muppa"
                className="facebook"
              />
              <img
                src={Google}
                alt="muppa"
                className="google"
              />
              <img
                src={Instagram}
                alt="muppa"
                className="instagram"
              />
              <img
                src={Linkedin}
                alt="muppa"
                className="linkedin"
              />
              <img
                src={Twitter}
                alt="muppa"
                className="twitter"
              />
              <img
                src={Youtube}
                alt="muppa"
                className="youtube"
              />
            </div>
          </div>
        </div>
        <div className="copy">
          <div className="copyright">
            Copyright 2021. Edge Works. All Rights Reserved.
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
export default Footer;
