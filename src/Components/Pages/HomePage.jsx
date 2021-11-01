import React from "react";
import "./HomePage.modules.css";
import innovate from "../../Assets/Images/noun_innovative technology_2102003.svg";
function HomePage() {
  return (
    <div className="main-page-section container-fluid">
      <div className="bg-img"></div>
      <div className="row main-content justify-content-md-center">
        <div className="col-12 ">
          <div className="row">
            <div className="col-md-3 col-sm-0"></div>
            <h1 className="heading col-md-6 col-sm-12">
              We bring the right people together to challenge established
              thinking and drive <span>transformation</span> .
            </h1>
            <div className="col-md-3 col-sm-0"></div>
          </div>
        </div>
        <div className="row sps">
          <div className="col-lg-4 col-sm-12">
            <img src={innovate} alt=""></img>
            <div>
              <h3>We Innovate</h3>
              <p>We innovate systematically, continuously and successfully.</p>
              <button className="home-read-more">Read more</button>
            </div>
          </div>
          <div className=" col-sm-12 col-lg-4 ">
            <img src={innovate} alt=""></img>
            <div>
              <h3>We Innovate</h3>
              <p>We innovate systematically, continuously and successfully.</p>
              <button className="home-read-more">Read more</button>
            </div>
          </div>
          <div className=" col-sm-12 col-lg-4 ">
            <img src={innovate} alt=""></img>
            <div>
              <h3>We Innovate</h3>
              <p>We innovate systematically, continuously and successfully.</p>
              <button className="home-read-more">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
